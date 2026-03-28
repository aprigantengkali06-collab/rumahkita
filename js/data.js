// ============================
// RUMAHKITA - SHARED DATA & UTILITIES
// ============================

const RUMAHKITA_PROPERTIES = [
  {
    id: 'prop-001',
    title: 'Rumah Mewah Modern di Kemang Jakarta Selatan',
    slug: 'rumah-mewah-modern-kemang-jakarta-selatan-prop-001',
    description: 'Rumah mewah dengan desain modern kontemporer berlokasi di jantung Kemang, Jakarta Selatan. Properti ini menawarkan kehidupan premium dengan fasilitas lengkap. Dibangun pada tahun 2021 dengan material berkualitas tinggi, rumah ini memiliki 5 kamar tidur dan 4 kamar mandi yang luas. Area taman yang asri dan kolam renang pribadi menjadi daya tarik utama. Lokasi strategis dekat dengan berbagai pusat perbelanjaan, restoran internasional, sekolah internasional, dan akses mudah ke jalan tol. Cocok untuk keluarga besar yang menginginkan kenyamanan dan prestise tinggal di kawasan premium Jakarta Selatan.',
    type: 'rumah',
    listing: 'dijual',
    price: 4500000000,
    price_type: 'total',
    city: 'Jakarta Selatan',
    district: 'Kemang',
    province: 'DKI Jakarta',
    address: 'Jl. Kemang Raya No. 15, Kemang, Jakarta Selatan, DKI Jakarta 12730',
    postal_code: '12730',
    bedrooms: 5,
    bathrooms: 4,
    building_area: 350,
    land_area: 420,
    floors: 2,
    garage: 2,
    furnished: 'furnished',
    certificate: 'SHM',
    year_built: 2021,
    is_featured: true,
    is_negotiable: true,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=600&fit=crop',
    ],
    features: ['AC', 'Kolam Renang', 'CCTV', 'Security 24 Jam', 'Taman', 'Kitchen Set', 'Water Heater', 'Internet/WiFi', 'Carport', 'Balkon'],
    views: 1250,
    created_at: '2026-03-20T08:00:00Z',
    updated_at: '2026-03-25T10:00:00Z',
    lat: -6.2615,
    lng: 106.8106,
    user: { id: 'user-001', name: 'Budi Santoso', whatsapp: '6281234567890', phone: '+6281234567890', type: 'agen', avatar: 'https://picsum.photos/seed/user001/100/100', member_since: '2023-01-15', active_listings: 12 }
  },
  {
    id: 'prop-002',
    title: 'Apartemen Premium View Laut di Ancol Jakarta Utara',
    slug: 'apartemen-premium-view-laut-ancol-jakarta-utara-prop-002',
    description: 'Apartemen premium dengan pemandangan laut yang memukau di kawasan Ancol, Jakarta Utara. Unit ini terletak di lantai 25 dengan view pantai Ancol yang luar biasa. Dilengkapi dengan fasilitas bintang 5 termasuk kolam renang infinity, gym modern, dan sky lounge. Interior semi-furnished dengan kitchen set mewah, AC split, dan water heater premium. Akses mudah ke Tol Ancol dan kawasan Kelapa Gading. Investasi properti sangat menguntungkan di lokasi premium ini.',
    type: 'apartemen',
    listing: 'dijual',
    price: 1850000000,
    price_type: 'total',
    city: 'Jakarta Utara',
    district: 'Ancol',
    province: 'DKI Jakarta',
    address: 'Apartemen The Bay, Jl. Lodan Raya No. 2, Ancol, Jakarta Utara, DKI Jakarta 14430',
    postal_code: '14430',
    bedrooms: 3,
    bathrooms: 2,
    building_area: 120,
    land_area: 0,
    floors: 1,
    garage: 1,
    furnished: 'semi_furnished',
    certificate: 'Strata Title',
    year_built: 2020,
    is_featured: true,
    is_negotiable: false,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    ],
    features: ['AC', 'Gym', 'Kolam Renang', 'Security 24 Jam', 'Internet/WiFi', 'Water Heater', 'Kitchen Set', 'Rooftop'],
    views: 870,
    created_at: '2026-03-22T09:00:00Z',
    updated_at: '2026-03-24T11:00:00Z',
    lat: -6.1254,
    lng: 106.8485,
    user: { id: 'user-002', name: 'Sari Dewi', whatsapp: '6287654321098', phone: '+6287654321098', type: 'agen', avatar: 'https://picsum.photos/seed/user002/100/100', member_since: '2022-06-10', active_listings: 8 }
  },
  {
    id: 'prop-003',
    title: 'Rumah Cluster Strategis di BSD City Tangerang Selatan',
    slug: 'rumah-cluster-strategis-bsd-city-tangerang-selatan-prop-003',
    description: 'Rumah cluster modern dalam perumahan eksklusif BSD City, Tangerang Selatan. Properti ini sangat strategis karena berada di dalam kawasan perumahan terpadu BSD City yang terkenal. Rumah dua lantai dengan desain minimalis modern, memiliki 3 kamar tidur dan 2 kamar mandi. Dilengkapi carport untuk 1 mobil dan taman kecil yang asri. Kawasan BSD City terkenal dengan fasilitas lengkap termasuk mall, rumah sakit, sekolah internasional, dan akses tol langsung. One gate system dengan security 24 jam menjamin keamanan penghuni.',
    type: 'rumah',
    listing: 'dijual',
    price: 1200000000,
    price_type: 'total',
    city: 'Tangerang Selatan',
    district: 'BSD City',
    province: 'Banten',
    address: 'Cluster Greenwood, BSD City, Serpong, Tangerang Selatan, Banten 15310',
    postal_code: '15310',
    bedrooms: 3,
    bathrooms: 2,
    building_area: 160,
    land_area: 200,
    floors: 2,
    garage: 1,
    furnished: 'unfurnished',
    certificate: 'SHM',
    year_built: 2022,
    is_featured: false,
    is_negotiable: true,
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003dc5fb4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    ],
    features: ['Carport', 'One Gate System', 'Taman', 'Row Jalan Lebar', 'Listrik PLN', 'Air PDAM', 'Security 24 Jam'],
    views: 560,
    created_at: '2026-03-23T10:00:00Z',
    updated_at: '2026-03-26T08:00:00Z',
    lat: -6.2895,
    lng: 106.6556,
    user: { id: 'user-003', name: 'Ahmad Fauzi', whatsapp: '6282345678901', phone: '+6282345678901', type: 'pemilik', avatar: 'https://picsum.photos/seed/user003/100/100', member_since: '2024-02-20', active_listings: 3 }
  },
  {
    id: 'prop-004',
    title: 'Villa Eksotis dengan Kolam Renang Pribadi di Ubud Bali',
    slug: 'villa-eksotis-kolam-renang-ubud-bali-prop-004',
    description: 'Villa eksotis bergaya Bali tradisional dengan sentuhan modern di jantung Ubud. Dikelilingi persawahan dan hutan tropis yang hijau, villa ini menawarkan pengalaman menginap yang tak terlupakan. Dilengkapi kolam renang pribadi dengan pemandangan lembah yang memukau. Terdiri dari 4 kamar tidur dengan kamar mandi en-suite masing-masing. Dapur modern fully-furnished, ruang tamu dan ruang makan yang luas. Cocok untuk disewa sebagai properti investasi villa Bali dengan potensi return tinggi. Lokasi strategis 15 menit dari pusat seni Ubud.',
    type: 'villa',
    listing: 'disewa',
    price: 25000000,
    price_type: 'per_bulan',
    city: 'Ubud',
    district: 'Gianyar',
    province: 'Bali',
    address: 'Jl. Raya Penestanan, Ubud, Gianyar, Bali 80571',
    postal_code: '80571',
    bedrooms: 4,
    bathrooms: 3,
    building_area: 280,
    land_area: 500,
    floors: 1,
    garage: 2,
    furnished: 'furnished',
    certificate: 'SHM',
    year_built: 2019,
    is_featured: true,
    is_negotiable: true,
    images: [
      'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1540541338537-1220dda3606e?w=800&h=600&fit=crop',
    ],
    features: ['AC', 'Kolam Renang', 'Taman', 'Kitchen Set', 'Water Heater', 'Internet/WiFi', 'Balkon', 'Security 24 Jam'],
    views: 2100,
    created_at: '2026-03-18T07:00:00Z',
    updated_at: '2026-03-27T09:00:00Z',
    lat: -8.5069,
    lng: 115.2625,
    user: { id: 'user-001', name: 'Budi Santoso', whatsapp: '6281234567890', phone: '+6281234567890', type: 'agen', avatar: 'https://picsum.photos/seed/user001/100/100', member_since: '2023-01-15', active_listings: 12 }
  },
  {
    id: 'prop-005',
    title: 'Tanah Strategis Dekat Tol di Bogor Timur',
    slug: 'tanah-strategis-dekat-tol-bogor-timur-prop-005',
    description: 'Tanah strategis di Bogor Timur dengan akses mudah ke jalan tol. Lahan seluas 600m² ini sangat cocok untuk dibangun perumahan, gudang, atau showroom. Lokasi di pinggir jalan besar dengan lebar jalan 8 meter, sangat mudah diakses kendaraan besar. Sudah ada jaringan listrik PLN dan air PDAM. Berjarak hanya 3 km dari pintu tol Cibubur dan 5 km dari pusat kota Bogor. Investasi tanah di Bogor yang potensial dengan perkembangan kota yang pesat. Sertifikat SHM atas nama pemilik langsung.',
    type: 'tanah',
    listing: 'dijual',
    price: 850000000,
    price_type: 'total',
    city: 'Bogor',
    district: 'Bogor Timur',
    province: 'Jawa Barat',
    address: 'Jl. Raya Cibinong, Bogor Timur, Bogor, Jawa Barat 16710',
    postal_code: '16710',
    bedrooms: 0,
    bathrooms: 0,
    building_area: 0,
    land_area: 600,
    floors: 0,
    garage: 0,
    furnished: 'unfurnished',
    certificate: 'SHM',
    year_built: 0,
    is_featured: false,
    is_negotiable: true,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&h=600&fit=crop',
    ],
    features: ['Dekat Tol', 'Row Jalan Lebar', 'Listrik PLN', 'Air PDAM'],
    views: 340,
    created_at: '2026-03-24T11:00:00Z',
    updated_at: '2026-03-26T13:00:00Z',
    lat: -6.5951,
    lng: 106.8164,
    user: { id: 'user-002', name: 'Sari Dewi', whatsapp: '6287654321098', phone: '+6287654321098', type: 'agen', avatar: 'https://picsum.photos/seed/user002/100/100', member_since: '2022-06-10', active_listings: 8 }
  },
  {
    id: 'prop-006',
    title: 'Ruko 3 Lantai Lokasi Premium di Bandung Kota',
    slug: 'ruko-3-lantai-lokasi-premium-bandung-kota-prop-006',
    description: 'Ruko 3 lantai dengan lokasi premium di pusat kota Bandung. Properti komersial ini sangat cocok untuk berbagai jenis usaha. Lantai 1 untuk area komersial/toko, lantai 2 untuk kantor atau tempat tinggal, dan lantai 3 sebagai rooftop. Bangunan terawat baik dengan listrik 3 phase. Lokasi sangat strategis berada di jalan utama dengan traffic tinggi, dekat dengan Alun-alun Bandung, Pasar Baru, dan berbagai pusat perbelanjaan. Sertifikat SHM atas nama pemilik. Cocok untuk investasi properti komersial.',
    type: 'ruko',
    listing: 'dijual',
    price: 2800000000,
    price_type: 'total',
    city: 'Bandung',
    district: 'Bandung Kota',
    province: 'Jawa Barat',
    address: 'Jl. Asia Afrika No. 88, Braga, Bandung, Jawa Barat 40111',
    postal_code: '40111',
    bedrooms: 0,
    bathrooms: 2,
    building_area: 240,
    land_area: 80,
    floors: 3,
    garage: 0,
    furnished: 'unfurnished',
    certificate: 'SHM',
    year_built: 2018,
    is_featured: false,
    is_negotiable: false,
    images: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=800&h=600&fit=crop',
    ],
    features: ['Dekat Mall', 'Dekat Sekolah', 'Row Jalan Lebar', 'Listrik PLN', 'Rooftop'],
    views: 480,
    created_at: '2026-03-19T08:00:00Z',
    updated_at: '2026-03-25T14:00:00Z',
    lat: -6.9175,
    lng: 107.6191,
    user: { id: 'user-001', name: 'Budi Santoso', whatsapp: '6281234567890', phone: '+6281234567890', type: 'agen', avatar: 'https://picsum.photos/seed/user001/100/100', member_since: '2023-01-15', active_listings: 12 }
  },
  {
    id: 'prop-007',
    title: 'Apartemen Studio Furnished di Pusat Kota Surabaya',
    slug: 'apartemen-studio-furnished-pusat-kota-surabaya-prop-007',
    description: 'Apartemen studio fully-furnished di pusat kota Surabaya, ideal untuk profesional muda atau mahasiswa. Unit bersih dan modern dengan perabotan lengkap, termasuk tempat tidur, lemari, sofa, meja kerja, dan dapur kecil. Fasilitas gedung yang memadai termasuk kolam renang, gym, dan keamanan 24 jam. Lokasi sangat strategis, berjalan kaki ke berbagai restoran, kafe, dan pusat hiburan. Akses mudah ke berbagai transportasi umum termasuk bus kota dan stasiun kereta.',
    type: 'apartemen',
    listing: 'disewa',
    price: 4500000,
    price_type: 'per_bulan',
    city: 'Surabaya',
    district: 'Surabaya Pusat',
    province: 'Jawa Timur',
    address: 'Apartemen Ciputra World, Jl. Mayjen Sungkono, Surabaya Pusat, Jawa Timur 60256',
    postal_code: '60256',
    bedrooms: 1,
    bathrooms: 1,
    building_area: 35,
    land_area: 0,
    floors: 1,
    garage: 0,
    furnished: 'furnished',
    certificate: 'Strata Title',
    year_built: 2019,
    is_featured: false,
    is_negotiable: true,
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
    ],
    features: ['AC', 'Security 24 Jam', 'Gym', 'Internet/WiFi', 'Water Heater', 'Kitchen Set', 'Kolam Renang'],
    views: 760,
    created_at: '2026-03-21T09:00:00Z',
    updated_at: '2026-03-24T15:00:00Z',
    lat: -7.2575,
    lng: 112.7521,
    user: { id: 'user-002', name: 'Sari Dewi', whatsapp: '6287654321098', phone: '+6287654321098', type: 'agen', avatar: 'https://picsum.photos/seed/user002/100/100', member_since: '2022-06-10', active_listings: 8 }
  },
  {
    id: 'prop-008',
    title: 'Rumah Joglo Heritage di Kotagede Yogyakarta',
    slug: 'rumah-joglo-heritage-kotagede-yogyakarta-prop-008',
    description: 'Rumah Joglo heritage yang unik di kawasan bersejarah Kotagede, Yogyakarta. Properti ini memadukan keindahan arsitektur Jawa tradisional dengan sentuhan modern yang nyaman. Bangunan berusia puluhan tahun namun terawat sangat baik, dengan struktur kayu jati pilihan yang kokoh dan indah. Memiliki 4 kamar tidur dan 3 kamar mandi. Taman dalam yang luas menjadi keistimewaan tersendiri. Cocok untuk hunian keluarga yang menghargai warisan budaya atau sebagai properti komersial seperti kafe, galeri seni, atau homestay.',
    type: 'rumah',
    listing: 'dijual',
    price: 1500000000,
    price_type: 'total',
    city: 'Yogyakarta',
    district: 'Kotagede',
    province: 'DI Yogyakarta',
    address: 'Jl. Mondorakan No. 22, Kotagede, Yogyakarta, DI Yogyakarta 55172',
    postal_code: '55172',
    bedrooms: 4,
    bathrooms: 3,
    building_area: 220,
    land_area: 350,
    floors: 1,
    garage: 1,
    furnished: 'semi_furnished',
    certificate: 'SHM',
    year_built: 1985,
    is_featured: false,
    is_negotiable: true,
    images: [
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
    ],
    features: ['Taman', 'Water Heater', 'Listrik PLN', 'Air PDAM', 'Carport'],
    views: 390,
    created_at: '2026-03-25T07:00:00Z',
    updated_at: '2026-03-27T10:00:00Z',
    lat: -7.8014,
    lng: 110.3719,
    user: { id: 'user-003', name: 'Ahmad Fauzi', whatsapp: '6282345678901', phone: '+6282345678901', type: 'pemilik', avatar: 'https://picsum.photos/seed/user003/100/100', member_since: '2024-02-20', active_listings: 3 }
  },
  {
    id: 'prop-009',
    title: 'Kos Eksklusif Full AC & Furnished di Margonda Depok',
    slug: 'kos-eksklusif-full-ac-furnished-margonda-depok-prop-009',
    description: 'Kos eksklusif modern full AC dan furnished di kawasan Margonda, Depok, dekat Universitas Indonesia. Kamar luas 4x5 meter dengan kamar mandi dalam, AC split, tempat tidur springbed, lemari pakaian, meja belajar, dan WiFi kencang. Fasilitas umum: laundry, dapur bersama, ruang tamu, parkir motor dan mobil. Keamanan 24 jam dengan CCTV dan satpam. Cocok untuk mahasiswa atau profesional yang bekerja di sekitar Depok atau Jakarta Selatan. Akses mudah ke kampus UI, stasiun Pondok Cina, dan berbagai pusat perbelanjaan.',
    type: 'kos',
    listing: 'disewa',
    price: 1800000,
    price_type: 'per_bulan',
    city: 'Depok',
    district: 'Margonda',
    province: 'Jawa Barat',
    address: 'Jl. Margonda Raya No. 55, Pondok Cina, Depok, Jawa Barat 16424',
    postal_code: '16424',
    bedrooms: 1,
    bathrooms: 1,
    building_area: 20,
    land_area: 0,
    floors: 1,
    garage: 0,
    furnished: 'furnished',
    certificate: 'SHM',
    year_built: 2020,
    is_featured: false,
    is_negotiable: false,
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    ],
    features: ['AC', 'Internet/WiFi', 'Security 24 Jam', 'CCTV', 'Laundry'],
    views: 920,
    created_at: '2026-03-15T08:00:00Z',
    updated_at: '2026-03-26T09:00:00Z',
    lat: -6.3694,
    lng: 106.8313,
    user: { id: 'user-003', name: 'Ahmad Fauzi', whatsapp: '6282345678901', phone: '+6282345678901', type: 'pemilik', avatar: 'https://picsum.photos/seed/user003/100/100', member_since: '2024-02-20', active_listings: 3 }
  },
  {
    id: 'prop-010',
    title: 'Gudang Industri Luas di Kawasan Industri Bekasi',
    slug: 'gudang-industri-luas-kawasan-industri-bekasi-prop-010',
    description: 'Gudang industri luas di kawasan industri terpadu Bekasi. Properti ini sangat cocok untuk kebutuhan pergudangan, logistik, atau manufaktur. Luas bangunan 1.200m² dengan tinggi plafon 8 meter, dilengkapi loading dock 3 pintu untuk truk besar. Listrik 3 phase kapasitas 100kVA. Jalan lingkungan lebar untuk akses kendaraan besar. Lokasi strategis di kawasan industri Bekasi dengan akses langsung ke Jalan Tol Jakarta-Cikampek. Security 24 jam dengan CCTV. Sertifikat HGB atas nama perusahaan.',
    type: 'gudang',
    listing: 'disewa',
    price: 35000000,
    price_type: 'per_bulan',
    city: 'Bekasi',
    district: 'Cikarang',
    province: 'Jawa Barat',
    address: 'Kawasan Industri MM2100, Cikarang Barat, Bekasi, Jawa Barat 17520',
    postal_code: '17520',
    bedrooms: 0,
    bathrooms: 2,
    building_area: 1200,
    land_area: 1500,
    floors: 1,
    garage: 0,
    furnished: 'unfurnished',
    certificate: 'HGB',
    year_built: 2015,
    is_featured: false,
    is_negotiable: true,
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop',
    ],
    features: ['Security 24 Jam', 'CCTV', 'Listrik PLN', 'Row Jalan Lebar', 'Dekat Tol'],
    views: 280,
    created_at: '2026-03-17T10:00:00Z',
    updated_at: '2026-03-24T12:00:00Z',
    lat: -6.3587,
    lng: 107.1381,
    user: { id: 'user-001', name: 'Budi Santoso', whatsapp: '6281234567890', phone: '+6281234567890', type: 'agen', avatar: 'https://picsum.photos/seed/user001/100/100', member_since: '2023-01-15', active_listings: 12 }
  },
  {
    id: 'prop-011',
    title: 'Rumah Minimalis 2 Lantai di Perumahan Elite Malang',
    slug: 'rumah-minimalis-2-lantai-perumahan-elite-malang-prop-011',
    description: 'Rumah minimalis modern 2 lantai di perumahan elite Malang. Properti ini sangat cocok untuk keluarga muda yang menginginkan hunian modern dan nyaman di kota Malang. Desain minimalis yang elegan dengan penggunaan material premium. Dilengkapi 4 kamar tidur, 3 kamar mandi, dan garasi untuk 2 mobil. Lokasi di perumahan tertutup dengan one gate system dan keamanan 24 jam. Dekat dengan pusat kota Malang, berbagai sekolah favorit, rumah sakit, dan pusat perbelanjaan.',
    type: 'rumah',
    listing: 'dijual',
    price: 980000000,
    price_type: 'total',
    city: 'Malang',
    district: 'Lowokwaru',
    province: 'Jawa Timur',
    address: 'Perumahan Griya Shanta, Jl. Sukarno Hatta, Lowokwaru, Malang, Jawa Timur 65141',
    postal_code: '65141',
    bedrooms: 4,
    bathrooms: 3,
    building_area: 200,
    land_area: 250,
    floors: 2,
    garage: 2,
    furnished: 'semi_furnished',
    certificate: 'SHM',
    year_built: 2021,
    is_featured: false,
    is_negotiable: true,
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&h=600&fit=crop',
    ],
    features: ['AC', 'Carport', 'Taman', 'Security 24 Jam', 'One Gate System', 'CCTV', 'Water Heater'],
    views: 445,
    created_at: '2026-03-16T09:00:00Z',
    updated_at: '2026-03-25T11:00:00Z',
    lat: -7.9375,
    lng: 112.6143,
    user: { id: 'user-002', name: 'Sari Dewi', whatsapp: '6287654321098', phone: '+6287654321098', type: 'agen', avatar: 'https://picsum.photos/seed/user002/100/100', member_since: '2022-06-10', active_listings: 8 }
  },
  {
    id: 'prop-012',
    title: 'Apartemen 2BR Furnished di Setiabudi Jakarta Selatan',
    slug: 'apartemen-2br-furnished-setiabudi-jakarta-selatan-prop-012',
    description: 'Apartemen 2 kamar tidur fully-furnished di kawasan premium Setiabudi, Jakarta Selatan. Unit ini telah direnovasi total dengan interior modern dan material premium. Dilengkapi furnitur lengkap termasuk 2 set kasur queen, lemari built-in, sofa, smart TV, kitchen set, dan washing machine. Fasilitas gedung mewah meliputi kolam renang infinity, gym, taman bermain, dan concierge 24 jam. Lokasi sangat strategis di jantung bisnis Jakarta Selatan, dekat SCBD, Kuningan, dan berbagai kantor pusat perusahaan.',
    type: 'apartemen',
    listing: 'disewa',
    price: 18000000,
    price_type: 'per_bulan',
    city: 'Jakarta Selatan',
    district: 'Setiabudi',
    province: 'DKI Jakarta',
    address: 'Apartemen District 8, SCBD, Senopati, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190',
    postal_code: '12190',
    bedrooms: 2,
    bathrooms: 2,
    building_area: 78,
    land_area: 0,
    floors: 1,
    garage: 1,
    furnished: 'furnished',
    certificate: 'Strata Title',
    year_built: 2018,
    is_featured: false,
    is_negotiable: true,
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
    ],
    features: ['AC', 'Kolam Renang', 'Gym', 'Security 24 Jam', 'Internet/WiFi', 'Water Heater', 'Kitchen Set', 'Balkon'],
    views: 1100,
    created_at: '2026-03-14T08:00:00Z',
    updated_at: '2026-03-27T08:00:00Z',
    lat: -6.2254,
    lng: 106.8150,
    user: { id: 'user-001', name: 'Budi Santoso', whatsapp: '6281234567890', phone: '+6281234567890', type: 'agen', avatar: 'https://picsum.photos/seed/user001/100/100', member_since: '2023-01-15', active_listings: 12 }
  },
  {
    id: 'prop-013',
    title: 'Tanah Kavling View Gunung di Cimahi Bandung',
    slug: 'tanah-kavling-view-gunung-cimahi-bandung-prop-013',
    description: 'Tanah kavling dengan pemandangan gunung yang indah di Cimahi, dekat Bandung. Lokasi ideal untuk membangun rumah impian dengan suasana sejuk dan alami. Tanah seluas 300m² di kawasan perumahan berkembang, bebas banjir, dan memiliki udara segar pegunungan. Jaringan listrik PLN dan air bersih tersedia. Berjarak 20 menit dari pusat kota Bandung dan dekat dengan berbagai tempat wisata alam. Jalan lingkungan sudah beraspal. Investasi tanah yang menguntungkan di lokasi yang terus berkembang.',
    type: 'tanah',
    listing: 'dijual',
    price: 450000000,
    price_type: 'total',
    city: 'Bandung',
    district: 'Cimahi',
    province: 'Jawa Barat',
    address: 'Perumahan Green Valley, Cimahi Utara, Kota Cimahi, Jawa Barat 40514',
    postal_code: '40514',
    bedrooms: 0,
    bathrooms: 0,
    building_area: 0,
    land_area: 300,
    floors: 0,
    garage: 0,
    furnished: 'unfurnished',
    certificate: 'SHM',
    year_built: 0,
    is_featured: false,
    is_negotiable: true,
    images: [
      'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&h=600&fit=crop',
    ],
    features: ['Listrik PLN', 'Air PDAM', 'Row Jalan Lebar'],
    views: 220,
    created_at: '2026-03-26T08:00:00Z',
    updated_at: '2026-03-27T07:00:00Z',
    lat: -6.8730,
    lng: 107.5420,
    user: { id: 'user-003', name: 'Ahmad Fauzi', whatsapp: '6282345678901', phone: '+6282345678901', type: 'pemilik', avatar: 'https://picsum.photos/seed/user003/100/100', member_since: '2024-02-20', active_listings: 3 }
  },
  {
    id: 'prop-014',
    title: 'Rumah Mewah dengan Private Pool di Pondok Indah Jakarta',
    slug: 'rumah-mewah-private-pool-pondok-indah-jakarta-prop-014',
    description: 'Rumah mewah eksklusif di kawasan perumahan Pondok Indah, salah satu kawasan residensial paling bergengsi di Jakarta. Properti dengan desain arsitektur Mediterania yang megah, memiliki 6 kamar tidur dengan kamar mandi en-suite, kolam renang privat, taman luas, dan garasi 3 mobil. Interior menggunakan material impor berkualitas tinggi. Dilengkapi home theater, bar, dan gym pribadi. Keamanan ekstra ketat dengan security 24 jam dan CCTV di seluruh area. Cocok untuk ekspatriat atau keluarga high-profile.',
    type: 'rumah',
    listing: 'dijual',
    price: 8500000000,
    price_type: 'total',
    city: 'Jakarta Selatan',
    district: 'Pondok Indah',
    province: 'DKI Jakarta',
    address: 'Jl. Pondok Indah I No. 7, Pondok Pinang, Kebayoran Lama, Jakarta Selatan, DKI Jakarta 12310',
    postal_code: '12310',
    bedrooms: 6,
    bathrooms: 6,
    building_area: 550,
    land_area: 700,
    floors: 3,
    garage: 3,
    furnished: 'furnished',
    certificate: 'SHM',
    year_built: 2019,
    is_featured: true,
    is_negotiable: false,
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop',
    ],
    features: ['AC', 'Kolam Renang', 'CCTV', 'Security 24 Jam', 'Taman', 'Kitchen Set', 'Water Heater', 'Internet/WiFi', 'Gym', 'Balkon', 'Rooftop'],
    views: 3200,
    created_at: '2026-03-12T07:00:00Z',
    updated_at: '2026-03-26T15:00:00Z',
    lat: -6.2650,
    lng: 106.7744,
    user: { id: 'user-001', name: 'Budi Santoso', whatsapp: '6281234567890', phone: '+6281234567890', type: 'agen', avatar: 'https://picsum.photos/seed/user001/100/100', member_since: '2023-01-15', active_listings: 12 }
  },
  {
    id: 'prop-015',
    title: 'Kantor Modern Co-working Space di Kuningan Jakarta',
    slug: 'kantor-modern-co-working-kuningan-jakarta-prop-015',
    description: 'Ruang kantor modern siap pakai di kawasan bisnis premium Kuningan, Jakarta Selatan. Cocok untuk startup, UKM, atau perusahaan yang ingin berkantor di lokasi bergengsi tanpa investasi besar. Ruangan seluas 150m² sudah fully-furnished dengan meja kerja, kursi ergonomis, partisi, dan pantri. Fasilitas gedung: resepsionis, ruang meeting, koneksi internet dedicated, lift, genset, dan parkir basement. Tersedia berbagai pilihan durasi sewa: bulanan atau tahunan.',
    type: 'kantor',
    listing: 'disewa',
    price: 30000000,
    price_type: 'per_bulan',
    city: 'Jakarta Selatan',
    district: 'Kuningan',
    province: 'DKI Jakarta',
    address: 'Gedung Menara Kuningan Lt. 8, Jl. HR Rasuna Said, Kuningan, Jakarta Selatan, DKI Jakarta 12940',
    postal_code: '12940',
    bedrooms: 0,
    bathrooms: 2,
    building_area: 150,
    land_area: 0,
    floors: 1,
    garage: 2,
    furnished: 'furnished',
    certificate: 'Strata Title',
    year_built: 2016,
    is_featured: false,
    is_negotiable: true,
    images: [
      'https://images.unsplash.com/photo-1625602812206-5ec545ca1231?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    ],
    features: ['AC', 'Security 24 Jam', 'Internet/WiFi', 'CCTV', 'Lift', 'Genset'],
    views: 380,
    created_at: '2026-03-13T09:00:00Z',
    updated_at: '2026-03-25T16:00:00Z',
    lat: -6.2180,
    lng: 106.8310,
    user: { id: 'user-002', name: 'Sari Dewi', whatsapp: '6287654321098', phone: '+6287654321098', type: 'agen', avatar: 'https://picsum.photos/seed/user002/100/100', member_since: '2022-06-10', active_listings: 8 }
  },
  {
    id: 'prop-016',
    title: 'Rumah Siap Huni di Gading Serpong Tangerang',
    slug: 'rumah-siap-huni-gading-serpong-tangerang-prop-016',
    description: 'Rumah siap huni di kawasan perumahan Gading Serpong yang terkenal, Tangerang. Properti ini berada di cluster yang tenang dengan keamanan sistem one gate. Rumah 2 lantai dengan 4 kamar tidur dan 3 kamar mandi. Kondisi bangunan baik dan terawat. Dekat dengan berbagai fasilitas publik seperti sekolah, rumah sakit Siloam, mall Summarecon, dan akses tol JORR. Investasi properti yang sangat menjanjikan di kawasan yang terus berkembang. Bisa KPR, nego untuk pembeli serius.',
    type: 'rumah',
    listing: 'dijual',
    price: 2100000000,
    price_type: 'total',
    city: 'Tangerang',
    district: 'Gading Serpong',
    province: 'Banten',
    address: 'Cluster Mediterranean, Gading Serpong, Tangerang, Banten 15810',
    postal_code: '15810',
    bedrooms: 4,
    bathrooms: 3,
    building_area: 240,
    land_area: 300,
    floors: 2,
    garage: 2,
    furnished: 'semi_furnished',
    certificate: 'SHM',
    year_built: 2020,
    is_featured: false,
    is_negotiable: true,
    images: [
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560185127-6a8b9da8d5a4?w=800&h=600&fit=crop',
    ],
    features: ['AC', 'Carport', 'Taman', 'Security 24 Jam', 'One Gate System', 'Kitchen Set', 'Water Heater'],
    views: 670,
    created_at: '2026-03-11T08:00:00Z',
    updated_at: '2026-03-26T10:00:00Z',
    lat: -6.2421,
    lng: 106.6149,
    user: { id: 'user-003', name: 'Ahmad Fauzi', whatsapp: '6282345678901', phone: '+6282345678901', type: 'pemilik', avatar: 'https://picsum.photos/seed/user003/100/100', member_since: '2024-02-20', active_listings: 3 }
  },
  {
    id: 'prop-017',
    title: 'Ruko 2 Lantai Strategis di Jl. Raya Bogor Depok',
    slug: 'ruko-2-lantai-strategis-jl-raya-bogor-depok-prop-017',
    description: 'Ruko 2 lantai di lokasi sangat strategis di Jalan Raya Bogor, Depok. Properti komersial ini cocok untuk berbagai jenis usaha mulai dari restoran, toko retail, kantor, klinik, hingga minimarket. Lalu lintas tinggi di depan ruko menjamin visibilitas usaha. Bangunan modern dengan fasad yang menarik. Listrik daya 4.400 watt, air PAM. Dekat dengan kampus Universitas Indonesia dan akses mudah ke tol. Sertifikat HGB masih berlaku panjang.',
    type: 'ruko',
    listing: 'disewa',
    price: 15000000,
    price_type: 'per_bulan',
    city: 'Depok',
    district: 'Cimanggis',
    province: 'Jawa Barat',
    address: 'Jl. Raya Bogor KM. 32, Cimanggis, Depok, Jawa Barat 16454',
    postal_code: '16454',
    bedrooms: 0,
    bathrooms: 2,
    building_area: 120,
    land_area: 60,
    floors: 2,
    garage: 0,
    furnished: 'unfurnished',
    certificate: 'HGB',
    year_built: 2017,
    is_featured: false,
    is_negotiable: true,
    images: [
      'https://images.unsplash.com/photo-1440502163296-4a3d03f0b7ba?w=800&h=600&fit=crop',
    ],
    features: ['Listrik PLN', 'Air PDAM', 'Row Jalan Lebar', 'Dekat Tol'],
    views: 190,
    created_at: '2026-03-27T08:00:00Z',
    updated_at: '2026-03-27T08:00:00Z',
    lat: -6.3714,
    lng: 106.8870,
    user: { id: 'user-002', name: 'Sari Dewi', whatsapp: '6287654321098', phone: '+6287654321098', type: 'agen', avatar: 'https://picsum.photos/seed/user002/100/100', member_since: '2022-06-10', active_listings: 8 }
  },
  {
    id: 'prop-018',
    title: 'Tanah Luas di Pinggir Pantai Seminyak Bali',
    slug: 'tanah-luas-pinggir-pantai-seminyak-bali-prop-018',
    description: 'Tanah luas di kawasan premium Seminyak, Bali, sangat dekat dengan pantai. Tanah seluas 800m² ini merupakan peluang investasi emas di kawasan wisata terbaik Bali. Lokasi strategis hanya 200 meter dari Pantai Seminyak yang terkenal. Cocok untuk dibangun villa luxury, hotel butik, atau resort. Kawasan Seminyak merupakan destinasi wisata premium dengan tingkat hunian tinggi sepanjang tahun. Harga tanah di kawasan ini terus meningkat dari tahun ke tahun.',
    type: 'tanah',
    listing: 'dijual',
    price: 3200000000,
    price_type: 'total',
    city: 'Denpasar',
    district: 'Seminyak',
    province: 'Bali',
    address: 'Jl. Kayu Aya, Seminyak, Kuta, Badung, Bali 80361',
    postal_code: '80361',
    bedrooms: 0,
    bathrooms: 0,
    building_area: 0,
    land_area: 800,
    floors: 0,
    garage: 0,
    furnished: 'unfurnished',
    certificate: 'SHM',
    year_built: 0,
    is_featured: false,
    is_negotiable: true,
    images: [
      'https://images.unsplash.com/photo-1602343168117-bb8a12d7c180?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop',
    ],
    features: ['Listrik PLN', 'Air PDAM', 'Dekat Pantai'],
    views: 850,
    created_at: '2026-03-10T07:00:00Z',
    updated_at: '2026-03-25T12:00:00Z',
    lat: -8.6921,
    lng: 115.1551,
    user: { id: 'user-001', name: 'Budi Santoso', whatsapp: '6281234567890', phone: '+6281234567890', type: 'agen', avatar: 'https://picsum.photos/seed/user001/100/100', member_since: '2023-01-15', active_listings: 12 }
  },
  {
    id: 'prop-019',
    title: 'Rumah Hook Asri di Komplek Elite Cipete Jakarta',
    slug: 'rumah-hook-asri-komplek-elite-cipete-jakarta-prop-019',
    description: 'Rumah hook (pojok) yang asri dan luas di komplek elite Cipete, Jakarta Selatan. Posisi hook memberikan keuntungan lahan yang lebih luas dan sirkulasi udara yang lebih baik. Rumah 2 lantai dengan desain tropis modern, 4 kamar tidur, 3 kamar mandi, dan garasi 2 mobil. Taman depan dan belakang yang hijau. Renovasi terbaru tahun 2023 dengan dapur baru, cat baru, dan penambahan sistem CCTV. Dekat dengan berbagai sekolah internasional, restoran, kafe, dan akses mudah ke Kemang.',
    type: 'rumah',
    listing: 'dijual',
    price: 5500000000,
    price_type: 'total',
    city: 'Jakarta Selatan',
    district: 'Cipete',
    province: 'DKI Jakarta',
    address: 'Jl. Cipete Raya No. 44, Cipete Selatan, Cilandak, Jakarta Selatan, DKI Jakarta 12410',
    postal_code: '12410',
    bedrooms: 4,
    bathrooms: 3,
    building_area: 300,
    land_area: 400,
    floors: 2,
    garage: 2,
    furnished: 'semi_furnished',
    certificate: 'SHM',
    year_built: 2005,
    is_featured: false,
    is_negotiable: true,
    images: [
      'https://images.unsplash.com/photo-1598228723793-5d77df5e0e0a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&h=600&fit=crop',
    ],
    features: ['AC', 'CCTV', 'Taman', 'Kitchen Set', 'Water Heater', 'Carport', 'Balkon'],
    views: 580,
    created_at: '2026-03-08T09:00:00Z',
    updated_at: '2026-03-24T14:00:00Z',
    lat: -6.2884,
    lng: 106.7989,
    user: { id: 'user-003', name: 'Ahmad Fauzi', whatsapp: '6282345678901', phone: '+6282345678901', type: 'pemilik', avatar: 'https://picsum.photos/seed/user003/100/100', member_since: '2024-02-20', active_listings: 3 }
  },
  {
    id: 'prop-020',
    title: 'Apartemen 3BR Mewah di Pakubuwono Residence Jakarta',
    slug: 'apartemen-3br-mewah-pakubuwono-residence-jakarta-prop-020',
    description: 'Apartemen 3 kamar tidur mewah di Pakubuwono Residence, salah satu apartemen paling prestisius di Jakarta Selatan. Unit ini terletak di lantai 30 dengan pemandangan kota Jakarta yang spektakuler. Interior desain oleh interior designer ternama dengan material impor premium. Fully-furnished dengan perabotan mewah brand internasional. Fasilitas lengkap: infinity pool, sky garden, gymnasium, spa, concierge service 24/7, dan basement parking. Lokasi sangat strategis di Kebayoran Baru.',
    type: 'apartemen',
    listing: 'disewa',
    price: 65000000,
    price_type: 'per_bulan',
    city: 'Jakarta Selatan',
    district: 'Kebayoran Baru',
    province: 'DKI Jakarta',
    address: 'Pakubuwono Residence, Jl. Pakubuwono VI, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12120',
    postal_code: '12120',
    bedrooms: 3,
    bathrooms: 3,
    building_area: 185,
    land_area: 0,
    floors: 1,
    garage: 2,
    furnished: 'furnished',
    certificate: 'Strata Title',
    year_built: 2015,
    is_featured: false,
    is_negotiable: false,
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
    ],
    features: ['AC', 'Kolam Renang', 'Gym', 'Security 24 Jam', 'Internet/WiFi', 'Water Heater', 'Kitchen Set', 'Balkon', 'Rooftop', 'CCTV'],
    views: 1450,
    created_at: '2026-03-05T08:00:00Z',
    updated_at: '2026-03-23T13:00:00Z',
    lat: -6.2359,
    lng: 106.7949,
    user: { id: 'user-002', name: 'Sari Dewi', whatsapp: '6287654321098', phone: '+6287654321098', type: 'agen', avatar: 'https://picsum.photos/seed/user002/100/100', member_since: '2022-06-10', active_listings: 8 }
  },
];

