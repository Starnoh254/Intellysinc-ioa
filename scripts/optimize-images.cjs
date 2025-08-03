// CommonJS script to convert all images in public/images to WebP
const imagemin = require('imagemin');
let imageminWebp = require('imagemin-webp');
if (typeof imageminWebp !== 'function') {
  imageminWebp = imageminWebp.default;
}
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const IMAGES_DIR = path.resolve(__dirname, '../public/images');

function getImageFiles(dir) {
  // Match all .jpg, .jpeg, .png files recursively, handling spaces and special characters
  return glob.sync(`${dir}/**/*.+(jpg|jpeg|png)`, { nocase: true, dot: false, nodir: true });
}

async function optimizeImages() {
  const files = getImageFiles(IMAGES_DIR);
  if (!files.length) {
    console.log('No images found to optimize.');
    return;
  }
  console.log(`Optimizing ${files.length} images...`);
  for (const file of files) {
    try {
      const dest = path.dirname(file);
      const data = await imagemin([file], {
        destination: dest,
        plugins: [imageminWebp({ quality: 75 })],
      });
      if (data && data[0] && data[0].destinationPath) {
        console.log(`Converted: ${file} -> ${data[0].destinationPath}`);
      }
    } catch (err) {
      console.error(`Failed to convert ${file}:`, err);
    }
  }
  console.log('Image optimization complete!');
}

optimizeImages();
