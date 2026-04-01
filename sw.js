// Minimal service worker — required for Chrome PWA install prompt
const CACHE = 'osternest-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './EasterBunny.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
