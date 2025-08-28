(function(){
  const el = document.getElementById('lastUpdated');
  if(el){
    const dt = new Date().toISOString().split('T')[0];
    el.textContent = dt;
  }
  const printBtn = document.getElementById('printBtn');
  if(printBtn){
    printBtn.addEventListener('click', ()=> window.print());
  }
})();
