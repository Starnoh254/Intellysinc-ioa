// check-product-mapping.cjs
const fs = require('fs');
const path = require('path');

// Paths to product arrays
const productFiles = [
  { name: 'Fujitsu-RICOH Scanners', file: '../src/pages/FujitsuRicohScanners.jsx', varName: 'fujitsuProducts' },
  { name: 'Kodak Scanners', file: '../src/pages/KodakScanners.jsx', varName: 'kodakProducts' },
  { name: 'Microfilm Scanners', file: '../src/pages/MicrofilmScanners.jsx', varName: 'microfilmProducts' },
  { name: 'Servers', file: '../src/pages/Servers.jsx', varName: 'serverProducts' },
];

const imagesDir = path.resolve(__dirname, '../public/images');

function extractProductsArray(fileContent, varName) {
  // Naive extraction: look for 'const varName = [' and parse until closing '];'
  const start = fileContent.indexOf(`const ${varName} = [`);
  if (start === -1) return [];
  const arrStart = fileContent.indexOf('[', start);
  let bracketCount = 1;
  let i = arrStart + 1;
  while (i < fileContent.length && bracketCount > 0) {
    if (fileContent[i] === '[') bracketCount++;
    if (fileContent[i] === ']') bracketCount--;
    i++;
  }
  const arrStr = fileContent.slice(arrStart, i);
  // Use eval in a sandboxed way (not safe for untrusted code, but OK for local dev)
  try {
    // Replace import.meta.env.BASE_URL with ''
    const safeStr = arrStr.replace(/\$\{import\.meta\.env\.BASE_URL\}/g, '');
    // Replace backticks with double quotes
    const jsonStr = safeStr.replace(/`/g, '"');
    // Replace single quotes with double quotes (for property names)
    const fixedStr = jsonStr.replace(/([a-zA-Z0-9_]+):/g, '"$1":');
    // Remove trailing commas
    const noTrailingCommas = fixedStr.replace(/,\s*([}\]])/g, '$1');
    return JSON.parse(noTrailingCommas);
  } catch (e) {
    return [];
  }
}

function checkImagesExist(imagePath) {
  const imgName = imagePath.split('/').pop();
  return fs.existsSync(path.join(imagesDir, imgName));
}

function checkProductFile({ name, file, varName }) {
  const absPath = path.resolve(__dirname, file);
  const content = fs.readFileSync(absPath, 'utf-8');
  const products = extractProductsArray(content, varName);
  const slugs = new Set();
  let missingSlug = 0, duplicateSlug = 0, missingImage = 0;
  const missingSlugs = [], duplicateSlugs = [], missingImages = [];
  products.forEach(prod => {
    if (!prod.slug) {
      missingSlug++;
      missingSlugs.push(prod.name);
    } else if (slugs.has(prod.slug)) {
      duplicateSlug++;
      duplicateSlugs.push(prod.slug);
    } else {
      slugs.add(prod.slug);
    }
    if (prod.image && !checkImagesExist(prod.image)) {
      missingImage++;
      missingImages.push(prod.image);
    }
  });
  return { name, missingSlug, duplicateSlug, missingImage, missingSlugs, duplicateSlugs, missingImages };
}

console.log('Checking product mapping for last 4 product pages...');
productFiles.forEach(page => {
  const result = checkProductFile(page);
  console.log(`\n=== ${page.name} ===`);
  if (result.missingSlug) console.log(`Missing slugs: ${result.missingSlugs.join(', ')}`);
  if (result.duplicateSlug) console.log(`Duplicate slugs: ${result.duplicateSlugs.join(', ')}`);
  if (result.missingImage) console.log(`Missing images: ${result.missingImages.join(', ')}`);
  if (!result.missingSlug && !result.duplicateSlug && !result.missingImage) console.log('All products OK!');
}); 