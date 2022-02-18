// Choose a cache name
const cacheName = 'cache-v1';
//List the files to precache
const precacheResources = [
    './',
    './index.html',
    './style.css',
    './assets/image-hero-landscape.png',
    './assets/image-hero-landscape.webp',
    './assets/image-hero-landscape@2x.png',
    './assets/image-hero-landscape@2x.webp',
    './assets/image-hero-portrait.png',
    './assets/image-hero-portrait.webp',
    './assets/image-hero-portrait@2x.png',
    './assets/image-hero-portrait@2x.webp',
    './assets/jeremy-large.png',
    './assets/jeremy-large.webp',
    './assets/jeremy-large@2x.png',
    './assets/jeremy-large@2x.webp',
    './assets/jeremy-small.png',
    './assets/jeremy-small.webp',
    './assets/jeremy-small@2x.webp',
    './assets/jeremy-small@2x.png',
    './assets/mstile-150x150.png',
    './assets/pattern-blur.svg',
    './assets/pattern-curved-line-1.svg',
    './assets/pattern-curved-line-2.svg',
    './assets/favicon-32x32.png',
    './assets/android-chrome-192x192.png',
    './assets/apple-touch-icon.png',
    './assets/icon-facebook.svg',
    './assets/icon-instagram.svg',
    './assets/icon-twitter.svg',
    './assets/logo.svg'
];


// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
    console.log('Service worker install event!');
    event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
    console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
    console.log('Fetch intercepted for:', event.request.url);
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        }),
    );
});