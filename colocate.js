const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname);
const componentsDir = path.join(projectRoot, 'components');
const appDir = path.join(projectRoot, 'app');

const mapping = {
  HeroSection: 'app/components',
  DivisionsSection: 'app/components',
  SolutionsSection: 'app/components',
  SectorsSection: 'app/components',
  GlobalPresenceSection: 'app/components',
  EcosystemSection: 'app/components',
  InvestorsSection: 'app/components',
  SustainabilitySection: 'app/components',
  CTASection: 'app/components',

  MultiplierSection: 'app/investor-relations/components',
  DedicationSection: 'app/investor-relations/components',
  VisionMissionSection: 'app/investor-relations/components',

  SynergyCompanies: 'app/our-entities/components',

  EngineerFutureSection: 'app/life-at-safal/components',
  BrainTrustSection: 'app/life-at-safal/components',

  GlobalClassroomSection: 'app/internships-mentorship/components',

  OpenPositionsSection: 'app/open-positions/components',

  ProcessSection: 'components/views/AboutPage',
  ArchitectureSection: 'components/views/AboutPage',
};

// Ensure target directories exist
const uniqueTargets = [...new Set(Object.values(mapping))];
uniqueTargets.forEach(target => {
  const targetPath = path.join(projectRoot, target);
  fs.mkdirSync(targetPath, { recursive: true });
});

// Update imports in all files
function traverseAndReplace(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir, { withFileTypes: true });
  files.forEach((file) => {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      traverseAndReplace(fullPath);
    } else if (file.isFile() && /\.(tsx|ts|js|jsx)$/.test(file.name)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      Object.entries(mapping).forEach(([section, newBaseDir]) => {
        // Find imports pointing to @/components/sections/SectionName
        const oldImportPath = `@/components/sections/${section}`;
        const newImportPath = `@/${newBaseDir}/${section}`;
        
        // Regex to match exact import path or paths extending it
        const regex = new RegExp(`['"]${oldImportPath}(/.*)?['"]`, 'g');
        if (regex.test(content)) {
          content = content.replace(regex, (match, suffix) => {
            return `'${newImportPath}${suffix || ''}'`;
          });
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

console.log('--- Moving folders ---');
Object.entries(mapping).forEach(([section, target]) => {
  const oldPath = path.join(componentsDir, 'sections', section);
  const newPath = path.join(projectRoot, target, section);
  
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Moved ${section} to ${target}/${section}`);
  } else {
    console.warn(`Source directory not found: ${oldPath}`);
  }
});

console.log('Done.');
