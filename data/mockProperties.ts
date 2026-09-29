export interface PropertyItem {
  id: string;
  title: string;
  price: string;
  priceRange?: string;
  installment?: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  landArea: number | string;
  buildingArea: number | string;
  imageUrl: string;
  tag?: string;
  badgeType?: 'featured' | 'new' | 'verified';
  isOfficialDeveloper?: boolean;
  developerName?: string;
  isVirtualTour?: boolean;
  agentName?: string;
  agentAgency?: string;
  whatsappNumber?: string;
}

export interface ToolItem {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
  badge?: string;
  type: 'bank' | 'consultation' | 'valuation';
}

export const recommendedProperties: PropertyItem[] = [
  {
    id: 'rec-1',
    title: 'Cluster Grand Residence Serpong Dekat Akses Tol BSD',
    price: 'Rp 1,45 Miliar',
    installment: 'Cicilan Rp 6,8 Jt/bln',
    location: 'BSD City, Tangerang Selatan',
    bedrooms: 3,
    bathrooms: 2,
    landArea: 96,
    buildingArea: 85,
    imageUrl: 'https://placehold.co/600x400/013a63/ffffff/png?text=Serpong+Grand+Residence',
    tag: 'Dijual',
    badgeType: 'featured',
    agentName: 'Rian Sanjaya',
    agentAgency: 'Brighton Real Estate Serpong',
  },
  {
    id: 'rec-2',
    title: 'Modern Minimalis 2 Lantai Smart Home Living Bandung Timur',
    price: 'Rp 890 Juta',
    installment: 'Cicilan Rp 4,2 Jt/bln',
    location: 'Antapani, Bandung',
    bedrooms: 3,
    bathrooms: 2,
    landArea: 84,
    buildingArea: 75,
    imageUrl: 'https://placehold.co/600x400/005e93/ffffff/png?text=Modern+Living+Bandung',
    tag: 'Baru',
    badgeType: 'verified',
    agentName: 'Siti Nurhaliza',
    agentAgency: 'Era Star Bandung',
  },
  {
    id: 'rec-3',
    title: 'Rumah Mewah Hook Asri Dekat MRT Fatmawati Jakarta Selatan',
    price: 'Rp 3,85 Miliar',
    installment: 'Cicilan Rp 18,2 Jt/bln',
    location: 'Cilandak, Jakarta Selatan',
    bedrooms: 4,
    bathrooms: 4,
    landArea: 180,
    buildingArea: 210,
    imageUrl: 'https://placehold.co/600x400/0a2540/ffffff/png?text=Mewah+Jakarta+Selatan',
    tag: 'Dijual',
    badgeType: 'verified',
    agentName: 'Budi Hartono',
    agentAgency: 'Ray White Commercial',
  },
  {
    id: 'rec-4',
    title: 'Townhouse Tropis Eksklusif Siap Huni Free Biaya BPHTB',
    price: 'Rp 1,12 Miliar',
    installment: 'Cicilan Rp 5,5 Jt/bln',
    location: 'Bintaro Jaya, Tangerang Selatan',
    bedrooms: 3,
    bathrooms: 2,
    landArea: 90,
    buildingArea: 80,
    imageUrl: 'https://placehold.co/600x400/104f55/ffffff/png?text=Townhouse+Bintaro+Jaya',
    tag: 'Dijual',
    badgeType: 'featured',
    agentName: 'Dewi Anggraeni',
    agentAgency: 'Century 21 Prima',
  },
];

