-- ============================
-- RUMAHKITA SEED DATA
-- 20 Properti Realistis Indonesia
-- ============================
-- CATATAN: Jalankan setelah schema.sql
-- Ganti user_id dengan UUID valid dari auth.users Anda

-- Insert dummy users ke profiles (sesuaikan UUID dengan auth.users)
-- Atau buat user terlebih dahulu via Supabase Auth, lalu update profiles

-- Untuk demo: INSERT langsung ke profiles (bypassing auth)
INSERT INTO public.profiles (id, email, full_name, phone, whatsapp, city, bio, account_type, is_verified) VALUES
(
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  'budi.santoso@rumahkita.com',
  'Budi Santoso',
  '021-1234-5678',
  '6281234567890',
  'Jakarta Selatan',
  'Agen properti profesional dengan pengalaman lebih dari 10 tahun di bidang properti premium Jakarta. Spesialisasi rumah mewah dan apartemen eksklusif.',
  'agen',
  true
),
(
  'b2c3d4e5-f6a7-8901-bcde-f12345678901',
  'sari.dewi@rumahkita.com',
  'Sari Dewi',
  '021-2345-6789',
  '6287654321098',
  'Surabaya',
  'Spesialis properti di Surabaya, Bali, dan sekitarnya. Memiliki jaringan luas dengan developer terpercaya.',
  'agen',
  true
),
(
  'c3d4e5f6-a7b8-9012-cdef-123456789012',
  'ahmad.fauzi@rumahkita.com',
  'Ahmad Fauzi',
  '0274-123456',
  '6282345678901',
  'Yogyakarta',
  'Pemilik beberapa properti di Yogyakarta, Depok, dan Bogor. Jual dan sewa langsung tanpa perantara.',
  'pemilik',
  false
);

-- ============================
-- INSERT 20 PROPERTI
-- ============================

-- 1. Rumah Mewah di Kemang Jakarta Selatan (DIJUAL)
INSERT INTO public.properties (
  user_id, title, description, listing_type, property_type, status,
  price, price_type, is_negotiable, bedrooms, bathrooms, building_area,
  land_area, floors, garage, furnished, address, city, district, province,
  postal_code, latitude, longitude, images, features, certificate, year_built,
  views, is_featured
) VALUES (
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  'Rumah Mewah Modern di Kemang Jakarta Selatan',
  'Rumah mewah dengan desain modern kontemporer berlokasi di jantung Kemang, Jakarta Selatan. Properti ini menawarkan kehidupan premium dengan fasilitas lengkap. Dibangun pada tahun 2021 dengan material berkualitas tinggi, rumah ini memiliki 5 kamar tidur dan 4 kamar mandi yang luas. Area taman yang asri dan kolam renang pribadi menjadi daya tarik utama. Lokasi strategis dekat dengan berbagai pusat perbelanjaan, restoran internasional, sekolah internasional, dan akses mudah ke jalan tol. Cocok untuk keluarga besar yang menginginkan kenyamanan dan prestise tinggal di kawasan premium Jakarta Selatan.',
  'dijual', 'rumah', 'aktif',
  4500000000, 'total', true, 5, 4, 350, 420, 2, 2, 'furnished',
  'Jl. Kemang Raya No. 15, Kemang, Jakarta Selatan, DKI Jakarta 12730',
  'Jakarta Selatan', 'Kemang', 'DKI Jakarta', '12730',
  -6.2615, 106.8106,
  ARRAY['https://picsum.photos/seed/prop001a/800/600','https://picsum.photos/seed/prop001b/800/600','https://picsum.photos/seed/prop001c/800/600','https://picsum.photos/seed/prop001d/800/600','https://picsum.photos/seed/prop001e/800/600'],
  ARRAY['AC','Kolam Renang','CCTV','Security 24 Jam','Taman','Kitchen Set','Water Heater','Internet/WiFi','Carport','Balkon'],
  'SHM', 2021, 1250, true
);

