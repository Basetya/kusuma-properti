# Production Deployment & Containerization Guide

Dokumen ini menjelaskan prosedur deployment staging dan produksi untuk portal **Rumah123 Clone**.

---

## 1. Spesifikasi Runtime & Kebutuhan Sistem

- **Node.js:** `^18.18.0` atau `^20.0.0`
- **NPM:** `^9.0.0` atau `^10.0.0`
- **Memory Minimum:** 1 GB RAM (direkomendasikan 2 GB untuk build image)
- **Disk Space:** 500 MB untuk node_modules dan cache `.next/`

---

## 2. Environment Variables

Pastikan konfigurasi lingkungan berikut didefinisikan pada server atau platform hosting:

| Variabel | Tipe | Contoh / Default | Keterangan |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_APP_URL` | String | `https://staging.rumah123.com` | Base URL aplikasi untuk canonical metadata & OG tags |
| `NEXT_PUBLIC_API_BASE_URL` | String | `/api` | Base path untuk endpoint serverless API internal |
| `NODE_ENV` | String | `production` | Flag lingkungan runtime Node.js |
| `PORT` | Number | `3000` | Port listen default container/server |

---

## 3. Opsi A: Deployment ke Vercel (Rekomendasi Serverless)

Proyek ini telah dikonfigurasi optimal untuk platform **Vercel**:

1. Hubungkan repositori Git (pilih branch `staging`).
2. Tentukan Framework Preset: **Next.js**.
3. Pastikan Root Directory adalah `./`.
4. Tambahkan Environment Variable:
   - `NEXT_PUBLIC_APP_URL` = URL domain Vercel Anda.
5. Jalankan **Deploy**.
6. Build command otomatis: `npm run build`.
7. Output directory otomatis: `.next`.

---

## 4. Opsi B: Kontainerisasi Docker (Standalone Deployment)

### `Dockerfile` (Multi-stage build)

Gunakan file konfigurasi Docker berikut untuk standalone container:

```dockerfile
# 1. Base Image
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

# 2. Dependencies
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# 3. Builder
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build

# 4. Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000

CMD ["npm", "run", "start"]
```

### Menjalankan Docker Container
```bash
# Build Docker Image
docker build -t rumah123-clone:latest .

# Jalankan Container pada port 3000
docker run -d -p 3000:3000 --name rumah123-app rumah123-clone:latest
```

---

## 5. Prosedur Pre-Flight Quality Gate (Staging)

Sebelum mempromosikan build dari `staging` ke environment produksi:

1. **Linter Check:**
   ```bash
   npm run lint
   ```
   *Kriteria: Wajib Exit Code 0, 0 warning, 0 error.*

2. **Compiler Check:**
   ```bash
   npm run build
   ```
   *Kriteria: Wajib Exit Code 0, seluruh route static (○) dan dynamic (ƒ) berhasil dikompilasi.*

3. **Automation Gatekeeper Check:**
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\ralph.ps1 -Once
   ```
   *Kriteria: Lolos iterasi pertama tanpa trigger BLOCKED.md.*

---

## 6. Protokol Rollback

Jika terjadi kendala pada server staging:
1. Periksa log build pada terminal atau container logger:
   ```bash
   docker logs rumah123-app
   ```
2. Kembalikan state repositori ke commit stabil sebelumnya:
   ```bash
   git checkout <stable-commit-hash>
   ```
3. Lakukan build ulang `npm run build`.
