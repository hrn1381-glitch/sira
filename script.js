/* =============================================
   SIRRA — Professional Script
   Lenis + GSAP ScrollTrigger
   ============================================= */

(function(){
  'use strict';

  var persianDigit = function(n){
    return String(n).replace(/\d/g,function(d){return '۰۱۲۳۴۵۶۷۸۹'[d]});
  };

  /* ─── Theme ─── */
  var html = document.documentElement;
  var saved = localStorage.getItem('sirra-theme');
  if(saved) html.setAttribute('data-theme',saved);

  var themeBtn = document.getElementById('themeToggle');
  if(themeBtn){
    themeBtn.addEventListener('click',function(){
      var next = html.getAttribute('data-theme')==='light'?'dark':'light';
      html.setAttribute('data-theme',next);
      localStorage.setItem('sirra-theme',next);
    });
  }

  /* ─── Header scroll ─── */
  var header = document.getElementById('siteHeader');
  var navbar = document.getElementById('navbar');
  var onScroll = function(){
    var y = window.scrollY;
    if(header) header.classList.toggle('scrolled',y>40);
    if(navbar) navbar.classList.toggle('scrolled',y>40);
  };
  window.addEventListener('scroll',onScroll,{passive:true});
  onScroll();

  /* ─── Mobile menu ─── */
  var burger = document.getElementById('burger');
  var overlay = document.getElementById('mobOverlay');
  if(burger && overlay){
    burger.addEventListener('click',function(){overlay.classList.toggle('open')});
    overlay.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){overlay.classList.remove('open')});
    });
  }
  // shop pages
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileToggle = document.getElementById('mobileToggle');
  var mobileClose = document.getElementById('mobileClose');
  if(mobileMenu && mobileToggle){
    mobileToggle.addEventListener('click',function(){mobileMenu.classList.add('active')});
    if(mobileClose) mobileClose.addEventListener('click',function(){mobileMenu.classList.remove('active')});
    mobileMenu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){mobileMenu.classList.remove('active')});
    });
  }

  /* ─── FAQ ─── */
  document.querySelectorAll('.faq-q').forEach(function(btn){
    btn.addEventListener('click',function(){
      var item = btn.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(i){
        i.classList.remove('open');
        i.querySelector('.faq-q').setAttribute('aria-expanded','false');
      });
      if(!wasOpen){
        item.classList.add('open');
        btn.setAttribute('aria-expanded','true');
      }
    });
  });

  /* ─── Form ─── */
  var form = document.getElementById('consultForm');
  var formOk = document.getElementById('formOk');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      if(formOk){
        formOk.classList.add('show');
        setTimeout(function(){formOk.classList.remove('show')},4000);
      }
      form.reset();
    });
  }

  /* ═════════════════════════════════════════════
     Lenis Smooth Scroll
     ═════════════════════════════════════════════ */
  var lenis;
  if(typeof Lenis !== 'undefined'){
    lenis = new Lenis({
      duration:1.3,
      easing:function(t){return Math.min(1,1.001-Math.pow(2,-10*t))},
      smoothWheel:true,
      wheelMultiplier:0.85,
      touchMultiplier:1.5
    });
  }

  /* ═════════════════════════════════════════════
     GSAP Animations
     ═════════════════════════════════════════════ */
  if(typeof gsap==='undefined' || typeof ScrollTrigger==='undefined'){
    // No GSAP — make everything visible
    document.querySelectorAll('.sec,.hero,.bento-item,.stat-block,.ch-card,.faq-item,.price-card,.tl-item,.split-text,.split-visual,.form-card,.report-card').forEach(function(el){el.style.opacity='1'});
    if(lenis){
      (function raf(t){lenis.raf(t);requestAnimationFrame(raf)})(0);
    }
    initAnchors();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Connect Lenis ↔ GSAP
  if(lenis){
    lenis.on('scroll',ScrollTrigger.update);
    gsap.ticker.add(function(t){lenis.raf(t*1000)});
    gsap.ticker.lagSmoothing(0);
  }

  /* ─── Hero entrance ─── */
  var heroTl = gsap.timeline({defaults:{ease:'power3.out'}});

  var heroChip = document.querySelector('.hero-chip');
  var heroH1   = document.querySelector('.hero-h1');
  var heroP    = document.querySelector('.hero-p');
  var heroBtns = document.querySelector('.hero-btns');
  var heroMedia= document.querySelector('.hero-media');
  var heroGlass= document.querySelector('.hero-glass');

  if(heroH1){
    gsap.set([heroChip,heroH1,heroP,heroBtns].filter(Boolean),{opacity:0,y:30});
    if(heroMedia) gsap.set(heroMedia,{opacity:0,y:40,scale:.97});

    heroTl
      .to(heroChip, {opacity:1,y:0,duration:.6},  0.15)
      .to(heroH1,   {opacity:1,y:0,duration:.7},  0.3)
      .to(heroP,    {opacity:1,y:0,duration:.6},  0.5)
      .to(heroBtns, {opacity:1,y:0,duration:.5},  0.65);

    if(heroGlass){
      gsap.set(heroGlass,{opacity:0,scale:.96});
      heroTl.to(heroGlass,{opacity:1,scale:1,duration:.7,ease:'power2.out'},0.05);
    }
    if(heroMedia){
      heroTl.to(heroMedia,{opacity:1,y:0,scale:1,duration:.8,ease:'power2.out'},0.4);
    }
  }

  /* ─── Scroll reveals ─── */
  var revealGroups = [
    {sel:'.stat-block', stagger:0.08},
    {sel:'.bento-item', stagger:0.06},
    {sel:'.ch-card',    stagger:0.08},
    {sel:'.tl-item',    stagger:0.1},
    {sel:'.price-card', stagger:0.1},
    {sel:'.faq-item',   stagger:0.06},
    {sel:'.showcase-card', stagger:0.1},
    {sel:'.vx-list li', stagger:0.06}
  ];

  revealGroups.forEach(function(g){
    var els = document.querySelectorAll(g.sel);
    if(!els.length) return;
    gsap.set(els,{opacity:0,y:32});
    ScrollTrigger.batch(els,{
      start:'top 90%',
      onEnter:function(batch){
        gsap.to(batch,{opacity:1,y:0,duration:.55,stagger:g.stagger,ease:'power2.out'});
      },
      once:true
    });
  });

  // Single element reveals
  var singles = ['.sec-top','.split-text','.split-visual','.form-card','.media-frame','.hero-media','.cta-end .container','.ed-bleed-copy','.ed-overflow-text','.ed-float-text','.ed-cinema-left','.ed-wide-header','.ed-wide-p','.ed-moments-intro','.vx-header'];
  singles.forEach(function(sel){
    document.querySelectorAll(sel).forEach(function(el){
      gsap.set(el,{opacity:0,y:36});
      ScrollTrigger.create({
        trigger:el,
        start:'top 88%',
        once:true,
        onEnter:function(){
          gsap.to(el,{opacity:1,y:0,duration:.6,ease:'power2.out'});
        }
      });
    });
  });

  /* ─── Counter animation ─── */
  document.querySelectorAll('.stat-num').forEach(function(el){
    var target = parseFloat(el.getAttribute('data-to'));
    if(isNaN(target)) return;
    var isFloat = target%1!==0;

    ScrollTrigger.create({
      trigger:el,
      start:'top 92%',
      once:true,
      onEnter:function(){
        var obj = {v:0};
        gsap.to(obj,{
          v:target,
          duration:1.6,
          ease:'power2.out',
          onUpdate:function(){
            var v = obj.v;
            if(isFloat){
              el.textContent = persianDigit(v.toFixed(1));
            } else {
              el.textContent = persianDigit(Math.round(v));
            }
          }
        });
      }
    });
  });

  /* ─── Horizontal scroll video section ─── */
  var hxPin   = document.getElementById('hx-pin');
  var hxTrack = document.querySelector('.hx-track');
  var hxFill  = document.getElementById('hxProgress');
  var hxHint  = document.getElementById('hxHint');
  if(hxPin && hxTrack && window.innerWidth > 768){
    var hxPanels = hxTrack.querySelectorAll('.hx-panel');
    var hxTotal  = (hxPanels.length - 1) * window.innerWidth;

    // RTL layout: panel 1 is rightmost in the flex row.
    // Start track at -hxTotal so panel 1 is visible; scroll moves it toward 0
    // which reveals panels 2→5 entering from the left (Persian reading direction).
    gsap.set(hxTrack, {x: -hxTotal});

    ScrollTrigger.create({
      trigger: hxPin,
      start: 'top top',
      end: '+=' + hxTotal,
      pin: true,
      scrub: 1.2,
      onUpdate: function(self){
        gsap.set(hxTrack, {x: (self.progress - 1) * hxTotal});
        if(hxFill) hxFill.style.width = (self.progress * 100) + '%';
        if(hxHint){
          hxHint.style.opacity = self.progress > 0.04 ? '0' : '1';
        }
      }
    });
  }

  /* ─── Editorial block image parallax ─── */
  ['.ed-bleed-img', '.ed-overflow-img img', '.ed-float-img img', '.ed-cinema-img img'].forEach(function(sel){
    document.querySelectorAll(sel).forEach(function(el){
      gsap.to(el,{
        yPercent: -8,
        ease:'none',
        scrollTrigger:{trigger:el.closest('.ed-bleed,.ed-overflow-row,.ed-float-row,.ed-cinema') || el,
          start:'top bottom',end:'bottom top',scrub:1.5}
      });
    });
  });

  /* ─── Anchor smooth scroll ─── */
  initAnchors();

  function initAnchors(){
    document.querySelectorAll('a[href^="#"]').forEach(function(a){
      a.addEventListener('click',function(e){
        var href = a.getAttribute('href');
        if(href==='#') return;
        var target = document.querySelector(href);
        if(!target) return;
        e.preventDefault();
        if(lenis){
          lenis.scrollTo(target,{offset:-70});
        } else {
          target.scrollIntoView({behavior:'smooth',block:'start'});
        }
      });
    });
  }

})();
