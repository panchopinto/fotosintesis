
document.addEventListener('click', (e)=>{
  const t = e.target;
  if(t.matches('[data-modal]')){
    const id = t.getAttribute('data-modal');
    const m = document.getElementById(id);
    if(m){ m.classList.add('open'); }
  }
  if(t.matches('.modal [data-close]')){
    t.closest('.modal').classList.remove('open');
  }
});

// Theme toggle
(function(){
  const key = 'site-theme';
  const root = document.documentElement;
  const btn = document.getElementById('btnTheme');
  const themes = {
    dark: { '--bg':'#0b1020','--card':'#12172a','--accent':'#22c55e','--accent-2':'#38bdf8','--text':'#e5e7eb','--muted':'#9ca3af' },
    light: { '--bg':'#f6f9ff','--card':'#ffffff','--accent':'#16a34a','--accent-2':'#2563eb','--text':'#0b1020','--muted':'#4b5563' }
  };
  function setTheme(t){
    const vars = themes[t]||themes.dark;
    Object.entries(vars).forEach(([k,v])=> root.style.setProperty(k,v));
    if(btn) btn.textContent = (t==='dark'?'🌙':'☀️');
    localStorage.setItem(key, t);
  }
  const saved = localStorage.getItem(key)||'dark';
  setTheme(saved);
  if(btn){
    btn.addEventListener('click',(e)=>{ e.preventDefault(); setTheme((localStorage.getItem(key)||'dark')==='dark'?'light':'dark'); });
  }
})();


// A2HS (Add to Home Screen) + Offline banner
(function(){
  let deferredPrompt = null;
  const banner = document.getElementById('sysBanner');
  const msg = document.getElementById('sysBannerMsg');
  const btnRetry = document.getElementById('btnRetry');
  const btnDismiss = document.getElementById('btnDismiss');
  const btnInstall = document.getElementById('btnInstall');

  function showBanner(text, opts={}){
    if(!banner || !msg) return;
    msg.textContent = text;
    if(btnInstall) btnInstall.style.display = opts.install ? 'inline-flex' : 'none';
    banner.classList.add('show');
  }
  function hideBanner(){ if(banner){ banner.classList.remove('show'); } }

  // Offline/online handling
  function updateOnlineStatus(){
    if(!navigator.onLine){
      showBanner((localStorage.getItem('site-lang')||'es')==='en' ? 'You are offline.' : 'Estás sin conexión.');
    } else {
      hideBanner();
    }
  }
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  if(document.readyState !== 'loading') updateOnlineStatus();
  else document.addEventListener('DOMContentLoaded', updateOnlineStatus);

  if(btnRetry){
    btnRetry.addEventListener('click', ()=> location.reload());
  }
  if(btnDismiss){
    btnDismiss.addEventListener('click', hideBanner);
  }

  // Capture A2HS prompt
  window.addEventListener('beforeinstallprompt', (e)=>{
    e.preventDefault();
    deferredPrompt = e;
    // Show install CTA in banner
    const isEN = (localStorage.getItem('site-lang')||'es')==='en';
    showBanner(isEN ? 'Install this app for quick access.' : 'Instala esta app para acceso rápido.', {install:true});
  });
  if(btnInstall){
    btnInstall.addEventListener('click', async ()=>{
      if(!deferredPrompt) return;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if(outcome === 'accepted'){
        hideBanner();
      }
      deferredPrompt = null;
    });
  }
})();
