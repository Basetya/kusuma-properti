'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronDown,
  ChevronUp,
  ArrowUp,
  Award,
  Mail,
  Phone,
  Smartphone,
  Building2,
} from 'lucide-react';
import {
  directoryTabs,
  DirectoryTab,
  primaryProvinces,
  extendedProvinces,
  otherDirectoryContent,
  corporateColumns,
} from '@/data/footerLinks';

export const MegaFooter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DirectoryTab>('Properti Dijual di Indonesia');
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#0B1B2D] text-gray-300">
      {/* ========================================================
          1. UPPER DIRECTORY TIER
          ======================================================== */}
      <section aria-label="Direktori Pencarian Properti" className="border-b border-gray-800 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Navigation Directory Tabs */}
          <nav aria-label="Tab Direktori Properti" className="mb-6 flex flex-wrap gap-2 border-b border-gray-800/80 pb-3">
            {directoryTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab);
                    setIsExpanded(false);
                  }}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </nav>

          {/* 4-Column Directory Link Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2.5 text-xs text-gray-400">
            {activeTab === 'Properti Dijual di Indonesia' ? (
              <>
                {primaryProvinces.map((prov) => (
                  <Link
                    key={prov.label}
                    href={prov.href}
                    className="truncate hover:text-white hover:underline transition-colors"
                  >
                    Rumah Dijual di {prov.label}
                  </Link>
                ))}
                {isExpanded &&
                  extendedProvinces.map((prov) => (
                    <Link
                      key={prov.label}
                      href={prov.href}
                      className="truncate hover:text-white hover:underline transition-colors"
                    >
                      Rumah Dijual di {prov.label}
                    </Link>
                  ))}
              </>
            ) : (
              otherDirectoryContent[activeTab].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="truncate hover:text-white hover:underline transition-colors"
                >
                  {item.label}
                </Link>
              ))
            )}
          </div>

          {/* Accordion Toggle (For Properti Dijual di Indonesia) */}
          {activeTab === 'Properti Dijual di Indonesia' && (
            <div className="mt-5 pt-3 border-t border-gray-800/60">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>{isExpanded ? 'Tampilkan lebih sedikit' : 'Tampilkan lebih banyak'}</span>
                {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          2. LOWER CORPORATE TIER
          ======================================================== */}
      <section aria-label="Informasi Perusahaan dan Layanan" className="border-b border-gray-800 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left Brand Block (Cols 1-4) */}
            <div className="lg:col-span-4 space-y-4">
              <Link href="/" className="inline-flex items-center gap-2.5 focus:outline-none group">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm transition-transform group-hover:scale-105">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tight text-white leading-none">
                    Kusuma<span className="text-blue-400">Properti</span>
                  </span>
                  <span className="text-[9px] font-medium tracking-widest uppercase text-gray-400">
                    Real Estate Portal
                  </span>
                </div>
              </Link>
              <p className="text-xs leading-relaxed text-gray-400">
                Kusuma Properti adalah platform teknologi jual beli dan sewa properti terpercaya di Indonesia yang berkomitmen membantu masyarakat menemukan hunian impian, aset investasi, dan solusi pembiayaan properti terbaik.
              </p>
              <div className="flex items-start gap-2.5 rounded-xl border border-gray-800 bg-white/5 p-3 text-xs text-amber-200">
                <Award className="h-5 w-5 flex-shrink-0 text-amber-400 mt-0.5" />
                <p className="text-[11px] leading-tight">
                  <strong className="font-semibold text-white block">Penghargaan Nasional:</strong>
                  E-commerce dan Platform Online Terbaik Indonesia Property Awards
                </p>
              </div>
            </div>

            {/* Center Navigation Columns (Cols 5-9) */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
              {/* Perusahaan */}
              <div>
                <h3 className="font-bold uppercase tracking-wider text-white mb-3">
                  Perusahaan
                </h3>
                <ul className="space-y-2">
                  {corporateColumns.perusahaan.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Layanan & Dukungan */}
              <div>
                <h3 className="font-bold uppercase tracking-wider text-white mb-3">
                  Layanan
                </h3>
                <ul className="space-y-2 mb-4">
                  {corporateColumns.layanan.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold uppercase tracking-wider text-white mb-3">
                  Dukungan
                </h3>
                <ul className="space-y-2">
                  {corporateColumns.dukungan.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 99 Group Portal */}
              <div>
                <h3 className="font-bold uppercase tracking-wider text-white mb-3">
                  99 Group
                </h3>
                <ul className="space-y-2">
                  {corporateColumns.networkPortal.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hubungi Kami */}
              <div>
                <h3 className="font-bold uppercase tracking-wider text-white mb-3">
                  Hubungi
                </h3>
                <address className="not-italic space-y-2.5 text-gray-400">
                  <a
                    href={`mailto:${corporateColumns.kontak.email}`}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5 text-blue-400" />
                    <span className="truncate">{corporateColumns.kontak.email}</span>
                  </a>
                  <a
                    href={`tel:${corporateColumns.kontak.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="truncate">{corporateColumns.kontak.phone}</span>
                  </a>
                </address>
              </div>
            </div>

            {/* Right App Download & QR Block (Cols 10-12) */}
            <div className="lg:col-span-3 flex flex-col items-start lg:items-end space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Download Aplikasi
              </span>
              <div className="flex items-center gap-3 rounded-xl border border-gray-800 bg-white/5 p-3">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-white">
                  <Image
                    src="https://placehold.co/120x120?text=QR+Code"
                    alt="Scan QR Code Kusuma Properti"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1.5">
                  <p className="text-[11px] text-gray-400 leading-tight">
                    Scan untuk download aplikasi di Android & iOS
                  </p>
                  <div className="flex flex-col gap-1">
                    <Link
                      href="#"
                      aria-label="Download Kusuma Properti di Google Play Store"
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300"
                    >
                      <Smartphone className="h-3.5 w-3.5" />
                      <span>Google Play</span>
                    </Link>
                    <Link
                      href="#"
                      aria-label="Download Kusuma Properti di Apple App Store"
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-blue-400 hover:text-blue-300"
                    >
                      <Smartphone className="h-3.5 w-3.5" />
                      <span>App Store</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. BOTTOM COPYRIGHT & SCROLL TO TOP STRIP
          ======================================================== */}
      <section aria-label="Hak Cipta dan Navigasi Atas" className="py-6 bg-[#071320] text-xs text-gray-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-gray-400">
              © 2026 Kusuma Properti. All rights reserved.
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Kembali ke atas"
              className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-gray-700 bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
            >
              <span>Kembali ke atas</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default MegaFooter;
