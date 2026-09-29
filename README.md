# Rumah123 Clone - Portal Jual Beli & Sewa Properti Terdepan di Indonesia

[![Next.js](https://img.shields.io/badge/Next.js-15.1.0-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Status](https://img.shields.io/badge/Release-Candidate--1-emerald)](#)

Replika portal properti terdepan di Indonesia (**Rumah123.com**) yang dibangun menggunakan **Next.js 15 App Router**, **React 19**, **Tailwind CSS**, dan **TypeScript**. Dikembangkan dengan arsitektur decoupled serverless route handlers, responsive client-side state binding, dan standar aksesibilitas web modern.

---

## 🏗️ Fitur & Arsitektur Portal

1. **Header & Navigasi Berlapis:**
   - **Primary Bar:** Brand identity `#0F2540`, hotline pengaduan, language toggle (`id / en`), CTA pasang iklan, dan akun login.
   - **Secondary Sub-Bar:** Kategori navigasi (Dijual, Disewa, Properti Baru, Aset Bank, KPR, Agen, Perusahaan).
2. **Hero & Floating Search Engine:**
   - Full-width banner carousel (ratio ~16:5) dengan kontrol navigasi imersif.
   - Floating search card dengan tab segmen aktif (`Dijual`, `Disewa`, `Properti Baru`), input lokasi/developer, filter button, dan quick chip recent searches yang tersinkronisasi dengan query parameters browser.
3. **8 Quick Action Nodes:**
   - Carikan Properti, Iklankan Properti, Cari Agen, Properti Turun Harga, Kalkulator KPR, Pindah KPR (Take Over), Tanya Forum (Teras123), dan Fitur Lainnya.
4. **Peta Interaktif Jakarta Banner:**
   - Teaser fitur pencarian lokasi berbasis koordinat dan transportasi publik (MRT/LRT).
5. **Katalog Properti & Show Unit Virtual:**
   - **Rekomendasi Sesuai Pencarianmu:** Grid 4-kolom listing terverifikasi yang tersinkronisasi secara real-time dengan pencarian hero.
   - **Properti Baru dengan 360 Tur Virtual:** Unit eksklusif dari Official Developer terpercaya (Summarecon, Pakuwon, Sinar Mas Land) lengkap dengan tombol direct WhatsApp inquiry.
6. **Finansial & Tools Properti:**
   - Aset Bank Lelang Murah, Layanan Konsultasi Spesialis Gratis, dan Cek Estimasi Harga Properti.
7. **Editorial & Berita Pasar:**
   - Panduan KPR milenial, tren kenaikan harga Jabodetabek, desain fasad minimalis, dan legalitas balik nama sertifikat SHM.
8. **Testimoni Pelanggan Terverifikasi:**
   - Ulasan pembeli rumah pertama dan investor properti dengan star rating.
9. **Layanan Pengaduan Konsumen:**
   - Saluran resmi PT Web Marketing Indonesia dan Ditjen PKTN Kementerian Perdagangan RI (WhatsApp `0853 1111 1010`).
10. **Mega Footer Terpadu:**
    - Direktori 34 provinsi se-Indonesia dengan accordion toggle.
    - Informasi korporat 99 Group, download QR code aplikasi, App Store, Google Play, dan perlindungan hak cipta.

---

## 🛠️ Prasyarat & Lingkungan

- **Node.js:** Versi `18.18.0` atau `20.x` (LTS direkomendasikan)
- **Package Manager:** `npm` (v9.x atau v10.x)
- **Sistem Operasi:** Windows, macOS, atau Linux

---

## 🚀 Panduan Memulai Cepat

### 1. Kloning & Pindah ke Branch Staging
```bash
git clone <repository-url>
cd rumah123-clone
git checkout staging
```

### 2. Konfigurasi Environment Variables
Salin file `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```
Variabel yang didukung:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=/api
```

### 3. Instalasi Dependensi
```bash
npm install
```

### 4. Menjalankan di Mode Pengembangan (Dev Server)
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

### 5. Kompilasi & Build Produksi
```bash
npm run build
npm run start
```

---

## 📡 Dokumentasi Endpoint Serverless API

### 1. Properties API (`GET /api/properties`)
Mengambil data listing properti dengan filter dinamis.
- **Query Parameters:**
  - `type`: `dijual` | `disewa` | `properti-baru`
  - `city`: misal `jakarta`, `bandung`, `tangerang`, `surabaya`
  - `q`: keyword pencarian bebas (judul, lokasi, developer, agensi)
  - `limit`: angka bulat positif (misal `4`)
- **Contoh Request:**
  ```http
  GET /api/properties?type=dijual&city=serpong&limit=4
  ```

### 2. Articles API (`GET /api/articles`)
Mengambil artikel panduan dan berita properti.
- **Query Parameters:**
  - `category`: `kpr` | `tren` | `desain` | `legalitas`
  - `q`: keyword pencarian artikel
  - `limit`: angka bulat positif
- **Contoh Request:**
  ```http
  GET /api/articles?category=kpr
  ```

---

## 📦 Informasi Deployment & Kontainerisasi

Lihat panduan lengkap pada [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) untuk instruksi deployment ke platform **Vercel** maupun **Docker Container**.

---

## 📄 Hak Cipta & Lisensi
© 2026 PT Web Rumah123 / 99 Group. Proyek ini dilindungi untuk kebutuhan evaluasi dan staging deployment.
