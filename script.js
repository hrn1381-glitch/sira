/* ============================================
   SIRRA LANDING PAGE — JAVASCRIPT

   ✏️ راهنمای ویرایش سریع:

   برای تغییر متن‌ها، آمارها، آیکون‌ها → بخش CONTENT_CONFIG پایین رو ویرایش کنید
   برای تغییر لینک‌ها → بخش LINKS_CONFIG رو ویرایش کنید
   برای تغییر تنظیمات اسکرول → بخش SCROLL_CONFIG رو ویرایش کنید

   ============================================ */


// =============================================
// 📝 CONTENT CONFIG — تمام محتوای قابل ویرایش
// =============================================

const CONTENT_CONFIG = {

  // --- هیرو ---
  hero: {
    badge: 'نسخه رایگان بدون محدودیت زمانی',
    title: 'مرکز تماس <span class="highlight">هوشمند</span> و کاملاً فارسی',
    subtitle: 'سیرا، نرم‌افزار حرفه‌ای مدیریت مرکز تماس با تکنولوژی پیشرفته، طراحی مدرن و تجربه‌ای ساده و روان. مناسب برای سازمان‌های مدرن، استارتاپ‌ها و تیم‌های در حال رشد.',
    ctaPrimary: 'همین حالا راه‌اندازی کنید ←',
    ctaSecondary: 'مشاوره رایگان',
  },

  // --- آمار شناور هیرو ---
  floatingCards: [
    { icon: '📞', value: '۱,۲۴۸', label: 'تماس امروز' },
    { icon: '⚡', value: '٪۹۸.۷', label: 'آپتایم سرویس' },
  ],

  // --- آمار داخل ماکاپ ---
  mockupStats: [
    { value: '۳۴۵', label: 'تماس فعال' },
    { value: '۱۲', label: 'اپراتور آنلاین' },
    { value: '٪۹۴', label: 'رضایت مشتری' },
  ],

  // --- نوار اعتماد ---
  trustChips: [
    { icon: '🎁', text: 'نسخه رایگان' },
    { icon: '🇮🇷', text: 'کاملاً فارسی' },
    { icon: '🔒', text: 'امنیت بالا' },
    { icon: '⚡', text: 'نصب سریع' },
    { icon: '📈', text: 'توسعه‌پذیر' },
    { icon: '📊', text: 'گزارش‌گیری جامع' },
    { icon: '📅', text: 'تاریخ شمسی' },
    { icon: '🔄', text: 'بروزرسانی مداوم' },
  ],

  // --- امکانات ---
  features: {
    label: '◆ امکانات کلیدی',
    title: 'هر آنچه برای مدیریت حرفه‌ای تماس نیاز دارید',
    desc: 'سیرا با ماژول‌های متنوع و کاربردی، تمام نیازهای مرکز تماس شما را در یک پلتفرم یکپارچه پوشش می‌دهد.',
    items: [
      { icon: '📊', title: 'داشبورد زنده و تحلیلی', desc: 'مانیتورینگ لحظه‌ای تماس‌ها، صف‌ها و عملکرد اپراتورها با نمودارهای تعاملی و گزارش‌های دقیق.' },
      { icon: '👥', title: 'مدیریت هوشمند اپراتورها', desc: 'ارزیابی عملکرد، تخصیص خودکار تماس‌ها، مدیریت شیفت و نظارت بر کیفیت مکالمات.' },
      { icon: '🔐', title: 'امنیت و احراز هویت پیشرفته', desc: 'سیستم احراز هویت چندلایه، مدیریت سطوح دسترسی و رمزنگاری اطلاعات حساس.' },
      { icon: '📅', title: 'تاریخ شمسی و بومی‌سازی', desc: 'پشتیبانی کامل از تاریخ شمسی، زبان فارسی و استانداردهای بومی کسب‌وکار ایرانی.' },
      { icon: '🧩', title: 'ماژول‌های متنوع', desc: 'ماژول‌های گزارش‌گیری، مدیریت صف، ضبط مکالمات، نظرسنجی و بسیاری امکانات دیگر.' },
      { icon: '⚙️', title: 'معماری MVC استاندارد', desc: 'ساختار کد تمیز و استاندارد با قابلیت توسعه و سفارشی‌سازی بالا برای نیازهای خاص شما.' },
    ]
  },

  // --- قابلیت‌ها ---
  capabilities: {
    label: '◆ قابلیت‌های پیشرفته',
    title: 'قدرت تحلیل و مدیریت در دستان شما',
    desc: 'با ابزارهای تحلیلی پیشرفته، تصمیم‌های هوشمندانه‌تری بگیرید.',
    items: [
      { icon: '📈', title: 'تحلیل پیشرفته عملکرد', desc: 'گزارش‌های دقیق از عملکرد هر اپراتور، میانگین زمان پاسخ‌گویی و نرخ موفقیت تماس‌ها.' },
      { icon: '📋', title: 'گزارش صف و تماس‌ها', desc: 'مشاهده وضعیت لحظه‌ای صف‌ها، تماس‌های از دست رفته و زمان انتظار مشتریان.' },
      { icon: '🔍', title: 'جستجو و فیلتر هوشمند', desc: 'جستجوی سریع در تاریخچه تماس‌ها با فیلترهای پیشرفته و دسته‌بندی خودکار.' },
      { icon: '📥', title: 'خروجی Excel و PDF', desc: 'دریافت گزارش‌ها در فرمت‌های Excel و PDF برای ارائه به مدیران و تصمیم‌گیران.' },
    ],
    metrics: [
      { value: '۲,۴۵۶', label: 'تماس این هفته' },
      { value: '۲۳ ث', label: 'میانگین پاسخ‌گویی' },
      { value: '٪۹۶', label: 'نرخ موفقیت' },
      { value: '۱۸', label: 'اپراتور فعال' },
    ]
  },

  // --- مراحل راه‌اندازی ---
  setup: {
    label: '◆ شروع آسان',
    title: 'در چند دقیقه راه‌اندازی کنید',
    desc: 'بدون نیاز به دانش فنی پیچیده، سیرا را روی سرور خود نصب و اجرا کنید.',
    steps: [
      { num: '۱', title: 'دریافت لایسنس', desc: 'تهیه سریع لایسنس رایگان یا حرفه‌ای از سایت سیرا.' },
      { num: '۲', title: 'نصب روی سرور', desc: 'نصب آسان و سریع با مستندات کامل فارسی.' },
      { num: '۳', title: 'پیکربندی اولیه', desc: 'تنظیمات ساده و محیط کاربری فارسی آماده استفاده.' },
      { num: '۴', title: 'شروع کار', desc: 'مرکز تماس شما آماده‌است. تماس‌ها را مدیریت کنید!' },
    ]
  },

  // --- پشتیبانی ---
  support: {
    label: '◆ پشتیبانی',
    title: 'همیشه کنار شما هستیم',
    desc: 'تیم پشتیبانی سیرا با کانال‌های متنوع، پاسخگوی سوالات و نیازهای شماست.',
    channels: [
      { icon: '📞', title: 'پشتیبانی تلفنی', desc: 'تماس مستقیم با کارشناسان فنی ما در ساعات کاری برای حل سریع مشکلات.' },
      { icon: '💬', title: 'واتساپ', desc: 'ارسال پیام و دریافت پاسخ سریع از طریق واتساپ پشتیبانی سیرا.' },
      { icon: '🎫', title: 'سیستم تیکت', desc: 'ثبت درخواست‌ها و پیگیری مراحل رسیدگی از طریق پنل تیکت اختصاصی.' },
    ]
  },

  // --- قیمت‌گذاری ---
  pricing: {
    label: '◆ قیمت‌گذاری',
    title: 'رایگان شروع کنید، در مسیر رشد ارتقا دهید',
    desc: 'نسخه رایگان بدون محدودیت زمانی، مناسب برای شروع و آزمایش تمام قابلیت‌ها.',
    plans: [
      {
        name: 'نسخه رایگان',
        price: 'رایگان',
        period: 'بدون محدودیت زمانی',
        featured: false,
        badge: '',
        cta: 'دریافت رایگان',
        ctaStyle: 'btn-outline',
        features: [
          'امکانات اصلی مرکز تماس',
          'داشبورد مدیریتی',
          'گزارش‌گیری پایه',
          'تاریخ شمسی',
          'پشتیبانی تیکت',
        ]
      },
      {
        name: 'نسخه حرفه‌ای',
        price: 'تماس بگیرید',
        period: 'لایسنس سازمانی',
        featured: true,
        badge: 'پیشنهاد ویژه',
        cta: 'درخواست مشاوره',
        ctaStyle: 'btn-primary',
        features: [
          'تمام امکانات نسخه رایگان',
          'ماژول‌های پیشرفته',
          'گزارش‌های تحلیلی کامل',
          'پشتیبانی تلفنی و واتساپ',
          'بروزرسانی و توسعه اختصاصی',
        ]
      }
    ]
  },

  // --- CTA نهایی ---
  finalCta: {
    title: 'آماده‌اید مرکز تماس خود را <span class="highlight">متحول</span> کنید؟',
    desc: 'همین حالا نسخه رایگان سیرا را دریافت کنید یا با مشاوران ما صحبت کنید.',
    ctaPrimary: 'دانلود رایگان ←',
    ctaSecondary: 'مشاوره رایگان',
  },

  // --- فوتر ---
  footer: '© تمامی حقوق محفوظ است. سیرا - نرم‌افزار مرکز تماس هوشمند | SIRRA Call Center',
};


