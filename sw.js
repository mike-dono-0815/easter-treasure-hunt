// Minimal service worker — required for Chrome PWA install prompt
const CACHE = 'osternest-v2';
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
  // Network-first: always try to get fresh content, fall back to cache
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
