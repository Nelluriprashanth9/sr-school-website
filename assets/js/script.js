// Simple slider and small client-side helpers
document.addEventListener('DOMContentLoaded',function(){
  // Slider
  const imgs = Array.from(document.querySelectorAll('#slider img'));
  let idx = 0;
  if(imgs.length){ imgs[0].classList.add('active'); setInterval(()=>{ imgs[idx].classList.remove('active'); idx=(idx+1)%imgs.length; imgs[idx].classList.add('active'); },4000); }

  // Basic form UX: alert on submit (can be removed)
  const form = document.getElementById('admissionForm');
  if(form){ form.addEventListener('submit',function(e){
    // Let actual submission proceed; show a quick message
    setTimeout(()=>{ alert('Application submitted — follow README to configure backend for storing submissions.'); },10);
  }); }
});