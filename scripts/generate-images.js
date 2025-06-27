const fs = require('fs');
const { createCanvas } = require('canvas');

// Ensure images directory exists
const imagesDir = './public/images';
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Image generation configuration
const width = 1920;
const height = 1080;

// Color schemes for different page types
const colorSchemes = {
  bi: { // Business Intelligence
    primary: '#667eea',
    secondary: '#764ba2',
    accent: '#ffd700',
    text: '#ffffff'
  },
  da: { // Data Automation
    primary: '#4facfe',
    secondary: '#00f2fe',
    accent: '#ff6b6b',
    text: '#ffffff'
  },
  dm: { // Document Management
    primary: '#667eea',
    secondary: '#764ba2',
    accent: '#ffd700',
    text: '#ffffff'
  },
  int: { // Integrations
    primary: '#667eea',
    secondary: '#764ba2',
    accent: '#ffd700',
    text: '#ffffff'
  },
  pricing: { // Pricing
    primary: '#667eea',
    secondary: '#764ba2',
    accent: '#ffd700',
    text: '#ffffff'
  },
  testimonials: { // Testimonials
    primary: '#667eea',
    secondary: '#764ba2',
    accent: '#ffd700',
    text: '#ffffff'
  }
};

// Generate gradient background
function createGradientBackground(canvas, ctx, colors, type = 'linear') {
  let gradient;
  
  if (type === 'radial') {
    gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/2);
  } else {
    gradient = ctx.createLinearGradient(0, 0, width, height);
  }
  
  gradient.addColorStop(0, colors.primary);
  gradient.addColorStop(1, colors.secondary);
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

// Add geometric patterns
function addGeometricPatterns(ctx, colors, patternType = 'circles') {
  ctx.globalAlpha = 0.1;
  
  if (patternType === 'circles') {
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 100 + 50;
      
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = colors.accent;
      ctx.fill();
    }
  } else if (patternType === 'squares') {
    for (let i = 0; i < 15; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 80 + 40;
      
      ctx.fillStyle = colors.accent;
      ctx.fillRect(x, y, size, size);
    }
  } else if (patternType === 'lines') {
    ctx.strokeStyle = colors.accent;
    ctx.lineWidth = 2;
    
    for (let i = 0; i < 10; i++) {
      const x1 = Math.random() * width;
      const y1 = Math.random() * height;
      const x2 = Math.random() * width;
      const y2 = Math.random() * height;
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }
  
  ctx.globalAlpha = 1;
}

// Add text overlay
function addTextOverlay(ctx, text, colors, fontSize = 48) {
  ctx.font = `bold ${fontSize}px Arial`;
  ctx.fillStyle = colors.text;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Add shadow for better visibility
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  
  ctx.fillText(text, width/2, height/2);
  
  // Reset shadow
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
}

// Generate a single image
function generateImage(filename, colors, text, patternType = 'circles', gradientType = 'linear') {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Create background
  createGradientBackground(canvas, ctx, colors, gradientType);
  
  // Add patterns
  addGeometricPatterns(ctx, colors, patternType);
  
  // Add text overlay
  if (text) {
    addTextOverlay(ctx, text, colors);
  }
  
  // Save image
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
  fs.writeFileSync(`${imagesDir}/${filename}`, buffer);
  
  console.log(`Generated: ${filename}`);
}

