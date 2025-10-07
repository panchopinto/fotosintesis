
const CACHE = 'fotosintesis-v1';
const ASSETS = [
  './',
  './index.html',
  './assets/css/styles.css'
];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('fetch', e=>{
  e.respondWith(
    caches.match(e.request).then(r=> r || fetch(e.request).then(resp=>{
      const copy = resp.clone();
      caches.open(CACHE).then(c=> c.put(e.request, copy));
      return resp;
    }).catch(()=>r))
  );
});
