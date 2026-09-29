import React from 'react';
import Link from 'next/link';
import { Calculator, ChevronRight, Sparkles } from 'lucide-react';

export interface ToolCardProps {
  id?: string | number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  badge?: string;
  href?: string;
  ctaText?: string;
  highlighted?: boolean;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  icon,
  badge,
  href = '#',
  ctaText = 'Coba Sekarang',
  highlighted = false,
}) => {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        highlighted
          ? 'border-blue-200 bg-gradient-to-br from-blue-50/70 via-white to-sky-50/40 shadow-sm'
          : 'border-gray-200 bg-white shadow-sm'
      }`}
    >
      {/* Top Section */}
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
            {icon || <Calculator className="h-6 w-6" />}
          </div>

          {badge && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
              <Sparkles className="h-3 w-3" />
              {badge}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-base font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          {title}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
          {description}
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="mt-5 pt-3 border-t border-gray-100">
        <Link
          href={href}
          className="inline-flex items-center text-xs font-semibold text-blue-600 transition duration-200 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
        >
          {ctaText}
          <ChevronRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;
