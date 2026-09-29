import React from 'react';
import Link from 'next/link';
import {
  Search,
  PlusCircle,
  Users,
  TrendingDown,
  Calculator,
  RefreshCw,
  MessageSquare,
  LayoutGrid,
} from 'lucide-react';

interface QuickLinkItem {
  id: number;
  label: string;
  icon: React.ReactNode;
  href: string;
  colorClass: string;
}

const QUICK_ACTIONS: QuickLinkItem[] = [
  {
    id: 1,
    label: 'Carikan Properti',
    icon: <Search className="h-6 w-6" />,
    href: '#',
    colorClass: 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white',
  },
  {
    id: 2,
    label: 'Iklankan Properti',
    icon: <PlusCircle className="h-6 w-6" />,
    href: '#',
    colorClass: 'bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white',
  },
  {
    id: 3,
    label: 'Cari Agen',
    icon: <Users className="h-6 w-6" />,
    href: '#',
    colorClass: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white',
  },
  {
    id: 4,
    label: 'Properti Turun Harga',
    icon: <TrendingDown className="h-6 w-6" />,
    href: '#',
    colorClass: 'bg-amber-50 text-amber-600 hover:bg-amber-600 hover:text-white',
  },
  {
    id: 5,
    label: 'Kalkulator KPR',
    icon: <Calculator className="h-6 w-6" />,
    href: '#',
    colorClass: 'bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white',
  },
  {
    id: 6,
    label: 'Pindah KPR (Take Over)',
    icon: <RefreshCw className="h-6 w-6" />,
    href: '#',
    colorClass: 'bg-cyan-50 text-cyan-600 hover:bg-cyan-600 hover:text-white',
  },
  {
    id: 7,
    label: 'Tanya Forum (Teras123)',
    icon: <MessageSquare className="h-6 w-6" />,
    href: '#',
    colorClass: 'bg-violet-50 text-violet-600 hover:bg-violet-600 hover:text-white',
  },
  {
    id: 8,
    label: 'Lainnya',
    icon: <LayoutGrid className="h-6 w-6" />,
    href: '#',
    colorClass: 'bg-gray-100 text-gray-700 hover:bg-gray-800 hover:text-white',
  },
];

export const QuickLinks: React.FC = () => {
  return (
    <section aria-label="Menu Aksi Cepat" className="w-full py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 sm:gap-6">
          {QUICK_ACTIONS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col items-center text-center rounded-2xl p-1 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {/* Circular Action Node */}
              <div
                className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full shadow-sm transition duration-200 group-hover:scale-110 group-hover:shadow-md ${item.colorClass}`}
              >
                {item.icon}
              </div>
              {/* Action Label */}
              <span className="mt-2.5 line-clamp-2 text-xs font-semibold text-gray-700 transition duration-200 group-hover:text-blue-600">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