// ============================
// UTILITY FUNCTIONS
// ============================
function formatRupiah(angka) {
  if (!angka && angka !== 0) return 'Rp 0';
  return 'Rp ' + parseInt(angka).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function formatPrice(property) {
  const price = formatRupiah(property.price);
  if (property.price_type === 'per_bulan') return price + '/bulan';
  if (property.price_type === 'per_tahun') return price + '/tahun';
  return price;
}

function relativeTime(dateStr) {
  const now = new Date();
  const date = new Date(dateStr);
  const diff = Math.floor((now - date) / 1000);
  if (diff < 60) return 'Baru saja';
  if (diff < 3600) return Math.floor(diff/60) + ' menit yang lalu';
  if (diff < 86400) return Math.floor(diff/3600) + ' jam yang lalu';
  if (diff < 604800) return Math.floor(diff/86400) + ' hari yang lalu';
  if (diff < 2592000) return Math.floor(diff/604800) + ' minggu yang lalu';
  return date.toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
}

function showToast(msg, type='info') {
  const existing = document.getElementById('rumahkita-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.id = 'rumahkita-toast';
  toast.style.cssText = `position:fixed;bottom:24px;right:24px;z-index:99999;background:${type==='success'?'#16a34a':type==='error'?'#dc2626':'#374151'};color:white;padding:14px 20px;border-radius:12px;font-size:14px;font-weight:500;box-shadow:0 8px 32px rgba(0,0,0,0.2);max-width:320px;transform:translateY(20px);opacity:0;transition:all 0.3s;`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  requestAnimationFrame(() => { toast.style.transform = 'translateY(0)'; toast.style.opacity = '1'; });
  setTimeout(() => { toast.style.transform = 'translateY(20px)'; toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3500);
}

function toggleFavorite(id, btn) {
  const key = 'fav_' + id;
  const isFav = localStorage.getItem(key) === '1';
  if (isFav) {
    localStorage.removeItem(key);
    if (btn) { btn.innerHTML = '<i class="far fa-heart text-sm text-gray-400"></i>'; btn.classList.remove('active'); }
    showToast('Dihapus dari favorit', 'info');
  } else {
    localStorage.setItem(key, '1');
    if (btn) { btn.innerHTML = '<i class="fas fa-heart text-sm text-red-500"></i>'; btn.classList.add('active'); }
    showToast('Ditambahkan ke favorit ❤️', 'success');
  }
  return !isFav;
}

function isFavorite(id) {
  return localStorage.getItem('fav_' + id) === '1';
}

function getTypeLabel(type) {
  const map = { rumah: 'Rumah', apartemen: 'Apartemen', tanah: 'Tanah', ruko: 'Ruko', kos: 'Kos', villa: 'Villa', gudang: 'Gudang', kantor: 'Kantor' };
  return map[type] || type;
}

function getFurnishedLabel(f) {
  const map = { furnished: 'Furnished', semi_furnished: 'Semi Furnished', unfurnished: 'Unfurnished' };
  return map[f] || f;
}

function createPropertyCard(p, extraClass='') {
  const priceLabel = formatPrice(p);
  const specs = [];
  if (p.bedrooms > 0) specs.push(`<span title="Kamar Tidur">🛏 ${p.bedrooms}</span>`);
  if (p.bathrooms > 0) specs.push(`<span title="Kamar Mandi">🚿 ${p.bathrooms}</span>`);
  if (p.building_area > 0) specs.push(`<span title="Luas Bangunan">📐 ${p.building_area}m²</span>`);
  if (p.land_area > 0) specs.push(`<span title="Luas Tanah">📏 ${p.land_area}m²</span>`);
  const imgSrc = p.images[0] || 'https://picsum.photos/seed/default/800/600';
  const fav = isFavorite(p.id);

  return `<div class="property-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover ${extraClass}" onclick="location.href='detail-properti.html?id=${p.id}'" style="cursor:pointer;">
    <div class="relative" style="padding-top:66.67%;">
      <img src="${imgSrc}" alt="${p.title}" class="absolute inset-0 w-full h-full object-cover" loading="lazy" onerror="this.src='https://picsum.photos/seed/fallback/800/600'">
      <div class="absolute top-3 left-3 flex gap-1.5">
        <span class="${p.listing === 'dijual' ? 'bg-blue-600' : 'bg-green-600'} text-white text-xs px-2 py-1 rounded-full font-semibold">${p.listing === 'dijual' ? 'Dijual' : 'Disewa'}</span>
        ${p.is_featured ? '<span class="bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-semibold">⭐ Unggulan</span>' : ''}
      </div>
      <button onclick="event.stopPropagation(); handleFavorite('${p.id}',this)" id="fav-btn-${p.id}" class="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:scale-110 transition">
        <i class="${fav?'fas text-red-500':'far text-gray-400'} fa-heart text-sm"></i>
      </button>
      <div class="absolute bottom-2 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">📷 ${p.images.length}</div>
    </div>
    <div class="p-4">
      <div class="flex items-start justify-between gap-2 mb-1">
        <div class="text-blue-600 text-base font-extrabold leading-tight">${priceLabel}</div>
        ${p.is_negotiable ? '<span class="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-medium shrink-0">Nego</span>' : ''}
      </div>
      <h3 class="text-gray-900 font-semibold text-sm mb-1 line-clamp-2 leading-snug">${p.title}</h3>
      <p class="text-gray-500 text-xs mb-2">📍 ${p.district ? p.district + ', ' : ''}${p.city}</p>
      ${specs.length ? `<div class="flex flex-wrap gap-2 text-xs text-gray-600 mb-2">${specs.join('')}</div>` : ''}
      <div class="flex items-center justify-between pt-2 border-t border-gray-50">
        <span class="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">${getTypeLabel(p.type)}</span>
        <span class="text-xs text-gray-400">${relativeTime(p.created_at)}</span>
      </div>
    </div>
  </div>`;
}

function handleFavorite(id, btn) {
  const fav = toggleFavorite(id, btn);
}

// Shared navigation builder
function buildNavbar(activePage) {
  const user = JSON.parse(localStorage.getItem('rumahkita_user') || 'null');
  return user ? buildLoggedInNav(user) : buildLoggedOutNav();
}

function buildLoggedOutNav() {
  return `<a href="tambah-properti.html" class="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition"><i class="fas fa-plus mr-1"></i>Pasang Iklan</a>
    <a href="login.html" class="text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition">Masuk</a>
    <a href="register.html" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">Daftar</a>`;
}

function buildLoggedInNav(user) {
  return `<a href="tambah-properti.html" class="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition"><i class="fas fa-plus mr-1"></i>Pasang Iklan</a>
    <div class="relative">
      <button onclick="document.getElementById('userDropdown').classList.toggle('open')" class="flex items-center gap-2 p-1.5 rounded-full hover:bg-gray-100">
        <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">${user.name.charAt(0).toUpperCase()}</div>
        <i class="fas fa-chevron-down text-xs text-gray-500"></i>
      </button>
      <div id="userDropdown" class="dropdown-menu">
        <a href="dashboard.html" class="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"><i class="fas fa-th-large mr-2 text-blue-600"></i>Dashboard</a>
        <a href="profil.html" class="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg"><i class="fas fa-user mr-2 text-gray-500"></i>Profil</a>
        <hr class="my-1 border-gray-100">
        <button onclick="doLogout()" class="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"><i class="fas fa-sign-out-alt mr-2"></i>Keluar</button>
      </div>
    </div>`;
}

function doLogout() {
  localStorage.removeItem('rumahkita_user');
  showToast('Berhasil keluar', 'success');
  setTimeout(() => window.location.href = 'index.html', 1000);
}

// Close dropdowns on outside click
document.addEventListener('click', e => {
  const dd = document.getElementById('userDropdown');
  if (dd && !e.target.closest('#userDropdown') && !e.target.closest('[onclick*="userDropdown"]')) {
    dd.classList.remove('open');
  }
});
