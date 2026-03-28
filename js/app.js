// ============================
// RUMAHKITA - SHARED APP JS
// Utilities, Auth, Navbar, Toast
// ============================

/* ============================
   AUTH UTILITIES
   ============================ */
const Auth = {
  getUser() {
    try { return JSON.parse(localStorage.getItem('rumahkita_user')) || null; } catch { return null; }
  },
  setUser(user) { localStorage.setItem('rumahkita_user', JSON.stringify(user)); },
  logout() {
    localStorage.removeItem('rumahkita_user');
    window.location.href = 'index.html';
  },
  requireAuth() {
    if (!this.getUser()) { window.location.href = 'login.html'; return false; }
    return true;
  }
};

/* ============================
   TOAST NOTIFICATIONS
   ============================ */
const Toast = {
  container: null,
  init() {
    if (this.container) return;
    this.container = document.createElement('div');
    this.container.className = 'toast-container';
    document.body.appendChild(this.container);
  },
  show(message, type = 'default', duration = 3500) {
    this.init();
    const toast = document.createElement('div');
    const icons = { success: 'fa-check-circle', error: 'fa-times-circle', warning: 'fa-exclamation-circle', default: 'fa-info-circle' };
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas ${icons[type] || icons.default}"></i><span>${message}</span>`;
    this.container.appendChild(toast);
    requestAnimationFrame(() => { requestAnimationFrame(() => { toast.classList.add('show'); }); });
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, duration);
  },
  success(msg, dur) { this.show(msg, 'success', dur); },
  error(msg, dur) { this.show(msg, 'error', dur); },
  warning(msg, dur) { this.show(msg, 'warning', dur); }
};

/* ============================
   FAVORITES
   ============================ */
const Favorites = {
  getAll() {
    try { return JSON.parse(localStorage.getItem('rumahkita_favs')) || []; } catch { return []; }
  },
  toggle(propId) {
    const favs = this.getAll();
    const idx = favs.indexOf(propId);
    if (idx >= 0) { favs.splice(idx, 1); Toast.show('Dihapus dari favorit'); }
    else { favs.push(propId); Toast.success('Ditambahkan ke favorit ❤️'); }
    localStorage.setItem('rumahkita_favs', JSON.stringify(favs));
    return idx < 0;
  },
  has(propId) { return this.getAll().includes(propId); }
};

/* ============================
   FORMAT UTILITIES
   ============================ */
