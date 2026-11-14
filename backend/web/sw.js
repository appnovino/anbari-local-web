const cacheName = 'novino-shell-1';
const shell = ['/', '/app.mjs', '/app.css', '/offline.mjs'];
const staticPaths = new Set(shell);

self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(shell)));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key.startsWith('novino-shell-') && key !== cacheName) await caches.delete(key);
    }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== location.origin || !staticPaths.has(url.pathname)) return;
  // Keep the assets from one deployed version together while the next worker installs.
  event.respondWith((async () => {
    const cache = await caches.open(cacheName);
    return (await cache.match(url.pathname)) ?? fetch(event.request);
  })());
});
