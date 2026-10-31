import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const ALL_DESTINATIONS = [
  {
    id: 1,
    title: 'Kawah & Pemandian Air Hangat Guci',
    category: 'Wisata Alam',
    type: 'Wisata',
    rating: 4.8,
    location: 'Bumijawa, Kab. Tegal',
    price: 'Rp 20.000',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
    description: 'Pemandian mata air panas alami dengan udara sejuk lereng Gunung Slamet.',
  },
  {
    id: 2,
    title: 'Pantai Alam Indah (PAI)',
    category: 'Wisata Bahari',
    type: 'Wisata',
    rating: 4.6,
    location: 'Kota Tegal',
    price: 'Rp 10.000',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'Pantai pesisir utara dengan pemandangan ombak tenang dan hutan mangrove.',
  },
  {
    id: 3,
    title: 'Sate Kambing Muda Batibul',
    category: 'Kuliner Tradisional',
    type: 'Kuliner',
    rating: 4.9,
    location: 'Talang & Adiwerna',
    price: 'Rp 45.000',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    description: 'Daging empuk bawah tiga bulan disajikan segar di atas piring hotplate.',
  },
  {
    id: 4,
    title: 'Tahu Aci Banjaran Slawi',
    category: 'Oleh-Oleh Khas',
    type: 'Kuliner',
    rating: 4.8,
    location: 'Slawi, Kab. Tegal',
    price: 'Rp 15.000',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
    description: 'Tahu kuning gurih dengan balutan aci kucai yang digoreng renyah.',
  },
  {
    id: 5,
    title: 'Kupat Glabed Ibu Wartini',
    category: 'Kuliner Tradisional',
    type: 'Kuliner',
    rating: 4.7,
    location: 'Kota Tegal',
    price: 'Rp 15.000',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    description: 'Kupat berkuah santan kental gurih disajikan dengan sate kerang khas.',
  },
  {
    id: 6,
    title: 'Waduk Cacaban',
    category: 'Wisata Alam',
    type: 'Wisata',
    rating: 4.5,
    location: 'Kedungbanteng, Kab. Tegal',
    price: 'Rp 10.000',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Pemandangan danau buatan dengan latar bukit hijau dan perahu wisata.',
  },
  {
    id: 7,
    title: 'Teh Poci Tradisional Wasgitel',
    category: 'Kuliner Tradisional',
    type: 'Kuliner',
    rating: 4.9,
    location: 'Slawi & Tegal Kota',
    price: 'Rp 8.000',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    description: 'Seduhan teh poci tanah liat dengan pemanis gula batu asli khas Tegal.',
  },
  {
    id: 8,
    title: 'Curug Cantel Bumijawa',
    category: 'Wisata Alam',
    type: 'Wisata',
    rating: 4.7,
    location: 'Bumijawa, Kab. Tegal',
    price: 'Rp 10.000',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80',
    description: 'Air terjun alami tersembunyi dengan ketinggian sekitar 60 meter berhawa dingin.',
  },
];

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialType = searchParams.get('type') || 'Semua';

  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Wisata Alam', 'Wisata Bahari', 'Kuliner Tradisional', 'Oleh-Oleh Khas'];

  // Filter Data Berdasarkan Pencarian, Tipe (Wisata/Kuliner), dan Kategori
  const filteredData = ALL_DESTINATIONS.filter((item) => {
    const matchType = selectedType === 'Semua' || item.type === selectedType;
    const matchCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchSearch = item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                        item.location.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchType && matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans flex flex-col justify-between">
      
      {/* NAVBAR */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-black text-emerald-700 tracking-tight">
            Destina<span className="text-amber-500">Taste</span>
          </Link>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <Link to="/" className="text-slate-600 hover:text-emerald-700 transition">Beranda</Link>
            <button onClick={() => { setSelectedType('Wisata'); setSelectedCategory('Semua'); }} className={`${selectedType === 'Wisata' ? 'text-emerald-700 font-bold' : 'text-slate-600'}`}>Wisata</button>
            <button onClick={() => { setSelectedType('Kuliner'); setSelectedCategory('Semua'); }} className={`${selectedType === 'Kuliner' ? 'text-emerald-700 font-bold' : 'text-slate-600'}`}>Kuliner</button>
          </div>
        </div>
      </header>

      {/* HEADER SECTION */}
      <section className="bg-emerald-900 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl font-serif font-bold">Katalog Eksplorasi Tegal</h1>
          <p className="mt-2 text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto">
            Temukan tempat wisata alam mempesona dan kuliner khas otentik yang wajib kamu kunjungi.
          </p>

          {/* SEARCH BAR DI DALAM KATALOG */}
          <div className="mt-6 max-w-lg mx-auto">
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Ketik nama tempat wisata atau makanan..."
              className="w-full px-5 py-3 rounded-full text-slate-800 text-xs sm:text-sm focus:outline-emerald-500 shadow-md bg-white"
            />
          </div>
        </div>
      </section>

      {/* FILTER & HASIL */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        
        {/* TABS FILTER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-6">
          
          {/* Filter Tipe: Semua / Wisata / Kuliner */}
          <div className="flex bg-slate-200/70 p-1 rounded-xl text-xs font-semibold">
            {['Semua', 'Wisata', 'Kuliner'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-1.5 rounded-lg transition-all ${
                  selectedType === type ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Filter Dropdown / Kategori Spesifik */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">Kategori:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700 focus:outline-emerald-600 font-medium"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* LIST CARD DESTINASI */}
        {filteredData.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 text-sm">Tidak ditemukan destinasi yang sesuai dengan kriteria filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredData.map((item) => (
              <Link
                key={item.id}
                to={`/detail/${item.id}`}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group"
              >
                <div className="h-40 w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className={`absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${
                    item.type === 'Wisata' ? 'bg-emerald-600' : 'bg-amber-500'
                  }`}>
                    {item.type}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-emerald-700 font-semibold block mb-0.5">{item.category}</span>
                    <h3 className="font-bold text-slate-800 text-sm line-clamp-1 group-hover:text-emerald-700 transition">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">{item.price}</span>
                    <span className="text-amber-500 font-semibold">★ {item.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} DestinaTaste Tegal. Seluruh hak cipta dilindungi.
      </footer>

    </div>
  );
}