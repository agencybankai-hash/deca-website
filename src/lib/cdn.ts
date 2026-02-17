/**
 * CDN asset mapping — resolves clean filenames to Webflow CDN URLs.
 * Until assets are downloaded & committed to public/assets/, images
 * are served directly from the old Webflow CDN.
 *
 * Usage:  <Image src={img("gallery/gallery-1.webp")} ... />
 */

const CDN_BASE = "https://cdn.prod.website-files.com/653ce36306847de4f1922b81";

/** Map: "category/clean-filename" → "hash_clean-filename" */
const MAP: Record<string, string> = {
  // Logos
  "logos/logo-blue.svg": "653ce36306847de4f1922bbf_logo-blue.svg",

  // Icons
  "icons/stars.svg": "6560e3e865f9c17250de9926_stars.svg",

  // Team
  "team/miranda.webp": "6560e3e865f9c17250de9920_miranda.webp",
  "team/jordan.webp": "6560e3e865f9c17250de9924_jordan.webp",
  "team/casey.webp": "6560e3e865f9c17250de9922_casey.webp",

  // Components (window cross-sections)
  "components/components-1.webp": "653ce36306847de4f1922bc0_components-1.webp",
  "components/components-2.webp": "653ce36306847de4f1922bc1_components-2.webp",
  "components/components-3.webp": "653ce36306847de4f1922bc4_components-3.webp",
  "components/components-4.webp": "653ce36306847de4f1922bc2_components-4.webp",
  "components/components-5.webp": "653ce36306847de4f1922bc3_components-5.webp",

  // Glass types
  "images/laminated-double.webp": "653ce36306847de4f1922ba0_laminated-double.webp",
  "images/double.webp": "653ce36306847de4f1922ba1_double.webp",
  "images/triple.webp": "653ce36306847de4f1922ba2_triple.webp",
  "images/tempered.webp": "654279bd295a85dc0c17b483_tempered.webp",
  "images/laminated.webp": "654279bd74e12233a45799b2_laminated.webp",
  "images/non-spaces.webp": "654279bd2c1943ae0e81fd29_non-spaces.webp",
  "images/low-e-glass.webp": "654279b87c7730ebe3d8c9fe_low-e-glass.webp",
  "images/grill-none.png": "653ce36306847de4f1922ba6_grill-none.png",

  // Configurator frames
  "images/config-frame-1.png": "653ce36306847de4f1922bab_config-frame-1.png",
  "images/config-frame-2.png": "653ce36306847de4f1922bad_config-frame-2.png",
  "images/config-frame-3.png": "653ce36306847de4f1922baf_config-frame-3.png",
  "images/config-frame-4.png": "653ce36306847de4f1922bb1_config-frame-4.png",
  "images/config-frame-5.png": "653ce36306847de4f1922bb3_config-frame-5.png",

  // Configurator handles
  "images/config-handle-1.png": "653ce36306847de4f1922bb4_config-handle-1.png",
  "images/config-handle-2.png": "653ce36306847de4f1922bb5_config-handle-2.png",
  "images/config-handle-3.png": "653ce36306847de4f1922bb9_config-handle-3.png",
  "images/config-handle-4.png": "653ce36306847de4f1922bb7_config-handle-4.png",

  // Configurator hinges
  "images/config-hinge-1.png": "653ce36306847de4f1922bba_config-hinge-1.png",
  "images/config-hinge-2.png": "653ce36306847de4f1922bbb_config-hinge-2.png",
  "images/config-hinge-3.png": "653ce36306847de4f1922bbd_config-hinge-3.png",
  "images/config-hinge-4.png": "653ce36306847de4f1922bbe_config-hinge-4.png",

  // Product images
  "images/two-sections.webp": "653ce36306847de4f1922ba9_two-sections.webp",
  "images/three-sections.webp": "653ce36306847de4f1922ba8_three-sections.webp",
  "images/curved-type.webp": "653ce36306847de4f1922ba5_curved-type.webp",
  "images/basemant-windows.webp": "653ce36306847de4f1922ba4_basemant-windows.webp",
  "images/kitchen-windows.webp": "653ce36306847de4f1922ba7_kitchen-windows.webp",
  "images/about-img.webp": "65411de6c0cb583c4fd1df3a_about-img.webp",

  // Backgrounds
  "backgrounds/hero.webp": "653ce36306847de4f1922bc5_hero.webp",

  // Gallery
  "gallery/gallery-1.webp": "65623e7660c72b3835adfdc9_gallery-1.webp",
  "gallery/gallery-2.webp": "65623e7660c72b3835adfdc7_gallery-2.webp",
  "gallery/gallery-3.webp": "65623e7660c72b3835adfdc5_gallery-3.webp",
  "gallery/gallery-4.webp": "65623e7660c72b3835adfdc3_gallery-4.webp",
  "gallery/gallery-5.webp": "65623e7660c72b3835adfdcb_gallery-5.webp",
  "gallery/gallery-6.webp": "65623e7660c72b3835adfdcd_gallery-6.webp",
  "gallery/gallery-7.webp": "65623e7660c72b3835adfdcf_gallery-7.webp",
  "gallery/gallery-8.webp": "65623e7660c72b3835adfdd1_gallery-8.webp",
  "gallery/gallery-9.webp": "653e0b0cf4c62f62e3f318fe_gallery-9.webp",
  "gallery/gallery-10.webp": "653e0b0ce97d08f8ab663643_gallery-10.webp",
  "gallery/gallery-11.webp": "653e0b0ca494cdf305ef18fd_gallery-11.webp",
  "gallery/gallery-12.webp": "653e0b0cb9b1b39f8f2b7f9d_gallery-12.webp",
  "gallery/gallery-13.webp": "653e0b0c9a7e24f7e18cd3d3_gallery-13.webp",
  "gallery/gallery-14.webp": "653e0b0cceee80cdd7c6dc57_gallery-14.webp",
  "gallery/gallery-15.webp": "653e0b0ce97d08f8ab66364b_gallery-15.webp",
  "gallery/gallery-16.webp": "653e0b0ca494cdf305ef190b_gallery-16.webp",
  "gallery/gallery-2-10-11.webp": "65623e7660c72b3835adfdd3_gallery-2-10-11.webp",
  "gallery/gallery-10-11.webp": "653e0b0ca494cdf305ef190f_gallery-10-11.webp",
};

/**
 * Resolve an asset path to its CDN URL.
 * @param path  e.g. "gallery/gallery-1.webp" or "team/miranda.webp"
 * @returns     Full CDN URL string
 */
export function img(path: string): string {
  const cdnFile = MAP[path];
  if (cdnFile) return `${CDN_BASE}/${cdnFile}`;
  // Fallback: try local path (for assets that were committed, e.g. config-frame PNGs)
  return `/assets/${path}`;
}

export { CDN_BASE };
