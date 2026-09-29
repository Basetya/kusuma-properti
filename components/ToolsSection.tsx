import React from 'react';
import { Landmark, Headphones, TrendingUp } from 'lucide-react';
import { ToolCard } from './ToolCard';
import { toolsData } from '@/data/mockProperties';

export const ToolsSection: React.FC = () => {
  const getToolIcon = (type: string) => {
    switch (type) {
      case 'bank':
        return <Landmark className="h-6 w-6 text-blue-600 group-hover:text-white" />;
      case 'consultation':
        return <Headphones className="h-6 w-6 text-emerald-600 group-hover:text-white" />;
      case 'valuation':
        return <TrendingUp className="h-6 w-6 text-indigo-600 group-hover:text-white" />;
      default:
        return undefined;
    }
  };

  return (
    <section aria-label="Kusuma Properti Tools" className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Light Blue Container Card */}
      <div className="rounded-2xl border border-sky-100 bg-sky-50 p-6 sm:p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            Kusuma Properti Tools
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-600">
            Banyak fitur bantu kamu dapat properti impian dengan proses yang lebih transparan dan mudah.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {toolsData.map((tool) => (
            <ToolCard
              key={tool.id}
              title={tool.title}
              description={tool.description}
              ctaText={tool.ctaText}
              href={tool.href}
              badge={tool.badge}
              icon={getToolIcon(tool.type)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
