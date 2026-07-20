const fs = require('fs');
const path = require('path');

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
      if (fullPath.match(/\.(tsx|ts|jsx|js)$/)) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const sourceFiles = getSourceFiles('./');
let totalReplaced = 0;

sourceFiles.forEach(file => {
  if (file.includes('add_base_url.js') || file.includes('next.config.ts') || file.includes('baseUrl.ts')) return;

  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Pattern to find standard strings starting with /images/
  // Matches: "/images/..." or '/images/...' 
  const regex = /(["'])\/images\/(.*?)\1/g;

  if (content.match(regex)) {
    // Replace with template literal using baseUrl
    content = content.replace(regex, '`${baseUrl}/images/$2`');
    
    // Add import statement at the top of the file if not already there
    if (!content.includes('import { baseUrl }')) {
      // Calculate relative path to utils/baseUrl
      const fileDir = path.dirname(file);
      const rootDir = path.resolve('./');
      // Simple absolute path import using alias if possible, but `@/utils/baseUrl` is safe for Next.js
      const importStmt = `import { baseUrl } from '@/utils/baseUrl';\n`;
      content = importStmt + content;
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Refactored ${file}`);
    totalReplaced++;
  }
});

console.log(`Successfully refactored ${totalReplaced} files with baseUrl.`);
