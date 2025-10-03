
(function(){
  function getLang(){
    const p = new URLSearchParams(location.search);
    const v = (p.get('lang')||'es').toLowerCase();
    return (v==='en'?'en':'es');
  }
  const L = getLang();
  const T = {
    es: {
      appTitle: "Fotosíntesis — AR Biología",
      navHome: "🏠 Inicio",
      navProceso: "🌿 Proceso",
      navEcuacion: "🧪 Ecuación",
      navCloroplasto: "🧬 Cloroplasto 3D",
      navInteractivo: "🎮 Interactivo",
      navRecursos: "📥 Recursos",
      navAR: "🅰️🆁 AR",
      navAyuda: "❓ Ayuda",
      heroTitle: "Fotosíntesis: de la luz ☀️ a la glucosa 🍬",
      heroDesc: "Explora las fases luminosa y oscura (Ciclo de Calvin), visualiza el cloroplasto en 3D, y ponte a prueba con un quiz.",
      helpTitle: "Ayuda",
      helpBody: "Usa el menú para navegar. En “Cloroplasto 3D” puedes arrastrar y soltar un archivo .glb. Cambia el idioma con ES/EN en la barra superior."
    },
    en: {
      appTitle: "Photosynthesis — AR Biology",
      navHome: "🏠 Home",
      navProceso: "🌿 Process",
      navEcuacion: "🧪 Equation",
      navCloroplasto: "🧬 Chloroplast 3D",
      navInteractivo: "🎮 Interactive",
      navRecursos: "📥 Resources",
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
  tx('navRecursos','navRecursos');
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
