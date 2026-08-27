# Azbu Trans Jaya Rental Mobil

Website company profile dan conversion-focused homepage untuk **Azbu Trans Jaya**, layanan rental mobil di Surabaya dan Sidoarjo.

Tampilan dirancang dengan arah **modern automotive + clean editorial**: hero armada yang kuat, katalog kendaraan yang mudah dipindai, galeri perjalanan, featured vehicle cinematic, dan alur booking WhatsApp yang jelas.

## Fitur

- Homepage responsif untuk desktop, tablet, dan mobile
- Hero Toyota Innova Reborn, Suzuki XL7, dan Toyota Hiace
- Armada pilihan dengan horizontal scroll-snap pada mobile
- Galeri visual armada, kabin, serah-terima, dan perjalanan
- Featured Innova Reborn dengan background cinematic
- Layanan rental harian, airport transfer, wisata, dan rombongan
- Alur booking empat langkah
- Area layanan dengan data demo yang ditandai secara eksplisit
- FAQ accordion dengan keyboard support dan atribut ARIA
- Reusable WhatsApp deep link dengan pesan terisi otomatis
- Sticky navigation dan mobile menu
- Framer Motion dengan dukungan `prefers-reduced-motion`
- Metadata SEO, Open Graph, Twitter Card, sitemap, robots, dan JSON-LD
- Optimasi gambar melalui `next/image` dengan AVIF/WebP

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4 toolchain
- Framer Motion
- Lucide React
- Playwright untuk visual dan interaction checks

## Menjalankan Project

Persyaratan:

- Node.js versi yang kompatibel dengan Next.js 16
- npm

Install dependency:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Build produksi:

```bash
npm run build
npm run start
```

Type checking:

```bash
npm run lint
```

## Konfigurasi Bisnis

Seluruh data kontak berada di [`lib/data.ts`](./lib/data.ts):

```ts
export const business = {
  name: "Azbu Trans Jaya",
  legalName: "PT Azbu Trans Jaya",
  whatsapp: "",
  phone: "",
  email: "",
  address: "",
  instagram: "",
  baseUrl: "https://azbutransjaya.com",
};
```

Gunakan format internasional tanpa tanda `+` untuk WhatsApp, misalnya `6281234567890`. Saat nomor masih kosong, seluruh CTA WhatsApp diarahkan ke section kontak dan tidak memakai nomor palsu.

Data armada, layanan, benefit, booking, area demo, FAQ, serta footer juga dikelola dari file yang sama agar revisi konten tidak tersebar di markup.

## Status Konten

- Nomor telepon, WhatsApp, email, dan alamat belum diisi karena data resmi belum tersedia.
- Lokasi di peta selain Surabaya dan Sidoarjo merupakan data demo dan harus diverifikasi klien.
- Jawaban FAQ yang bergantung pada kebijakan rental menggunakan wording konsultatif.
- Testimonial tidak ditampilkan sampai review pelanggan yang dapat diverifikasi tersedia.
- Foto galeri adalah visual representatif hasil image generation, bukan dokumentasi operasional Azbu Trans Jaya.

Ganti aset galeri di `public/images/gallery-*.png` dengan foto unit, interior, driver, atau serah-terima asli untuk meningkatkan bukti sosial dan kepercayaan pelanggan.

## Struktur Project

```text
app/
  layout.tsx        Metadata dan root layout
  page.tsx          Komposisi homepage dan structured data
  globals.css       Design system dan responsive styling
  robots.ts         Robots configuration
  sitemap.ts        Sitemap generation
components/
  Navbar.tsx        Sticky navigation dan mobile menu
  Hero.tsx          Hero copy dan komposisi armada
  FleetCard.tsx     Kartu armada reusable
  FeatureCard.tsx   Value proposition reusable
  ServiceCard.tsx   Layanan berbasis foto
  BookingStep.tsx   Stepper booking
  FAQ.tsx           Accordion accessible
  CTA.tsx           WhatsApp conversion banner
  Footer.tsx        Footer dan kontak configurable
lib/
  data.ts           Business config dan seluruh content arrays
public/images/      Logo, kendaraan, background, galeri, dan map
scripts/
  visual_check.py   Visual, responsive, image, menu, dan FAQ checks
```

## Quality Checks

Visual regression dan interaction check dapat dijalankan saat dev server aktif:

```bash
python scripts/visual_check.py
```

Pemeriksaan mencakup:

- Desktop `1440x900`
- Tablet `1024x768`
- Mobile `390x844`
- Horizontal overflow
- Broken images
- Mobile navigation
- FAQ accordion
- Mobile WhatsApp CTA
- Browser console dan runtime errors

## Asset Notes

Logo Azbu Trans Jaya berasal dari aset yang diberikan pemilik project. Visual kendaraan, galeri representatif, hero city ribbon, featured stage, dan map disimpan secara lokal agar rendering stabil dan tidak bergantung pada hotlink eksternal.

Sebelum website dipublikasikan untuk bisnis, lakukan final content verification terhadap kontak, kebijakan rental, area layanan, ketersediaan unit, serta hak penggunaan semua foto pengganti.
