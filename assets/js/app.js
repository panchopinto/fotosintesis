
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