// =============================================
// 🔗 LINKS CONFIG — لینک‌های قابل ویرایش
// =============================================

const LINKS_CONFIG = {
  ctaPrimary: '#',       // لینک دکمه اصلی
  ctaSecondary: '#',     // لینک مشاوره رایگان
  ctaFree: '#',          // لینک دریافت رایگان
  ctaPro: '#',           // لینک درخواست مشاوره حرفه‌ای
  ctaDownload: '#',      // لینک دانلود
};


// =============================================
// ⚙️ SCROLL CONFIG — تنظیمات اسکرول نرم
// =============================================

const SCROLL_CONFIG = {
  duration: 1.6,          // مدت زمان اسکرول (ثانیه) — بیشتر = نرم‌تر
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // ease-out exponential
  smoothWheel: true,
  wheelMultiplier: 0.8,   // حساسیت ماوس — کمتر = نرم‌تر
  touchMultiplier: 1.5,
};


// =============================================
// 🎬 INITIALIZATION — کدهای اجرایی
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initThemeToggle();
  initNavbar();
  initMobileMenu();
  initRevealAnimations();
  initChartBars();
  renderDynamicContent();
});


// --- Smooth Scroll (Lenis-style custom implementation) ---
function initSmoothScroll() {
  const { duration, easing, wheelMultiplier, touchMultiplier } = SCROLL_CONFIG;

  let currentScroll = window.scrollY;
  let targetScroll = window.scrollY;
  let isScrolling = false;

  function lerp(start, end, factor) {
    return start + (end - start) * factor;
  }

  function smoothStep() {
    currentScroll = lerp(currentScroll, targetScroll, 0.08);

    if (Math.abs(currentScroll - targetScroll) < 0.5) {
      currentScroll = targetScroll;
      isScrolling = false;
    }

    window.scrollTo(0, currentScroll);

    if (isScrolling) {
      requestAnimationFrame(smoothStep);
    }
  }

  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    targetScroll += e.deltaY * wheelMultiplier;
    targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight));

    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(smoothStep);
    }
  }, { passive: false });

  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    const deltaY = (touchStartY - e.touches[0].clientY) * touchMultiplier;
    touchStartY = e.touches[0].clientY;
    targetScroll += deltaY;
    targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight));

    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(smoothStep);
    }
  }, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        targetScroll = target.offsetTop - 80;
        if (!isScrolling) {
          isScrolling = true;
          requestAnimationFrame(smoothStep);
        }
      }
    });
  });
}