-- 2. Apartemen Premium di Ancol Jakarta Utara (DIJUAL)
INSERT INTO public.properties (
  user_id, title, description, listing_type, property_type, status,
  price, price_type, is_negotiable, bedrooms, bathrooms, building_area,
  land_area, floors, garage, furnished, address, city, district, province,
  postal_code, latitude, longitude, images, features, certificate, year_built,
  views, is_featured
) VALUES (
  'b2c3d4e5-f6a7-8901-bcde-f12345678901',
  'Apartemen Premium View Laut di Ancol Jakarta Utara',
  'Apartemen premium dengan pemandangan laut yang memukau di kawasan Ancol, Jakarta Utara. Unit ini terletak di lantai 25 dengan view pantai Ancol yang luar biasa. Dilengkapi dengan fasilitas bintang 5 termasuk kolam renang infinity, gym modern, dan sky lounge. Interior semi-furnished dengan kitchen set mewah, AC split, dan water heater premium. Akses mudah ke Tol Ancol dan kawasan Kelapa Gading. Investasi properti sangat menguntungkan di lokasi premium ini dengan ROI yang menarik.',
  'dijual', 'apartemen', 'aktif',
  1850000000, 'total', false, 3, 2, 120, 0, 1, 1, 'semi_furnished',
  'Apartemen The Bay, Jl. Lodan Raya No. 2, Ancol, Jakarta Utara, DKI Jakarta 14430',
  'Jakarta Utara', 'Ancol', 'DKI Jakarta', '14430',
  -6.1254, 106.8485,
  ARRAY['https://picsum.photos/seed/prop002a/800/600','https://picsum.photos/seed/prop002b/800/600','https://picsum.photos/seed/prop002c/800/600','https://picsum.photos/seed/prop002d/800/600'],
  ARRAY['AC','Gym','Kolam Renang','Security 24 Jam','Internet/WiFi','Water Heater','Kitchen Set','Rooftop'],
  'Strata Title', 2020, 870, true
);

-- 3. Rumah Cluster BSD City Tangerang Selatan (DIJUAL)
INSERT INTO public.properties (
  user_id, title, description, listing_type, property_type, status,
  price, price_type, is_negotiable, bedrooms, bathrooms, building_area,
  land_area, floors, garage, furnished, address, city, district, province,
  postal_code, latitude, longitude, images, features, certificate, year_built,
  views, is_featured
) VALUES (
  'c3d4e5f6-a7b8-9012-cdef-123456789012',
  'Rumah Cluster Strategis di BSD City Tangerang Selatan',
  'Rumah cluster modern dalam perumahan eksklusif BSD City, Tangerang Selatan. Properti ini sangat strategis karena berada di dalam kawasan perumahan terpadu BSD City yang terkenal. Rumah dua lantai dengan desain minimalis modern, memiliki 3 kamar tidur dan 2 kamar mandi. Dilengkapi carport untuk 1 mobil dan taman kecil yang asri. Kawasan BSD City terkenal dengan fasilitas lengkap termasuk mall, rumah sakit, sekolah internasional, dan akses tol langsung. One gate system dengan security 24 jam menjamin keamanan penghuni.',
  'dijual', 'rumah', 'aktif',
  1200000000, 'total', true, 3, 2, 160, 200, 2, 1, 'unfurnished',
  'Cluster Greenwood, BSD City, Serpong, Tangerang Selatan, Banten 15310',
  'Tangerang Selatan', 'BSD City', 'Banten', '15310',
  -6.2895, 106.6556,
  ARRAY['https://picsum.photos/seed/prop003a/800/600','https://picsum.photos/seed/prop003b/800/600','https://picsum.photos/seed/prop003c/800/600'],
  ARRAY['Carport','One Gate System','Taman','Row Jalan Lebar','Listrik PLN','Air PDAM','Security 24 Jam'],
  'SHM', 2022, 560, false
);

