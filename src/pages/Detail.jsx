import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Data sementara (nantinya diambil otomatis berdasarkan ID dari backend)
const DESTINATIONS_DATA = {
  1: {
    title: 'Kawah & Pemandian Air Hangat Guci',
    category: 'Wisata Alam',
    type: 'Wisata',
    rating: '4.8',
    reviewsCount: 1420,
    price: 'Rp 20.000 / orang',
    location: 'Desa Guci, Kec. Bumijawa, Kab. Tegal, Jawa Tengah',
    openHours: '06.00 - 18.00 WIB (Buka Setiap Hari)',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    description:
      'Pemandian Air Panas Guci merupakan ikon wisata andalan di lereng Gunung Slamet pada ketinggian sekitar 1.050 mdpl. Air panas alami yang jernih dan tidak berbau menyengat ini dipercaya memiliki khasiat untuk kesehatan kulit dan relaksasi.',
    facilities: ['Kolam Rendam Hangat Alami', 'Area Parkir Luas', 'Penginapan & Villa', 'Warung Makan Khas', 'Pancuran 13 & Pancuran 7'],
  },
  2: {
    title: 'Pantai Alam Indah (PAI)',
    category: 'Wisata Bahari',
    type: 'Wisata',
    rating: '4.6',
    reviewsCount: 980,
    price: 'Rp 10.000 / orang',
    location: 'Mintaragen, Kec. Tegal Timur, Kota Tegal, Jawa Tengah',
    openHours: '24 Jam',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description:
      'Pantai Alam Indah menyajikan panorama pesisir Laut Jawa dengan ombak yang tenang, jembatan kayu estetik, hutan mangrove, serta Monumen Bahari yang edukatif untuk wisata keluarga.',
    facilities: ['Monumen Bahari', 'Taman Bermain Anak', 'Spot Foto Sunset', 'Gazebo Santai', 'Warung Kuliner Seafood'],
  },
  3: {
    title: 'Sate Kambing Muda Batibul',
    category: 'Kuliner Tradisional',
    type: 'Kuliner',
    rating: '4.9',
    reviewsCount: 2350,
    price: 'Rp 45.000 / porsi (10 tusuk)',
    location: 'Jl. Raya Tegal - Slawi, Talang & Adiwerna, Kab. Tegal',
    openHours: '09.00 - 21.00 WIB',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    description:
      'Batibul (Bawah Tiga Bulan) adalah sajian legendaris khas Tegal. Daging kambing muda disajikan sangat empuk di atas piring hotplate mendesis dengan bumbu kecap pedas potongan cabai rawit hijau, bawang merah, dan tomat segar.',
    facilities: ['Ruang Makan Ber-AC & Non-AC', 'Area Parkir', 'Mushola', 'Teh Poci Wasgitel'],
  },
  4: {
    title: 'Tahu Aci Banjaran Slawi',
    category: 'Oleh-Oleh Khas',
    type: 'Kuliner',
    rating: '4.8',
    reviewsCount: 870,
    price: 'Rp 15.000 / besek',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=1200&q=80',
    description:
      'Tahu kuning khas Tegal bertekstur lembut yang dipadukan adonan aci berbumbu gurih dan irisan daun kucai, digoreng garing renyah. Sangat cocok dinikmati hangat bersama cabai rawit hijau.',
    facilities: ['Kemasan Besek Bambu', 'Goreng di Tempat', 'Tahan Perjalanan Luar Kota'],
  },
  5: {
    title: 'Kupat Glabed Ibu Wartini',
    category: 'Kuliner Tradisional',
    type: 'Kuliner',
    rating: '4.7',
    reviewsCount: 620,
    price: 'Rp 15.000 / porsi',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Kupat Glabed adalah kupat dengan siraman kuah santan kuning kental khas ("glabed-glabed"), taburan kerupuk mi kenyol, dan pelengkap sate kerang pedas manis atau sate kikil.',
    facilities: ['Meja Lesehan', 'Sate Kerang & Sate Blengong', 'Kerupuk Antor'],
  },
};

export default function Detail() {
  const { id } = useParams();
  const item = DESTINATIONS_DATA[id] || DESTINATIONS_DATA[1];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans">
      
      {/* NAVBAR SIMPLE */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-black text-emerald-700 tracking-tight">
            Destina<span className="text-amber-500">Taste</span>
          </Link>
          <Link
            to="/"
            className="text-xs font-semibold text-slate-600 hover:text-emerald-700 flex items-center gap-1 transition"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </header>

      {/* KONTEN DETAIL */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        
        {/* HERO FOTO & JUDUL */}
        <div className="relative rounded-3xl overflow-hidden h-[340px] md:h-[420px] shadow-sm mb-8">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-amber-500 text-white font-bold text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                {item.category}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                ★ {item.rating} ({item.reviewsCount} Ulasan)
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
              {item.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 mt-2 flex items-center gap-1">
              <span>📍</span> {item.location}
            </p>
          </div>
        </div>

        {/* DETAIL INFO & SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Kiri: Deskripsi & Fasilitas */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-3">Tentang Destinasi</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-4">Fasilitas & Keunggulan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.facilities.map((fac, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    {fac}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Card Info Cepat & Tombol Aksi */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs space-y-4">
              <div>
                <span className="text-[11px] text-slate-400 block uppercase font-bold tracking-wider">Estimasi Tiket / Harga</span>
                <span className="text-xl font-black text-emerald-700">{item.price}</span>
              </div>

              <div className="border-t border-slate-100 pt-3">
                <span className="text-[11px] text-slate-400 block uppercase font-bold tracking-wider">Jam Operasional</span>
                <span className="text-xs font-semibold text-slate-700">{item.openHours}</span>
              </div>

              <div className="border-t border-slate-100 pt-3">
                <span className="text-[11px] text-slate-400 block uppercase font-bold tracking-wider">Lokasi Lengkap</span>
                <span className="text-xs text-slate-600 leading-relaxed block mt-1">{item.location}</span>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.title + ' ' + item.location)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs py-3 rounded-xl transition text-center flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>🗺️</span> Buka di Google Maps
              </a>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}