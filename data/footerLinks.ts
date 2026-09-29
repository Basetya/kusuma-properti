export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLinkItem[];
}

export const directoryTabs = [
  'Properti Dijual di Indonesia',
  'Lokasi Paling Banyak Dicari',
  'Properti Unggulan',
  'Ragam Hunian',
] as const;

export type DirectoryTab = (typeof directoryTabs)[number];

export const primaryProvinces: FooterLinkItem[] = [
  { label: 'Aceh', href: '#' },
  { label: 'Bali', href: '#' },
  { label: 'Banten', href: '#' },
  { label: 'Bengkulu', href: '#' },
  { label: 'D.I. Yogyakarta', href: '#' },
  { label: 'DKI Jakarta', href: '#' },
  { label: 'Gorontalo', href: '#' },
  { label: 'Jambi', href: '#' },
  { label: 'Jawa Barat', href: '#' },
  { label: 'Jawa Tengah', href: '#' },
  { label: 'Jawa Timur', href: '#' },
  { label: 'Kalimantan Barat', href: '#' },
];

export const extendedProvinces: FooterLinkItem[] = [
  { label: 'Kalimantan Selatan', href: '#' },
  { label: 'Kalimantan Tengah', href: '#' },
  { label: 'Kalimantan Timur', href: '#' },
  { label: 'Kalimantan Utara', href: '#' },
  { label: 'Kepulauan Bangka Belitung', href: '#' },
  { label: 'Kepulauan Riau', href: '#' },
  { label: 'Lampung', href: '#' },
  { label: 'Maluku', href: '#' },
  { label: 'Maluku Utara', href: '#' },
  { label: 'Nusa Tenggara Barat', href: '#' },
  { label: 'Nusa Tenggara Timur', href: '#' },
  { label: 'Papua', href: '#' },
  { label: 'Papua Barat', href: '#' },
  { label: 'Riau', href: '#' },
  { label: 'Sulawesi Barat', href: '#' },
  { label: 'Sulawesi Selatan', href: '#' },
  { label: 'Sulawesi Tengah', href: '#' },
  { label: 'Sulawesi Tenggara', href: '#' },
  { label: 'Sulawesi Utara', href: '#' },
  { label: 'Sumatera Barat', href: '#' },
  { label: 'Sumatera Selatan', href: '#' },
  { label: 'Sumatera Utara', href: '#' },
];

export const otherDirectoryContent: Record<Exclude<DirectoryTab, 'Properti Dijual di Indonesia'>, FooterLinkItem[]> = {
  'Lokasi Paling Banyak Dicari': [
    { label: 'Rumah Dijual di Jakarta Selatan', href: '#' },
    { label: 'Rumah Dijual di Tangerang Selatan', href: '#' },
    { label: 'Rumah Dijual di Bandung', href: '#' },
    { label: 'Rumah Dijual di Surabaya', href: '#' },
    { label: 'Rumah Dijual di Bekasi Barat', href: '#' },
    { label: 'Rumah Dijual di Bogor Kota', href: '#' },
    { label: 'Rumah Dijual di BSD City', href: '#' },
    { label: 'Rumah Dijual di Bintaro Jaya', href: '#' },
    { label: 'Rumah Dijual di Denpasar Bali', href: '#' },
    { label: 'Rumah Dijual di Semarang Barat', href: '#' },
    { label: 'Rumah Dijual di Malang Kota', href: '#' },
    { label: 'Rumah Dijual di Makassar Biringkanaya', href: '#' },
  ],
  'Properti Unggulan': [
    { label: 'Summarecon Serpong', href: '#' },
    { label: 'Navapark BSD City', href: '#' },
    { label: 'Grand Wisata Bekasi', href: '#' },
    { label: 'CitraRaya Tangerang', href: '#' },
    { label: 'Pakuwon City Surabaya', href: '#' },
    { label: 'Podomoro Park Bandung', href: '#' },
    { label: 'Kota Baru Parahyangan', href: '#' },
    { label: 'Ciputra Beach Resort Bali', href: '#' },
    { label: 'Grand Galaxy City Bekasi', href: '#' },
    { label: 'Summarecon Mutiara Makassar', href: '#' },
    { label: 'Vasanta Ecotown Sawangan', href: '#' },
    { label: 'Shila at Sawangan', href: '#' },
  ],
  'Ragam Hunian': [
    { label: 'Rumah Minimalis Modern', href: '#' },
    { label: 'Apartemen Mewah Siap Huni', href: '#' },
    { label: 'Townhouse Eksklusif Cluster', href: '#' },
    { label: 'Villa Kolam Renang Pribadi', href: '#' },
    { label: 'Ruko dan Ruang Usaha Komersial', href: '#' },
    { label: 'Tanah Kavling Siap Bangun', href: '#' },
    { label: 'Rumah Subsidi Pemerintah', href: '#' },
    { label: 'Kost Eksklusif Dekat Kampus', href: '#' },
    { label: 'Gudang Logistik Kawasan Industri', href: '#' },
    { label: 'Ruang Kantor Grade A CBD', href: '#' },
    { label: 'Rumah Hook Posisi Strategis', href: '#' },
    { label: 'Rumah Tua Hitung Tanah', href: '#' },
  ],
};

export const corporateColumns = {
  perusahaan: [
    { label: 'Tentang Kami', href: '#' },
    { label: 'Produk & Layanan', href: '#' },
    { label: 'Partner', href: '#' },
    { label: 'Karir', href: '#' },
    { label: 'Pressroom', href: '#' },
  ],
  layanan: [
    { label: 'Iklankan Properti', href: '#' },
    { label: 'KPR', href: '#' },
  ],
  dukungan: [
    { label: 'Kebijakan Privasi', href: '#' },
    { label: 'Syarat Penggunaan', href: '#' },
    { label: 'Syarat Penggunaan Agen', href: '#' },
  ],
  networkPortal: [
    { label: '99.co Indonesia', href: '#' },
    { label: '99.co Singapura', href: '#' },
    { label: 'SRX', href: '#' },
  ],
  kontak: {
    email: 'info@rumah123.com',
    phone: '+62 21 30496123',
  },
};