-- 4. Villa di Ubud Bali (DISEWA)
INSERT INTO public.properties (
  user_id, title, description, listing_type, property_type, status,
  price, price_type, is_negotiable, bedrooms, bathrooms, building_area,
  land_area, floors, garage, furnished, address, city, district, province,
  postal_code, latitude, longitude, images, features, certificate, year_built,
  views, is_featured
) VALUES (
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  'Villa Eksotis dengan Kolam Renang Pribadi di Ubud Bali',
  'Villa eksotis bergaya Bali tradisional dengan sentuhan modern di jantung Ubud. Dikelilingi persawahan dan hutan tropis yang hijau, villa ini menawarkan pengalaman menginap yang tak terlupakan. Dilengkapi kolam renang pribadi dengan pemandangan lembah yang memukau. Terdiri dari 4 kamar tidur dengan kamar mandi en-suite masing-masing. Dapur modern fully-furnished, ruang tamu dan ruang makan yang luas. Cocok untuk disewa sebagai properti investasi villa Bali dengan potensi return tinggi. Lokasi strategis 15 menit dari pusat seni Ubud.',
  'disewa', 'villa', 'aktif',
  25000000, 'per_bulan', true, 4, 3, 280, 500, 1, 2, 'furnished',
  'Jl. Raya Penestanan, Ubud, Gianyar, Bali 80571',
  'Ubud', 'Gianyar', 'Bali', '80571',
  -8.5069, 115.2625,
  ARRAY['https://picsum.photos/seed/prop004a/800/600','https://picsum.photos/seed/prop004b/800/600','https://picsum.photos/seed/prop004c/800/600','https://picsum.photos/seed/prop004d/800/600','https://picsum.photos/seed/prop004e/800/600'],
  ARRAY['AC','Kolam Renang','Taman','Kitchen Set','Water Heater','Internet/WiFi','Balkon','Security 24 Jam'],
  'SHM', 2019, 2100, true
);

-- 5. Tanah di Bogor (DIJUAL)
INSERT INTO public.properties (
  user_id, title, description, listing_type, property_type, status,
  price, price_type, is_negotiable, bedrooms, bathrooms, building_area,
  land_area, floors, garage, furnished, address, city, district, province,
  postal_code, latitude, longitude, images, features, certificate, year_built,
  views, is_featured
) VALUES (
  'b2c3d4e5-f6a7-8901-bcde-f12345678901',
  'Tanah Strategis Dekat Tol di Bogor Timur',
  'Tanah strategis di Bogor Timur dengan akses mudah ke jalan tol. Lahan seluas 600m² ini sangat cocok untuk dibangun perumahan, gudang, atau showroom. Lokasi di pinggir jalan besar dengan lebar jalan 8 meter, sangat mudah diakses kendaraan besar. Sudah ada jaringan listrik PLN dan air PDAM. Berjarak hanya 3 km dari pintu tol Cibubur dan 5 km dari pusat kota Bogor. Investasi tanah di Bogor yang potensial dengan perkembangan kota yang pesat. Sertifikat SHM atas nama pemilik langsung, tidak ada sengketa.',
  'dijual', 'tanah', 'aktif',
  850000000, 'total', true, 0, 0, 0, 600, 0, 0, 'unfurnished',
  'Jl. Raya Cibinong, Bogor Timur, Bogor, Jawa Barat 16710',
  'Bogor', 'Bogor Timur', 'Jawa Barat', '16710',
  -6.5951, 106.8164,
  ARRAY['https://picsum.photos/seed/prop005a/800/600','https://picsum.photos/seed/prop005b/800/600'],
  ARRAY['Dekat Tol','Row Jalan Lebar','Listrik PLN','Air PDAM'],
  'SHM', NULL, 340, false
);

