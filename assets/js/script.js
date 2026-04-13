// Simple slider and small client-side helpers
document.addEventListener('DOMContentLoaded',function(){
  // Background slider
  const images = [
    'url(https://via.placeholder.com/1200x500?text=Excellence+in+Education)',
    'url(https://via.placeholder.com/1200x500?text=Holistic+Development)',
    'url(https://via.placeholder.com/1200x500?text=Safe+Learning+Environment)',
    'url(https://via.placeholder.com/1200x500?text=Experienced+Faculty)',
    'url(https://via.placeholder.com/1200x500?text=Modern+Facilities)'
  ];
  const hero = document.querySelector('.hero');
  if(hero){
    hero.style.backgroundImage = images[0];
    let idx = 0;
    setInterval(()=>{ idx=(idx+1)%images.length; hero.style.backgroundImage = images[idx]; },4000);
  }

  // Basic form UX: alert on submit (can be removed)
  const form = document.getElementById('admissionForm');
  if(form){ form.addEventListener('submit',function(e){
    // Let actual submission proceed; show a quick message
    setTimeout(()=>{ alert('Application submitted — follow README to configure backend for storing submissions.'); },10);
  }); }
});