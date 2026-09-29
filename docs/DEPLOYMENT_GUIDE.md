# Panduan Deployment Kusuma Properti (GitHub & Vercel)

Dokumen ini menyediakan panduan langkah-demi-langkah (step-by-step) untuk mempublikasikan repositori portal **Kusuma Properti** ke GitHub dan mendeploynya ke platform cloud **Vercel**.

---

## 1. Persiapan Git & Push ke GitHub

### Langkah 1.1: Pastikan Status Git Bersih
Jalankan perintah berikut di terminal:
```bash
git status
```
Pastikan seluruh perubahan telah di-commit dan tidak ada file sensitif (`.env`, `.env.local`) yang terlacak.

### Langkah 1.2: Buat Repositori Baru di GitHub
1. Buka [GitHub](https://github.com) dan masuk ke akun Anda.
2. Klik tombol **New** atau **Create a new repository**.
3. Beri nama repositori, contoh: `kusuma-properti`.
4. Pilih opsi **Public** atau **Private** sesuai kebutuhan.
5. *Jangan centang* opsi "Add a README file" atau ".gitignore" karena proyek sudah memilikinya.
6. Klik **Create repository**.

### Langkah 1.3: Hubungkan Remote dan Push ke GitHub
Jalankan perintah berikut di terminal proyek:
```bash
# Tambahkan remote origin (ganti <USERNAME> dengan username GitHub Anda)
git remote add origin https://github.com/<USERNAME>/kusuma-properti.git

# Pastikan berada di branch main
git branch -M main

# Push seluruh commit dan tag ke GitHub
git push -u origin main --tags
```

---

## 2. Deployment ke Vercel

Vercel adalah platform cloud resmi yang dioptimalkan untuk framework Next.js.

### Opsi A: Deployment Melalui Vercel Dashboard (Rekomendasi)

1. Buka [Vercel Dashboard](https://vercel.com/dashboard) dan login menggunakan akun GitHub Anda.
2. Klik tombol **Add New...** di pojok kanan atas, lalu pilih **Project**.
3. Pada daftar **Import Git Repository**, cari dan klik **Import** pada repositori `kusuma-properti`.
4. **Konfigurasi Project:**
   - **Project Name:** `kusuma-properti` (otomatis)
   - **Framework Preset:** `Next.js` (terdeteksi otomatis)
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
5. **Konfigurasi Environment Variables:**
   Buka accordion **Environment Variables** dan tambahkan variabel berikut:
   | Key | Value (Contoh) |
   | :--- | :--- |
   | `NEXT_PUBLIC_APP_URL` | `https://kusuma-properti.vercel.app` |
   | `NEXT_PUBLIC_API_BASE_URL` | `/api` |
6. Klik tombol **Deploy**.
7. Tunggu proses build selesai (rata-rata 1-2 menit). Vercel akan memberikan domain aktif (misal `https://kusuma-properti.vercel.app`).

---

### Opsi B: Deployment Menggunakan Vercel CLI

Jika Anda lebih memilih deploy langsung melalui terminal:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login ke Akun Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy Preview:**
   ```bash
   vercel
   ```
   Ikuti prompt interaktif untuk menghubungkan direktori ke project Vercel.

4. **Deploy ke Production:**
   ```bash
   vercel --prod
   ```

---

## 3. Menjalankan Aplikasi Secara Lokal

### Mode Development (Hot Reloading):
```bash
npm run dev
```
Akses di browser pada: `http://localhost:3000`

### Mode Production (Local Simulation):
```bash
# 1. Kompilasi production bundle
npm run build

# 2. Jalankan server Next.js production
npm run start
```
Akses di browser pada: `http://localhost:3000`

### Uji Kesehatan Server (Health Check):
```bash
curl http://localhost:3000/api/health
```
Respons yang diharapkan:
```json
{
  "status": "healthy",
  "timestamp": "2026-09-30T...",
  "version": "1.0.0"
}
```

---

## 4. Troubleshooting & Best Practices

- **Build Cache Error:** Jika build gagal karena cache korup, jalankan `rm -rf .next` (atau di PowerShell: `Remove-Item -Recurse -Force .next`) lalu jalankan `npm run build`.
- **Environment Parity:** Selalu periksa file `.env.example` saat menambahkan variabel lingkungan baru agar tim dan platform hosting memiliki konfigurasi yang identik.
- **Custom Domain di Vercel:** Anda dapat menghubungkan domain kustom (misal: `kusumaproperti.com`) melalui menu **Project Settings > Domains** di dashboard Vercel.
