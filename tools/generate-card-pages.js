/**
 * Generate pretty URLs without hand-writing 30 index.html files.
 *
 * Input:
 *  - data/profiles.json
 *
 * Output:
 *  - cards/<id>/index.html   (simple redirect to /index.html?id=<id>)
 *
 * Usage:
 *  node tools/generate-card-pages.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA_PATH = path.join(ROOT, 'data', 'profiles.json');
const OUT_DIR = path.join(ROOT, 'cards');

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function writeRedirectIndex({ id, title }) {
  const safeId = encodeURIComponent(id);
  const safeTitle = escapeHtml(title || id);

  const html = `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${safeTitle} | Dijital Kartvizit</title>
  <meta http-equiv="refresh" content="0; url=../../index.html?id=${safeId}" />
  <link rel="canonical" href="../../index.html?id=${safeId}" />
  <script>
    // JS redirect (safer than meta refresh for some browsers)
    location.replace('../../index.html?id=${safeId}');
  </script>
</head>
<body>
  Yönlendiriliyor… <a href="../../index.html?id=${safeId}">Tıkla</a>
</body>
</html>
`;

  const dir = path.join(OUT_DIR, id);
  ensureDir(dir);
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
}

function main() {
  const raw = fs.readFileSync(DATA_PATH, 'utf8');
  const parsed = JSON.parse(raw);
  const profiles = Array.isArray(parsed.profiles) ? parsed.profiles : [];

  ensureDir(OUT_DIR);

  let count = 0;
  for (const p of profiles) {
    if (!p || typeof p.id !== 'string' || !p.id.trim()) continue;
    const id = p.id.trim();
    writeRedirectIndex({ id, title: p.companyName || p.personName || id });
    count += 1;
  }

  console.log(`Generated ${count} card page(s) into: ${OUT_DIR}`);
}

main();

