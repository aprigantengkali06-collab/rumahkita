# 🏠 RumahKita - Platform Properti Indonesia

> Platform jual beli dan sewa properti terpercaya di Indonesia — modern, fungsional, dan gratis pasang iklan.

![RumahKita Preview](https://picsum.photos/seed/rumahkita-readme/1200/400)

---

## 🌐 Halaman Utama

| Halaman | URL | Deskripsi |
|---------|-----|-----------|
| Homepage | `/index.html` | Hero, search, kategori, properti terbaru & unggulan |
| Daftar Properti | `/properti.html` | Browsing dengan filter lengkap & sidebar |
| Detail Properti | `/detail-properti.html?id=prop-001` | Galeri, peta, KPR simulator, info agen |
| Tambah Properti | `/tambah-properti.html` | Form multi-step 5 langkah |
| Dashboard | `/dashboard.html` | Kelola properti, pesan, & favorit |
| Profil | `/profil.html` | Edit profil pengguna |
| Simulasi KPR | `/kpr.html` | Kalkulator KPR interaktif + grafik |
| Artikel | `/artikel.html` | Blog panduan properti |
| Detail Artikel | `/artikel-detail.html?slug=...` | Konten artikel lengkap |
| Profil Agen | `/agen.html?id=user-001` | Halaman publik agen/pemilik |

### Auth Pages
| Halaman | URL |
|---------|-----|
| Login | `/login.html` |
| Register | `/register.html` |
| Reset Password | `/reset-password.html` |

### Halaman Statis
| Halaman | URL |
|---------|-----|
| Tentang Kami | `/tentang.html` |
| Kontak | `/kontak.html` |
| FAQ | `/faq.html` |
| Syarat & Ketentuan | `/syarat.html` |
| Kebijakan Privasi | `/privasi.html` |

---

## ✅ Fitur yang Sudah Diimplementasikan

### Homepage
- [x] Hero section dengan search bar & tab (Dijual/Disewa/Baru)
- [x] Autocomplete pencarian kota
- [x] 8 kategori properti dengan icon & link filter
- [x] Grid properti terbaru (8 item)
- [x] Carousel properti unggulan
- [x] 6 kota populer dengan gambar & jumlah properti
- [x] 4 keunggulan layanan
- [x] Simulasi KPR mini dengan kalkulasi real-time
- [x] Counter statistik dengan animasi
- [x] 3 artikel panduan terbaru
- [x] CTA pasang iklan full-width
- [x] Footer lengkap dengan sitemap
- [x] Mobile bottom navigation

### Daftar Properti (/properti.html)
- [x] Sidebar filter desktop (sticky)
- [x] Mobile filter drawer (bottom sheet)
- [x] Filter: listing type, tipe properti, kota, harga, kamar tidur, sertifikat, furnished
- [x] Active filter tags dengan tombol hapus
- [x] Sort: terbaru, termurah, termahal, paling dilihat
- [x] Grid view & list view toggle
- [x] URL search params (shareable & bookmarkable)
- [x] Pagination
- [x] Breadcrumb dinamis
- [x] Empty state dengan pesan yang jelas
- [x] Property card dengan semua info & tombol favorit

### Detail Properti (/detail-properti.html)
- [x] Gallery foto dengan lightbox fullscreen
- [x] Navigasi prev/next + keyboard arrows di lightbox
- [x] Counter foto
- [x] Spesifikasi lengkap dengan icon
- [x] Deskripsi dengan tombol "Baca Selengkapnya"
- [x] Grid fasilitas dengan checkmark
- [x] Peta interaktif Leaflet + OpenStreetMap
- [x] Marker dengan popup info
- [x] Link "Buka di Google Maps"
- [x] Simulasi KPR (properti dijual)
- [x] Properti serupa (2 kolom)
- [x] Kartu agen/pemilik sticky
- [x] Tombol WhatsApp dengan pesan otomatis
- [x] Tombol telepon langsung
- [x] Form kirim pesan (modal)
- [x] Toggle favorit
- [x] Share properti (native share / copy link)
- [x] Laporkan listing (modal)
- [x] Info listing (ID, views, tanggal)
- [x] Mobile WA button di bottom nav

### Form Tambah Properti (/tambah-properti.html)
- [x] Progress bar 5 langkah
- [x] Step 1: Tipe listing + tipe properti + judul + deskripsi
- [x] Step 2: Harga (format Rupiah auto) + tipe periode + nego + specs stepper
- [x] Step 3: Provinsi + kota + kecamatan + alamat + peta interaktif
- [x] Step 3: Klik peta untuk pin lokasi
- [x] Step 3: "Gunakan Lokasi Saya" (Geolocation API)
- [x] Step 4: Drag & drop upload foto + preview
- [x] Step 4: Hapus foto, batas ukuran 2MB
- [x] Step 5: Grid checkbox 27 fasilitas
- [x] Step 5: Review summary sebelum submit
- [x] Step 5: Persetujuan syarat & ketentuan
- [x] Validasi per step dengan pesan error
- [x] Auto-save draft ke localStorage
- [x] Success state setelah submit

### Auth
- [x] Login dengan email/password (demo accounts)
- [x] Login dengan Google (simulasi)
- [x] Register dengan validasi lengkap
- [x] Password strength indicator
- [x] Toggle show/hide password
- [x] Reset password via email
- [x] Persistensi login via localStorage
- [x] Demo accounts: demo@rumahkita.com / demo123

### Dashboard (/dashboard.html)
- [x] Greeting dengan nama user
- [x] 4 stats card (properti, views, favorit, aktif)
- [x] Tab: Properti Saya / Pesan Masuk / Favorit
- [x] Filter status properti (Semua/Aktif/Nonaktif/Terjual/Tersewa)
- [x] Search properti
- [x] Aksi per properti (Lihat/Edit/Toggle Status/Hapus)
- [x] Dialog konfirmasi hapus
- [x] List pesan dengan badge "Baru"
- [x] Balas via WhatsApp langsung
- [x] Grid favorit dengan hapus favorit
- [x] Empty states untuk semua tab

### Profil (/profil.html)
- [x] Preview foto profil
- [x] Upload foto baru
- [x] Edit semua field profil
- [x] Ubah password
- [x] Statistik akun sidebar
- [x] Danger zone (hapus akun)

### Simulasi KPR (/kpr.html)
- [x] Input harga properti (format Rupiah)
- [x] Quick select harga (preset buttons)
- [x] Slider uang muka (0-90%) dengan quick buttons
- [x] Slider tenor (1-30 tahun) dengan quick buttons
- [x] Slider suku bunga (1-25%) dengan quick buttons
- [x] Hasil: cicilan per bulan, pokok, total bunga, total bayar
- [x] Grafik donut Chart.js (pokok vs bunga)
- [x] Tabel amortisasi 5 tahun pertama
- [x] CTA cari properti sesuai budget
- [x] FAQ KPR dengan accordion

### Artikel (/artikel.html & /artikel-detail.html)
- [x] 6 artikel lengkap dengan konten detail
- [x] Filter by kategori
- [x] Search artikel
- [x] Sidebar dengan artikel terkait
- [x] Share ke WhatsApp & copy link
- [x] Konten artikel kaya dengan tips box, blockquote, dll

### Halaman Statis
- [x] Tentang: story, visi misi, statistik, nilai, tim
- [x] Kontak: form kontak + info kontak
- [x] FAQ: 10 pertanyaan dengan accordion
- [x] Syarat & Ketentuan
- [x] Kebijakan Privasi
- [x] Profil Agen publik

---

## 🗄️ Database (Supabase PostgreSQL)

### Tables
| Table | Deskripsi |
|-------|-----------|
| `profiles` | Data pengguna (extend auth.users) |
| `properties` | Listing properti lengkap |
| `favorites` | Properti yang difavoritkan user |
| `messages` | Pesan/inquiry dari calon pembeli |
| `property_views` | Tracking view per IP |
| `reports` | Laporan listing bermasalah |

### Cara Setup Database
1. Buat project Supabase di [supabase.com](https://supabase.com)
2. Buka SQL Editor
3. Jalankan `database/schema.sql`
4. Jalankan `database/seed.sql`
5. Setup Storage Buckets: `property-images` & `avatars` (keduanya public)
6. Enable Google OAuth di Authentication → Providers

### Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=RumahKita
```

---

## 🎨 Design System

### Colors
| Nama | Hex | Penggunaan |
|------|-----|-----------|
| Primary Blue | `#2563eb` | Tombol, link, accent |
| Green | `#16a34a` | Badge "Disewa", WhatsApp |
| Red | `#ef4444` | Hapus, hati favorit |
| Amber | `#f59e0b` | Badge "Unggulan" |
| Gray-50 | `#f9fafb` | Background |

### Typography
- Font: **Inter** (Google Fonts)
- Heading: Bold/ExtraBold
- Price: ExtraBold, Blue-600
- Body: Regular, Gray-700

### Libraries Used
| Library | Version | Kegunaan |
|---------|---------|---------|
| Tailwind CSS | CDN | Styling utility-first |
| Font Awesome | 6.4 | Icons |
| Leaflet.js | 1.9.4 | Peta interaktif OpenStreetMap |
| Chart.js | Latest | Grafik KPR |
| Google Fonts | - | Tipografi Inter |

---

## 🚀 Cara Deploy

### Static Hosting (Recommended)
1. Upload semua file ke hosting statis (Vercel, Netlify, GitHub Pages)
2. Set root directory ke folder project
3. Tidak perlu build step — pure HTML/CSS/JS

### Untuk Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Untuk Netlify
- Drag & drop folder ke [netlify.com/drop](https://netlify.com/drop)
- Atau connect GitHub repository

---

## 📁 Struktur File

```
rumahkita/
├── index.html              # Homepage
├── properti.html           # Daftar properti + filter
├── detail-properti.html    # Detail properti + peta
├── tambah-properti.html    # Form multi-step tambah properti
├── dashboard.html          # Dashboard user
├── profil.html             # Edit profil
├── kpr.html                # Simulasi KPR
├── artikel.html            # List artikel
├── artikel-detail.html     # Detail artikel
├── agen.html               # Profil agen publik
├── login.html              # Halaman login
├── register.html           # Halaman registrasi
├── reset-password.html     # Reset password
├── tentang.html            # Tentang kami
├── kontak.html             # Kontak
├── faq.html                # FAQ
├── syarat.html             # Syarat & Ketentuan
├── privasi.html            # Kebijakan Privasi
├── css/
│   └── style.css           # Global styles
├── js/
│   └── data.js             # Mock data 20 properti + utilities
└── database/
    ├── schema.sql           # Supabase schema lengkap
    └── seed.sql             # 20 properti seed data
```

---

## 🔑 Demo Accounts

| Email | Password | Tipe |
|-------|----------|------|
| demo@rumahkita.com | demo123 | Pemilik |
| budi@rumahkita.com | password123 | Agen |
| sari@rumahkita.com | password123 | Agen |
| ahmad@rumahkita.com | password123 | Pemilik |

---

## 📊 Data Demo (20 Properti)

| Tipe | Jumlah |
|------|--------|
| Rumah | 7 |
| Apartemen | 4 |
| Tanah | 3 |
| Ruko | 2 |
| Villa | 1 |
| Kos | 1 |
| Gudang | 1 |
| Kantor | 1 |

| Listing | Jumlah |
|---------|--------|
| Dijual | 12 |
| Disewa | 8 |

**Kota:** Jakarta Selatan, Jakarta Utara, Tangerang Selatan, Bali, Bogor, Bandung, Surabaya, Yogyakarta, Depok, Bekasi, Malang, Tangerang

---

## 🔮 Fitur yang Belum Diimplementasikan

- [ ] Integrasi Supabase Auth (real backend)
- [ ] Upload foto ke Supabase Storage
- [ ] Real-time messages dengan Supabase Realtime
- [ ] Push notifications
- [ ] Admin dashboard
- [ ] Email notifikasi
- [ ] Advanced search dengan Elasticsearch
- [ ] Komparasi properti
- [ ] Virtual tour 360°
- [ ] AI recommendation engine
- [ ] Payment gateway untuk properti premium listing

---

## 🛠️ Rekomendasi Next Steps

1. **Integrasi Supabase**: Pasang env vars dan connect ke real database
2. **Auth real**: Enable Supabase Auth + Google OAuth
3. **Storage**: Setup bucket dan upload foto ke Supabase Storage
4. **SEO**: Tambahkan meta tags dinamis & sitemap.xml
5. **PWA**: Tambahkan service worker untuk offline support
6. **Analytics**: Integrasikan Google Analytics atau Plausible
7. **Performance**: Lazy load images, minify CSS/JS
8. **Testing**: Add unit tests & E2E tests

---

## 📞 Support

- **Email**: halo@rumahkita.com
- **WhatsApp**: 0812-3456-7890
- **Website**: [rumahkita.vercel.app](https://rumahkita.vercel.app)

---

© 2026 RumahKita — Dibuat dengan ❤️ di Indonesia