export const virtualTourProperties: PropertyItem[] = [
  {
    id: 'vt-1',
    title: 'Summarecon Mutiara Makassar - The Sherry Residence 360',
    price: 'Rp 1,2 Miliar - 2,5 Miliar',
    priceRange: 'Mulai Rp 1,2 M - 2,5 M',
    installment: 'Cicilan mulai Rp 5,8 Jt-an/bln',
    location: 'Biringkanaya, Makassar',
    bedrooms: 4,
    bathrooms: 3,
    landArea: 140,
    buildingArea: 112,
    imageUrl: 'https://placehold.co/600x400/0f3057/ffffff/png?text=Summarecon+Makassar+360',
    tag: 'Properti Baru',
    badgeType: 'verified',
    isOfficialDeveloper: true,
    developerName: 'Summarecon Agung',
    isVirtualTour: true,
    agentName: 'Official Summarecon Desk',
    agentAgency: 'Developer Partner',
    whatsappNumber: '+6281234567890',
  },
  {
    id: 'vt-2',
    title: 'Pakuwon City Surabaya - Grand Island Waterfront Villa',
    price: 'Rp 2,8 Miliar - 5,4 Miliar',
    priceRange: 'Mulai Rp 2,8 M - 5,4 M',
    installment: 'Cicilan mulai Rp 12 Jt-an/bln',
    location: 'Kenjeran, Surabaya',
    bedrooms: 5,
    bathrooms: 4,
    landArea: 200,
    buildingArea: 195,
    imageUrl: 'https://placehold.co/600x400/005b96/ffffff/png?text=Pakuwon+City+360+Tour',
    tag: 'Properti Baru',
    badgeType: 'featured',
    isOfficialDeveloper: true,
    developerName: 'Pakuwon Group',
    isVirtualTour: true,
    agentName: 'Pakuwon Sales Gallery',
    agentAgency: 'Developer Partner',
    whatsappNumber: '+6281234567891',
  },
  {
    id: 'vt-3',
    title: 'Sinar Mas Land - Enchanta Cluster Navapark BSD City',
    price: 'Rp 3,5 Miliar - 7,2 Miliar',
    priceRange: 'Mulai Rp 3,5 M - 7,2 M',
    installment: 'Cicilan mulai Rp 16 Jt-an/bln',
    location: 'BSD City, Tangerang',
    bedrooms: 4,
    bathrooms: 4,
    landArea: 160,
    buildingArea: 175,
    imageUrl: 'https://placehold.co/600x400/1e3d59/ffffff/png?text=Navapark+BSD+360+Tour',
    tag: 'Properti Baru',
    badgeType: 'featured',
    isOfficialDeveloper: true,
    developerName: 'Sinar Mas Land',
    isVirtualTour: true,
    agentName: 'Navapark VIP Lounge',
    agentAgency: 'Developer Partner',
    whatsappNumber: '+6281234567892',
  },
  {
    id: 'vt-4',
    title: 'Grand Galaxy City Bekasi - Cluster Neo Aerum 360 View',
    price: 'Rp 950 Juta - 1,8 Miliar',
    priceRange: 'Mulai Rp 950 Jt - 1,8 M',
    installment: 'Cicilan mulai Rp 4,5 Jt-an/bln',
    location: 'Bekasi Selatan, Bekasi',
    bedrooms: 3,
    bathrooms: 2,
    landArea: 90,
    buildingArea: 82,
    imageUrl: 'https://placehold.co/600x400/17b978/ffffff/png?text=Grand+Galaxy+Bekasi+360',
    tag: 'Properti Baru',
    badgeType: 'verified',
    isOfficialDeveloper: true,
    developerName: 'Agung Sedayu Group',
    isVirtualTour: true,
    agentName: 'Galaxy Sales Gallery',
    agentAgency: 'Developer Partner',
    whatsappNumber: '+6281234567893',
  },
];

export const toolsData: ToolItem[] = [
  {
    id: 'tool-bank',
    title: 'Aset Bank',
    description: 'Properti terjangkau yang dijual bank lewat lelang dengan harga di bawah pasar.',
    ctaText: 'Cek Sekarang',
    href: '#',
    badge: 'Pilihan Murah',
    type: 'bank',
  },
  {
    id: 'tool-consult',
    title: 'Kami Siap Membantu',
    description: 'Konsultasikan properti pilihanmu di sini bersama tim spesialis Kusuma Properti secara gratis.',
    ctaText: 'Mulai Konsultasi',
    href: '#',
    badge: 'Gratis',
    type: 'consultation',
  },
  {
    id: 'tool-valuation',
    title: 'Cek Harga Properti',
    description: 'Ketahui estimasi harga pasar properti terkini untuk panduan jual beli lebih akurat.',
    ctaText: 'Cek Sekarang',
    href: '#',
    badge: 'Akurat',
    type: 'valuation',
  },
];
