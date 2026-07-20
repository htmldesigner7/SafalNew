import { baseUrl } from '@/utils/baseUrl';
const fs = require('fs');
const path = require('path');

// 1. Get all files in public directory relative to public/
function getPublicFiles(dir, baseDir = '') {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const relPath = path.join(baseDir, file).replace(/\\/g, '/');
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getPublicFiles(fullPath, relPath));
    } else {
      results.push('/' + relPath);
    }
  });
  return results;
}

const publicFiles = getPublicFiles('./public');
console.log(`Found ${publicFiles.length} files in public folder.`);

// 2. Get all source files to scan
function getSourceFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.next') && !fullPath.includes('.git')) {
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

// 3. Scan and replace
let totalReplaced = 0;
sourceFiles.forEach(file => {
  let originalContent = fs.readFileSync(file, 'utf8');
  let content = originalContent;

  publicFiles.forEach(pubFile => {
    // Escape pubFile for regex if needed, though simple string replacement is safer.
    // We look for 'pubFile' or "pubFile" and replace with '/safal' + pubFile
    // Note: pubFile starts with '/'
    
    // Avoid double replacement if it already has /safal/
    // We use a regex to match quotes around it.
    const regex = new RegExp(`(["'])(${pubFile})(["'])`, 'g');
    
    // Check if it exists before doing the expensive replace
    if (content.includes(`"${pubFile}"`) || content.includes(`'${pubFile}'`) || content.includes(`\`${pubFile}\``)) {
       content = content.replace(regex, `$1/safal$2$3`);
    }
  });

  // Also replace any generic /files/, /images/ etc that might have been dynamically constructed
  // but let's avoid replacing if it already has /safal/
  const genericFolders = [`${baseUrl}/images/`, `${baseUrl}/files/`, '/uploads/'];
  genericFolders.forEach(folder => {
     // match `${baseUrl}/images/` but not `${baseUrl}/images/`
     // negative lookbehind is (?<!...)
     const regex = new RegExp(`(?<!/safal)(["'\`])(${folder}[a-zA-Z0-9_\\-\\./]*)`, 'g');
     content = content.replace(regex, `$1/safal$2`);
  });
  
  // Specific root files
  const rootFiles = ['/contact-hero.png', '/file.svg', '/globe-bg.png', '/globe.svg', '/handshake.png', '/hero-glass-shapes.png', '/next.svg', '/vercel.svg', '/window.svg'];
  rootFiles.forEach(rf => {
     const regex = new RegExp(`(?<!/safal)(["'\`])(${rf})(["'\`])`, 'g');
     content = content.replace(regex, `$1/safal$2$3`);
  });


  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
    totalReplaced++;
  }
});

console.log(`Finished updating ${totalReplaced} files.`);
