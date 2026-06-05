const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'public', 'figmaimages');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const images = [
  'image.png',
  'image copy.png',
  'image copy 2.png',
  'image copy 3.png',
  'image copy 4.png',
  'image copy 5.png',
  'image copy 6.png',
  'image copy 7.png',
  'image copy 8.png',
  'image copy 9.png',
  'image copy 10.png',
  'image copy 11.png'
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
        if (res.statusCode === 302 || res.statusCode === 301) {
            downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
            return;
        }
        const file = fs.createWriteStream(filepath);
        res.pipe(file);
        file.on('finish', () => {
            file.close(resolve);
        });
    }).on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
    });
  });
}

async function run() {
  console.log("Downloading placeholder images...");
  for (let i = 0; i < images.length; i++) {
    const filename = images[i];
    const filepath = path.join(dir, filename);
    // Using picsum photos with a seed so they are consistent but distinct
    const url = `https://picsum.photos/seed/safal${i}/800/600`;
    try {
      await downloadImage(url, filepath);
      console.log(`Downloaded ${filename}`);
    } catch (e) {
      console.error(`Failed to download ${filename}:`, e.message);
    }
  }
  console.log("Done downloading images.");
}

run();
