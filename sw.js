const CACHE = 'kaizen-v2';
const FONT_CSS = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap';
const SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png',
  './content-body.js', './content-voice.js', './content-mind.js', './content-craft.js'];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(SHELL);
    try {
      // fonts precache must never block offline install of the app shell
      const res = await fetch(FONT_CSS);
      const css = await res.clone().text();
      await cache.put(FONT_CSS, res);
      const fonts = [...new Set(css.match(/https:\/\/fonts\.gstatic\.com\/[^) ]+\.woff2/g) || [])];
      await cache.addAll(fonts);
    } catch (err) {
      // fonts CDN unreachable: system fallback now, fetch handler caches fonts on first online load
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key !== CACHE) await caches.delete(key);
    }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const cacheable = url.origin === self.location.origin
    || url.hostname === 'fonts.googleapis.com'
    || url.hostname === 'fonts.gstatic.com';
  if (!cacheable) return;
  e.respondWith((async () => {
    const hit = await caches.match(e.request);
    if (hit) return hit;
    try {
      const res = await fetch(e.request);
      if (res && (res.ok || res.type === 'opaque')) {
        const cache = await caches.open(CACHE);
        cache.put(e.request, res.clone());
      }
      return res;
    } catch (err) {
      if (e.request.mode === 'navigate') {
        const shell = await caches.match('./index.html');
        if (shell) return shell;
      }
      throw err;
    }
  })());
});
