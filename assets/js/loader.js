
const viewer = document.getElementById('viewer');
const drop = document.getElementById('drop');
const file = document.getElementById('file');
const pick = document.getElementById('pick');

function loadFile(f){
  const url = URL.createObjectURL(f);
  viewer.src = url;
}

drop.addEventListener('dragover', (e)=>{ e.preventDefault(); drop.style.borderColor = '#60a5fa'; });
drop.addEventListener('dragleave', ()=>{ drop.style.borderColor = '#203052'; });
drop.addEventListener('drop', (e)=>{
  e.preventDefault();
  drop.style.borderColor = '#203052';
  const f = e.dataTransfer.files?.[0];
  if(f) loadFile(f);
});

pick.addEventListener('click', ()=> file.click());
file.addEventListener('change', ()=>{
  const f = file.files?.[0];
  if(f) loadFile(f);
});
