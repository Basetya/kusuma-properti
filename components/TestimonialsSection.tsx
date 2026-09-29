import React from 'react';
import Image from 'next/image';
import { Star, CheckCircle2, Quote, Sparkles } from 'lucide-react';
import { clientTestimonials } from '@/data/editorialData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      aria-label="Cerita Sukses Bersama Rumah123"
      className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <div className="mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 mb-2">
          <Sparkles className="h-3.5 w-3.5 text-blue-600" />
          <span>TESTIMONI PENGGUNA</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
          Cerita Sukses Bersama Rumah123
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-gray-500">
          Pengalaman nyata para pembeli, investor, dan pemilik properti yang mewujudkan impian hunian mereka.
        </p>
      </div>

      {/* 3-Column Testimonials Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {clientTestimonials.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            {/* Ambient Quote Watermark */}
            <Quote className="absolute right-4 top-4 h-10 w-10 text-gray-100 transition-colors group-hover:text-blue-50" />

            <div>
              {/* Star Ratings */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm leading-relaxed text-gray-700 italic">
                &ldquo;{item.review}&rdquo;
              </p>
            </div>

            {/* Reviewer Profile & Verified Badge Footer */}
            <div className="mt-6 border-t border-gray-100 pt-4">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
                  <Image
                    src={item.avatarUrl}
                    alt={item.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <h3 className="truncate text-sm font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-emerald-600" />
                  </div>
                  <p className="truncate text-xs text-gray-500">
                    {item.role} • {item.location}
                  </p>
                </div>
              </div>

              {/* Transaction Note */}
              <div className="mt-3 flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-1.5 text-[11px] text-gray-600">
                <span className="font-semibold text-blue-700">{item.transactionType}</span>
                <span className="truncate max-w-[150px] text-gray-500">{item.propertyName}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
