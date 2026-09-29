import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export interface ArticleCardProps {
  id?: string | number;
  title: string;
  excerpt?: string;
  category: string;
  date: string;
  readTime?: string;
  imageUrl?: string;
  author?: string;
  href?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt = 'Dapatkan wawasan seputar investasi properti, panduan legalitas, serta tips renovasi hunian terlengkap.',
  category,
  date,
  readTime = '4 mnt baca',
  imageUrl = 'https://placehold.co/600x380/png?text=Kusuma+Properti+Artikel',
  author = 'Redaksi Kusuma Properti',
  href = '#',
}) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Article Thumbnail */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <span className="rounded-md bg-white/95 px-2.5 py-1 text-xs font-semibold text-blue-900 shadow-sm backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Metadata */}
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5 text-gray-400" />
            {date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-gray-400" />
            {readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-2 line-clamp-2 text-base font-bold text-gray-900 transition duration-200 group-hover:text-blue-600">
          <Link href={href} className="focus:outline-none focus:ring-2 focus:ring-blue-600 rounded">
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-gray-600">
            {excerpt}
          </p>
        )}

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs">
          <span className="font-medium text-gray-600">Oleh {author}</span>
          <Link
            href={href}
            className="inline-flex items-center font-semibold text-blue-600 transition duration-200 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
          >
            Baca Selengkapnya
            <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
