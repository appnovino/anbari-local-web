import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const assets = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/admin', ['index.html', 'text/html; charset=utf-8']],
  ['/terms', ['terms.html', 'text/html; charset=utf-8']],
  ['/privacy', ['privacy.html', 'text/html; charset=utf-8']],
  ['/app.mjs', ['app.mjs', 'text/javascript; charset=utf-8']],
  ['/app.css', ['app.css', 'text/css; charset=utf-8']],
  ['/offline.mjs', ['offline.mjs', 'text/javascript; charset=utf-8']],
  ['/sw.js', ['sw.js', 'text/javascript; charset=utf-8']],
].map(([path, [file, type]]) => [path, { type, body: readFileSync(new URL('./web/' + file, import.meta.url)) }]));

const digest = createHash('sha256');
for (const [path, asset] of assets) if (path !== '/sw.js') digest.update(asset.body);
const worker = assets.get('/sw.js');
digest.update(worker.body);
worker.body = Buffer.from(worker.body.toString().replace('novino-shell-1', 'novino-shell-' + digest.digest('hex')));

export function serveWeb(request, response, path) {
  const asset = assets.get(path);
  if (!asset || !['GET', 'HEAD'].includes(request.method)) return false;
  response.writeHead(200, {
    'Content-Type': asset.type,
    'Content-Length': asset.body.length,
    'Cache-Control': asset.type.startsWith('text/html') ? 'no-store' : 'no-cache',
    'Content-Security-Policy': "default-src 'none'; script-src 'self'; style-src 'self'; connect-src 'self'; worker-src 'self'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
    'Referrer-Policy': 'no-referrer',
    'X-Content-Type-Options': 'nosniff',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  });
  response.end(request.method === 'HEAD' ? undefined : asset.body);
  return true;
}
