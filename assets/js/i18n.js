
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
      helpBodyIndex: "Navega con el menú superior. Usa ES/EN para cambiar el idioma. Entra a Proceso o Cloroplasto para ver modelos 3D.",
      helpBodyProceso: "Modelo 3D: pellizca para acercar/alejar, arrastra para rotar. Usa “🔄 Recentrar” para volver al encuadre. El modelo se carga desde <code>assets/models/fotosintesis__bella_denisa.glb</code>.",
      helpBodyEcuacion: "Consulta la ecuación global y los detalles. Cambia a EN para verla en inglés.",
      helpBodyCloroplasto: "Visor 3D del cloroplasto: pellizca, rota y usa “🔄 Recentrar”. Carga por defecto <code>assets/models/chloroplast.glb</code>. Puedes arrastrar otro .glb para visualizar.",
      helpBodyInteractivo: "Responde el quiz y presiona Enviar para ver tu puntaje. Cambia de idioma con ES/EN.",
      helpBodyAR: "Activa la cámara si el navegador lo pide. En móviles, la escena ocupa toda la pantalla. Si no ves el modelo, revisa permisos de cámara y movimiento/orientación.",

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
      helpBodyIndex: "Use the top menu to navigate. Switch language with ES/EN. Go to Process or Chloroplast to view 3D models.",
      helpBodyProceso: "3D model: pinch to zoom, drag to rotate. Use “🔄 Recenter” to reset the view. The model loads from <code>assets/models/fotosintesis__bella_denisa.glb</code>.",
      helpBodyEcuacion: "See the global equation and details. Switch to ES for Spanish.",
      helpBodyCloroplasto: "Chloroplast 3D viewer: pinch, rotate, and use “🔄 Recenter”. It loads <code>assets/models/chloroplast.glb</code> by default. You can also drag & drop another .glb.",
      helpBodyInteractivo: "Answer the quiz and press Submit to see your score. Switch language with ES/EN.",
      helpBodyAR: "Allow camera permission when prompted. On mobile, the scene is full screen. If you see nothing, check camera and motion/orientation permissions.",

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
  /* help page switch */
  const page = document.documentElement.getAttribute('data-pagetype')||'';
  const map = { index:'helpBodyIndex', proceso:'helpBodyProceso', ecuacion:'helpBodyEcuacion', cloroplasto:'helpBodyCloroplasto', interactive:'helpBodyInteractivo', ar:'helpBodyAR' };
  const key = map[page] || 'helpBodyIndex';
  if(helpBody){ helpBody.innerHTML = T[L][key]; }
  if(helpBody){ helpBody.textContent = T[L]['helpBody']; }

  // Mark active language
  const btnES = document.getElementById('btnES');
  const btnEN = document.getElementById('btnEN');
  if(btnES && btnEN){
    if(L==='es'){ btnES.classList.add('primary'); btnEN.classList.remove('primary'); }
    else { btnEN.classList.add('primary'); btnES.classList.remove('primary'); }
  }
})();
