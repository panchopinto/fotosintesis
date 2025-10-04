
const CACHE_NAME = 'fotosintesis-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './favicon.svg',
  './assets/css/styles.css',
  './assets/js/app.js',
  './assets/js/i18n.js',
  './assets/js/loader.js',
  './pages/proceso.html',
  './pages/ecuacion.html',
  './pages/cloroplasto.html',
  './pages/interactive.html',
  './pages/recursos.html',
  './pages/ar.html'
];

self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE_NAME).then(cache=> cache.addAll(ASSETS)));
});

self.addEventListener('activate', (e)=>{
  e.waitUntil(
    caches.keys().then(keys=> Promise.all(keys.map(k=> k===CACHE_NAME?null:caches.delete(k))))
  );
});

self.addEventListener('fetch', (e)=>{
  const req = e.request;
  e.respondWith(
    caches.match(req).then(cached=> cached ||
      fetch(req).then(res=>{
        // Optionally cache new GET requests
        if(req.method==='GET' && res.status===200){
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c=> c.put(req, clone));
        }
        return res;
      }).catch(()=> caches.match('./index.html'))
    )
  );
});
