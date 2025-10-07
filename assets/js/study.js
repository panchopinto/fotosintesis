
// Modo Estudio + glosario + mini-quiz + atajos
(function(){
  const viewer = document.getElementById('procModel');
  if(!viewer) return;

  // ---- Tour por pasos (tilacoides / estroma)
  const steps = [
    { id: 'tilacoides', title: 'Fase luminosa — Tilacoides', orbit: '0deg 60deg 2.2m', fov: '35deg',
      note: 'Captura de luz, transporte de e⁻, ATP y NADPH.', focus: true },
    { id: 'estroma', title: 'Fase oscura — Estroma (Ciclo de Calvin)', orbit: '45deg 70deg 2.6m', fov: '40deg',
      note: 'Fijación de carbono (RuBisCO), reducción y regeneración de RuBP.' }
  ];
  let idx = 0, running = false, tHandle = null;
  function applyStep(s){
    if(!viewer) return;
    viewer.cameraOrbit = s.orbit;
    if(s.fov) viewer.fieldOfView = s.fov;
    const badge = document.getElementById('tourStatus');
    if(badge) badge.innerHTML = '🔎 ' + s.title;
    const tip = document.getElementById('tourTip');
    if(tip) tip.textContent = s.note || '';
  }
  function next(){ idx = (idx+1)%steps.length; applyStep(steps[idx]); }
  function prev(){ idx = (idx-1+steps.length)%steps.length; applyStep(steps[idx]); }
  function start(){ running = true; applyStep(steps[idx]); }
  function stop(){ running = false; }
  window.__tour__ = {next,prev,start,stop};

  // ---- Timer Docente (3:00 min por fase)
  const timerEl = document.getElementById('tourTimer');
  let seconds = 180, timerId=null;
  function format(s){ const m=Math.floor(s/60), ss=(s%60).toString().padStart(2,'0'); return `${m}:${ss}`; }
  function tick(){ seconds--; if(timerEl) timerEl.textContent = format(Math.max(0,seconds)); if(seconds<=0){ clearInterval(timerId); timerId=null; } }
  function resetTimer(){ seconds=180; if(timerEl) timerEl.textContent = format(seconds); }
  function playTimer(){ if(timerId) return; timerId=setInterval(tick,1000); }
  function pauseTimer(){ if(timerId){ clearInterval(timerId); timerId=null; } }
  window.__timer__ = {playTimer,pauseTimer,resetTimer};

  // ---- UI Handlers
  document.getElementById('btnTourStart')?.addEventListener('click', ()=>{ start(); });
  document.getElementById('btnTourPrev')?.addEventListener('click', prev);
  document.getElementById('btnTourNext')?.addEventListener('click', next);
  document.getElementById('btnTPlay')?.addEventListener('click', playTimer);
  document.getElementById('btnTPause')?.addEventListener('click', pauseTimer);
  document.getElementById('btnTReset')?.addEventListener('click', resetTimer);

  // ---- Glosario emergente
  const tip = document.createElement('div');
  tip.className = 'tooltip'; document.body.appendChild(tip);
  function showTip(el){
    tip.innerHTML = `<div class="title">${el.dataset.term}</div><div>${el.dataset.gloss}</div>`;
    const r = el.getBoundingClientRect();
    tip.style.left = (r.left + window.scrollX) + 'px';
    tip.style.top = (r.bottom + window.scrollY + 8) + 'px';
    tip.classList.add('show');
  }
  function hideTip(){ tip.classList.remove('show'); }
  document.querySelectorAll('[data-gloss]').forEach(el=>{
    el.addEventListener('mouseenter', ()=> showTip(el));
    el.addEventListener('mouseleave', hideTip);
    el.addEventListener('click', ()=> showTip(el));
  });
  document.addEventListener('click', (e)=>{
    if(!e.target.closest('[data-gloss]') && !e.target.closest('.tooltip')) hideTip();
  });

  // ---- Mini-quiz con feedback
  const qroot = document.getElementById('quizProceso');
  if(qroot){
    qroot.querySelectorAll('.opt input').forEach(i=> i.addEventListener('change', ()=>{
      const correct = i.dataset.correct === '1';
      const res = qroot.querySelector('.result');
      if(correct){ res.textContent = '✅ ¡Correcto!'; }
      else{ res.textContent = '❌ Revisa el diagrama: ATP/NADPH se forman en la fase luminosa.'; }
    }));
  }

  // ---- Atajos de teclado
  document.addEventListener('keydown',(e)=>{
    if(e.target.tagName==='INPUT' || e.target.tagName==='TEXTAREA') return;
    if(e.key==='ArrowRight') next();
    if(e.key==='ArrowLeft') prev();
    if(e.key==='r' || e.key==='R'){ const b=document.getElementById('btnResetProcModel'); b?.click(); }
    if(e.key===' '){ e.preventDefault(); if(timerId) pauseTimer(); else playTimer(); }
  });

  // Init
  resetTimer();
})();
