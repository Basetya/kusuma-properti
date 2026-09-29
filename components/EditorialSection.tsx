import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { ArticleCard } from './ArticleCard';
import { propertyArticles } from '@/data/editorialData';

export const EditorialSection: React.FC = () => {
  return (
    <section
      aria-label="Info dan Tips Properti Terkini"
      className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8"
    >
      {/* Section Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 mb-1">
            <BookOpen className="h-3.5 w-3.5" />
            <span>ARTIKEL & PANDUAN</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            Info & Tips Properti Terkini
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            Wawasan mendalam seputar tren investasi properti, hukum pertanahan, dan tips renovasi hunian.
          </p>
        </div>

        <Link
          href="#"
          className="inline-flex items-center text-xs sm:text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
        >
          <span>Lihat Semua Artikel</span>
          <ArrowRight className="ml-1 h-3.5 w-3.5" />
        </Link>
      </div>

      {/* 4-Column Responsive Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {propertyArticles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            excerpt={article.excerpt}
            category={article.category}
            date={article.date}
            readTime={article.readTime}
            imageUrl={article.imageUrl}
            author={article.author}
            href={article.href}
          />
        ))}
      </div>
    </section>
  );
};

export default EditorialSection;
