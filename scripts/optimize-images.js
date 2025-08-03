// Node.js script to convert all images in public/images to WebP
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const IMAGES_DIR = path.resolve(__dirname, '../public/images');

function getImageFiles(dir) {
  return glob.sync(`${dir}/**/*.{jpg,jpeg,png}`, { nocase: true });
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
