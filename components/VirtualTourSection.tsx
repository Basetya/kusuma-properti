'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { PropertyCard } from './PropertyCard';
import { virtualTourProperties } from '@/data/mockProperties';

export const VirtualTourSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % 2);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? 1 : 0));
  };

  const displayedProperties =
    currentPage === 0 ? virtualTourProperties : [...virtualTourProperties].reverse();

  return (
    <section aria-label="Properti Baru dengan 360 Tur Virtual" className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-600 mb-1">
            <Eye className="h-3.5 w-3.5" />
            <span>PENGALAMAN INTERAKTIF</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            Properti Baru dengan 360 Tur Virtual
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            Jelajahi show unit dari rumah impian secara imersif langsung dari layar gadget Anda.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-xs sm:text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
          >
            Lihat Semua Properti Baru &rarr;
          </Link>

          {/* Carousel Arrows */}
          <div className="hidden sm:flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Properti sebelumnya"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-blue-600"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Properti selanjutnya"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-blue-600"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4-Column Action Variant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedProperties.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            title={property.title}
            price={property.price}
            priceRange={property.priceRange}
            installment={property.installment}
            location={property.location}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            landArea={property.landArea}
            buildingArea={property.buildingArea}
            imageUrl={property.imageUrl}
            tag={property.tag}
            badgeType={property.badgeType}
            isOfficialDeveloper={property.isOfficialDeveloper}
            developerName={property.developerName}
            isVirtualTour={property.isVirtualTour}
            whatsappNumber={property.whatsappNumber}
            agentName={property.agentName}
            agentAgency={property.agentAgency}
            variant="action"
          />
        ))}
      </div>
    </section>
  );
};

export default VirtualTourSection;
