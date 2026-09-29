'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Globe,
  ChevronDown,
  User,
  PlusCircle,
  Menu,
  X,
  Building2,
  Phone,
  Search,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  const primaryNavLinks = [
    { label: 'Dijual', href: '#' },
    { label: 'Disewa', href: '#' },
    { label: 'Properti Baru', href: '#' },
    { label: 'Aset Bank', href: '#' },
    { label: 'KPR', href: '#' },
    { label: 'Lainnya', href: '#' },
  ];

  const secondaryNavLinks = [
    { label: 'Carikan Saya Properti', href: '#' },
    { label: 'Agen', href: '#' },
    { label: 'Perusahaan', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* 1. Primary Top Bar (Dark Navy #0F2540) */}
      <div className="bg-[#0F2540] text-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-1.5 text-gray-300 hover:bg-white/10 hover:text-white md:hidden"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-1.5 focus:outline-none">
              <span className="text-2xl font-black tracking-tight text-white">
                rumah<span className="text-red-500">123</span>
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-wider text-gray-300 sm:inline-block">
                .com
              </span>
            </Link>
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Hotline Bantuan */}
            <a
              href="tel:1500123"
              className="hidden lg:flex items-center gap-1 text-xs text-gray-300 hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-gray-400" />
              <span>Bantuan</span>
            </a>

            {/* Language Selector */}
            <div className="relative hidden items-center gap-1 text-xs text-gray-200 hover:text-white sm:flex">
              <Globe className="h-4 w-4 text-gray-300" />
              <button
                type="button"
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                className="flex items-center gap-1 font-semibold uppercase focus:outline-none"
              >
                <span>{language}</span>
                <ChevronDown className="h-3 w-3" />
              </button>
            </div>

            {/* Pasang Iklan CTA (Red Accent Button) */}
            <Link
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-red-700 sm:px-4 sm:py-2 sm:text-sm"
            >
              <PlusCircle className="h-4 w-4" />
              <span>Pasang Iklan</span>
            </Link>

            {/* Akun / Login Link */}
            <Link
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-600 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-200 transition-colors hover:bg-white/10 hover:text-white sm:px-3.5 sm:py-2 sm:text-sm"
            >
              <User className="h-4 w-4 text-gray-300" />
              <span className="font-semibold">Akun</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Secondary Sub-Bar (Clean White Bar) */}
      <nav
        aria-label="Kategori Utama Properti"
        className="hidden border-b border-gray-200 bg-white md:block"
      >
        <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-4 text-xs font-semibold text-gray-700 sm:px-6 lg:px-8">
          {/* Main Navigation Links */}
          <ul className="flex items-center space-x-6">
            {primaryNavLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-blue-600 focus:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side Specialized Links */}
          <ul className="flex items-center space-x-5 text-gray-600">
            {secondaryNavLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 transition-colors hover:text-blue-600 focus:outline-none"
                >
                  {item.label === 'Perusahaan' && <Building2 className="h-3.5 w-3.5 text-gray-400" />}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                aria-label="Cari Cepat"
                className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Search className="h-3.5 w-3.5" />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-gray-200 bg-white px-4 py-4 md:hidden shadow-lg">
          <ul className="space-y-3 text-sm font-semibold text-gray-800">
            {primaryNavLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <div className="my-2 border-t border-gray-200" />
            {secondaryNavLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-gray-600 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
