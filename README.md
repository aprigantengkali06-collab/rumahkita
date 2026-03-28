# RumahKita — Platform Properti Indonesia

Platform jual, beli & sewa properti terpercaya di Indonesia. Listing terverifikasi, gratis pasang iklan.

---

## ✅ Fitur yang Sudah Selesai

### Halaman Utama
- **index.html** — Homepage dengan hero section, search bar (tab Dijual/Disewa/Baru), autocomplete kota, grid properti terbaru, carousel unggulan, kota populer, KPR preview, artikel, dan CTA
- **properti.html** — Halaman daftar properti dengan filter sidebar (desktop) + bottom drawer (mobile), sorting, view grid/list, pagination, dan active filter tags
- **detail-properti.html** — Detail properti dengan galeri foto, lightbox, peta OpenStreetMap, estimasi KPR, form pesan ke agen, mobile contact bar, properti serupa
- **tambah-properti.html** — Form multi-step (5 langkah): Dasar → Harga & Spek → Lokasi (peta Leaflet) → Foto upload → Fasilitas & publish

### Autentikasi
- **login.html** — Login dengan email/password demo, simulasi Google login, redirect ke dashboard, ingat saya
- **register.html** — Registrasi dengan validasi password strength, konfirmasi password, tipe akun, Google register
- **reset-password.html** — Halaman reset password (form email)

### Dashboard & Profil
- **dashboard.html** — Dashboard user dengan statistik properti, properti saya, pesan masuk (mock), favorit, quick actions
- **profil.html** — Edit profil, tabs (Profil, Properti, Favorit, Pengaturan)

### Kalkulator & Konten
- **kpr.html** — Simulasi KPR interaktif: input harga/DP/tenor/bunga, chart cicilan (Chart.js), tabel amortisasi per tahun, perbandingan bank
- **artikel.html** — Daftar artikel dengan kategori dan pencarian
- **artikel-detail.html** — Detail artikel dengan konten lengkap
- **agen.html** — Halaman profil agen properti
- **faq.html** — FAQ accordion interaktif
- **tentang.html** — Halaman tentang perusahaan
- **kontak.html** — Form kontak dengan validasi
- **syarat.html** — Syarat & ketentuan
- **privasi.html** — Kebijakan privasi

### Data & Shared Libraries
- **js/data.js** — 20 properti seed data lengkap (berbagai tipe, kota, harga), utility functions
- **js/app.js** — Shared: Auth, Toast, Favorites (localStorage), Fmt (format harga/tanggal), MobileMenu, Navbar, Counter animation, Property card renderer
- **css/style.css** — Global stylesheet mobile-first dengan CSS variables, responsive breakpoints, semua komponen UI

---

## 🔗 URI / Path Utama

| Path | Deskripsi |
|------|-----------|
| `index.html` | Homepage |
| `properti.html` | Daftar properti |
| `properti.html?listing=dijual` | Filter dijual |
| `properti.html?listing=disewa` | Filter disewa |
| `properti.html?type=rumah` | Filter tipe properti |
| `properti.html?city=Jakarta` | Filter kota |
| `properti.html?q=kemang` | Pencarian keyword |
| `properti.html?featured=true` | Properti unggulan |
| `detail-properti.html?id=prop-001` | Detail properti by ID |
| `tambah-properti.html` | Form pasang iklan (5 step) |
| `login.html` | Halaman login |
| `register.html` | Halaman daftar |
| `dashboard.html` | Dashboard user (auth required) |
| `profil.html` | Profil user |
| `kpr.html` | Simulasi KPR |
| `kpr.html?price=1500000000` | KPR dengan harga preset |
| `artikel.html` | Daftar artikel |
| `artikel-detail.html?id=a1` | Detail artikel |

---

## 🐛 Bug yang Telah Diperbaiki (Sesi Ini)

1. **Template literals di HTML statis** — `${[...].map(...)}` di `index.html`, `properti.html`, `login.html`, `register.html`, `tambah-properti.html` tampil sebagai teks literal (bukan dirender). Sudah diganti dengan HTML statis.

