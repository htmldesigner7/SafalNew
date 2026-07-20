import { baseUrl } from '@/utils/baseUrl';
const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
        results = results.concat(walk(file));
      }
    } else {
      if (file.match(/\.(tsx|ts|jsx|js|css|scss)$/)) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('`${baseUrl}/images/') || content.includes(`'/images/")) {
    content = content.replace(/(["'])\/images\//g, '$1/safal/images/');
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