-- 6. Ruko di Bandung (DIJUAL)
INSERT INTO public.properties (
  user_id, title, description, listing_type, property_type, status,
  price, price_type, is_negotiable, bedrooms, bathrooms, building_area,
  land_area, floors, garage, furnished, address, city, district, province,
  postal_code, latitude, longitude, images, features, certificate, year_built,
  views, is_featured
) VALUES (
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  'Ruko 3 Lantai Lokasi Premium di Bandung Kota',
  'Ruko 3 lantai dengan lokasi premium di pusat kota Bandung. Properti komersial ini sangat cocok untuk berbagai jenis usaha. Lantai 1 untuk area komersial/toko seluas 80m², lantai 2 untuk kantor atau tempat tinggal, dan lantai 3 sebagai rooftop yang bisa dimanfaatkan. Bangunan terawat baik dengan listrik 3 phase kapasitas besar. Lokasi sangat strategis berada di jalan utama dengan traffic tinggi, dekat dengan Alun-alun Bandung, Pasar Baru, dan berbagai pusat perbelanjaan. Sertifikat SHM atas nama pemilik.',
  'dijual', 'ruko', 'aktif',
  2800000000, 'total', false, 0, 2, 240, 80, 3, 0, 'unfurnished',
  'Jl. Asia Afrika No. 88, Braga, Bandung, Jawa Barat 40111',
  'Bandung', 'Bandung Kota', 'Jawa Barat', '40111',
  -6.9175, 107.6191,
  ARRAY['https://picsum.photos/seed/prop006a/800/600','https://picsum.photos/seed/prop006b/800/600'],
  ARRAY['Dekat Mall','Dekat Sekolah','Row Jalan Lebar','Listrik PLN','Rooftop'],
  'SHM', 2018, 480, false
);

-- 7. Apartemen Studio di Surabaya (DISEWA)
INSERT INTO public.properties (
  user_id, title, description, listing_type, property_type, status,
  price, price_type, is_negotiable, bedrooms, bathrooms, building_area,
  land_area, floors, garage, furnished, address, city, district, province,
  postal_code, latitude, longitude, images, features, certificate, year_built,
  views, is_featured
) VALUES (
  'b2c3d4e5-f6a7-8901-bcde-f12345678901',
  'Apartemen Studio Furnished di Pusat Kota Surabaya',
  'Apartemen studio fully-furnished di pusat kota Surabaya, ideal untuk profesional muda atau mahasiswa. Unit bersih dan modern dengan perabotan lengkap, termasuk tempat tidur springbed queen size, lemari 3 pintu, sofa, meja kerja ergonomis, smart TV 32 inch, dan dapur kecil dengan peralatan masak. Fasilitas gedung memadai termasuk kolam renang, gym, dan keamanan 24 jam. Lokasi sangat strategis, berjalan kaki ke berbagai restoran, kafe, dan pusat hiburan. Akses mudah ke berbagai transportasi umum.',
  'disewa', 'apartemen', 'aktif',
  4500000, 'per_bulan', true, 1, 1, 35, 0, 1, 0, 'furnished',
  'Apartemen Ciputra World, Jl. Mayjen Sungkono, Surabaya Pusat, Jawa Timur 60256',
  'Surabaya', 'Surabaya Pusat', 'Jawa Timur', '60256',
  -7.2575, 112.7521,
  ARRAY['https://picsum.photos/seed/prop007a/800/600','https://picsum.photos/seed/prop007b/800/600'],
  ARRAY['AC','Security 24 Jam','Gym','Internet/WiFi','Water Heater','Kitchen Set','Kolam Renang'],
  'Strata Title', 2019, 760, false
);

-- 8. Rumah Joglo di Yogyakarta (DIJUAL)
INSERT INTO public.properties (
  user_id, title, description, listing_type, property_type, status,
  price, price_type, is_negotiable, bedrooms, bathrooms, building_area,
  land_area, floors, garage, furnished, address, city, district, province,
  postal_code, latitude, longitude, images, features, certificate, year_built,
  views, is_featured
) VALUES (
  'c3d4e5f6-a7b8-9012-cdef-123456789012',
  'Rumah Joglo Heritage di Kotagede Yogyakarta',
  'Rumah Joglo heritage yang unik di kawasan bersejarah Kotagede, Yogyakarta. Properti ini memadukan keindahan arsitektur Jawa tradisional dengan sentuhan modern yang nyaman. Bangunan berusia puluhan tahun namun terawat sangat baik, dengan struktur kayu jati pilihan yang kokoh dan indah. Memiliki 4 kamar tidur dan 3 kamar mandi. Taman dalam yang luas menjadi keistimewaan tersendiri. Cocok untuk hunian keluarga yang menghargai warisan budaya atau sebagai properti komersial seperti kafe, galeri seni, atau homestay bernilai tinggi.',
  'dijual', 'rumah', 'aktif',
  1500000000, 'total', true, 4, 3, 220, 350, 1, 1, 'semi_furnished',
  'Jl. Mondorakan No. 22, Kotagede, Yogyakarta, DI Yogyakarta 55172',
  'Yogyakarta', 'Kotagede', 'DI Yogyakarta', '55172',
  -7.8014, 110.3719,
  ARRAY['https://picsum.photos/seed/prop008a/800/600','https://picsum.photos/seed/prop008b/800/600','https://picsum.photos/seed/prop008c/800/600'],
  ARRAY['Taman','Water Heater','Listrik PLN','Air PDAM','Carport'],
  'SHM', 1985, 390, false
);

