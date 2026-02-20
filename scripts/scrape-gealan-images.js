#!/usr/bin/env node
/**
 * Scrape product images from gealanwindows.com
 * Downloads PNG/WebP/JPG product images (windows, doors, profiles)
 */

const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const OUTPUT_DIR = path.resolve(__dirname, "../scraped-images/gealan");

// Pages to scrape
const PAGES = [
  "https://gealanwindows.com/",
  "https://gealanwindows.com/tilt-turn-windows/",
  "https://gealanwindows.com/picture-windows/",
  "https://gealanwindows.com/front-doors/",
  "https://gealanwindows.com/sliding-doors/",
  "https://gealanwindows.com/window-features/upvc-windows/",
  "https://gealanwindows.com/window-features/energy-efficient-windows/",
  "https://gealanwindows.com/window-features/colored-window-frames/",
  "https://gealanwindows.com/window-features/gealan-acrylcolor/",
  "https://gealanwindows.com/window-features/soundproof-windows/",
  "https://gealanwindows.com/window-features/impact-resistant-windows/",
  "https://gealanwindows.com/about-us/",
  "https://gealanwindows.com/for-professionals/builders/",
  "https://gealanwindows.com/for-professionals/architects/",
  "https://gealanwindows.com/for-professionals/dealers-distributors/",
  "https://gealanwindows.com/why-choose-us/",
];

function fetch(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith("https") ? https : http;
    const req = mod.get(url, { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve({ body: Buffer.concat(chunks), contentType: res.headers["content-type"] || "", statusCode: res.statusCode }));
    });
    req.on("error", reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error("timeout")); });
  });
}

function extractImageUrls(html, baseUrl) {
  const urls = new Set();
  // Match <img src="..." and <img ... srcset="..."
  const imgRegex = /<img[^>]+(?:src|srcset)=["']([^"']+)["'][^>]*>/gi;
  let m;
  while ((m = imgRegex.exec(html)) !== null) {
    let src = m[1].split(/[\s,]/)[0]; // first URL from srcset
    if (src.startsWith("data:")) continue;
    try {
      const full = new URL(src, baseUrl).href;
      urls.add(full);
    } catch {}
  }
  // Match background-image: url(...)
  const bgRegex = /url\(["']?([^"')]+)["']?\)/gi;
  while ((m = bgRegex.exec(html)) !== null) {
    if (m[1].startsWith("data:")) continue;
    try {
      const full = new URL(m[1], baseUrl).href;
      if (/\.(png|jpg|jpeg|webp|svg)/i.test(full)) urls.add(full);
    } catch {}
  }
  // Match og:image and other meta tags
  const metaRegex = /content=["'](https?:\/\/[^"']+\.(png|jpg|jpeg|webp))["']/gi;
  while ((m = metaRegex.exec(html)) !== null) {
    urls.add(m[1]);
  }
  return [...urls];
}

function isProductImage(url) {
  const lower = url.toLowerCase();
  // Skip icons, logos, tiny images, tracking pixels
  if (lower.includes("favicon") || lower.includes("logo") || lower.includes("icon")) return false;
  if (lower.includes("gravatar") || lower.includes("avatar")) return false;
  if (lower.includes("1x1") || lower.includes("pixel") || lower.includes("tracking")) return false;
  if (lower.includes("emoji") || lower.includes("smiley")) return false;
  // Must be an image format
  if (!/\.(png|jpg|jpeg|webp|svg)/i.test(lower)) return false;
  // Prefer Gealan's own domain images
  if (!lower.includes("gealanwindows.com") && !lower.includes("gealan.de")) return false;
  return true;
}

function sanitizeFilename(url, pageSlug) {
  const parsed = new URL(url);
  let name = path.basename(parsed.pathname);
  // Remove query params from name
  name = name.split("?")[0];
  // Add page slug prefix if name is generic
  if (/^\d+/.test(name) || name.length < 5) {
    name = pageSlug + "_" + name;
  }
  return name;
}

async function downloadImage(url, filepath) {
  try {
    const { body, contentType, statusCode } = await fetch(url);
    if (statusCode !== 200) return false;
    if (body.length < 2000) return false; // Skip tiny images (< 2KB)
    fs.writeFileSync(filepath, body);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  // Create output dir
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const allImages = new Map(); // url -> { pageSlug, url }
  let totalFound = 0;

  console.log("\n🔍 Scraping product images from gealanwindows.com...\n");

  for (const pageUrl of PAGES) {
    const slug = new URL(pageUrl).pathname.replace(/\//g, "_").replace(/^_|_$/g, "") || "home";
    process.stdout.write(`📄 ${slug}... `);

    try {
      const { body } = await fetch(pageUrl);
      const html = body.toString("utf-8");
      const images = extractImageUrls(html, pageUrl).filter(isProductImage);
      console.log(`${images.length} images`);
      totalFound += images.length;

      for (const imgUrl of images) {
        if (!allImages.has(imgUrl)) {
          allImages.set(imgUrl, { pageSlug: slug, url: imgUrl });
        }
      }
    } catch (err) {
      console.log(`❌ Error: ${err.message}`);
    }
  }

  console.log(`\n📊 Found ${totalFound} total, ${allImages.size} unique images`);
  console.log(`\n⬇️  Downloading...\n`);

  let downloaded = 0;
  let skipped = 0;

  for (const [url, info] of allImages) {
    const filename = sanitizeFilename(url, info.pageSlug);
    const filepath = path.join(OUTPUT_DIR, filename);

    if (fs.existsSync(filepath)) {
      skipped++;
      continue;
    }

    const ok = await downloadImage(url, filepath);
    if (ok) {
      downloaded++;
      const size = (fs.statSync(filepath).size / 1024).toFixed(1);
      console.log(`  ✅ ${filename} (${size} KB)`);
    } else {
      skipped++;
    }
  }

  // List results
  const files = fs.readdirSync(OUTPUT_DIR).filter(f => /\.(png|jpg|jpeg|webp|svg)$/i.test(f));
  const totalSize = files.reduce((sum, f) => sum + fs.statSync(path.join(OUTPUT_DIR, f)).size, 0);

  console.log(`\n═══════════════════════════════════════`);
  console.log(`  ✅ Downloaded: ${downloaded}`);
  console.log(`  ⏭  Skipped: ${skipped}`);
  console.log(`  📁 Total files: ${files.length}`);
  console.log(`  💾 Total size: ${(totalSize / 1024 / 1024).toFixed(1)} MB`);
  console.log(`  📂 Location: scraped-images/gealan/`);
  console.log(`═══════════════════════════════════════\n`);

  // Generate index
  const index = files.map(f => ({
    filename: f,
    size: fs.statSync(path.join(OUTPUT_DIR, f)).size,
    ext: path.extname(f).toLowerCase(),
  }));
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "index.json"),
    JSON.stringify(index, null, 2)
  );
  console.log("📋 Index saved to scraped-images/gealan/index.json");
}

main().catch(console.error);
