
(function(){
  function getLang(){
    const p = new URLSearchParams(location.search);
    const urlLang = (p.get('lang')||'').toLowerCase();
    const stored = (localStorage.getItem('site-lang')||'').toLowerCase();
    let v = urlLang || stored || '';
    if(!v){
      const nav = (navigator.language||navigator.userLanguage||'es').toLowerCase();
      v = nav.startsWith('en') ? 'en' : 'es';
    }
    localStorage.setItem('site-lang', v);

    const p = new URLSearchParams(location.search);
    const v = (p.get('lang')||'es').toLowerCase();
    return (v==='en'?'en':'es');
  }
  const L = getLang();
  const T = {
    // Added site-wide keys
    es: {
      hModules: "Módulos",
      hKpis: "KPIs del módulo",
      hHowTo: "⚙️ Cómo usar",
      tipPhase: "💡 Tip: Asocia <strong>fase luminosa</strong> (tilacoides) con energía (ATP/NADPH) y <strong>fase oscura</strong> (estroma) con fijación de carbono.",
      step1: "<strong>Captura de luz (Tilacoides)</strong> — Los <em>complejos antena</em> con clorofila absorben fotones y excitan electrones.",
      step2: "<strong>Transporte electrónico</strong> — PSII → citocromo b6f → PSI; se bombea H⁺ al lumen.",
      step3: "<strong>Fotofosforilación</strong> — Gradiente de protones impulsa <em>ATP sintasa</em> → ATP.",
      step4: "<strong>Reducción</strong> — NADP⁺ + e⁻ → NADPH (lado estromal).",
      step5: "<strong>Ciclo de Calvin</strong> — Fijación (RuBisCO), reducción y regeneración de RuBP → síntesis de <em>G3P</em> y glucosa.",
      eqBalance: "<strong>6 CO₂ + 6 H₂O + energía lumínica → C₆H₁₂O₆ + 6 O₂</strong>",
      eqDetail: "En detalle: la luz impulsa la generación de <strong>ATP</strong> y <strong>NADPH</strong> que alimentan el <em>Ciclo de Calvin</em> para fijar CO₂.",
      inputs: "🌞 Entradas",
      outputs: "🍃 Salidas",
appTitle: "Fotosíntesis — AR Biología",
      navHome: "🏠 Inicio",
      navProceso: "🌿 Proceso",
      navEcuacion: "🧪 Ecuación",
      navCloroplasto: "🧬 Cloroplasto 3D",
      navInteractivo: "🎮 Interactivo",
navAR: "🅰️🆁 AR",
      navAyuda: "❓ Ayuda",
      heroTitle: "Fotosíntesis: de la luz ☀️ a la glucosa 🍬",
      heroDesc: "Explora las fases luminosa y oscura (Ciclo de Calvin), visualiza el cloroplasto en 3D, y ponte a prueba con un quiz.",
      helpTitle: "Ayuda",
      helpBody: "Usa el menú para navegar. En “Cloroplasto 3D” puedes arrastrar y soltar un archivo .glb. Cambia el idioma con ES/EN en la barra superior."
    },
    en: {
      hModules: "Modules",
      hKpis: "Module KPIs",
      hHowTo: "⚙️ How to use",
      tipPhase: "💡 Tip: Link the <strong>light reactions</strong> (thylakoids) with energy (ATP/NADPH) and the <strong>dark reactions</strong> (stroma) with carbon fixation.",
      step1: "<strong>Light capture (Thylakoids)</strong> — Antenna complexes with chlorophyll absorb photons and excite electrons.",
      step2: "<strong>Electron transport</strong> — PSII → cytochrome b6f → PSI; H⁺ is pumped into the lumen.",
      step3: "<strong>Photophosphorylation</strong> — Proton gradient drives <em>ATP synthase</em> → ATP.",
      step4: "<strong>Reduction</strong> — NADP⁺ + e⁻ → NADPH (stromal side).",
      step5: "<strong>Calvin cycle</strong> — Fixation (RuBisCO), reduction, and RuBP regeneration → <em>G3P</em> and glucose.",
      eqBalance: "<strong>6 CO₂ + 6 H₂O + light energy → C₆H₁₂O₆ + 6 O₂</strong>",
      eqDetail: "In detail: light drives <strong>ATP</strong> and <strong>NADPH</strong> synthesis feeding the <em>Calvin cycle</em> to fix CO₂.",
      inputs: "🌞 Inputs",
      outputs: "🍃 Outputs",
appTitle: "Photosynthesis — AR Biology",
      navHome: "🏠 Home",
      navProceso: "🌿 Process",
      navEcuacion: "🧪 Equation",
      navCloroplasto: "🧬 Chloroplast 3D",
      navInteractivo: "🎮 Interactive",
navAR: "🅰️🆁 AR",
      navAyuda: "❓ Help",
      heroTitle: "Photosynthesis: from light ☀️ to glucose 🍬",
      heroDesc: "Explore the light reactions and Calvin cycle, view the chloroplast in 3D, and test yourself with a quiz.",
      helpTitle: "Help",
      helpBody: "Use the top menu to navigate. In “Chloroplast 3D” you can drag & drop a .glb file. Switch language with ES/EN in the header."
    }
  };
  function tx(id, key){
    const el = document.getElementById(id);
    if(el) el.textContent = T[L][key];
  }
  // Basic replacements (present on every page)
  tx('titleApp','appTitle');
  tx('navHome','navHome');
  tx('navProceso','navProceso');
  tx('navEcuacion','navEcuacion');
  tx('navCloroplasto','navCloroplasto');
  tx('navInteractivo','navInteractivo');
tx('navAR','navAR');
  tx('navAyuda','navAyuda');

  // Optional elements (index hero)
  tx('heroTitle','heroTitle');
  tx('heroDesc','heroDesc');

  // Help modal labels
  const helpTitle = document.querySelector('#help .title-i18n');
  if(helpTitle){ helpTitle.textContent = T[L]['helpTitle']; }
  const helpBody = document.querySelector('#help .body-i18n');
  if(helpBody){ helpBody.textContent = T[L]['helpBody']; }

  // Mark active language
  const btnES = document.getElementById('btnES');
  const btnEN = document.getElementById('btnEN');
  if(btnES && btnEN){
    if(L==='es'){ btnES.classList.add('primary'); btnEN.classList.remove('primary'); }
    else { btnEN.classList.add('primary'); btnES.classList.remove('primary'); }
  }
})();
