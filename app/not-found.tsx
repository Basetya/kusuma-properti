import React from 'react';
import Link from 'next/link';
import { Home, Search, Compass, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between text-gray-900">
      {/* Mini Brand Header */}
      <header className="bg-[#0F2540] text-white py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-black text-white">
              rumah<span className="text-red-500">123</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-xs font-semibold text-gray-200 hover:text-white transition duration-200"
          >
            Beranda
          </Link>
        </div>
      </header>

      {/* Main 404 Container */}
      <main className="flex-1 flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center bg-white rounded-2xl border border-gray-100 p-8 sm:p-10 shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6">
            <Compass className="h-8 w-8 animate-spin" style={{ animationDuration: '8s' }} />
          </div>

          <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600 mb-3">
            <AlertCircle className="h-3.5 w-3.5" />
            Galat 404 • Not Found
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F2540] tracking-tight">
            Halaman Tidak Ditemukan
          </h1>

          <p className="mt-2.5 text-xs sm:text-sm text-gray-500 leading-relaxed">
            Maaf, properti atau tautan yang Anda tuju mungkin sudah tidak tersedia, dipindahkan, atau alamat URL salah ketik.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <Home className="h-4 w-4" />
              <span>Kembali ke Beranda</span>
            </Link>

            <Link
              href="/?type=dijual"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-gray-700 transition duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <Search className="h-4 w-4 text-gray-500" />
              <span>Cari Properti Dijual</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Mini Footer */}
      <footer className="bg-[#071320] text-gray-400 py-6 text-center text-xs">
        <p>© 2026 PT Web Rumah123 / 99 Group. Hak Cipta Dilindungi Undang-Undang.</p>
      </footer>
    </div>
  );
}
