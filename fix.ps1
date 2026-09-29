if (!(Test-Path "app")) { mkdir app }
Set-Content -Path "app/layout.tsx" -Value "import './globals.css'
export const metadata = { title: 'Rumah123 Clone' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='id'>
      <body className='bg-gray-50 text-gray-900'>{children}</body>
    </html>
  )
}" -Encoding UTF8
Set-Content -Path "app/page.tsx" -Value "export default function Home() {
  return <main className='p-8 text-center text-xl font-bold'>Rumah123 Clone Initialized</main>
}" -Encoding UTF8
Set-Content -Path "app/globals.css" -Value "@tailwind base;
@tailwind components;
@tailwind utilities;" -Encoding UTF8
Remove-Item "BLOCKED.md" -ErrorAction SilentlyContinue
Write-Host "Setup selesai! Menjalankan npm run build..." -ForegroundColor Green
npm run build
