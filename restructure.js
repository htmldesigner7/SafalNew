/* eslint-disable */
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname);
const componentsDir = path.join(projectRoot, 'components');
const appDir = path.join(projectRoot, 'app');

const dirMapping = {
  Header: 'layout',
  Footer: 'layout',
  ThemeProvider: 'ui',
  ThemeToggle: 'ui',
  AboutPage: 'views',
  ContactPage: 'views',
  InvestorRelationsPage: 'views',
  JobDetailsPage: 'views',
};

// Target folders
const targetDirs = ['layout', 'ui', 'views', 'sections'];

// 1. Ensure target folders exist
targetDirs.forEach((dir) => {
  const targetPath = path.join(componentsDir, dir);
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath);
  }
});

// 2. Identify folders to move
const items = fs.readdirSync(componentsDir, { withFileTypes: true });
const oldFolders = [];

items.forEach((item) => {
  if (item.isDirectory() && !targetDirs.includes(item.name)) {
    oldFolders.push(item.name);
  }
});

// Get target for folder
const getTarget = (folderName) => dirMapping[folderName] || 'sections';

// 3. Update file contents
function traverseAndReplace(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  files.forEach((file) => {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      traverseAndReplace(fullPath);
    } else if (file.isFile() && /\.(tsx|ts|js|jsx)$/.test(file.name)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      oldFolders.forEach((oldFolder) => {
        const target = getTarget(oldFolder);
        
        // Regex for @/components/OldFolder
        const regex1 = new RegExp(`@/components/${oldFolder}`, 'g');
        if (regex1.test(content)) {
          content = content.replace(regex1, `@/components/${target}/${oldFolder}`);
          changed = true;
        }

        // Regex for relative imports going up one level, e.g., '../OldFolder'
        const regex2 = new RegExp(`['"]\\.\\./${oldFolder}`, 'g');
        if (regex2.test(content)) {
          // Replace relative with absolute path
          content = content.replace(regex2, `'@/components/${target}/${oldFolder}`);
          changed = true;
        }

        // Regex for relative imports going up two levels: '../../components/OldFolder'
        const regex3 = new RegExp(`['"]\\.\\./\\.\\./components/${oldFolder}`, 'g');
        if (regex3.test(content)) {
          content = content.replace(regex3, `'@/components/${target}/${oldFolder}`);
          changed = true;
        }
      });

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated imports in: ${fullPath}`);
      }
    }
  });
}

console.log('--- Updating imports ---');
traverseAndReplace(appDir);
traverseAndReplace(componentsDir);
traverseAndReplace(path.join(projectRoot, 'data'));

// 4. Move folders
console.log('--- Moving folders ---');
oldFolders.forEach((folderName) => {
  const oldPath = path.join(componentsDir, folderName);
  const target = getTarget(folderName);
  const newPath = path.join(componentsDir, target, folderName);
  
  fs.renameSync(oldPath, newPath);
  console.log(`Moved ${folderName} to components/${target}/${folderName}`);
});

console.log('Done.');
