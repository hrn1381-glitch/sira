/* SIRRA — GSAP + Lenis Script */

(function(){

  /* ===== LOADER ===== */
  const loader = document.getElementById('loader');
  const loaderBar = document.getElementById('loaderBar');
  const loaderPercent = document.getElementById('loaderPercent');

  if(loader){
    const persianDigits = n => String(n).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);
    let progress = 0;
    const tick = setInterval(()=>{
      progress += Math.random()*18+4;
      if(progress>=100) progress=100;
      if(loaderBar) loaderBar.style.width = progress+'%';
      if(loaderPercent) loaderPercent.textContent = persianDigits(Math.round(progress))+'٪';
      if(progress>=100){
        clearInterval(tick);
        setTimeout(()=> loader.classList.add('done'),400);
      }
    },120);
  }

  /* ===== THEME TOGGLE ===== */
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const saved = localStorage.getItem('sirra-theme');
  if(saved) html.setAttribute('data-theme',saved);

  if(themeToggle){
    themeToggle.addEventListener('click',()=>{
      const next = html.getAttribute('data-theme')==='light'?'dark':'light';
      html.setAttribute('data-theme',next);
      localStorage.setItem('sirra-theme',next);
    });
  }

  /* ===== HEADER SCROLL ===== */
  const header = document.getElementById('siteHeader');
  if(header){
    window.addEventListener('scroll',()=>{
      header.classList.toggle('scrolled',window.scrollY>50);
    },{passive:true});
  }

  // Also handle .navbar for shop pages
  const navbar = document.getElementById('navbar');
  if(navbar){
    window.addEventListener('scroll',()=>{
      navbar.classList.toggle('scrolled',window.scrollY>50);
    },{passive:true});
  }

  /* ===== MOBILE MENU ===== */
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileClose = document.getElementById('mobileClose');
  if(mobileMenu&&mobileToggle){
    mobileToggle.addEventListener('click',()=>mobileMenu.classList.add('active'));
    if(mobileClose) mobileClose.addEventListener('click',()=>mobileMenu.classList.remove('active'));
    mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileMenu.classList.remove('active')));
  }

  /* ===== LENIS SMOOTH SCROLL ===== */
  let lenis;
  if(typeof Lenis!=='undefined'){
    lenis = new Lenis({
      duration:1.4,
      easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),
      smoothWheel:true,
      wheelMultiplier:.8,
      touchMultiplier:1.5,
    });
    function raf(time){lenis.raf(time);requestAnimationFrame(raf)}
    requestAnimationFrame(raf);
  }

  /* ===== GSAP + SCROLLTRIGGER ===== */
  if(typeof gsap==='undefined'||typeof ScrollTrigger==='undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  if(lenis){
    lenis.on('scroll',ScrollTrigger.update);
    gsap.ticker.add(t=>lenis.raf(t*1000));
    gsap.ticker.lagSmoothing(0);
  }

  /* --- Animate data-anim elements --- */
  document.querySelectorAll('[data-anim]').forEach(el=>{
    const type = el.dataset.anim;
    const delay = parseFloat(el.dataset.delay)||0;

    const shared = {
      scrollTrigger:{trigger:el,start:'top 88%',toggleActions:'play none none none'},
      duration:.9,
      delay,
      ease:'power3.out',
    };

    switch(type){
      case 'fade-up':
        gsap.to(el,{...shared,opacity:1,y:0});
        break;
      case 'slide-right':
        gsap.to(el,{...shared,opacity:1,x:0});
        break;
      case 'slide-left':
        gsap.to(el,{...shared,opacity:1,x:0});
        break;
      case 'scale-up':
        gsap.to(el,{...shared,opacity:1,scale:1});
        break;
      case 'clip-reveal':
        gsap.to(el,{...shared,opacity:1,clipPath:'inset(0 0% 0 0)'});
        break;
      case 'stagger-up':
        gsap.to(el,{...shared,opacity:1,y:0,delay:delay+el.closest('.stats-grid')?.querySelector('[data-anim]')===el?0:
          Array.from(el.parentElement.children).indexOf(el)*.12});
        break;
      case 'split-words':
        // handled below
        break;
      case 'marquee-scroll':
        // parallax-style text
        gsap.to(el,{
          scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1},
          x:'-15%',ease:'none'
        });
        el.style.opacity=1;
        break;
    }
  });

  /* --- Hero split-words --- */
  const heroHeading = document.querySelector('[data-anim="split-words"]');
  if(heroHeading){
    const words = heroHeading.querySelectorAll('.hw');
    heroHeading.style.opacity='1';
    gsap.to(words,{
      opacity:1,y:0,
      duration:.7,
      stagger:.12,
      delay:.3,
      ease:'power3.out',
    });
  }

  /* --- Counter animation --- */
  document.querySelectorAll('.stat-number').forEach(el=>{
    const target = parseFloat(el.dataset.value)||0;
    const isFloat = target%1!==0;
    const persianDigits = n=>String(n).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);

    ScrollTrigger.create({
      trigger:el,
      start:'top 90%',
      once:true,
      onEnter:()=>{
        gsap.to({v:0},{
          v:target,
          duration:1.8,
          ease:'power2.out',
          onUpdate:function(){
            const val = this.targets()[0].v;
            el.textContent = persianDigits(isFloat?val.toFixed(1):Math.round(val).toLocaleString('en'));
          }
        });
      }
    });
  });

  /* ===== FAQ TOGGLE ===== */
  document.querySelectorAll('.faq-q').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i=>i.classList.remove('open'));
      if(!isOpen) item.classList.add('open');
      btn.setAttribute('aria-expanded',!isOpen);
    });
  });

  /* ===== CONSULTATION FORM ===== */
  const form = document.getElementById('consultForm');
  const formMsg = document.getElementById('formMsg');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      if(formMsg){
        formMsg.classList.add('show');
        setTimeout(()=>formMsg.classList.remove('show'),4000);
      }
      form.reset();
    });
  }

  /* ===== ANCHOR SMOOTH SCROLL via Lenis ===== */
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href = a.getAttribute('href');
      if(href==='#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if(target&&lenis) lenis.scrollTo(target,{offset:-80});
      else if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

})();
