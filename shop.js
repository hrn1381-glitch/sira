/* ============================================
   SIRRA SHOP — JAVASCRIPT

   ✏️ راهنمای ویرایش:

   محصولات → PRODUCTS رو ویرایش کنید
   دسته‌بندی‌ها → CATEGORIES رو ویرایش کنید
   تنظیمات سبد خرید → CART_CONFIG رو ویرایش کنید
   عکس‌ها → فیلد images هر محصول (آدرس عکس یا emoji)

   ============================================ */


// =============================================
// 📦 CATEGORIES — دسته‌بندی‌ها
// =============================================

const CATEGORIES = [
  { id: 'all', label: 'همه ماژول‌ها' },
  { id: 'reporting', label: 'گزارش‌گیری' },
  { id: 'management', label: 'مدیریت' },
  { id: 'communication', label: 'ارتباطات' },
  { id: 'security', label: 'امنیت' },
  { id: 'integration', label: 'یکپارچه‌سازی' },
];


// =============================================
// 🛍️ PRODUCTS — لیست محصولات
// =============================================
// برای اضافه کردن محصول جدید: یک آبجکت جدید به این آرایه اضافه کنید
// images: آرایه‌ای از آدرس عکس‌ها یا ایموجی (اگه عکس نداشتید)
// discount: درصد تخفیف (0 = بدون تخفیف)
// badge: 'discount' | 'new' | 'popular' | '' (خالی = بدون بج)

