const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const title = process.env.SITE_NAME || 'CI/CD Checkpoint Demo';
const html = `<!doctype html>
<html>
<head><meta charset="utf-8"><title>${title}</title></head>
<body>
  <h1>${title}</h1>
  <p>Build successful! Deployed via GitHub Actions.</p>
  <p>Timestamp: ${new Date().toISOString()}</p>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'index.html'), html);
console.log('Built dist/index.html');
