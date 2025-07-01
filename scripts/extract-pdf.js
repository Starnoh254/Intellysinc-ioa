const fs = require('fs');
const pdf = require('pdf-parse');

const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!inputPath || !outputPath) {
  console.error('Usage: node extract-pdf.js <input.pdf> <output.txt>');
  process.exit(1);
}

const dataBuffer = fs.readFileSync(inputPath);

pdf(dataBuffer).then(function(data) {
  fs.writeFileSync(outputPath, data.text, 'utf8');
  console.log(`Extracted text written to ${outputPath}`);
}); 