const PRODUCTS = [
  {
    id: 1,
    name: 'ماژول گزارش‌گیری پیشرفته',
    category: 'reporting',
    description: 'گزارش‌های جامع و تحلیلی از تمامی تماس‌ها، عملکرد اپراتورها، صف‌ها و روندهای زمانی با نمودارهای تعاملی و قابلیت خروجی Excel/PDF.',
    shortDesc: 'گزارش‌های جامع تماس‌ها با نمودارهای تعاملی و خروجی Excel/PDF.',
    price: 4500000,
    oldPrice: 6000000,
    discount: 25,
    badge: 'discount',
    images: ['📊', '📈', '📋', '📉'],
    rating: 4.8,
    ratingCount: 124,
    features: [
      'نمودارهای تعاملی و لحظه‌ای',
      'خروجی Excel و PDF',
      'فیلترهای پیشرفته زمانی',
      'گزارش عملکرد اپراتورها',
      'داشبورد مدیریتی اختصاصی',
      'پشتیبانی تاریخ شمسی',
    ],
    details: 'این ماژول به شما امکان می‌دهد تمامی اطلاعات مرکز تماس خود را به صورت گزارش‌های دقیق و قابل فهم مشاهده و تحلیل کنید. از نمودارهای خطی و میله‌ای گرفته تا نقشه حرارتی تماس‌ها، همه چیز در اختیار شماست.',
    requirements: 'نسخه سیرا ۲.۰ به بالا | حداقل ۲ گیگابایت رم | پایگاه داده MySQL 5.7+',
  },
  {
    id: 2,
    name: 'ماژول مدیریت صف هوشمند',
    category: 'management',
    description: 'مدیریت هوشمند صف‌های تماس با الگوریتم‌های توزیع خودکار، اولویت‌بندی تماس‌ها و نظارت لحظه‌ای بر وضعیت صف‌ها.',
    shortDesc: 'مدیریت هوشمند صف‌ها با توزیع خودکار و نظارت لحظه‌ای.',
    price: 3800000,
    oldPrice: 0,
    discount: 0,
    badge: 'popular',
    images: ['👥', '📞', '⚡', '🔄'],
    rating: 4.9,
    ratingCount: 98,
    features: [
      'توزیع خودکار تماس‌ها',
      'اولویت‌بندی هوشمند',
      'نظارت لحظه‌ای صف',
      'تنظیم زمان انتظار',
      'پیام خوش‌آمدگویی سفارشی',
      'گزارش صف‌ها',
    ],
    details: 'با ماژول مدیریت صف هوشمند، تماس‌های ورودی به صورت خودکار و بر اساس الگوریتم‌های پیشرفته بین اپراتورها توزیع می‌شوند. امکان تعریف اولویت‌ها، زمان‌بندی و پیام‌های سفارشی برای هر صف وجود دارد.',
    requirements: 'نسخه سیرا ۱.۵ به بالا | ماژول پایه مرکز تماس',
  },
  {
    id: 3,
    name: 'ماژول ضبط و آرشیو مکالمات',
    category: 'communication',
    description: 'ضبط تمامی مکالمات با کیفیت بالا، آرشیو سازمان‌یافته، جستجوی پیشرفته و امکان بازپخش و دانلود فایل‌های صوتی.',
    shortDesc: 'ضبط با کیفیت بالا، آرشیو سازمان‌یافته و جستجوی پیشرفته.',
    price: 5200000,
    oldPrice: 6500000,
    discount: 20,
    badge: 'discount',
    images: ['🎙️', '💾', '🔍', '📂'],
    rating: 4.7,
    ratingCount: 87,
    features: [
      'ضبط با کیفیت HD',
      'آرشیو خودکار و سازمان‌یافته',
      'جستجوی پیشرفته در مکالمات',
      'دانلود و بازپخش آنلاین',
      'فشرده‌سازی هوشمند',
      'مدیریت فضای ذخیره‌سازی',
    ],
    details: 'تمامی مکالمات مرکز تماس شما با کیفیت بالا ضبط و آرشیو می‌شوند. با جستجوی پیشرفته می‌توانید هر مکالمه‌ای را بر اساس تاریخ، اپراتور، شماره تماس و مدت مکالمه پیدا کنید.',
    requirements: 'نسخه سیرا ۱.۵ به بالا | حداقل ۵۰ گیگابایت فضای آزاد',
  },
  {
    id: 4,
    name: 'ماژول احراز هویت پیشرفته',
    category: 'security',
    description: 'سیستم احراز هویت چندلایه شامل رمز یکبارمصرف، تایید دو مرحله‌ای، مدیریت سطوح دسترسی و لاگ فعالیت‌های کاربران.',
    shortDesc: 'احراز هویت چندلایه با تایید دو مرحله‌ای و مدیریت دسترسی.',
    price: 2900000,
    oldPrice: 0,
    discount: 0,
    badge: 'new',
    images: ['🔐', '🛡️', '🔑', '👁️'],
    rating: 4.6,
    ratingCount: 56,
    features: [
      'تایید دو مرحله‌ای (2FA)',
      'رمز یکبارمصرف (OTP)',
      'مدیریت سطوح دسترسی',
      'لاگ فعالیت کاربران',
      'قفل خودکار حساب',
      'رمزنگاری AES-256',
    ],
    details: 'امنیت مرکز تماس خود را با ماژول احراز هویت پیشرفته به سطح جدیدی ببرید. از ورود دو مرحله‌ای تا مدیریت دقیق سطوح دسترسی، همه ابزارهای لازم برای حفظ امنیت اطلاعات شما فراهم است.',
    requirements: 'نسخه سیرا ۲.۰ به بالا',
  },
  {
    id: 5,
    name: 'ماژول نظرسنجی پس از تماس',
    category: 'communication',
    description: 'ایجاد نظرسنجی‌های خودکار پس از هر تماس، جمع‌آوری بازخورد مشتریان، تحلیل رضایت و گزارش‌گیری دوره‌ای.',
    shortDesc: 'نظرسنجی خودکار و تحلیل رضایت مشتریان پس از تماس.',
    price: 1800000,
    oldPrice: 2500000,
    discount: 28,
    badge: 'discount',
    images: ['⭐', '📝', '😊', '📊'],
    rating: 4.5,
    ratingCount: 73,
    features: [
      'نظرسنجی خودکار IVR',
      'سوالات سفارشی',
      'تحلیل رضایت مشتری',
      'گزارش دوره‌ای',
      'امتیازدهی ۱ تا ۵',
      'ارسال خلاصه به ایمیل',
    ],
    details: 'بعد از هر تماس، نظرسنجی خودکار برای مشتری پخش شده و بازخورد او ثبت می‌شود. با تحلیل این داده‌ها می‌توانید کیفیت خدمات خود را بهبود بخشید.',
    requirements: 'نسخه سیرا ۱.۰ به بالا | ماژول IVR پایه',
  },
  {
    id: 6,
    name: 'ماژول اتصال به CRM',
    category: 'integration',
    description: 'یکپارچه‌سازی کامل با سیستم‌های CRM محبوب، نمایش اطلاعات مشتری هنگام تماس و ثبت خودکار سوابق تماس.',
    shortDesc: 'یکپارچه‌سازی با CRM و نمایش اطلاعات مشتری هنگام تماس.',
    price: 6800000,
    oldPrice: 0,
    discount: 0,
    badge: 'popular',
    images: ['🔗', '💼', '📱', '🤝'],
    rating: 4.9,
    ratingCount: 112,
    features: [
      'اتصال به CRMهای محبوب',
      'نمایش پاپ‌آپ مشتری',
      'ثبت خودکار سوابق',
      'همگام‌سازی مخاطبین',
      'API سفارشی',
      'Webhook پیشرفته',
    ],
    details: 'با ماژول اتصال CRM، هنگام هر تماس ورودی اطلاعات مشتری از CRM شما واکشی و نمایش داده می‌شود. تمامی سوابق تماس نیز به صورت خودکار در CRM ثبت می‌شوند.',
    requirements: 'نسخه سیرا ۲.۰ به بالا | API دسترسی به CRM',
  },
  {
    id: 7,
    name: 'ماژول داشبورد وال‌برد',
    category: 'reporting',
    description: 'نمایش وضعیت لحظه‌ای مرکز تماس روی مانیتورهای بزرگ با طراحی مخصوص وال‌برد و نمودارهای بلادرنگ.',
    shortDesc: 'داشبورد لحظه‌ای برای نمایش روی مانیتورهای بزرگ.',
    price: 3200000,
    oldPrice: 4000000,
    discount: 20,
    badge: 'discount',
    images: ['🖥️', '📺', '📊', '⚡'],
    rating: 4.8,
    ratingCount: 64,
    features: [
      'طراحی مخصوص مانیتور بزرگ',
      'نمودارهای بلادرنگ',
      'چیدمان قابل تنظیم',
      'حالت تمام صفحه',
      'تم‌های مختلف',
      'رفرش خودکار',
    ],
    details: 'ماژول وال‌برد برای نمایش اطلاعات کلیدی مرکز تماس روی مانیتورهای بزرگ طراحی شده است. با چیدمان قابل تنظیم و نمودارهای بلادرنگ، مدیریت تیم ساده‌تر از همیشه خواهد بود.',
    requirements: 'نسخه سیرا ۲.۰ به بالا | مرورگر مدرن',
  },
  {
    id: 8,
    name: 'ماژول مدیریت شیفت اپراتورها',
    category: 'management',
    description: 'برنامه‌ریزی شیفت‌های کاری، تعریف ساعات کاری، مدیریت مرخصی‌ها و گزارش حضور و غیاب اپراتورها.',
    shortDesc: 'برنامه‌ریزی شیفت، مرخصی و حضور و غیاب اپراتورها.',
    price: 2400000,
    oldPrice: 0,
    discount: 0,
    badge: 'new',
    images: ['📅', '⏰', '👨‍💼', '📋'],
    rating: 4.4,
    ratingCount: 41,
    features: [
      'تقویم شیفت‌بندی',
      'مدیریت مرخصی',
      'گزارش حضور و غیاب',
      'اعلان خودکار شیفت',
      'جابجایی شیفت',
      'تقویم شمسی',
    ],
    details: 'با ماژول مدیریت شیفت، برنامه‌ریزی و مدیریت شیفت‌های اپراتورها به سادگی انجام می‌شود. امکان تعریف شیفت‌های مختلف، مدیریت مرخصی و مشاهده گزارش حضور و غیاب فراهم است.',
    requirements: 'نسخه سیرا ۱.۵ به بالا',
  },
  {
    id: 9,
    name: 'ماژول IVR پیشرفته',
    category: 'communication',
    description: 'طراحی منوهای صوتی تعاملی پیشرفته، مسیریابی هوشمند تماس‌ها و پیام‌های سفارشی برای هر شرایطی.',
    shortDesc: 'منوی صوتی تعاملی پیشرفته با مسیریابی هوشمند تماس‌ها.',
    price: 4100000,
    oldPrice: 5000000,
    discount: 18,
    badge: 'discount',
    images: ['🎵', '📞', '🔀', '🗣️'],
    rating: 4.7,
    ratingCount: 93,
    features: [
      'طراحی درختی منوها',
      'مسیریابی هوشمند',
      'پیام‌های سفارشی',
      'زمان‌بندی منوها',
      'TTS فارسی',
      'شناسایی DTMF',
    ],
    details: 'ماژول IVR پیشرفته به شما امکان می‌دهد منوهای صوتی تعاملی پیچیده‌ای طراحی کنید. با مسیریابی هوشمند و پیام‌های سفارشی، تجربه تماس مشتریان خود را ارتقا دهید.',
    requirements: 'نسخه سیرا ۱.۰ به بالا',
  },
];


