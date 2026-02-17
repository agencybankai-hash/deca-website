#!/bin/bash
# Download all DECA website assets from old Webflow CDN
# Run this script from the project root directory
# Usage: bash scripts/download-assets.sh

BASE="public/assets"
CDN="https://cdn.prod.website-files.com/653ce36306847de4f1922b81"

# Create directories
mkdir -p "$BASE/logos" "$BASE/icons" "$BASE/team" "$BASE/components" "$BASE/gallery" "$BASE/images" "$BASE/backgrounds" "$BASE/videos"

echo "=== Downloading DECA website assets ==="

# Logos
curl -sL "$CDN/653ce36306847de4f1922bbf_logo-blue.svg" -o "$BASE/logos/logo-blue.svg" && echo "  ✓ logos/logo-blue.svg"

# Icons
curl -sL "$CDN/6560e3e865f9c17250de9926_stars.svg" -o "$BASE/icons/stars.svg" && echo "  ✓ icons/stars.svg"

# Team
curl -sL "$CDN/6560e3e865f9c17250de9920_miranda.webp" -o "$BASE/team/miranda.webp" && echo "  ✓ team/miranda.webp"
curl -sL "$CDN/6560e3e865f9c17250de9924_jordan.webp" -o "$BASE/team/jordan.webp" && echo "  ✓ team/jordan.webp"
curl -sL "$CDN/6560e3e865f9c17250de9922_casey.webp" -o "$BASE/team/casey.webp" && echo "  ✓ team/casey.webp"

# Components (window cross-sections)
curl -sL "$CDN/653ce36306847de4f1922bc0_components-1.webp" -o "$BASE/components/components-1.webp" && echo "  ✓ components/components-1.webp"
curl -sL "$CDN/653ce36306847de4f1922bc1_components-2.webp" -o "$BASE/components/components-2.webp" && echo "  ✓ components/components-2.webp"
curl -sL "$CDN/653ce36306847de4f1922bc4_components-3.webp" -o "$BASE/components/components-3.webp" && echo "  ✓ components/components-3.webp"
curl -sL "$CDN/653ce36306847de4f1922bc2_components-4.webp" -o "$BASE/components/components-4.webp" && echo "  ✓ components/components-4.webp"
curl -sL "$CDN/653ce36306847de4f1922bc3_components-5.webp" -o "$BASE/components/components-5.webp" && echo "  ✓ components/components-5.webp"

# Glass type images
curl -sL "$CDN/653ce36306847de4f1922ba0_laminated-double.webp" -o "$BASE/images/laminated-double.webp" && echo "  ✓ images/laminated-double.webp"
curl -sL "$CDN/653ce36306847de4f1922ba1_double.webp" -o "$BASE/images/double.webp" && echo "  ✓ images/double.webp"
curl -sL "$CDN/653ce36306847de4f1922ba2_triple.webp" -o "$BASE/images/triple.webp" && echo "  ✓ images/triple.webp"
curl -sL "$CDN/654279bd295a85dc0c17b483_tempered.webp" -o "$BASE/images/tempered.webp" && echo "  ✓ images/tempered.webp"
curl -sL "$CDN/654279bd74e12233a45799b2_laminated.webp" -o "$BASE/images/laminated.webp" && echo "  ✓ images/laminated.webp"
curl -sL "$CDN/654279bd2c1943ae0e81fd29_non-spaces.webp" -o "$BASE/images/non-spaces.webp" && echo "  ✓ images/non-spaces.webp"
curl -sL "$CDN/654279b87c7730ebe3d8c9fe_low-e-glass.webp" -o "$BASE/images/low-e-glass.webp" && echo "  ✓ images/low-e-glass.webp"
curl -sL "$CDN/653ce36306847de4f1922ba6_grill-none.png" -o "$BASE/images/grill-none.png" && echo "  ✓ images/grill-none.png"

