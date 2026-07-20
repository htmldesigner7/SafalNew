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
      if (fullPath.match(/\.(tsx|jsx)$/)) { // Only JSX files have this issue
        results.push(fullPath);
      }
    }
  });
  return results;
}

const sourceFiles = getSourceFiles('./');
let totalFixed = 0;

sourceFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Find src=`${baseUrl}...` and replace with src={`${baseUrl}...`}
  // We use regex to match the attribute name (like src or href), the equals sign, 
  // and the template literal.
  // Match example: src=`${baseUrl}/images/foo.png`
  // Replace with: src={`${baseUrl}/images/foo.png`}
  
  const regex = /([a-zA-Z0-9_-]+)\s*=\s*`(\$\{baseUrl\}(?:\/images\/|\/files\/).*?)`/g;
  
  if (content.match(regex)) {
    content = content.replace(regex, '$1={`$2`}');
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Fixed JSX braces in ${file}`);
    totalFixed++;
  }
});

console.log(`Successfully fixed JSX syntax in ${totalFixed} files.`);