// =============================================
// ⚙️ CART CONFIG — تنظیمات سبد خرید
// =============================================

const CART_CONFIG = {
  currency: 'تومان',
  taxRate: 0.09,
  taxLabel: 'مالیات بر ارزش افزوده (۹٪)',
  emptyMessage: 'سبد خرید شما خالی است',
  checkoutText: 'تکمیل خرید',
};


// =============================================
// 💰 HELPERS — فرمت قیمت
// =============================================

function formatPrice(price) {
  return price.toLocaleString('fa-IR');
}

function getDiscountedPrice(product) {
  if (product.discount > 0 && product.oldPrice > 0) {
    return product.price;
  }
  return product.price;
}

function generateStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '☆' : '') + '☆'.repeat(5 - full - half);
}


// =============================================
// 🛒 CART STATE
// =============================================

let cart = JSON.parse(localStorage.getItem('sirra-cart') || '[]');

function saveCart() {
  localStorage.setItem('sirra-cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart();
  showCartNotification(product.name);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
}

function getCartTotal() {
  let subtotal = 0;
  let totalDiscount = 0;
  cart.forEach(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return;
    subtotal += product.price * item.qty;
    if (product.oldPrice > 0) {
      totalDiscount += (product.oldPrice - product.price) * item.qty;
    }
  });
  const tax = Math.round(subtotal * CART_CONFIG.taxRate);
  return { subtotal, totalDiscount, tax, total: subtotal + tax };
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}