// --- Theme Toggle ---
function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  function setTheme(t) {
    html.setAttribute('data-theme', t);
    toggle.textContent = t === 'light' ? '☀️' : '🌙';
    localStorage.setItem('sirra-theme', t);
  }

  toggle.addEventListener('click', () => {
    setTheme(html.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });

  const saved = localStorage.getItem('sirra-theme');
  if (saved) setTheme(saved);
}


// --- Navbar scroll effect ---
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}


// --- Mobile menu ---
function initMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  document.getElementById('mobileToggle').addEventListener('click', () => menu.classList.add('active'));
  document.getElementById('mobileClose').addEventListener('click', () => menu.classList.remove('active'));

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('active'));
  });
}


// --- Reveal on scroll ---
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  reveals.forEach(el => observer.observe(el));
}


// --- Chart bar animation ---
function initChartBars() {
  document.querySelectorAll('.chart-bar').forEach(bar => {
    bar.style.height = bar.style.getPropertyValue('--h');
  });
}


// --- Render dynamic content from CONFIG ---
function renderDynamicContent() {
  const c = CONTENT_CONFIG;

  // Trust chips
  const trustGrid = document.getElementById('trustGrid');
  if (trustGrid) {
    trustGrid.innerHTML = c.trustChips.map(chip =>
      `<div class="trust-chip"><span class="icon">${chip.icon}</span> ${chip.text}</div>`
    ).join('');
  }

  // Features
  const featuresGrid = document.getElementById('featuresGrid');
  if (featuresGrid) {
    featuresGrid.innerHTML = c.features.items.map(f =>
      `<div class="feature-card reveal">
        <div class="feature-icon">${f.icon}</div>
        <h3>${f.title}</h3>
        <p>${f.desc}</p>
      </div>`
    ).join('');
  }

  // Capabilities list
  const capList = document.getElementById('capList');
  if (capList) {
    capList.innerHTML = c.capabilities.items.map(item =>
      `<div class="cap-item">
        <div class="cap-icon">${item.icon}</div>
        <div><h4>${item.title}</h4><p>${item.desc}</p></div>
      </div>`
    ).join('');
  }

  // Capabilities metrics
  const capMetrics = document.getElementById('capMetrics');
  if (capMetrics) {
    capMetrics.innerHTML = c.capabilities.metrics.map(m =>
      `<div class="cap-metric"><div class="big">${m.value}</div><div class="sub">${m.label}</div></div>`
    ).join('');
  }

  // Steps
  const stepsGrid = document.getElementById('stepsGrid');
  if (stepsGrid) {
    stepsGrid.innerHTML = c.setup.steps.map(s =>
      `<div class="step-card reveal">
        <div class="step-num">${s.num}</div>
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
      </div>`
    ).join('');
  }

  // Support
  const supportGrid = document.getElementById('supportGrid');
  if (supportGrid) {
    supportGrid.innerHTML = c.support.channels.map(ch =>
      `<div class="support-card reveal">
        <div class="support-icon">${ch.icon}</div>
        <h4>${ch.title}</h4>
        <p>${ch.desc}</p>
      </div>`
    ).join('');
  }

  // Pricing
  const pricingCards = document.getElementById('pricingCards');
  if (pricingCards) {
    pricingCards.innerHTML = c.pricing.plans.map(plan =>
      `<div class="pricing-card ${plan.featured ? 'featured' : ''} reveal">
        ${plan.badge ? `<div class="pricing-badge">${plan.badge}</div>` : ''}
        <h3>${plan.name}</h3>
        <div class="pricing-price">${plan.price}</div>
        <div class="pricing-period">${plan.period}</div>
        <ul class="pricing-features">
          ${plan.features.map(f => `<li><span class="check">✓</span> ${f}</li>`).join('')}
        </ul>
        <a href="${plan.featured ? LINKS_CONFIG.ctaPro : LINKS_CONFIG.ctaFree}" class="btn ${plan.ctaStyle}" style="width:100%;justify-content:center">${plan.cta}</a>
      </div>`
    ).join('');
  }

  // Re-init reveal for dynamically added elements
  initRevealAnimations();
}
