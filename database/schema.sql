-- ============================
-- RUMAHKITA DATABASE SCHEMA
-- Untuk Supabase (PostgreSQL)
-- ============================

-- EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================
-- 1. PROFILES
-- ============================
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  full_name TEXT NOT NULL DEFAULT '',
  phone TEXT,
  whatsapp TEXT,
  avatar_url TEXT,
  city TEXT,
  bio TEXT,
  account_type TEXT DEFAULT 'pemilik' CHECK (account_type IN ('pemilik', 'agen', 'developer')),
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auto create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================
-- 2. PROPERTIES
-- ============================
CREATE TABLE public.properties (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  slug TEXT UNIQUE,
  description TEXT NOT NULL,
  listing_type TEXT NOT NULL CHECK (listing_type IN ('dijual', 'disewa')),
  property_type TEXT NOT NULL CHECK (property_type IN ('rumah', 'apartemen', 'tanah', 'ruko', 'kos', 'villa', 'gudang', 'kantor')),
  status TEXT DEFAULT 'aktif' CHECK (status IN ('aktif', 'terjual', 'tersewa', 'nonaktif', 'draft')),
  price BIGINT NOT NULL,
  price_type TEXT DEFAULT 'total' CHECK (price_type IN ('total', 'per_bulan', 'per_tahun')),
  is_negotiable BOOLEAN DEFAULT false,
  bedrooms INTEGER DEFAULT 0,
  bathrooms INTEGER DEFAULT 0,
  building_area INTEGER,
  land_area INTEGER,
  floors INTEGER DEFAULT 1,
  garage INTEGER DEFAULT 0,
  furnished TEXT DEFAULT 'unfurnished' CHECK (furnished IN ('furnished', 'semi_furnished', 'unfurnished')),
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  district TEXT,
  province TEXT NOT NULL,
  postal_code TEXT,
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  images TEXT[] DEFAULT '{}',
  features TEXT[] DEFAULT '{}',
  certificate TEXT CHECK (certificate IN ('SHM', 'HGB', 'Strata Title', 'AJB', 'Girik', 'Lainnya')),
  year_built INTEGER,
  views INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auto generate slug
CREATE OR REPLACE FUNCTION generate_property_slug()
RETURNS TRIGGER AS $$
BEGIN
  NEW.slug := LOWER(
    REGEXP_REPLACE(
      REGEXP_REPLACE(NEW.title, '[^a-zA-Z0-9\s]', '', 'g'),
      '\s+', '-', 'g'
    )
  ) || '-' || SUBSTRING(NEW.id::TEXT, 1, 8);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_property_slug
  BEFORE INSERT ON public.properties
  FOR EACH ROW EXECUTE FUNCTION generate_property_slug();

-- Indexes
CREATE INDEX idx_properties_listing_type ON public.properties(listing_type);
CREATE INDEX idx_properties_property_type ON public.properties(property_type);
CREATE INDEX idx_properties_city ON public.properties(city);
CREATE INDEX idx_properties_price ON public.properties(price);
CREATE INDEX idx_properties_status ON public.properties(status);
CREATE INDEX idx_properties_user_id ON public.properties(user_id);
CREATE INDEX idx_properties_created_at ON public.properties(created_at DESC);
CREATE INDEX idx_properties_is_featured ON public.properties(is_featured);

-- ============================
-- 3. FAVORITES
-- ============================
CREATE TABLE public.favorites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, property_id)
);

CREATE INDEX idx_favorites_user ON public.favorites(user_id);
CREATE INDEX idx_favorites_property ON public.favorites(property_id);

-- ============================
-- 4. MESSAGES
-- ============================
CREATE TABLE public.messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE NOT NULL,
  sender_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  receiver_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_messages_receiver ON public.messages(receiver_id);
CREATE INDEX idx_messages_property ON public.messages(property_id);
CREATE INDEX idx_messages_is_read ON public.messages(is_read);

-- ============================
-- 5. PROPERTY VIEWS
-- ============================
CREATE TABLE public.property_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE NOT NULL,
  viewer_ip TEXT,
  user_agent TEXT,
  viewed_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_views_property ON public.property_views(property_id);

-- ============================
-- 6. REPORTS
-- ============================
CREATE TABLE public.reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE NOT NULL,
  reporter_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  reason TEXT NOT NULL CHECK (reason IN ('spam', 'penipuan', 'konten_tidak_pantas', 'properti_tidak_ada', 'harga_tidak_sesuai', 'lainnya')),
  description TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'resolved')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================
-- 7. ROW LEVEL SECURITY
-- ============================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.property_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Public profiles viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Properties Policies
CREATE POLICY "Active properties viewable by everyone" ON public.properties FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create properties" ON public.properties FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Owners can update own properties" ON public.properties FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Owners can delete own properties" ON public.properties FOR DELETE USING (auth.uid() = user_id);

-- Favorites Policies
CREATE POLICY "Users can view own favorites" ON public.favorites FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can add favorites" ON public.favorites FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can remove favorites" ON public.favorites FOR DELETE USING (auth.uid() = user_id);

-- Messages Policies
CREATE POLICY "Users can view own messages" ON public.messages FOR SELECT USING (auth.uid() = sender_id OR auth.uid() = receiver_id);
CREATE POLICY "Anyone can send messages" ON public.messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Receiver can mark as read" ON public.messages FOR UPDATE USING (auth.uid() = receiver_id);

-- Views Policies
CREATE POLICY "Anyone can insert views" ON public.property_views FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view counts" ON public.property_views FOR SELECT USING (true);

-- Reports Policies
CREATE POLICY "Authenticated users can report" ON public.reports FOR INSERT WITH CHECK (auth.uid() = reporter_id);

-- ============================
-- 8. FUNCTIONS
-- ============================

-- Increment view count
CREATE OR REPLACE FUNCTION increment_property_views(prop_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE public.properties SET views = views + 1 WHERE id = prop_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Auto update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER properties_updated_at BEFORE UPDATE ON public.properties FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Get favorites count
CREATE OR REPLACE FUNCTION get_property_favorites_count(prop_id UUID)
RETURNS INTEGER AS $$
  SELECT COUNT(*)::INTEGER FROM public.favorites WHERE property_id = prop_id;
$$ LANGUAGE sql SECURITY DEFINER;

-- Search properties with full text
CREATE OR REPLACE FUNCTION search_properties(search_query TEXT, listing TEXT DEFAULT NULL, prop_type TEXT DEFAULT NULL, city_filter TEXT DEFAULT NULL)
RETURNS SETOF public.properties AS $$
  SELECT * FROM public.properties
  WHERE status = 'aktif'
    AND (search_query IS NULL OR 
         title ILIKE '%' || search_query || '%' OR 
         description ILIKE '%' || search_query || '%' OR
         city ILIKE '%' || search_query || '%')
    AND (listing IS NULL OR listing_type = listing)
    AND (prop_type IS NULL OR property_type = prop_type)
    AND (city_filter IS NULL OR city ILIKE '%' || city_filter || '%')
  ORDER BY is_featured DESC, created_at DESC;
$$ LANGUAGE sql SECURITY DEFINER;

-- ============================
-- 9. STORAGE BUCKETS (Dashboard)
-- ============================
-- Buat di Supabase Dashboard > Storage:
-- Bucket: "property-images" (Public)
-- Bucket: "avatars" (Public)
-- 
-- Policy property-images:
-- INSERT: authenticated users can upload to their own folder (user_id/)
-- SELECT: public can view
-- 
-- Policy avatars:
-- INSERT: authenticated users can upload their own avatar
-- SELECT: public can view