// =============================================
// 🎨 RENDERING
// =============================================

function renderShopPage() {
  renderFilters();
  renderProducts('all');
  updateCartUI();
}

function renderFilters() {
  const toolbar = document.getElementById('shopToolbar');
  if (!toolbar) return;

  const filtersHtml = CATEGORIES.map(cat =>
    `<button class="filter-btn ${cat.id === 'all' ? 'active' : ''}" data-cat="${cat.id}">${cat.label}</button>`
  ).join('');

  toolbar.innerHTML = `
    <div class="shop-search">
      <span class="search-icon">🔍</span>
      <input type="text" id="searchInput" placeholder="جستجوی ماژول...">
    </div>
    ${filtersHtml}
  `;

  toolbar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      toolbar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.cat);
    });
  });

  document.getElementById('searchInput').addEventListener('input', (e) => {
    const activeFilter = toolbar.querySelector('.filter-btn.active')?.dataset.cat || 'all';
    renderProducts(activeFilter, e.target.value);
  });
}

function renderProducts(category, search = '') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  let filtered = PRODUCTS;
  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }
  if (search.trim()) {
    const q = search.trim().toLowerCase();
    filtered = filtered.filter(p =>
      p.name.includes(q) || p.shortDesc.includes(q) || p.description.includes(q)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-tertiary)">
      <div style="font-size:3rem;margin-bottom:16px">🔍</div>
      <p>محصولی یافت نشد</p>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card reveal" data-id="${p.id}">
      <div class="product-img" onclick="goToProduct(${p.id})">
        ${p.images[0].startsWith('http') || p.images[0].startsWith('/')
          ? `<img src="${p.images[0]}" alt="${p.name}">`
          : `<div class="product-img-placeholder">${p.images[0]}</div>`
        }
        ${p.badge === 'discount' ? `<span class="product-badge badge-discount">${p.discount}٪ تخفیف</span>` : ''}
        ${p.badge === 'new' ? '<span class="product-badge badge-new">جدید</span>' : ''}
        ${p.badge === 'popular' ? '<span class="product-badge badge-popular">محبوب</span>' : ''}
      </div>
      <div class="product-info">
        <div class="product-category">${CATEGORIES.find(c => c.id === p.category)?.label || ''}</div>
        <div class="product-name" onclick="goToProduct(${p.id})">${p.name}</div>
        <div class="product-desc">${p.shortDesc}</div>
        <div class="product-price-row">
          <span class="product-price">${formatPrice(p.price)} ${CART_CONFIG.currency}</span>
          ${p.oldPrice ? `<span class="product-price-old">${formatPrice(p.oldPrice)}</span>` : ''}
          ${p.discount > 0 ? `<span class="product-discount-tag">${p.discount}٪</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="btn-add-cart" onclick="event.stopPropagation();addToCart(${p.id})">🛒 افزودن به سبد</button>
          <button class="btn-view" onclick="goToProduct(${p.id})" title="مشاهده جزئیات">👁️</button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-init reveals
  const reveals = grid.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
}

function goToProduct(id) {
  window.location.href = `product.html?id=${id}`;
}


// =============================================
// 🛒 CART UI
// =============================================

function updateCartUI() {
  const count = getCartCount();

  // FAB badge
  const fabBadge = document.querySelector('.cart-fab-badge');
  if (fabBadge) fabBadge.textContent = count;

  // Sidebar count
  const cartCountEl = document.querySelector('.cart-count');
  if (cartCountEl) cartCountEl.textContent = count;

  // Cart body
  const cartBody = document.querySelector('.cart-body');
  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = `<div class="cart-empty"><div class="empty-icon">🛒</div><p>${CART_CONFIG.emptyMessage}</p></div>`;
    updateCartFooter();
    return;
  }

  cartBody.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return '';
    return `
      <div class="cart-item">
        <div class="cart-item-img">
          ${p.images[0].startsWith('http') || p.images[0].startsWith('/')
            ? `<img src="${p.images[0]}" alt="${p.name}">`
            : `<div class="cart-item-img-placeholder">${p.images[0]}</div>`
          }
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${formatPrice(p.price)} ${CART_CONFIG.currency}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateQty(${p.id},-1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${p.id},1)">+</button>
            <span class="cart-item-remove" onclick="removeFromCart(${p.id})">حذف</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  updateCartFooter();
}

function updateCartFooter() {
  const footer = document.querySelector('.cart-footer');
  if (!footer) return;

  const { subtotal, totalDiscount, tax, total } = getCartTotal();

  footer.innerHTML = `
    <div class="cart-total-row">
      <span>جمع کل</span>
      <span>${formatPrice(subtotal)} ${CART_CONFIG.currency}</span>
    </div>
    ${totalDiscount > 0 ? `
    <div class="cart-total-row">
      <span>تخفیف</span>
      <span class="discount-amount">−${formatPrice(totalDiscount)} ${CART_CONFIG.currency}</span>
    </div>` : ''}
    <div class="cart-total-row">
      <span>${CART_CONFIG.taxLabel}</span>
      <span>${formatPrice(tax)} ${CART_CONFIG.currency}</span>
    </div>
    <div class="cart-total-row total">
      <span>مبلغ قابل پرداخت</span>
      <span>${formatPrice(total)} ${CART_CONFIG.currency}</span>
    </div>
    <button class="btn-checkout" onclick="alert('اتصال به درگاه پرداخت...')">${CART_CONFIG.checkoutText} ←</button>
  `;
}

function toggleCart() {
  document.querySelector('.cart-overlay')?.classList.toggle('active');
  document.querySelector('.cart-sidebar')?.classList.toggle('active');
}

function showCartNotification(name) {
  const notif = document.createElement('div');
  notif.style.cssText = `position:fixed;bottom:90px;left:24px;background:var(--bg-card);border:1px solid var(--orange-500);
    border-radius:12px;padding:12px 20px;z-index:3000;font-size:.85rem;font-weight:600;
    box-shadow:0 8px 32px rgba(249,115,22,.2);animation:slideUp .4s cubic-bezier(.22,1,.36,1);font-family:var(--font)`;
  notif.textContent = `✓ ${name} به سبد اضافه شد`;
  document.body.appendChild(notif);
  setTimeout(() => { notif.style.opacity = '0'; notif.style.transition = 'opacity .3s'; }, 2000);
  setTimeout(() => notif.remove(), 2400);
}


// =============================================
// 📄 PRODUCT DETAIL PAGE
// =============================================

function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    document.getElementById('productDetail').innerHTML = `
      <div style="text-align:center;padding:100px 20px">
        <div style="font-size:4rem;margin-bottom:20px">😕</div>
        <h2>محصول یافت نشد</h2>
        <p style="color:var(--text-secondary);margin:12px 0 24px">محصول مورد نظر وجود ندارد یا حذف شده است.</p>
        <a href="shop.html" class="btn btn-primary">بازگشت به فروشگاه</a>
      </div>`;
    return;
  }

  // Gallery
  const galleryMain = document.getElementById('galleryMain');
  const galleryThumbs = document.getElementById('galleryThumbs');

  function renderMainImage(idx) {
    const img = product.images[idx];
    galleryMain.innerHTML = img.startsWith('http') || img.startsWith('/')
      ? `<img src="${img}" alt="${product.name}">`
      : `<div class="gallery-main-placeholder">${img}</div>`;
  }

  renderMainImage(0);

  galleryThumbs.innerHTML = product.images.map((img, i) => `
    <div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="selectThumb(this, ${i})">
      ${img.startsWith('http') || img.startsWith('/')
        ? `<img src="${img}" alt="تصویر ${i + 1}">`
        : `<div class="gallery-thumb-placeholder">${img}</div>`
      }
    </div>
  `).join('');

  window.selectThumb = function(el, idx) {
    document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    renderMainImage(idx);
  };

  // Info
  document.getElementById('detailCategory').textContent = CATEGORIES.find(c => c.id === product.category)?.label || '';
  document.getElementById('detailName').textContent = product.name;
  document.getElementById('detailStars').textContent = generateStars(product.rating);
  document.getElementById('detailRatingText').textContent = `${product.rating} از ۵ (${product.ratingCount} نظر)`;
  document.getElementById('detailDesc').textContent = product.description;

  // Price
  document.getElementById('detailPriceCurrent').textContent = `${formatPrice(product.price)} ${CART_CONFIG.currency}`;
  const oldPriceEl = document.getElementById('detailPriceOld');
  const discountEl = document.getElementById('detailDiscountBadge');
  if (product.oldPrice > 0) {
    oldPriceEl.textContent = `${formatPrice(product.oldPrice)} ${CART_CONFIG.currency}`;
    oldPriceEl.style.display = '';
  } else {
    oldPriceEl.style.display = 'none';
  }
  if (product.discount > 0) {
    discountEl.textContent = `${product.discount}٪ تخفیف`;
    discountEl.style.display = '';
  } else {
    discountEl.style.display = 'none';
  }

  // Features
  document.getElementById('detailFeatureList').innerHTML = product.features.map(f =>
    `<li><span class="check">✓</span> ${f}</li>`
  ).join('');

  // Add to cart button
  document.getElementById('detailAddCart').onclick = () => addToCart(product.id);

  // Tabs
  document.getElementById('tabDescription').innerHTML = `<p>${product.details}</p>`;
  document.getElementById('tabRequirements').innerHTML = `<p>${product.requirements}</p>`;

  updateCartUI();
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
  document.getElementById(tabId).classList.add('active');
}


