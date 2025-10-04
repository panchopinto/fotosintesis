
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


// === Extra: dedicated cache for .glb models with simple LRU cap ===
const MODELS_CACHE = 'fotosintesis-models-v1';
const MODELS_MAX_ENTRIES = 6;

async function putInModelsCache(req, res){
  if(req.method !== 'GET' || !req.url.match(/\.glb($|\?)/i)) return;
  const cache = await caches.open(MODELS_CACHE);
  await cache.put(req, res.clone());

  // Simple LRU: enumerate, delete oldest if above cap
  const keys = await cache.keys();
  if(keys.length > MODELS_MAX_ENTRIES){
    await cache.delete(keys[0]);
  }
}

self.addEventListener('fetch', (e)=>{
  const req = e.request;
  if(req.method === 'GET' && req.url.match(/\.glb($|\?)/i)){
    e.respondWith((async ()=>{
      const cache = await caches.open(MODELS_CACHE);
      const hit = await cache.match(req);
      if(hit) return hit;
      try{
        const net = await fetch(req);
        if(net && net.status === 200){
          putInModelsCache(req, net.clone());
        }
        return net;
      }catch(err){
        // If offline and no cached model, fallback to a minimal response
        return new Response('', {status: 503, statusText: 'Model unavailable (offline)'});
      }
    })());
    return;
  }
  // Fallback to default handler below (already in file)
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
