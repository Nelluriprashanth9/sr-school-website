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

  // Form validation
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit',function(e){
      e.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();
      if(!name || !email || !message){
        alert('Please fill in all fields.');
        return;
      }
      if(!/\S+@\S+\.\S+/.test(email)){
        alert('Please enter a valid email.');
        return;
      }
      alert('Message sent successfully!');
      contactForm.reset();
    });
  }

  // Add fade-in animation to sections
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('fade-in');
      }
    });
  });
  sections.forEach(section=>observer.observe(section));