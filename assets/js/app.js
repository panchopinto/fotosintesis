
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
