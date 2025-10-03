
const questions = [
  { q: '¿En qué parte del cloroplasto ocurre la fase luminosa?', a: ['Estroma','Tilacoides','Membrana nuclear','Citoplasma'], c: 1 },
  { q: 'Producto gaseoso liberado por la fotosíntesis:', a: ['CO₂','N₂','O₂','CH₄'], c: 2 },
  { q: 'Molécula que fija CO₂ en el Ciclo de Calvin:', a: ['RuBP','ATP','ADP','NADH'], c: 0 },
  { q: 'La fotofosforilación directa produce:', a: ['ATP','Glucosa','Oxígeno','CO₂'], c: 0 },
  { q: 'PSII → PSI implica:', a: ['Cadena de transporte de e⁻','Glucólisis','Fermentación','Traducción'], c: 0 },
];

function render(){
  const root = document.getElementById('quiz');
  root.innerHTML = '';
  questions.forEach((it, idx)=>{
    const card = document.createElement('div');
    card.className = 'notice';
    card.style.marginTop = '10px';
    const h = document.createElement('h3');
    h.textContent = `P${idx+1}. ${it.q}`;
    card.appendChild(h);
    it.a.forEach((opt, i)=>{
      const id = `q${idx}_${i}`;
      const label = document.createElement('label');
      label.style.display = 'flex'; label.style.gap='8px'; label.style.alignItems='center'; label.style.margin='6px 0';
      label.innerHTML = `<input type="radio" name="q${idx}" value="${i}"/> ${opt}`;
      card.appendChild(label);
    });
    root.appendChild(card);
  });
}
render();

document.getElementById('submit').addEventListener('click', ()=>{
  let score = 0;
  questions.forEach((it, idx)=>{
    const val = document.querySelector(`input[name="q${idx}"]:checked`);
    if(val && Number(val.value) === it.c) score++;
  });
  const res = document.getElementById('result');
  res.style.display = 'block';
  res.innerHTML = `✅ Puntaje: <strong>${score} / ${questions.length}</strong>`;
});
document.getElementById('reset').addEventListener('click', ()=>{
  document.querySelectorAll('input[type="radio"]').forEach(r=> r.checked = false);
  document.getElementById('result').style.display = 'none';
});