-- 9. Kos di Depok (DISEWA)
INSERT INTO public.properties (
  user_id, title, description, listing_type, property_type, status,
  price, price_type, is_negotiable, bedrooms, bathrooms, building_area,
  land_area, floors, garage, furnished, address, city, district, province,
  postal_code, latitude, longitude, images, features, certificate, year_built,
  views, is_featured
) VALUES (
  'c3d4e5f6-a7b8-9012-cdef-123456789012',
  'Kos Eksklusif Full AC & Furnished di Margonda Depok',
  'Kos eksklusif modern full AC dan furnished di kawasan Margonda, Depok, dekat Universitas Indonesia. Kamar luas 4x5 meter dengan kamar mandi dalam, AC split 1 PK baru, tempat tidur springbed 120x200, lemari pakaian 3 pintu, meja belajar, dan WiFi kencang 100 Mbps. Fasilitas umum: laundry koin, dapur bersama lengkap, ruang tamu ber-AC, parkir motor dan mobil. Keamanan 24 jam dengan CCTV dan satpam. Cocok untuk mahasiswa UI/Gunadarma atau profesional di Depok.',
  'disewa', 'kos', 'aktif',
  1800000, 'per_bulan', false, 1, 1, 20, 0, 1, 0, 'furnished',
  'Jl. Margonda Raya No. 55, Pondok Cina, Depok, Jawa Barat 16424',
  'Depok', 'Margonda', 'Jawa Barat', '16424',
  -6.3694, 106.8313,
  ARRAY['https://picsum.photos/seed/prop009a/800/600','https://picsum.photos/seed/prop009b/800/600'],
  ARRAY['AC','Internet/WiFi','Security 24 Jam','CCTV','Laundry'],
  'SHM', 2020, 920, false
);

-- 10. Gudang di Bekasi (DISEWA)
INSERT INTO public.properties (
  user_id, title, description, listing_type, property_type, status,
  price, price_type, is_negotiable, bedrooms, bathrooms, building_area,
  land_area, floors, garage, furnished, address, city, district, province,
  postal_code, latitude, longitude, images, features, certificate, year_built,
  views, is_featured
) VALUES (
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  'Gudang Industri Luas di Kawasan Industri MM2100 Bekasi',
  'Gudang industri luas di kawasan industri terpadu MM2100, Bekasi. Properti ini sangat cocok untuk kebutuhan pergudangan, logistik, atau manufaktur. Luas bangunan 1.200m² dengan tinggi plafon 8 meter, dilengkapi loading dock 3 pintu untuk truk besar. Listrik 3 phase kapasitas 100kVA. Jalan lingkungan lebar untuk akses kendaraan besar. Lokasi strategis di kawasan industri Bekasi dengan akses langsung ke Jalan Tol Jakarta-Cikampek. Security 24 jam dengan CCTV di seluruh area. Sertifikat HGB atas nama perusahaan.',
  'disewa', 'gudang', 'aktif',
  35000000, 'per_bulan', true, 0, 2, 1200, 1500, 1, 0, 'unfurnished',
  'Kawasan Industri MM2100, Cikarang Barat, Bekasi, Jawa Barat 17520',
  'Bekasi', 'Cikarang', 'Jawa Barat', '17520',
  -6.3587, 107.1381,
  ARRAY['https://picsum.photos/seed/prop010a/800/600','https://picsum.photos/seed/prop010b/800/600'],
  ARRAY['Security 24 Jam','CCTV','Listrik PLN','Row Jalan Lebar','Dekat Tol'],
  'HGB', 2015, 280, false
);

