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
      if (fullPath.match(/\.(tsx|jsx|js|ts)$/)) { 
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

  // We are looking for:
  // import { baseUrl } from '@/utils/baseUrl';
  // "use client";
  
  // Or more generally, if "use client" is anywhere in the file, it MUST be the very first line.
  const useClientRegex = /^[\s]*(['"]use client['"]);?/m;
  const match = content.match(useClientRegex);
  
  if (match) {
    const useClientString = match[1];
    
    // Check if it's already the very first thing (excluding whitespace)
    const firstNonWhitespaceIndex = content.search(/\S/);
    const matchIndex = match.index + content.substring(match.index).search(/\S/);
    
    if (matchIndex > firstNonWhitespaceIndex) {
       // It's not the first thing. We need to move it to the top.
       
       // Remove it from its current location
       // Replace just the first occurrence
       content = content.replace(useClientRegex, '');
       
       // Prepend it to the top
       content = useClientString + ";\n" + content.trimStart();
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Moved "use client" to top in ${file}`);
    totalFixed++;
  }
});

console.log(`Successfully fixed "use client" positioning in ${totalFixed} files.`);
