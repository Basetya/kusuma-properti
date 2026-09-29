'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles, Filter } from 'lucide-react';
import { PropertyCard } from './PropertyCard';
import { recommendedProperties, PropertyItem } from '@/data/mockProperties';

export const RecommendedSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeFilter, setActiveFilter] = useState<{ query: string; tab: string }>({
    query: '',
    tab: 'Dijual',
  });
  const [filteredProperties, setFilteredProperties] = useState<PropertyItem[]>(recommendedProperties);

  // Subscribe to search engine events emitted by HeroSection
  useEffect(() => {
    const handleSearchEvent = (event: Event) => {
      const customEvent = event as CustomEvent<{ query: string; tab: string }>;
      if (customEvent.detail) {
        const { query, tab } = customEvent.detail;
        setActiveFilter({ query, tab });

        const qLower = query.toLowerCase().trim();
        const results = recommendedProperties.filter((p) => {
          const matchesQuery =
            !qLower ||
            p.title.toLowerCase().includes(qLower) ||
            p.location.toLowerCase().includes(qLower) ||
            (p.agentAgency && p.agentAgency.toLowerCase().includes(qLower));
          return matchesQuery;
        });

        setFilteredProperties(results.length > 0 ? results : recommendedProperties);
        setCurrentPage(0);
      }
    };

    window.addEventListener('rumah123:search', handleSearchEvent);
    return () => {
      window.removeEventListener('rumah123:search', handleSearchEvent);
    };
  }, []);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % 2);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? 1 : 0));
  };

  const displayedProperties =
    currentPage === 0 ? filteredProperties : [...filteredProperties].reverse();

  return (
    <section aria-label="Rekomendasi Sesuai Pencarianmu" className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header with Title, Subtitle, and Actions */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 mb-1">
            <Sparkles className="h-3.5 w-3.5" />
            <span>PILIHAN TERBAIK</span>
            {activeFilter.query && (
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-semibold text-blue-800">
                <Filter className="h-3 w-3" />
                Filter: &quot;{activeFilter.query}&quot;
              </span>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            Rekomendasi Sesuai Pencarianmu
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            Listing pilihan dengan penawaran harga terbaik dan legalitas terverifikasi.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-xs sm:text-sm font-semibold text-blue-600 transition duration-200 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
          >
            Lihat Selengkapnya &rarr;
          </Link>

          {/* Carousel Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Halaman sebelumnya"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition duration-200 hover:bg-gray-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Halaman selanjutnya"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition duration-200 hover:bg-gray-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4-Column Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedProperties.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            title={property.title}
            price={property.price}
            installment={property.installment}
            location={property.location}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            landArea={property.landArea}
            buildingArea={property.buildingArea}
            imageUrl={property.imageUrl}
            tag={property.tag}
            badgeType={property.badgeType}
            agentName={property.agentName}
            agentAgency={property.agentAgency}
            variant="standard"
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendedSection;
