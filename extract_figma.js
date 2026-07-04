/* eslint-disable */
const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync('./figma_data.json', 'utf8'));
  
  if (data.status === 403 || data.err) {
    console.error("Error fetching Figma:", data);
    process.exit(1);
  }

  // Extract Colors
  const colors = new Set();
  const fontSizes = new Set();
  const textContent = [];

  function traverse(node) {
    if (node.type === 'TEXT') {
      if (node.style && node.style.fontSize) {
        fontSizes.add(node.style.fontSize);
      }
      if (node.characters) {
        textContent.push({ text: node.characters.replace(/\n/g, ' ').substring(0, 50), size: node.style?.fontSize });
      }
    }
    
    if (node.fills) {
      node.fills.forEach(fill => {
        if (fill.type === 'SOLID' && fill.color) {
          const r = Math.round(fill.color.r * 255);
          const g = Math.round(fill.color.g * 255);
          const b = Math.round(fill.color.b * 255);
          colors.add(`rgb(${r}, ${g}, ${b})`);
        }
      });
    }

    if (node.children) {
      node.children.forEach(traverse);
    }
  }

  traverse(data.document);

  console.log("=== EXTRACTED FIGMA DATA ===");
  console.log("Colors:", Array.from(colors));
  console.log("Font Sizes:", Array.from(fontSizes).sort((a,b)=>a-b));
  console.log("Sample Text (Top 20):", textContent.slice(0, 20));
} catch (e) {
  console.error("Failed to parse", e);
}
