'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Search,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Clock,
  Sparkles,
  SlidersHorizontal,
} from 'lucide-react';

export type SearchTab = 'Dijual' | 'Disewa' | 'Properti Baru';

const BANNER_SLIDES = [
  {
    id: 1,
    title: 'Cluster Eksklusif di Serpong - Diskon DP Hingga 50 Juta',
    imageUrl: 'https://placehold.co/1600x500/0b2545/ffffff/png?text=Kusuma+Properti+Hunian+Eksklusif',
  },
  {
    id: 2,
    title: 'Festival Properti Indonesia 2026 - Bunga KPR Spesial 2.75%',
    imageUrl: 'https://placehold.co/1600x500/013a63/ffffff/png?text=Festival+KPR+Kusuma+Properti+2026',
  },
];

const RECENT_SEARCHES = [
  'Jakarta Selatan',
  'BSD City',
  'Bekasi Barat',
  'Bandung Kota',
  'Surabaya Timur',
];

export interface HeroSectionProps {
  onSearch?: (query: string, tab: SearchTab) => void;
  initialTab?: SearchTab;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  initialTab = 'Dijual',
}) => {
  const [activeTab, setActiveTab] = useState<SearchTab>(initialTab);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Hydrate search query and tab from URL if present
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlQ = params.get('q');
      const urlType = params.get('type');

      if (urlQ) setSearchQuery(urlQ);
      if (urlType === 'disewa') setActiveTab('Disewa');
      else if (urlType === 'properti-baru') setActiveTab('Properti Baru');
      else if (urlType === 'dijual') setActiveTab('Dijual');
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length);
  };

  const triggerSearch = (query: string, tab: SearchTab) => {
    if (onSearch) {
      onSearch(query, tab);
    }
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (query.trim()) {
        url.searchParams.set('q', query.trim());
      } else {
        url.searchParams.delete('q');
      }
      url.searchParams.set('type', tab.toLowerCase().replace(/\s+/g, '-'));
      window.history.replaceState({}, '', url.toString());

      window.dispatchEvent(
        new CustomEvent('kusuma:search', {
          detail: { query: query.trim(), tab },
        })
      );
      window.dispatchEvent(
        new CustomEvent('rumah123:search', {
          detail: { query: query.trim(), tab },
        })
      );
    }
  };

  const handleTabChange = (tab: SearchTab) => {
    setActiveTab(tab);
    triggerSearch(searchQuery, tab);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerSearch(searchQuery, activeTab);
  };

  const handleChipClick = (chip: string) => {
    setSearchQuery(chip);
    triggerSearch(chip, activeTab);
  };

  return (
    <section aria-label="Hero Banner dan Pencarian Properti" className="relative w-full pb-16 sm:pb-20">
      {/* 1. Full-Width Banner Carousel Container */}
      <div className="relative h-[360px] w-full overflow-hidden bg-slate-900 sm:h-[400px] lg:h-[420px]">
        <Image
          src={BANNER_SLIDES[currentSlide].imageUrl}
          alt={BANNER_SLIDES[currentSlide].title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90 transition-all duration-700"
        />

        {/* Dark Gradient Overlay for optimal contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

        {/* Carousel Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Slide sebelumnya"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition duration-200 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:left-6"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Slide selanjutnya"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition duration-200 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:right-6"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Carousel Dot Indicators */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:bottom-24">
          {BANNER_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                currentSlide === index ? 'w-6 bg-white' : 'w-2 bg-white/50'
              }`}
              aria-label={`Pindah ke banner ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 2. Floating Search Overlay Card */}
      <div className="mx-auto -mt-24 sm:-mt-20 max-w-5xl px-4 sm:px-6 relative z-20">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl sm:p-6 md:p-8">
          {/* Header Title inside card */}
          <div className="mb-4 text-center sm:text-left">
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-700">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              Portal Properti Terpercaya di Indonesia
            </div>
            <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
              Jual Beli dan Sewa Properti Jadi Mudah Bersama Kusuma Properti
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              Temukan ribuan hunian idaman, ruko, tanah, dan apartemen dari agen terverifikasi di seluruh Indonesia.
            </p>
          </div>

          {/* Active Segment Tabs */}
          <div className="mb-4 flex flex-wrap items-center gap-2 border-b border-gray-100 pb-3">
            {(['Dijual', 'Disewa', 'Properti Baru'] as SearchTab[]).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabChange(tab)}
                  className={`relative rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Search Input Bar with Filter and Action Button */}
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            {/* Input field with search icon */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari lokasi, keyword, area, project di Kusuma Properti..."
                className="w-full rounded-xl border border-gray-300 py-3.5 pl-12 pr-4 text-sm text-gray-800 placeholder-gray-400 transition duration-200 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Filter Toggle Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <SlidersHorizontal className="h-4 w-4 text-gray-500" />
              <span>Filter</span>
            </button>

            {/* Distinct Blue "Cari" Button */}
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-md transition duration-200 hover:bg-blue-700 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <Search className="h-4 w-4" />
              <span>Cari Properti</span>
            </button>
          </form>

          {/* Quick Search Tag Pills (Pencarian Terakhir) */}
          <div className="mt-4 flex flex-wrap items-center gap-2 pt-2 text-xs text-gray-500">
            <span className="flex items-center gap-1 font-semibold text-gray-700">
              <Clock className="h-3.5 w-3.5 text-gray-400" />
              Pencarian Terakhir:
            </span>
            {RECENT_SEARCHES.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => handleChipClick(chip)}
                className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 font-medium text-gray-600 transition duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <MapPin className="h-3 w-3 text-blue-500" />
                <span>{chip}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
