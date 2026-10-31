import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 1. Data Kategori Cepat
const INITIAL_CATEGORIES = [
  { id: 'alam', name: 'Wisata Alam', icon: '🌲', sub: 'Guci & Curug', type: 'Wisata' },
  { id: 'kuliner', name: 'Kuliner Tradisional', icon: '🍲', sub: 'Sate & Glabed', type: 'Kuliner' },
  { id: 'sejarah', name: 'Wisata Sejarah', icon: '🏛️', sub: 'Situs & Monumen', type: 'Wisata' },
  { id: 'cafe', name: 'Cafe & Resto', icon: '☕', sub: 'Tempat Santai', type: 'Kuliner' },
  { id: 'oleholeh', name: 'Oleh-Oleh Khas', icon: '🫖', sub: 'Tahu & Poci', type: 'Kuliner' },
];

// 2. Seluruh Database Destinasi (Ditandai mana yang unggulan / isFeatured)
const ALL_DESTINATIONS = [
  {
    id: 1,
    title: 'Kawah / Pemandian Guci',
    type: 'Wisata',
    category: 'Wisata Alam',
    rating: '5.0',
    location: 'Bumijawa, Kab. Tegal',
    price: 'Rp 20.000',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
    description: 'Pemandian mata air panas alami dengan udara sejuk pegunungan.',
    isFeatured: true, // UNGGULAN
  },
  {
    id: 2,
    title: 'Pantai Alam Indah',
    type: 'Wisata',
    category: 'Wisata Bahari',
    rating: '4.8',
    location: 'Kota Tegal',
    price: 'Rp 10.000',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'Pantai pesisir utara dengan pemandangan ombak dan senja.',
    isFeatured: true, // UNGGULAN
  },
  {
    id: 3,
    title: 'Sate Kambing Muda',
    type: 'Kuliner',
    category: 'Kuliner Tradisional',
    rating: '5.0',
    location: 'Talang & Adiwerna',
    price: 'Rp 45.000',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    description: 'Daging empuk bawah tiga bulan disajikan segar di atas hotplate.',
    isFeatured: true, // UNGGULAN
  },
  {
    id: 4,
    title: 'Tahu Aci',
    type: 'Kuliner',
    category: 'Oleh-Oleh',
    rating: '4.9',
    location: 'Slawi, Kab. Tegal',
    price: 'Rp 15.000',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
    description: 'Tahu kuning khas potongan segitiga dengan aci gurih renyah.',
    isFeatured: true, // UNGGULAN
  },
  {
    id: 5,
    title: 'Kupat Glabed',
    type: 'Kuliner',
    category: 'Kuliner Tradisional',
    rating: '4.7',
    location: 'Kota Tegal',
    price: 'Rp 15.000',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    description: 'Kupat berkuah kental kuning gurih dengan taburan kerupuk mi.',
    isFeatured: true, // UNGGULAN
  },
  {
    id: 6,
    title: 'Waduk Cacaban',
    type: 'Wisata',
    category: 'Wisata Alam',
    rating: '4.5',
    location: 'Kedungbanteng, Kab. Tegal',
    price: 'Rp 10.000',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Pemandangan danau buatan dengan latar bukit hijau dan perahu wisata.',
    isFeatured: false, // BUKAN UNGGULAN (Muncul saat dicari)
  },
  {
    id: 7,
    title: 'Teh Poci Tradisional Wasgitel',
    type: 'Kuliner',
    category: 'Kuliner Tradisional',
    rating: '4.9',
    location: 'Slawi & Tegal Kota',
    price: 'Rp 8.000',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    description: 'Seduhan teh poci tanah liat dengan pemanis gula batu asli khas Tegal.',
    isFeatured: false,
  },
  {
    id: 8,
    title: 'Curug Cantel Bumijawa',
    type: 'Wisata',
    category: 'Wisata Alam',
    rating: '4.7',
    location: 'Bumijawa, Kab. Tegal',
    price: 'Rp 10.000',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80',
    description: 'Air terjun alami tersembunyi dengan ketinggian sekitar 60 meter berhawa dingin.',
    isFeatured: false,
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Semua');

  // LOGIKA PENCARIAN CERDAS:
  // - Jika search kosong: hanya tampilkan item dengan isFeatured: true
  // - Jika sedang mengetik search: cari ke SEMUA destinasi tanpa membatasi isFeatured
  const filteredHighlights = ALL_DESTINATIONS.filter((item) => {
    const isSearching = searchQuery.trim().length > 0;
    const matchesFeatured = isSearching ? true : item.isFeatured;
    const matchesFilter = selectedFilter === 'Semua' || item.type === selectedFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFeatured && matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans flex flex-col justify-between">
      
      {/* 1. NAVBAR */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-2xl font-black text-emerald-700 tracking-tight">
              Destina<span className="text-amber-500">Taste</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <Link to="/" className="text-emerald-700 font-bold border-b-2 border-emerald-700 pb-1">Beranda</Link>
            <Link to="/katalog?type=Wisata" className="hover:text-emerald-700 transition">Wisata</Link>
            <Link to="/katalog?type=Kuliner" className="hover:text-emerald-700 transition">Kuliner</Link>
            <a href="#rekomendasi" className="hover:text-emerald-700 transition">Rekomendasi</a>
            <Link to="/katalog" className="hover:text-emerald-700 transition">Katalog Lengkap</Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* Input Pencarian Navbar */}
            <div className="relative hidden lg:block">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari wisata atau kuliner Tegal..."
                className="bg-slate-100 rounded-full pl-9 pr-4 py-2 text-xs w-60 focus:outline-emerald-600 border border-slate-200"
              />
              <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 11a5.65 5.65 0 11-11.3 0 5.65 5.65 0 0111.3 0z" />
              </svg>
            </div>
            <button className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-emerald-700 px-3 py-2">Masuk</button>
            <button className="bg-amber-500 hover:bg-amber-600 text-white text-xs sm:text-sm font-semibold px-5 py-2 rounded-full transition shadow-xs">Daftar</button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="hero" className="w-full px-4 sm:px-6 lg:px-8 pt-4 pb-6 max-w-7xl mx-auto">
        <div className="relative w-full rounded-3xl overflow-hidden min-h-[440px] md:min-h-[480px] flex items-center shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1600&q=80"
            alt="Wisata Alam Guci Tegal"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/65 to-transparent"></div>

          <div className="relative z-10 max-w-xl pl-8 sm:pl-12 lg:pl-14 pr-6 py-10 text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight">
              Jelajahi Pesona &amp;<br />
              Cita Rasa Khas Tegal
            </h1>
            <p className="mt-4 text-xs sm:text-sm text-slate-100/90 leading-relaxed max-w-md font-sans">
              Temukan destinasi wisata alam memukau dan kelezatan kuliner legendaris dalam satu genggaman.
            </p>
            
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/katalog?type=Wisata"
                className="bg-amber-500 hover:bg-amber-600 text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-xs transition-all"
              >
                Mulai Jelajahi
              </Link>
              <Link
                to="/katalog?type=Kuliner"
                className="bg-amber-500 hover:bg-amber-600 text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-xs transition-all"
              >
                Cari Kuliner
              </Link>
            </div>
          </div>

          <div className="absolute bottom-4 right-6 bg-black/40 backdrop-blur-xs px-3.5 py-1 rounded-md text-[11px] sm:text-xs text-white/95">
            Wisata Alam Guci Tegal
          </div>
        </div>
      </section>

      {/* 3. KATEGORI CEPAT */}
      <section id="kategori" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Bagian Kategori Cepat</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          <div className="lg:col-span-7 grid grid-cols-3 sm:grid-cols-5 gap-3">
            {INITIAL_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/katalog?type=${cat.type}`}
                className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-100 shadow-xs flex flex-col items-center text-center hover:border-emerald-500 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-2xl mb-2">
                  {cat.icon}
                </div>
                <span className="font-bold text-xs text-slate-800 leading-tight">{cat.name}</span>
              </Link>
            ))}
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link to="/katalog?type=Kuliner" className="bg-emerald-50/70 border border-emerald-100 hover:border-emerald-400 rounded-2xl p-4 flex items-center justify-between transition">
              <div>
                <span className="font-bold text-xs sm:text-sm text-emerald-950 block">Oleh-Oleh</span>
                <span className="font-semibold text-xs text-emerald-800">khas Tegal</span>
              </div>
              <div className="text-3xl">🫖</div>
            </Link>

            <Link to="/detail/4" className="bg-emerald-50/70 border border-emerald-100 hover:border-emerald-400 rounded-2xl p-4 flex items-center justify-between transition">
              <div>
                <span className="font-bold text-xs sm:text-sm text-emerald-950 block">Tahu aci</span>
                <span className="font-semibold text-xs text-emerald-800">khas Tegal</span>
              </div>
              <div className="text-3xl">🥟</div>
            </Link>
          </div>

        </div>
      </section>

      {/* 4. REKOMENDASI TERPOPULER (DENGAN HASIL PENCARIAN REAL-TIME) */}
      <section id="rekomendasi" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              {searchQuery ? `Hasil Pencarian: "${searchQuery}"` : 'Bagian Rekomendasi Terpopuler'}
            </h2>
            <p className="text-xs text-slate-500">
              {searchQuery ? `Ditemukan ${filteredHighlights.length} destinasi` : 'Wisata Populer & Kuliner Legendaris'}
            </p>
          </div>

          <div className="flex bg-slate-200/70 p-1 rounded-xl text-xs font-semibold">
            {['Semua', 'Wisata', 'Kuliner'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-1.5 rounded-lg transition-all ${
                  selectedFilter === filter
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Jika Hasil Pencarian Kosong */}
        {filteredHighlights.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-dashed border-slate-200">
            <p className="text-slate-500 text-xs sm:text-sm">
              Tidak ditemukan tempat dengan kata kunci "{searchQuery}".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredHighlights.map((item) => (
              <Link
                to={`/detail/${item.id}`}
                key={item.id}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col cursor-pointer block group"
              >
                <div className="h-32 sm:h-36 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-800 text-xs sm:text-sm line-clamp-1 group-hover:text-emerald-700 transition">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[11px] text-amber-500 mt-1">
                      <span>★★★★★</span>
                      <span className="text-[10px] text-slate-400">({item.rating})</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 truncate max-w-[80px]">📍 {item.location}</span>
                    <span className="bg-amber-500 text-white font-semibold px-2 py-0.5 rounded-full text-[10px]">
                      {item.type}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-white border-t border-slate-200 pt-10 pb-6 w-full mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <span className="text-xl font-black text-emerald-700 tracking-tight">
                Destina<span className="text-amber-500">Taste</span>
              </span>
              <p className="text-xs text-slate-500 mt-2">
                Portal informasi dan eksplorasi destinasi wisata serta kekayaan kuliner khas Tegal.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase text-slate-900 mb-2">Navigasi</h4>
              <p className="text-xs text-slate-500">Beranda • Wisata Alam Guci • Sate Kambing Batibul • Tahu Aci Slawi</p>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase text-slate-900 mb-2">Teknologi</h4>
              <p className="text-xs text-slate-400 font-medium">React.js • Tailwind CSS • Vite</p>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-4 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Destinataste. Seluruh hak cipta dilindungi.
          </div>
        </div>
      </footer>

    </div>
  );
}