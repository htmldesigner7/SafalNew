const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma_data.json', 'utf8'));

console.log("Document name:", data.document.name);

const pages = data.document.children.filter(c => c.type === 'CANVAS');
pages.forEach(p => {
  console.log("Page:", p.name);
  p.children.forEach(f => {
    console.log("  Frame:", f.name, f.type, "id:", f.id);
  });
});
