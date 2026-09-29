'use client';

import React from 'react';
import Image from 'next/image';
import {
  Bed,
  Bath,
  Maximize2,
  MapPin,
  Heart,
  ShieldCheck,
  MessageSquare,
  Share2,
  Phone,
  Eye,
  BadgeCheck,
} from 'lucide-react';

export interface PropertyCardProps {
  id?: string | number;
  title: string;
  price: string;
  priceRange?: string;
  installment?: string;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  landArea?: number | string; // LT in m2
  buildingArea?: number | string; // LB in m2
  imageUrl?: string;
  tag?: string;
  badgeType?: 'featured' | 'new' | 'verified';
  isOfficialDeveloper?: boolean;
  developerName?: string;
  isVirtualTour?: boolean;
  variant?: 'standard' | 'action';
  agentName?: string;
  agentAgency?: string;
  whatsappNumber?: string;
  isFavorite?: boolean;
  onFavoriteClick?: (id?: string | number) => void;
  onContactClick?: (id?: string | number) => void;
  onShareClick?: (id?: string | number) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  price,
  priceRange,
  installment = 'Cicilan mulai Rp 4 jt-an/bln',
  location,
  bedrooms = 3,
  bathrooms = 2,
  landArea = 120,
  buildingArea = 90,
  imageUrl = 'https://placehold.co/600x400/png?text=Rumah123+Property',
  tag = 'Dijual',
  badgeType = 'verified',
  isOfficialDeveloper = false,
  developerName,
  isVirtualTour = false,
  variant = 'standard',
  agentName = 'Agen Terpercaya',
  agentAgency = 'Rumah123 Premier Partner',
  whatsappNumber,
  isFavorite = false,
  onFavoriteClick,
  onContactClick,
  onShareClick,
}) => {
  const displayPrice = priceRange || price;

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Media Header */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Top Badges */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5 z-10">
          <span className="rounded-md bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
            {tag}
          </span>
          {badgeType === 'verified' && (
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5" />
              Terverifikasi
            </span>
          )}
          {badgeType === 'featured' && (
            <span className="rounded-md bg-amber-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
              Premier
            </span>
          )}
        </div>

        {/* 360 Virtual Tour Overlay Indicator */}
        {isVirtualTour && (
          <div className="absolute bottom-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1 text-xs font-bold text-white shadow backdrop-blur-md">
              <Eye className="h-3.5 w-3.5 text-cyan-400" />
              360° Tur Virtual
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <button
          type="button"
          onClick={() => onFavoriteClick?.(id)}
          aria-label="Simpan properti favorit"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 backdrop-blur-sm transition-colors hover:bg-white hover:text-rose-600 shadow-sm"
        >
          <Heart
            className={`h-5 w-5 ${isFavorite ? 'fill-rose-600 text-rose-600' : ''}`}
          />
        </button>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Developer Badge if present */}
        {isOfficialDeveloper && (
          <div className="mb-2">
            <span className="inline-flex items-center gap-1 rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">
              <BadgeCheck className="h-3.5 w-3.5 text-amber-600" />
              Official Developer {developerName ? `• ${developerName}` : ''}
            </span>
          </div>
        )}

        {/* Price & Installment */}
        <div className="mb-1.5">
          <p className="text-xl font-bold tracking-tight text-[#005EAD]">{displayPrice}</p>
          {installment && (
            <p className="text-xs font-medium text-gray-500">{installment}</p>
          )}
        </div>

        {/* Title */}
        <h3 className="line-clamp-2 text-sm font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
          {title}
        </h3>

        {/* Location */}
        <div className="mt-2 flex items-center text-xs text-gray-500">
          <MapPin className="mr-1 h-3.5 w-3.5 flex-shrink-0 text-gray-400" />
          <span className="truncate">{location}</span>
        </div>

        {/* Specs Grid */}
        <div className="mt-3 flex items-center justify-between border-y border-gray-100 py-2.5 text-xs text-gray-600">
          <div className="flex items-center gap-1" title="Kamar Tidur">
            <Bed className="h-3.5 w-3.5 text-blue-500" />
            <span>{bedrooms} KT</span>
          </div>
          <div className="flex items-center gap-1" title="Kamar Mandi">
            <Bath className="h-3.5 w-3.5 text-blue-500" />
            <span>{bathrooms} KM</span>
          </div>
          <div className="flex items-center gap-1" title="Luas Tanah">
            <Maximize2 className="h-3.5 w-3.5 text-blue-500" />
            <span>LT {landArea}m²</span>
          </div>
          <div className="flex items-center gap-1" title="Luas Bangunan">
            <Maximize2 className="h-3.5 w-3.5 text-emerald-500" />
            <span>LB {buildingArea}m²</span>
          </div>
        </div>

        {/* Footer Area */}
        {variant === 'action' ? (
          /* Dual Action Footer for Virtual Tour Action variant */
          <div className="mt-4 flex items-center justify-between gap-2 pt-1">
            <button
              type="button"
              onClick={() => onShareClick?.(id)}
              aria-label="Bagikan properti"
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white p-2 text-xs font-medium text-gray-600 transition duration-200 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <a
              href={`https://wa.me/${whatsappNumber?.replace(/[^0-9]/g, '') || '6281234567890'}?text=Halo%2C%20saya%20tertarik%20dengan%20properti%20${encodeURIComponent(title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2 text-xs font-semibold text-white shadow-sm transition duration-200 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        ) : (
          /* Standard Agent Info & Action Footer */
          <div className="mt-4 flex items-center justify-between pt-1">
            <div className="min-w-0 pr-2">
              <p className="truncate text-xs font-semibold text-gray-800">{agentName}</p>
              <p className="truncate text-[11px] text-gray-500">{agentAgency}</p>
            </div>
            <button
              type="button"
              onClick={() => onContactClick?.(id)}
              className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition duration-200 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              Hubungi
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