const Fmt = {
  price(val) {
    if (!val && val !== 0) return '-';
    if (val >= 1e12) return 'Rp ' + (val / 1e12).toFixed(val % 1e12 === 0 ? 0 : 1) + ' Triliun';
    if (val >= 1e9) return 'Rp ' + (val / 1e9).toFixed(val % 1e9 === 0 ? 0 : 1) + ' Miliar';
    if (val >= 1e6) return 'Rp ' + (val / 1e6).toFixed(val % 1e6 === 0 ? 0 : 1) + ' Juta';
    return 'Rp ' + val.toLocaleString('id-ID');
  },
  number(val) { return val ? val.toLocaleString('id-ID') : '0'; },
  date(str) {
    if (!str) return '';
    return new Date(str).toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
  },
  dateShort(str) {
    if (!str) return '';
    return new Date(str).toLocaleDateString('id-ID', { day:'numeric', month:'short', year:'numeric' });
  },
  timeAgo(str) {
    if (!str) return '';
    const diff = Date.now() - new Date(str).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Baru saja';
    if (mins < 60) return `${mins} menit lalu`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs} jam lalu`;
    const days = Math.floor(hrs / 24);
    if (days < 30) return `${days} hari lalu`;
    const mons = Math.floor(days / 30);
    if (mons < 12) return `${mons} bulan lalu`;
    return `${Math.floor(mons / 12)} tahun lalu`;
  },
  initials(name) {
    if (!name) return '?';
    return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
  }
};

/* ============================
   MOBILE MENU
   ============================ */
const MobileMenu = {
  el: null,
  init() {
    // Support both id="mobileMenuDrawer" and class ".mobile-menu-drawer"
    this.el = document.getElementById('mobileMenuDrawer') || document.querySelector('.mobile-menu-drawer');
    const overlay = document.getElementById('mobileMenuOverlay');
    const close = document.getElementById('mobileMenuClose');
    const hamburger = document.getElementById('navHamburger');
    if (!this.el && !document.getElementById('mobileMenu')) return;
    hamburger?.addEventListener('click', () => this.open());
    overlay?.addEventListener('click', () => this.close());
    close?.addEventListener('click', () => this.close());
    document.addEventListener('keydown', e => { if (e.key === 'Escape') this.close(); });
  },
  open() {
    const menu = document.getElementById('mobileMenu');
    menu?.classList.add('open');
    document.body.style.overflow = 'hidden';
  },
  close() {
    const menu = document.getElementById('mobileMenu');
    menu?.classList.remove('open');
    document.body.style.overflow = '';
  }
};

/* ============================
   NAVBAR INIT
   ============================ */
function initNavbar() {
  const user = Auth.getUser();
  const navAuthDesktop = document.getElementById('navAuthDesktop');
  const navAuthMobile = document.getElementById('navAuthMobileFooter');

  if (user) {
    // Desktop: show avatar dropdown
    if (navAuthDesktop) {
      navAuthDesktop.innerHTML = `
        <a href="tambah-properti.html" class="navbar-actions btn-pasang"><i class="fas fa-plus mr-1"></i>Pasang Iklan</a>
        <div class="dropdown" id="userDropdown">
          <button class="user-menu-trigger" onclick="toggleUserMenu()" id="userMenuBtn">
            <div class="user-avatar" id="navAvatar">${Fmt.initials(user.name)}</div>
            <i class="fas fa-chevron-down" style="font-size:11px;color:#6b7280;"></i>
          </button>
          <div class="dropdown-menu" id="userDropdownMenu">
            <div style="padding:10px 12px 6px;border-bottom:1px solid #f3f4f6;margin-bottom:4px;">
              <div style="font-weight:700;font-size:14px;color:#111827;">${user.name}</div>
              <div style="font-size:12px;color:#6b7280;">${user.email || ''}</div>
            </div>
            <a href="dashboard.html" class="dropdown-item"><i class="fas fa-th-large text-blue-600"></i>Dashboard</a>
            <a href="profil.html" class="dropdown-item"><i class="fas fa-user" style="color:#6b7280;"></i>Profil Saya</a>
            <a href="profil.html?tab=favorit" class="dropdown-item"><i class="fas fa-heart text-red-400"></i>Favorit</a>
            <div class="dropdown-divider"></div>
            <button onclick="Auth.logout()" class="dropdown-item danger"><i class="fas fa-sign-out-alt"></i>Keluar</button>
          </div>
        </div>`;
    }
    // Mobile footer
    if (navAuthMobile) {
      navAuthMobile.innerHTML = `
        <a href="dashboard.html" class="btn btn-primary btn-full">Dashboard</a>`;
    }
  } else {
    if (navAuthDesktop) {
      navAuthDesktop.innerHTML = `
        <a href="tambah-properti.html" class="navbar-actions btn-pasang"><i class="fas fa-plus mr-1"></i>Pasang Iklan</a>
        <a href="login.html" class="navbar-actions btn-masuk">Masuk</a>
        <a href="register.html" class="navbar-actions btn-daftar">Daftar</a>`;
    }
    if (navAuthMobile) {
      navAuthMobile.innerHTML = `
        <a href="login.html" class="btn btn-outline btn-full">Masuk</a>
        <a href="register.html" class="btn btn-primary btn-full">Daftar</a>`;
    }
  }

  MobileMenu.init();

  // Close dropdown on outside click
  document.addEventListener('click', e => {
    const dd = document.getElementById('userDropdown');
    if (dd && !dd.contains(e.target)) {
      document.getElementById('userDropdownMenu')?.classList.remove('open');
    }
  });
}

function toggleUserMenu() {
  document.getElementById('userDropdownMenu')?.classList.toggle('open');
}

/* ============================
   ACCORDION
   ============================ */
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const wasOpen = item.classList.contains('open');
      // Close all in same parent
      item.parentElement.querySelectorAll('.accordion-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* ============================
   PROPERTY CARD RENDERER
   ============================ */
function renderPropertyCard(prop, opts = {}) {
  const isFav = Favorites.has(prop.id);
  const imgs = prop.images || ['https://picsum.photos/seed/default/600/400'];
  const isNew = (Date.now() - new Date(prop.created_at).getTime()) < 7 * 24 * 3600 * 1000;
  const badgeClass = prop.listing === 'dijual' ? 'badge-jual' : 'badge-sewa';
  const badgeLabel = prop.listing === 'dijual' ? 'Dijual' : 'Disewa';
  const priceLabel = prop.listing === 'disewa' ? (prop.price_type === 'monthly' ? '/bln' : '/thn') : '';

  return `
  <div class="property-card fade-in" onclick="window.location='detail-properti.html?id=${prop.id}'">
    <div class="property-card-img">
      <img src="${imgs[0]}" alt="${prop.title}" loading="lazy" onerror="this.src='https://picsum.photos/seed/${prop.id}/600/400'">
      <div class="card-badges">
        <span class="card-badge ${badgeClass}">${badgeLabel}</span>
        ${prop.is_featured ? '<span class="card-badge badge-unggulan">Unggulan</span>' : ''}
        ${isNew ? '<span class="card-badge badge-baru">Baru</span>' : ''}
      </div>
      <button class="card-heart ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFav('${prop.id}', this)" title="Simpan ke favorit">
        <i class="fas fa-heart"></i>
      </button>
      ${imgs.length > 1 ? `<div class="card-photo-count"><i class="fas fa-camera"></i>${imgs.length}</div>` : ''}
    </div>
    <div class="property-card-body">
      <div class="property-price">${Fmt.price(prop.price)}${priceLabel ? `<span class="property-price-sub">${priceLabel}</span>` : ''}</div>
      <div class="property-title">${prop.title}</div>
      <div class="property-location"><i class="fas fa-map-marker-alt" style="font-size:11px;color:#9ca3af;"></i>${prop.district || ''}${prop.district && prop.city ? ', ' : ''}${prop.city || ''}</div>
      ${prop.type !== 'tanah' ? `
      <div class="property-specs">
        ${prop.bedrooms ? `<div class="spec-item"><i class="fas fa-bed"></i>${prop.bedrooms} KT</div>` : ''}
        ${prop.bathrooms ? `<div class="spec-item"><i class="fas fa-bath"></i>${prop.bathrooms} KM</div>` : ''}
        ${prop.building_area ? `<div class="spec-item"><i class="fas fa-vector-square"></i>${prop.building_area}m²</div>` : ''}
        ${prop.land_area ? `<div class="spec-item"><i class="fas fa-expand-arrows-alt"></i>${prop.land_area}m²</div>` : ''}
      </div>` : `
      <div class="property-specs">
        ${prop.land_area ? `<div class="spec-item"><i class="fas fa-expand-arrows-alt"></i>${prop.land_area}m² Luas Tanah</div>` : ''}
      </div>`}
    </div>
  </div>`;
}

function toggleFav(propId, btn) {
  const isNowFav = Favorites.toggle(propId);
  btn.classList.toggle('active', isNowFav);
}

/* ============================
   SEARCH AUTOCOMPLETE
   ============================ */
const CITIES = ['Jakarta Selatan','Jakarta Utara','Jakarta Barat','Jakarta Timur','Jakarta Pusat','Bandung','Surabaya','Medan','Semarang','Makassar','Palembang','Tangerang','Depok','Bogor','Bekasi','Yogyakarta','Malang','Solo','Bali','Batam','Pekanbaru','Balikpapan','Manado'];

function initSearchAutocomplete(inputId, listId) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);
  if (!input || !list) return;

  input.addEventListener('input', () => {
    const val = input.value.toLowerCase().trim();
    if (!val) { list.classList.remove('open'); return; }
    const matches = CITIES.filter(c => c.toLowerCase().includes(val)).slice(0, 6);
    if (matches.length === 0) { list.classList.remove('open'); return; }
    list.innerHTML = matches.map(c => `
      <div class="autocomplete-item" onclick="selectCity('${inputId}','${listId}','${c}')">
        <i class="fas fa-map-marker-alt" style="color:#9ca3af;font-size:12px;"></i>${c}
      </div>`).join('');
    list.classList.add('open');
  });

  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !list.contains(e.target)) list.classList.remove('open');
  });
}

function selectCity(inputId, listId, city) {
  document.getElementById(inputId).value = city;
  document.getElementById(listId).classList.remove('open');
}

/* ============================
   COUNTER ANIMATION
   ============================ */
function animateCounter(el, target, duration = 1500) {
  const start = performance.now();
  const startVal = 0;
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(startVal + (target - startVal) * ease).toLocaleString('id-ID');
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        const target = parseInt(entry.target.dataset.target || 0);
        animateCounter(entry.target, target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-counter]').forEach(el => observer.observe(el));
}

/* ============================
   INIT
   ============================ */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCounters();
  initAccordions();
});
