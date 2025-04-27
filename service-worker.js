const CACHE_NAME = 'switchee-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/gen2.html',
  '/econa.html',
  '/mobile.html',
  '/history.html',
  '/styles/main.css',
  '/scripts/main.js',
  '/logo.png',
  '/leaf.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
