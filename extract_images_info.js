/* eslint-disable */
const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync('./figma_data.json', 'utf8'));
  const imageRefs = new Set();
  const nodeImages = {}; // node_id -> name
  
  function traverse(node) {
    // If it's a Vector or has an image
    if (node.fills) {
        node.fills.forEach(fill => {
            if (fill.type === 'IMAGE' && fill.imageRef) {
                imageRefs.add(fill.imageRef);
            }
        });
    }
    // We can also extract images using the node ID via Figma API
    // Let's just collect all main visual nodes for export
    if (node.type === 'VECTOR' || node.name.toLowerCase().includes('image') || node.name.toLowerCase().includes('icon') || node.name.toLowerCase().includes('logo') || node.type === 'RECTANGLE' && node.fills?.some(f => f.type==='IMAGE')) {
         nodeImages[node.id] = node.name;
    }
    
    if (node.children) {
      node.children.forEach(traverse);
    }
  }

  if (data.document && data.document.children) {
     data.document.children.forEach(traverse);
  }

  console.log(`Found ${imageRefs.size} imageRefs inside fills.`);
  console.log(`Found ${Object.keys(nodeImages).length} nodes that could be exported.`);

  fs.writeFileSync('node_images.json', JSON.stringify(nodeImages, null, 2));

} catch (e) {
  console.error(e);
}
