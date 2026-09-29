import React from 'react';
import { Mail, MessageSquare, ShieldCheck } from 'lucide-react';

export const ConsumerNotice: React.FC = () => {
  return (
    <section
      aria-label="Layanan Pengaduan Konsumen"
      className="max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Side: Large Bold Heading */}
          <div className="lg:max-w-md">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 mb-2">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
              <span>Transparansi & Perlindungan Konsumen</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900">
              Layanan Pengaduan Konsumen
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-gray-500 leading-relaxed">
              Komitmen kami untuk selalu memberikan pelayanan terbaik, aman, dan transparan bagi seluruh pengguna Rumah123.
            </p>
          </div>

          {/* Right Side: 2 Columns / Stacked Contact Cards */}
          <address className="not-italic grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex-1 lg:max-w-2xl">
            {/* 1. PT Web Marketing Indonesia */}
            <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/30">
              <span className="text-xs font-bold text-gray-900 block mb-1">
                PT Web Marketing Indonesia
              </span>
              <p className="text-xs text-gray-500 mb-2.5">
                Pengaduan dan bantuan operasional platform Rumah123
              </p>
              <a
                href="mailto:infopengaduan@rumah123.com"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-blue-500" />
                <span>infopengaduan@rumah123.com</span>
              </a>
            </div>

            {/* 2. Ditjen PKTN Kemendag RI */}
            <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4 transition-colors hover:border-emerald-200 hover:bg-emerald-50/30">
              <span className="text-xs font-bold text-gray-900 block mb-1">
                Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga (Ditjen PKTN)
              </span>
              <p className="text-xs text-gray-500 mb-2.5">
                Kementerian Perdagangan Republik Indonesia
              </p>
              <a
                href="https://wa.me/6285311111010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-800 transition-colors"
              >
                <MessageSquare className="h-3.5 w-3.5 text-emerald-500" />
                <span>WhatsApp: 0853 1111 1010</span>
              </a>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
};

export default ConsumerNotice;
