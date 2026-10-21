// sw.js - Basic Service Worker សម្រាប់ឲ្យស្គាល់ជា PWA
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Activated');
});

self.addEventListener('fetch', (e) => {
    // អនុញ្ញាតឲ្យកម្មវិធីដំណើរការទោះគ្មានអ៊ីនធឺណិត (Offline)
    e.respondWith(fetch(e.request).catch(() => new Response("Offline")));
});
