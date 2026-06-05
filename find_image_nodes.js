const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync('./figma_data.json', 'utf8'));
  
  function searchNodes(node, path = "") {
    const currentPath = `${path} / ${node.name} (${node.id})`;
    
    // We are looking for node names that sound like the images we want
    const lowerName = node.name.toLowerCase();
    
    // Some keywords we might expect:
    if (
        lowerName.includes('image') || 
        lowerName.includes('hero') || 
        lowerName.includes('erp') ||
        lowerName.includes('fingerprint') ||
        lowerName.includes('globe') ||
        lowerName.includes('puzzle') ||
        lowerName.includes('product') ||
        lowerName.includes('icon') ||
        lowerName.includes('logo') ||
        lowerName.includes('map') ||
        lowerName.includes('cubes') ||
        node.type === 'VECTOR'
    ) {
        // If it has an absolute bounding box, print it to help identify
        let size = "";
        if (node.absoluteBoundingBox) {
            size = `[W:${Math.round(node.absoluteBoundingBox.width)} H:${Math.round(node.absoluteBoundingBox.height)}]`;
        }
        console.log(`${currentPath} ${size}`);
    }
    
    if (node.children) {
      node.children.forEach(child => searchNodes(child, currentPath));
    }
  }

  if (data.document && data.document.children) {
     data.document.children.forEach(child => searchNodes(child, ""));
  }

} catch (e) {
  console.error(e);
}
