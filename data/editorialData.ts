export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  author: string;
  href: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  review: string;
  rating: number;
  avatarUrl: string;
  transactionType: string;
  propertyName: string;
}

export const propertyArticles: ArticleItem[] = [
  {
    id: 'art-1',
    title: 'Panduan Lengkap Mengajukan KPR Rumah Pertama untuk Milenial di 2026',
    excerpt: 'Langkah taktis menyiapkan DP, perbaikan skor BI Checking (SLIK OJK), serta tips memilih tenor fixed rate perbankan nasional.',
    category: 'Panduan KPR',
    date: '29 Sep 2026',
    readTime: '5 mnt baca',
    imageUrl: 'https://placehold.co/600x380/013a63/ffffff/png?text=Panduan+KPR+Milenial',
    author: 'Tim Riset Rumah123',
    href: '#',
  },
  {
    id: 'art-2',
    title: 'Tren Harga Rumah di Kawasan Penyangga Jakarta: BSD, Cibubur, & Bekasi',
    excerpt: 'Analisis kenaikan harga tanah per meter persegi di sekitar simpul stasiun MRT, LRT Jabodebek, dan gerbang tol baru.',
    category: 'Tren Pasar',
    date: '28 Sep 2026',
    readTime: '4 mnt baca',
    imageUrl: 'https://placehold.co/600x380/005e93/ffffff/png?text=Tren+Harga+Jabodetabek',
    author: 'Analis Properti',
    href: '#',
  },
  {
    id: 'art-3',
    title: '7 Inspirasi Desain Fasad Rumah Minimalis Modern Hemat Energi',
    excerpt: 'Sentuhan cross-ventilation, roster estetis, dan panel surya mini untuk hunian compact perkotaan yang hemat tagihan listrik.',
    category: 'Desain & Arsitektur',
    date: '27 Sep 2026',
    readTime: '6 mnt baca',
    imageUrl: 'https://placehold.co/600x380/0a2540/ffffff/png?text=Desain+Rumah+Modern',
    author: 'Arsitek Rumah123',
    href: '#',
  },
  {
    id: 'art-4',
    title: 'Syarat dan Biaya Balik Nama Sertifikat Rumah SHM di Notaris/PPAT',
    excerpt: 'Rincian tarif BPHTB, PNBP, dan honorarium Pejabat Pembuat Akta Tanah (PPAT) agar transaksi jual beli aman dari sengketa.',
    category: 'Legalitas & Hukum',
    date: '26 Sep 2026',
    readTime: '4 mnt baca',
    imageUrl: 'https://placehold.co/600x380/104f55/ffffff/png?text=Legalitas+Sertifikat+SHM',
    author: 'Pakar Hukum Agraria',
    href: '#',
  },
];

export const clientTestimonials: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Hendrawan Pratama',
    role: 'Pembeli Rumah Pertama',
    location: 'Serpong, Tangerang Selatan',
    review: 'Fitur Simulasi KPR dan 360 Tur Virtual Rumah123 sangat memudahkan saya menyeleksi rumah tanpa harus terjebak macet tiap akhir pekan. Proses negosiasi dengan agen resmi juga sangat transparan!',
    rating: 5,
    avatarUrl: 'https://placehold.co/120x120/005e93/ffffff/png?text=HP',
    transactionType: 'Pembelian Rumah Baru',
    propertyName: 'Cluster Grand Residence Serpong',
  },
  {
    id: 'test-2',
    name: 'Melissa Anggriani',
    role: 'Investor Properti',
    location: 'Bandung Kota',
    review: 'Sebagai investor, akurasi data harga properti dan kecepatan agen merespons lewat tombol WhatsApp adalah nilai plus utama. Dalam sebulan, saya berhasil mengakuisisi unit ruko impian.',
    rating: 5,
    avatarUrl: 'https://placehold.co/120x120/e11d48/ffffff/png?text=MA',
    transactionType: 'Investasi Komersial',
    propertyName: 'Ruko Modern Antapani Bandung',
  },
  {
    id: 'test-3',
    name: 'Bambang Soetjipto',
    role: 'Pemilik Hunian (Penjual)',
    location: 'Jakarta Selatan',
    review: 'Pasang iklan properti di Rumah123 mendapatkan traffic pembeli potensial yang sangat cepat. Hanya butuh 3 minggu sampai akhirnya unit apartemen saya deal dengan pembeli cash.',
    rating: 5,
    avatarUrl: 'https://placehold.co/120x120/0f3057/ffffff/png?text=BS',
    transactionType: 'Penjualan Apartemen',
    propertyName: 'Executive Tower TB Simatupang',
  },
];