# Configurator frames
curl -sL "$CDN/653ce36306847de4f1922bab_config-frame-1.png" -o "$BASE/images/config-frame-1.png" && echo "  ✓ images/config-frame-1.png"
curl -sL "$CDN/653ce36306847de4f1922bad_config-frame-2.png" -o "$BASE/images/config-frame-2.png" && echo "  ✓ images/config-frame-2.png"
curl -sL "$CDN/653ce36306847de4f1922baf_config-frame-3.png" -o "$BASE/images/config-frame-3.png" && echo "  ✓ images/config-frame-3.png"
curl -sL "$CDN/653ce36306847de4f1922bb1_config-frame-4.png" -o "$BASE/images/config-frame-4.png" && echo "  ✓ images/config-frame-4.png"
curl -sL "$CDN/653ce36306847de4f1922bb3_config-frame-5.png" -o "$BASE/images/config-frame-5.png" && echo "  ✓ images/config-frame-5.png"

# Configurator handles
curl -sL "$CDN/653ce36306847de4f1922bb4_config-handle-1.png" -o "$BASE/images/config-handle-1.png" && echo "  ✓ images/config-handle-1.png"
curl -sL "$CDN/653ce36306847de4f1922bb7_config-handle-4.png" -o "$BASE/images/config-handle-4.png" && echo "  ✓ images/config-handle-4.png"
curl -sL "$CDN/653ce36306847de4f1922bb5_config-handle-2.png" -o "$BASE/images/config-handle-2.png" && echo "  ✓ images/config-handle-2.png"
curl -sL "$CDN/653ce36306847de4f1922bb9_config-handle-3.png" -o "$BASE/images/config-handle-3.png" && echo "  ✓ images/config-handle-3.png"

# Configurator hinges
curl -sL "$CDN/653ce36306847de4f1922bbe_config-hinge-4.png" -o "$BASE/images/config-hinge-4.png" && echo "  ✓ images/config-hinge-4.png"
curl -sL "$CDN/653ce36306847de4f1922bba_config-hinge-1.png" -o "$BASE/images/config-hinge-1.png" && echo "  ✓ images/config-hinge-1.png"
curl -sL "$CDN/653ce36306847de4f1922bbb_config-hinge-2.png" -o "$BASE/images/config-hinge-2.png" && echo "  ✓ images/config-hinge-2.png"
curl -sL "$CDN/653ce36306847de4f1922bbd_config-hinge-3.png" -o "$BASE/images/config-hinge-3.png" && echo "  ✓ images/config-hinge-3.png"

# Product images
curl -sL "$CDN/653ce36306847de4f1922ba9_two-sections.webp" -o "$BASE/images/two-sections.webp" && echo "  ✓ images/two-sections.webp"
curl -sL "$CDN/653ce36306847de4f1922ba8_three-sections.webp" -o "$BASE/images/three-sections.webp" && echo "  ✓ images/three-sections.webp"
curl -sL "$CDN/653ce36306847de4f1922ba5_curved-type.webp" -o "$BASE/images/curved-type.webp" && echo "  ✓ images/curved-type.webp"
curl -sL "$CDN/653ce36306847de4f1922ba4_basemant-windows.webp" -o "$BASE/images/basemant-windows.webp" && echo "  ✓ images/basemant-windows.webp"
curl -sL "$CDN/653ce36306847de4f1922ba7_kitchen-windows.webp" -o "$BASE/images/kitchen-windows.webp" && echo "  ✓ images/kitchen-windows.webp"
curl -sL "$CDN/65411de6c0cb583c4fd1df3a_about-img.webp" -o "$BASE/images/about-img.webp" && echo "  ✓ images/about-img.webp"

# Hero / Backgrounds
curl -sL "$CDN/653ce36306847de4f1922bc5_hero.webp" -o "$BASE/backgrounds/hero.webp" && echo "  ✓ backgrounds/hero.webp"

