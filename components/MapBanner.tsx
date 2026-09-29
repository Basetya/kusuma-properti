import React from 'react';
import Link from 'next/link';
import { MapPin, Compass, ChevronRight } from 'lucide-react';

export const MapBanner: React.FC = () => {
  return (
    <section aria-label="Eksplorasi Peta Interaktif" className="w-full py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="group relative flex flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 p-6 text-white shadow-md transition-all duration-300 hover:shadow-xl sm:flex-row sm:p-8"
        >
          {/* Subtle Ambient Background Accents */}
          <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-blue-500/20 blur-2xl transition-transform group-hover:scale-125" />
          <div className="absolute left-1/3 bottom-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-xl" />

          {/* Left Text & Icon Cluster */}
          <div className="relative z-10 flex items-center gap-4 text-center sm:text-left">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 group-hover:scale-105 transition-transform">
              <Compass className="h-7 w-7 animate-pulse" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/20 px-2.5 py-0.5 text-[11px] font-bold text-cyan-200">
                <MapPin className="h-3 w-3" />
                Fitur Peta Pintar
              </div>
              <h2 className="mt-1 text-base font-bold sm:text-lg lg:text-xl text-white">
                Jelajahi properti di Jakarta lewat peta interaktif Rumah123.
              </h2>
              <p className="mt-0.5 text-xs text-blue-100">
                Cari hunian impian dengan melihat langsung fasilitas sekitar, stasiun MRT/LRT, dan akses tol terdekat.
              </p>
            </div>
          </div>

          {/* Right Action Button Link */}
          <div className="relative z-10 flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-bold text-blue-900 shadow-md transition-all group-hover:bg-cyan-50 group-hover:shadow-lg">
              Buka Peta Interaktif
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default MapBanner;
