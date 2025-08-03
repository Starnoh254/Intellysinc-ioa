// ES Module script to convert all images in public/images to WebP
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import { glob } from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const IMAGES_DIR = path.resolve(__dirname, '../public/images');

async function getImageFiles(dir) {
  return await glob(`${dir}/**/*.+(jpg|jpeg|png)`, { nocase: true, dot: false, nodir: true });
}

async function optimizeImages() {
  const files = await getImageFiles(IMAGES_DIR);
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
