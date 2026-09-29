import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: 'Situs Jual Beli Properti Terdepan di Indonesia | Rumah123 Clone',
  description:
    'Cari rumah, apartemen, tanah, ruko, dan properti baru dijual atau disewa di seluruh Indonesia dengan mudah di Rumah123.',
  keywords: [
    'rumah123',
    'jual beli properti',
    'rumah dijual',
    'sewa apartemen',
    'kpr rumah',
    'properti indonesia',
  ],
  authors: [{ name: 'PT Web Marketing Indonesia' }],
  openGraph: {
    title: 'Situs Jual Beli Properti Terdepan di Indonesia | Rumah123 Clone',
    description:
      'Cari rumah, apartemen, tanah, ruko, dan properti baru dijual atau disewa di seluruh Indonesia dengan mudah di Rumah123.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Rumah123 Clone',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Situs Jual Beli Properti Terdepan di Indonesia | Rumah123 Clone',
    description:
      'Cari rumah, apartemen, tanah, ruko, dan properti baru dijual atau disewa di seluruh Indonesia dengan mudah di Rumah123.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0F2540',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