// Define all required images with their specifications
const imageSpecs = [
  // Business Intelligence
  { filename: 'bi-hero-bg.jpg', colors: colorSchemes.bi, text: 'Business Intelligence', patternType: 'circles', gradientType: 'linear' },
  { filename: 'bi-hero-overlay.jpg', colors: colorSchemes.bi, text: 'BI Solutions', patternType: 'squares', gradientType: 'radial' },
  { filename: 'bi-features-bg.jpg', colors: colorSchemes.bi, text: 'Features', patternType: 'lines', gradientType: 'linear' },
  { filename: 'bi-use-cases-bg.jpg', colors: colorSchemes.bi, text: 'Use Cases', patternType: 'circles', gradientType: 'linear' },
  { filename: 'bi-benefits-bg.jpg', colors: colorSchemes.bi, text: 'Benefits', patternType: 'squares', gradientType: 'radial' },
  { filename: 'bi-cta-bg.jpg', colors: colorSchemes.bi, text: 'Get Started', patternType: 'lines', gradientType: 'linear' },
  
  // Data Automation
  { filename: 'da-hero-bg.jpg', colors: colorSchemes.da, text: 'Data Automation', patternType: 'circles', gradientType: 'linear' },
  { filename: 'da-hero-overlay.jpg', colors: colorSchemes.da, text: 'Automation', patternType: 'squares', gradientType: 'radial' },
  { filename: 'da-automation-bg.jpg', colors: colorSchemes.da, text: 'Automation Types', patternType: 'lines', gradientType: 'linear' },
  { filename: 'da-benefits-bg.jpg', colors: colorSchemes.da, text: 'Benefits', patternType: 'circles', gradientType: 'linear' },
  { filename: 'da-process-bg.jpg', colors: colorSchemes.da, text: 'Process', patternType: 'squares', gradientType: 'radial' },
  { filename: 'da-use-cases-bg.jpg', colors: colorSchemes.da, text: 'Use Cases', patternType: 'lines', gradientType: 'linear' },
  { filename: 'da-cta-bg.jpg', colors: colorSchemes.da, text: 'Start Automation', patternType: 'circles', gradientType: 'linear' },
  
  // Document Management
  { filename: 'dm-hero-bg.jpg', colors: colorSchemes.dm, text: 'Document Management', patternType: 'circles', gradientType: 'linear' },
  { filename: 'dm-hero-overlay.jpg', colors: colorSchemes.dm, text: 'Document Solutions', patternType: 'squares', gradientType: 'radial' },
  { filename: 'dm-features-bg.jpg', colors: colorSchemes.dm, text: 'Features', patternType: 'lines', gradientType: 'linear' },
  { filename: 'dm-document-types-bg.jpg', colors: colorSchemes.dm, text: 'Document Types', patternType: 'circles', gradientType: 'linear' },
  { filename: 'dm-benefits-bg.jpg', colors: colorSchemes.dm, text: 'Benefits', patternType: 'squares', gradientType: 'radial' },
  { filename: 'dm-workflow-bg.jpg', colors: colorSchemes.dm, text: 'Workflow', patternType: 'lines', gradientType: 'linear' },
  { filename: 'dm-cta-bg.jpg', colors: colorSchemes.dm, text: 'Get Started', patternType: 'circles', gradientType: 'linear' },
  
  // Integrations
  { filename: 'int-hero-bg.jpg', colors: colorSchemes.int, text: 'System Integrations', patternType: 'circles', gradientType: 'linear' },
  { filename: 'int-hero-overlay.jpg', colors: colorSchemes.int, text: 'Integrations', patternType: 'squares', gradientType: 'radial' },
  { filename: 'int-categories-bg.jpg', colors: colorSchemes.int, text: 'Categories', patternType: 'lines', gradientType: 'linear' },
  { filename: 'int-features-bg.jpg', colors: colorSchemes.dm, text: 'Features', patternType: 'circles', gradientType: 'linear' },
  { filename: 'int-benefits-bg.jpg', colors: colorSchemes.int, text: 'Benefits', patternType: 'squares', gradientType: 'radial' },
  { filename: 'int-setup-bg.jpg', colors: colorSchemes.int, text: 'Setup', patternType: 'lines', gradientType: 'linear' },
  { filename: 'int-api-bg.jpg', colors: colorSchemes.int, text: 'API', patternType: 'circles', gradientType: 'linear' },
  { filename: 'int-cta-bg.jpg', colors: colorSchemes.int, text: 'Start Integration', patternType: 'squares', gradientType: 'radial' },
  
  // Pricing
  { filename: 'pricing-hero-bg.jpg', colors: colorSchemes.pricing, text: 'Pricing Plans', patternType: 'circles', gradientType: 'linear' },
  { filename: 'pricing-hero-overlay.jpg', colors: colorSchemes.pricing, text: 'Simple Pricing', patternType: 'squares', gradientType: 'radial' },
  { filename: 'pricing-plans-bg.jpg', colors: colorSchemes.pricing, text: 'Plans', patternType: 'lines', gradientType: 'linear' },
  { filename: 'pricing-addons-bg.jpg', colors: colorSchemes.pricing, text: 'Add-ons', patternType: 'circles', gradientType: 'linear' },
  { filename: 'pricing-faq-bg.jpg', colors: colorSchemes.pricing, text: 'FAQ', patternType: 'squares', gradientType: 'radial' },
  { filename: 'pricing-cta-bg.jpg', colors: colorSchemes.pricing, text: 'Get Started', patternType: 'lines', gradientType: 'linear' },
  
  // Testimonials
  { filename: 'testimonials-hero-bg.jpg', colors: colorSchemes.testimonials, text: 'Customer Testimonials', patternType: 'circles', gradientType: 'linear' },
  { filename: 'testimonials-hero-overlay.jpg', colors: colorSchemes.testimonials, text: 'What Our Customers Say', patternType: 'squares', gradientType: 'radial' },
  { filename: 'testimonials-stats-bg.jpg', colors: colorSchemes.testimonials, text: 'Statistics', patternType: 'lines', gradientType: 'linear' },
  { filename: 'testimonials-filter-bg.jpg', colors: colorSchemes.testimonials, text: 'Filter', patternType: 'circles', gradientType: 'linear' },
  { filename: 'testimonials-grid-bg.jpg', colors: colorSchemes.testimonials, text: 'Testimonials', patternType: 'squares', gradientType: 'radial' },
  { filename: 'testimonials-stories-bg.jpg', colors: colorSchemes.testimonials, text: 'Success Stories', patternType: 'lines', gradientType: 'linear' },
  { filename: 'testimonials-cta-bg.jpg', colors: colorSchemes.testimonials, text: 'Join Our Success Stories', patternType: 'circles', gradientType: 'linear' }
];

// Generate all images
console.log('Starting image generation...');
console.log(`Output directory: ${imagesDir}`);

imageSpecs.forEach(spec => {
  generateImage(spec.filename, spec.colors, spec.text, spec.patternType, spec.gradientType);
});

console.log('\nImage generation complete!');
console.log(`Generated ${imageSpecs.length} images in ${imagesDir}`); 