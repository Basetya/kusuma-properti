import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: 'Kusuma Properti - Situs Jual Beli & Sewa Properti Terpercaya',
  description:
    'Cari rumah, apartemen, tanah, ruko, dan properti baru dijual atau disewa di seluruh Indonesia dengan mudah dan terpercaya bersama Kusuma Properti.',
  keywords: [
    'kusuma properti',
    'jual beli properti',
    'rumah dijual',
    'sewa apartemen',
    'kpr rumah',
    'properti indonesia',
    'agen properti terpercaya',
  ],
  authors: [{ name: 'PT Kusuma Properti Indonesia' }],
  openGraph: {
    title: 'Kusuma Properti - Situs Jual Beli & Sewa Properti Terpercaya',
    description:
      'Cari rumah, apartemen, tanah, ruko, dan properti baru dijual atau disewa di seluruh Indonesia dengan mudah dan terpercaya bersama Kusuma Properti.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Kusuma Properti',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kusuma Properti - Situs Jual Beli & Sewa Properti Terpercaya',
    description:
      'Cari rumah, apartemen, tanah, ruko, dan properti baru dijual atau disewa di seluruh Indonesia dengan mudah dan terpercaya bersama Kusuma Properti.',
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
