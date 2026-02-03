const CACHE_NAME = 'np-v1';
const ASSETS = [
  '/NBOPRIME/',
  '/NBOPRIME/index.html',
  '/NBOPRIME/partnrr.html',
  '/NBOPRIME/admin.html',
  '/NBOPRIME/manifest.json',
  '/NBOPRIME/logo.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Nairobi Prime: Caching System Files');
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
