// Script: scripts/check-image-references.cjs
// Usage: node scripts/check-image-references.cjs
// Checks all image references in product files against public/images directory

const fs = require('fs');
const path = require('path');

// Directories and files to check
const imagesDir = path.join(__dirname, '../public/images');
const productFiles = [
  '../src/pages/FujitsuRicohScanners.jsx',
  '../src/pages/KodakScanners.jsx',
  '../src/pages/CanonScanners.jsx',
  '../src/pages/AvisionScanners.jsx',
  '../src/pages/BrotherScanners.jsx',
  '../src/pages/Servers.jsx',
  '../src/pages/MicrofilmScanners.jsx',
  '../src/pages/ScanningSoftware.jsx',
];

// Regex to extract image references
const imageRegex = /image:\s*`\$\{import\.meta\.env\.BASE_URL\}images\/(.*?)`/g;

// Get all image files in the directory
const imageFiles = fs.readdirSync(imagesDir);

let missing = [];
let found = [];

for (const file of productFiles) {
  const absPath = path.join(__dirname, file);
  if (!fs.existsSync(absPath)) {
    console.warn(`File not found: ${absPath}`);
    continue;
  }
  const content = fs.readFileSync(absPath, 'utf8');
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    const img = match[1];
    found.push(img);
    if (!imageFiles.includes(img)) {
      // Try to suggest close matches
      const similar = imageFiles.filter(f => f.toLowerCase().includes(img.replace(/\s|\(|\)/g, '').toLowerCase().replace(/\.[a-z]+$/, '')));
      missing.push({ img, file, similar });
    }
  }
}

console.log('--- Image Reference Check ---');
if (missing.length === 0) {
  console.log('All referenced images exist in public/images.');
} else {
  console.log('Missing or mismatched image files:');
  for (const m of missing) {
    console.log(`- ${m.img} (referenced in ${m.file})`);
    if (m.similar.length) {
      console.log(`  Similar files found: ${m.similar.join(', ')}`);
    }
  }
}

console.log('\nReferenced images:');
console.log(found.join('\n'));
console.log('\nActual images in public/images:');
console.log(imageFiles.join('\n')); 