import { readFileSync } from 'node:fs';

const assets = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/app.mjs', ['app.mjs', 'text/javascript; charset=utf-8']],
  ['/app.css', ['app.css', 'text/css; charset=utf-8']],
].map(([path, [file, type]]) => [path, { type, body: readFileSync(new URL('./web/' + file, import.meta.url)) }]));

export function serveWeb(request, response, path) {
  const asset = assets.get(path);
  if (!asset || !['GET', 'HEAD'].includes(request.method)) return false;
  response.writeHead(200, {
    'Content-Type': asset.type,
    'Content-Length': asset.body.length,
    'Cache-Control': path === '/' ? 'no-store' : 'no-cache',
    'Content-Security-Policy': "default-src 'none'; script-src 'self'; style-src 'self'; connect-src 'self'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
    'Referrer-Policy': 'no-referrer',
    'X-Content-Type-Options': 'nosniff',
  });
  response.end(request.method === 'HEAD' ? undefined : asset.body);
  return true;
}
