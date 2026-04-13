// Simple slider and small client-side helpers
document.addEventListener('DOMContentLoaded',function(){
  // Background slider
  const images = [
    'url(assets/images/slide1.jpg)',
    'url(assets/images/slide2.jpg)',
    'url(assets/images/slide3.jpg)',
    'url(assets/images/slide4.jpg)',
    'url(assets/images/slide5.jpg)'
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