2. **Mobile menu drawer ID mismatch** — `js/app.js` mencari `#mobileMenuDrawer` tapi HTML menggunakan class `.mobile-menu-drawer`. Diperbaiki dengan fallback selector.

3. **Mobile contact bar overlap** — Di `detail-properti.html`, contact bar di-bottom overlap dengan mobile bottom nav. Diperbaiki dengan `bottom: 60px`.

4. **Autocomplete attributes missing** — `login.html` dan `register.html` tidak punya atribut `autocomplete` yang sesuai. Ditambahkan `autocomplete="current-password"` dan `"new-password"`.

5. **Stepper CSS missing** — `.stepper` dan `.stepper-btn` di `tambah-properti.html` tidak ada di CSS global. Ditambahkan ke `css/style.css`.

---

## 📱 Mobile Improvements

- **Bottom navigation** — 5-item sticky bottom nav (Beranda, Cari, Pasang, KPR, Akun) di semua halaman
- **Slide-in drawer menu** — Hamburger → left drawer dengan overlay & swipe-to-close (ESC support)
- **Filter bottom sheet** — Properti.html: filter muncul dari bawah di mobile
- **Touch-optimized** — Min height 48px untuk input, `-webkit-overflow-scrolling: touch` untuk scroll container
- **Safe area inset** — Support notch/home bar via `env(safe-area-inset-bottom)`
- **Responsive grids** — Category 4-col on mobile, property cards 2-col on small screens
- **Compact spacing** — Section padding dikurangi di mobile, font sizes responsif dengan `clamp()`

---

## 🔑 Akun Demo

| Email | Password | Tipe |
|-------|----------|------|
| `budi@rumahkita.com` | `password123` | Agen |
| `sari@rumahkita.com` | `password123` | Agen |
| `ahmad@rumahkita.com` | `password123` | Pemilik |
| `demo@rumahkita.com` | `demo123` | Demo User |

---

## 🗂️ Struktur Data

### Properti (`RUMAHKITA_PROPERTIES` in `js/data.js`)
```
id, title, slug, description, type (rumah/apartemen/tanah/ruko/kos/villa/gudang/kantor),
listing (dijual/disewa), price, price_type, city, district, province, address, postal_code,
bedrooms, bathrooms, building_area, land_area, floors, garage, furnished, certificate,
year_built, is_featured, is_negotiable, images[], features[], views, created_at, updated_at,
lat, lng, user { id, name, whatsapp, phone, type, avatar, member_since, active_listings }
```

### Auth (`localStorage: rumahkita_user`)
```
id, name, email, type (agen/pemilik/pencari), created_at
```

### Favorites (`localStorage: rumahkita_favs`)
```
Array of property IDs
```

---

## ⚠️ Fitur Belum Diimplementasi (Backend Required)

- Upload foto properti ke server (hanya preview lokal di form)
- Simpan listing properti ke database nyata
- Sistem pesan/chat real-time
- Notifikasi push
- Review & rating agen
- Verifikasi properti oleh admin
- Integrasi payment/escrow
- OTP login via SMS/WA

---

## 🚀 Deployment

Untuk mendeploy website ini, silakan kunjungi tab **Publish** di panel ini. Semua file sudah siap di-deploy sebagai static website.

---

## 🛠️ Teknologi

- **HTML5** — Semantic markup
- **CSS3** — CSS Variables, Flexbox, Grid, `clamp()`, `env()`
- **Tailwind CSS** — via CDN (utility classes untuk komponen halaman tertentu)
- **Font Awesome 6.4** — Icons
- **Leaflet.js 1.9.4** — Peta interaktif (detail properti & form tambah properti)
- **Chart.js** — Grafik cicilan KPR
- **Google Fonts** — Inter font family
- **localStorage** — Auth state, favorites, draft form

---

*© 2026 RumahKita. Dibuat dengan ❤️ untuk Indonesia.*
