/* eslint-disable */
const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = fs.statSync(dirFile).isDirectory() ? walkSync(dirFile, filelist) : filelist.concat(dirFile);
    } catch (err) {}
  });
  return filelist;
};

const files = walkSync('.').filter(f => f.endsWith('.tsx') && !f.includes('node_modules') && !f.includes('.next'));

const replacements = [
  { from: "don't", to: "don&apos;t" },
  { from: "world's", to: "world&apos;s" },
  { from: "today's", to: "today&apos;s" },
  { from: "tomorrow's", to: "tomorrow&apos;s" },
  { from: "Safal's", to: "Safal&apos;s" },
  { from: "industry's", to: "industry&apos;s" },
  { from: "What's", to: "What&apos;s" },
  { from: "experts'", to: "experts&apos;" },
  { from: "business's", to: "business&apos;s" },
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;
  
  replacements.forEach(r => {
    const regex = new RegExp(r.from, 'g');
    content = content.replace(regex, r.to);
  });
  
  // Also clean up unused imports from lint log if we can, but let's do those manually or explicitly
  
  if (content !== original) {
    fs.writeFileSync(f, content);
    console.log('Fixed quotes in', f);
  }
});
