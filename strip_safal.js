const fs = require('fs');
const path = require('path');

const newBasePath = "";

// 1. Get all source files to scan
function getSourceFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.next') && !fullPath.includes('.git') && !fullPath.includes('public')) {
        results = results.concat(getSourceFiles(fullPath));
      }
    } else {
      if (fullPath.match(/\.(tsx|ts|jsx|js|css|scss|json)$/)) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const sourceFiles = getSourceFiles('./');

// 2. Scan and replace
let totalReplaced = 0;
const regex = new RegExp(`(["'\`])(\/safal)(\/)`, 'g');

sourceFiles.forEach(file => {
  let originalContent = fs.readFileSync(file, 'utf8');
  let content = originalContent;

  if (!file.includes('strip_safal.js') && !file.includes('next.config.ts') && !file.includes('route_images.json') && !file.includes('typos_report.json') && !file.includes('images_manifest.json') && !file.includes('disk_images') && !file.includes('figma_data')) {
    if (content.match(regex)) {
       // Replace /safal/ with /
       content = content.replace(regex, `$1$3`);
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated paths in ${file}`);
    totalReplaced++;
  }
});

console.log(`Finished updating ${totalReplaced} files successfully.`);
