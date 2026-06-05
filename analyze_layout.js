const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync('./figma_data.json', 'utf8'));
  
  function printTree(node, depth = 0) {
    if (depth > 4) return; // limit depth
    const indent = ' '.repeat(depth * 2);
    let info = `${indent}- ${node.name} (${node.type})`;
    
    if (node.type === 'TEXT') {
        info += ` => "${node.characters.substring(0, 30).replace(/\n/g, ' ')}"`;
    }
    
    if (node.absoluteBoundingBox) {
        const { width, height } = node.absoluteBoundingBox;
        info += ` [W:${Math.round(width)} H:${Math.round(height)}]`;
    }

    console.log(info);

    if (node.children) {
      node.children.forEach(child => printTree(child, depth + 1));
    }
  }

  // Find the main canvas/frame
  const document = data.document;
  console.log("=== FIGMA STRUCTURE ===");
  if (document.children) {
     document.children.forEach(page => {
         console.log(`Page: ${page.name}`);
         if (page.children) {
             page.children.forEach(frame => {
                 console.log(` Frame: ${frame.name}`);
                 printTree(frame, 1);
             });
         }
     });
  }

} catch (e) {
  console.error(e);
}