# Gallery
curl -sL "$CDN/653e0b0ce97d08f8ab663643_gallery-10.webp" -o "$BASE/gallery/gallery-10.webp" && echo "  ✓ gallery/gallery-10.webp"
curl -sL "$CDN/653e0b0cf4c62f62e3f318fe_gallery-9.webp" -o "$BASE/gallery/gallery-9.webp" && echo "  ✓ gallery/gallery-9.webp"
curl -sL "$CDN/653e0b0ca494cdf305ef18fd_gallery-11.webp" -o "$BASE/gallery/gallery-11.webp" && echo "  ✓ gallery/gallery-11.webp"
curl -sL "$CDN/653e0b0cb9b1b39f8f2b7f9d_gallery-12.webp" -o "$BASE/gallery/gallery-12.webp" && echo "  ✓ gallery/gallery-12.webp"
curl -sL "$CDN/653e0b0c9a7e24f7e18cd3d3_gallery-13.webp" -o "$BASE/gallery/gallery-13.webp" && echo "  ✓ gallery/gallery-13.webp"
curl -sL "$CDN/653e0b0cceee80cdd7c6dc57_gallery-14.webp" -o "$BASE/gallery/gallery-14.webp" && echo "  ✓ gallery/gallery-14.webp"
curl -sL "$CDN/653e0b0ce97d08f8ab66364b_gallery-15.webp" -o "$BASE/gallery/gallery-15.webp" && echo "  ✓ gallery/gallery-15.webp"
curl -sL "$CDN/653e0b0ca494cdf305ef190b_gallery-16.webp" -o "$BASE/gallery/gallery-16.webp" && echo "  ✓ gallery/gallery-16.webp"
curl -sL "$CDN/65623e7660c72b3835adfdc9_gallery-1.webp" -o "$BASE/gallery/gallery-1.webp" && echo "  ✓ gallery/gallery-1.webp"
curl -sL "$CDN/65623e7660c72b3835adfdc7_gallery-2.webp" -o "$BASE/gallery/gallery-2.webp" && echo "  ✓ gallery/gallery-2.webp"
curl -sL "$CDN/65623e7660c72b3835adfdc5_gallery-3.webp" -o "$BASE/gallery/gallery-3.webp" && echo "  ✓ gallery/gallery-3.webp"
curl -sL "$CDN/65623e7660c72b3835adfdc3_gallery-4.webp" -o "$BASE/gallery/gallery-4.webp" && echo "  ✓ gallery/gallery-4.webp"
curl -sL "$CDN/65623e7660c72b3835adfdcb_gallery-5.webp" -o "$BASE/gallery/gallery-5.webp" && echo "  ✓ gallery/gallery-5.webp"
curl -sL "$CDN/65623e7660c72b3835adfdcd_gallery-6.webp" -o "$BASE/gallery/gallery-6.webp" && echo "  ✓ gallery/gallery-6.webp"
curl -sL "$CDN/65623e7660c72b3835adfdcf_gallery-7.webp" -o "$BASE/gallery/gallery-7.webp" && echo "  ✓ gallery/gallery-7.webp"
curl -sL "$CDN/65623e7660c72b3835adfdd1_gallery-8.webp" -o "$BASE/gallery/gallery-8.webp" && echo "  ✓ gallery/gallery-8.webp"
curl -sL "$CDN/65623e7660c72b3835adfdd3_gallery-2-10-11.webp" -o "$BASE/gallery/gallery-2-10-11.webp" && echo "  ✓ gallery/gallery-2-10-11.webp"
curl -sL "$CDN/653e0b0ca494cdf305ef190f_gallery-10-11.webp" -o "$BASE/gallery/gallery-10-11.webp" && echo "  ✓ gallery/gallery-10-11.webp"

# Videos (hosted on Dropbox)
curl -sL "https://dl.dropbox.com/scl/fi/pl8p06wjj21den45p2ufi/Ventilation.mp4" -o "$BASE/videos/Ventilation.mp4" && echo "  ✓ videos/Ventilation.mp4"
curl -sL "https://dl.dropbox.com/scl/fi/iydq7eq3auh1aibpal07m/Easy_To_Clean.mp4" -o "$BASE/videos/Easy_To_Clean.mp4" && echo "  ✓ videos/Easy_To_Clean.mp4"
curl -sL "https://dl.dropbox.com/scl/fi/wgy6ge1z4hy9bknj18wwb/Air-tight-_-Secure.mp4" -o "$BASE/videos/Air-tight-_-Secure.mp4" && echo "  ✓ videos/Air-tight-_-Secure.mp4"

echo ""
echo "=== Download complete ==="
du -sh "$BASE"/*/