// =============================================
// 🚀 INIT
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  // Theme
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  function setTheme(t) {
    html.setAttribute('data-theme', t);
    toggle.textContent = t === 'light' ? '☀️' : '🌙';
    localStorage.setItem('sirra-theme', t);
  }
  toggle.addEventListener('click', () => setTheme(html.getAttribute('data-theme') === 'light' ? 'dark' : 'light'));
  const saved = localStorage.getItem('sirra-theme');
  if (saved) setTheme(saved);

  // Navbar
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50), { passive: true });

  // Mobile
  const menu = document.getElementById('mobileMenu');
  document.getElementById('mobileToggle')?.addEventListener('click', () => menu.classList.add('active'));
  document.getElementById('mobileClose')?.addEventListener('click', () => menu.classList.remove('active'));
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('active')));

  // Cart sidebar toggle
  document.querySelector('.cart-fab')?.addEventListener('click', toggleCart);
  document.querySelector('.cart-overlay')?.addEventListener('click', toggleCart);
  document.querySelector('.cart-close')?.addEventListener('click', toggleCart);

  // Detect page
  if (document.getElementById('productsGrid')) {
    renderShopPage();
  }
  if (document.getElementById('productDetail')) {
    renderProductDetail();
  }

  // Smooth scroll
  let currentScroll = window.scrollY;
  let targetScroll = window.scrollY;
  let isScrolling = false;
  function smoothStep() {
    currentScroll += (targetScroll - currentScroll) * 0.08;
    if (Math.abs(currentScroll - targetScroll) < 0.5) { currentScroll = targetScroll; isScrolling = false; }
    window.scrollTo(0, currentScroll);
    if (isScrolling) requestAnimationFrame(smoothStep);
  }
  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    targetScroll = Math.max(0, Math.min(targetScroll + e.deltaY * 0.8, document.body.scrollHeight - window.innerHeight));
    if (!isScrolling) { isScrolling = true; requestAnimationFrame(smoothStep); }
  }, { passive: false });
});

// CSS animation for notifications
const style = document.createElement('style');
style.textContent = `@keyframes slideUp{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}`;
document.head.appendChild(style);