-- 11. Rumah di Malang (DIJUAL)
INSERT INTO public.properties (
  user_id, title, description, listing_type, property_type, status,
  price, price_type, is_negotiable, bedrooms, bathrooms, building_area,
  land_area, floors, garage, furnished, address, city, district, province,
  postal_code, latitude, longitude, images, features, certificate, year_built,
  views, is_featured
) VALUES (
  'b2c3d4e5-f6a7-8901-bcde-f12345678901',
  'Rumah Minimalis 2 Lantai di Perumahan Elite Malang',
  'Rumah minimalis modern 2 lantai di perumahan elite Malang. Properti ini sangat cocok untuk keluarga muda yang menginginkan hunian modern dan nyaman di kota Malang yang sejuk. Desain minimalis yang elegan dengan penggunaan material premium. Dilengkapi 4 kamar tidur, 3 kamar mandi, dan garasi untuk 2 mobil. Lokasi di perumahan tertutup dengan one gate system dan keamanan 24 jam. Dekat dengan pusat kota Malang, berbagai sekolah favorit, rumah sakit, dan pusat perbelanjaan Malang Town Square.',
  'dijual', 'rumah', 'aktif',
  980000000, 'total', true, 4, 3, 200, 250, 2, 2, 'semi_furnished',
  'Perumahan Griya Shanta, Jl. Sukarno Hatta, Lowokwaru, Malang, Jawa Timur 65141',
  'Malang', 'Lowokwaru', 'Jawa Timur', '65141',
  -7.9375, 112.6143,
  ARRAY['https://picsum.photos/seed/prop011a/800/600','https://picsum.photos/seed/prop011b/800/600','https://picsum.photos/seed/prop011c/800/600'],
  ARRAY['AC','Carport','Taman','Security 24 Jam','One Gate System','CCTV','Water Heater'],
  'SHM', 2021, 445, false
);

-- 12. Apartemen 2BR di Jakarta Selatan (DISEWA)
INSERT INTO public.properties (
  user_id, title, description, listing_type, property_type, status,
  price, price_type, is_negotiable, bedrooms, bathrooms, building_area,
  land_area, floors, garage, furnished, address, city, district, province,
  postal_code, latitude, longitude, images, features, certificate, year_built,
  views, is_featured
) VALUES (
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  'Apartemen 2BR Furnished di Setiabudi Jakarta Selatan',
  'Apartemen 2 kamar tidur fully-furnished di kawasan premium Setiabudi, Jakarta Selatan. Unit ini telah direnovasi total dengan interior modern dan material premium. Dilengkapi furnitur lengkap termasuk 2 set kasur queen, lemari built-in, sofa, smart TV 55 inch, kitchen set fully equipped, dan washing machine. Fasilitas gedung mewah meliputi kolam renang infinity, gym modern, taman bermain, dan concierge 24 jam. Lokasi sangat strategis di jantung bisnis Jakarta Selatan, dekat SCBD, Kuningan, dan berbagai kantor pusat perusahaan.',
  'disewa', 'apartemen', 'aktif',
  18000000, 'per_bulan', true, 2, 2, 78, 0, 1, 1, 'furnished',
  'Apartemen District 8, SCBD, Senopati, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190',
  'Jakarta Selatan', 'Setiabudi', 'DKI Jakarta', '12190',
  -6.2254, 106.8150,
  ARRAY['https://picsum.photos/seed/prop012a/800/600','https://picsum.photos/seed/prop012b/800/600','https://picsum.photos/seed/prop012c/800/600'],
  ARRAY['AC','Kolam Renang','Gym','Security 24 Jam','Internet/WiFi','Water Heater','Kitchen Set','Balkon'],
  'Strata Title', 2018, 1100, false
);

-- 13. Tanah di Bandung (DIJUAL)
INSERT INTO public.properties (
  user_id, title, description, listing_type, property_type, status,
  
