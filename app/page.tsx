import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Star,
} from "lucide-react";
import { CTA } from "@/components/CTA";
import { FAQItem } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { MobileWhatsapp } from "@/components/MobileWhatsapp";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import {
  benefits,
  bookingSteps,
  business,
  faqs,
  fleet,
  schemaFaq,
  services,
  whatsappUrl,
} from "@/lib/data";

export default function Home() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "AutoRental",
      name: business.name,
      legalName: business.legalName,
      url: business.baseUrl,
      areaServed: ["Surabaya", "Sidoarjo"],
      description: "Rental mobil untuk berbagai kebutuhan perjalanan di Surabaya dan Sidoarjo.",
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: schemaFaq },
  ];

  return (
    <div className="drivemate-layout">
      <Navbar />
      <main>
        <HeroSection />
        <FleetSection />
        <ServiceShowcase />
        <AboutSection />
        <WhyAndSteps />
        <TrustSection />
        <FAQSection />
        <CTA />
      </main>
      <Footer />
      <MobileWhatsapp />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }}
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="beranda" className="dm-hero">
      <div className="container-page dm-hero-inner">
        <Reveal className="dm-hero-copy">
          <p className="dm-kicker"><MapPin size={13} />Rental mobil Surabaya & Sidoarjo</p>
          <h1>Sewa kendaraan<br />lebih mudah & nyaman</h1>
          <p className="dm-hero-description">
            Pilih mobil atau minibus untuk kebutuhan harian, perjalanan keluarga, bisnis, dan antar kota.
          </p>
          <div className="dm-hero-actions">
            <a href={whatsappUrl()} className="dm-button dm-button-primary">Pesan sekarang <ArrowRight size={17} /></a>
            <a href="#armada" className="dm-button dm-button-ghost">Lihat armada</a>
          </div>
          <div className="dm-price-line">
            <strong>Konsultasi cepat</strong>
            <span>•</span>
            <span>Armada terawat</span>
            <span>•</span>
            <span>Jadwal fleksibel</span>
          </div>
        </Reveal>

        <div className="dm-hero-visual">
          <Image
            src="/images/hero-fleet-final.png"
            alt="Armada Azbu Trans Jaya"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 60vw"
          />
        </div>

        <Reveal className="dm-search-panel" delay={0.12}>
          <div className="dm-search-heading">
            <strong>Mulai perjalanan Anda</strong>
            <span>Pilih detail perjalanan untuk konsultasi kendaraan yang tepat.</span>
          </div>
          <div className="dm-search-fields">
            <button type="button"><MapPin size={17} /><span><small>Lokasi jemput</small>Surabaya / Sidoarjo</span></button>
            <button type="button"><CalendarDays size={17} /><span><small>Tanggal mulai</small>Pilih tanggal</span></button>
            <button type="button"><CalendarDays size={17} /><span><small>Tanggal selesai</small>Pilih tanggal</span></button>
            <button type="button"><Clock3 size={17} /><span><small>Waktu</small>Pilih waktu</span></button>
            <a href={whatsappUrl()}><Search size={17} />Cari kendaraan</a>
          </div>
        </Reveal>

        <Reveal className="dm-stats" delay={0.18}>
          <div><ShieldCheck /><span><strong>Unit terawat</strong>Kondisi dipersiapkan</span></div>
          <div><Star /><span><strong>Pilihan lengkap</strong>Mobil hingga minibus</span></div>
          <div><Clock3 /><span><strong>Respon cepat</strong>Konsultasi WhatsApp</span></div>
          <div><MessageCircle /><span><strong>Mudah dipesan</strong>Langsung dengan tim</span></div>
        </Reveal>
      </div>
    </section>
  );
}

function FleetSection() {
  return (
    <section id="armada" className="dm-fleet-section">
      <div className="container-page">
        <Reveal className="dm-section-heading">
          <div><p className="dm-kicker">Armada tersedia</p><h2>Pilih kendaraan<br />sesuai kebutuhan Anda</h2></div>
          <p>Beragam pilihan mobil untuk perjalanan pribadi, keluarga, bisnis, dan rombongan.</p>
          <a href="#kontak">Lihat semua armada <ArrowRight size={16} /></a>
        </Reveal>
        <div className="dm-fleet-grid">
          {fleet.map((vehicle, index) => (
            <Reveal className="dm-vehicle-card" key={vehicle.name} delay={(index % 4) * 0.035}>
              <div className="dm-card-label"><span>Siap perjalanan</span><small>{vehicle.category}</small></div>
              <div className="dm-vehicle-image"><Image src={vehicle.image} alt={vehicle.name} fill loading="eager" sizes="(max-width: 640px) 85vw, 25vw" /></div>
              <div className="dm-vehicle-body">
                <h3>{vehicle.name}</h3>
                <div className="dm-card-meta"><span><CarFront size={13} />{vehicle.category}</span><span><ShieldCheck size={13} />Terawat</span></div>
                <a href={whatsappUrl(`Halo Azbu Trans Jaya, saya ingin menanyakan ketersediaan ${vehicle.name}.`)}>Pesan sekarang <ArrowRight size={15} /></a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceShowcase() {
  return (
    <section id="layanan" className="dm-services-dark">
      <div className="container-page">
        <Reveal className="dm-section-heading dm-heading-light">
          <div><p className="dm-kicker">Layanan perjalanan</p><h2>Perjalanan praktis<br />untuk setiap agenda</h2></div>
          <p>Detail titik jemput, tujuan, waktu, dan kebutuhan kendaraan dikonfirmasi bersama tim kami.</p>
          <a href="#kontak">Lihat layanan <ArrowRight size={16} /></a>
        </Reveal>
        <div className="dm-service-grid">
          {services.map(({ title, description, image, imageAlt, icon: Icon }, index) => (
            <Reveal className="dm-service-card" key={title} delay={index * 0.05}>
              <div className="dm-service-image"><Image src={image} alt={imageAlt} fill loading="eager" sizes="(max-width: 640px) 85vw, 34vw" /></div>
              <div className="dm-service-body">
                <Icon size={25} />
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={whatsappUrl()}>Konsultasikan <ArrowRight size={15} /></a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="tentang" className="dm-about-section">
      <div className="container-page dm-about-grid">
        <Reveal className="dm-about-media">
          <Image src="/images/gallery-airport.png" alt="Layanan perjalanan Azbu Trans Jaya" fill sizes="(max-width: 760px) 100vw, 45vw" />
        </Reveal>
        <Reveal className="dm-about-copy" delay={0.08}>
          <p className="dm-kicker">Rental mobil Surabaya & Sidoarjo</p>
          <h2>Perjalanan lebih tenang dengan pilihan yang fleksibel</h2>
          <p>Azbu Trans Jaya membantu menyiapkan kendaraan untuk agenda harian, antar jemput, perjalanan keluarga, bisnis, hingga rombongan.</p>
          <ul>
            <li><Check />Pilihan kendaraan menyesuaikan jumlah penumpang</li>
            <li><Check />Jadwal dan tujuan dibahas sebelum keberangkatan</li>
            <li><Check />Kondisi unit dipersiapkan sebelum digunakan</li>
          </ul>
          <a href={whatsappUrl()} className="dm-button dm-button-primary">Hubungi kami <ArrowRight size={16} /></a>
        </Reveal>
      </div>
    </section>
  );
}

function WhyAndSteps() {
  return (
    <section className="dm-process-section">
      <div className="container-page">
        <Reveal className="dm-centered-heading"><p className="dm-kicker">Kenapa memilih kami</p><h2>Pengalaman menyewa<br />mudah, aman & nyaman</h2></Reveal>
        <div className="dm-benefit-grid">
          {benefits.map(({ title, description, icon: Icon }, index) => (
            <Reveal className="dm-benefit-card" key={title} delay={index * 0.04}><Icon /><h3>{title}</h3><p>{description}</p></Reveal>
          ))}
        </div>
        <Reveal className="dm-centered-heading dm-step-heading"><p className="dm-kicker">Cara sewa</p><h2>Mudah dalam 4 langkah</h2></Reveal>
        <div className="dm-steps-grid">
          {bookingSteps.map(({ title, description, icon: Icon }, index) => (
            <Reveal className="dm-step" key={title} delay={index * 0.04}>
              <span>{index + 1}</span><Icon /><h3>{title}</h3><p>{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="dm-trust-section">
      <div className="container-page dm-trust-grid">
        <Reveal className="dm-trust-card">
          <Image src="/images/gallery-journey.png" alt="Perjalanan bersama Azbu Trans Jaya" fill sizes="(max-width: 760px) 100vw, 38vw" />
          <div><strong>Perjalanan dimulai dari persiapan yang baik</strong><span>Armada, jadwal, dan tujuan dikonfirmasi sebelum berangkat.</span></div>
        </Reveal>
        <Reveal className="dm-trust-copy" delay={0.08}>
          <p className="dm-kicker">Siap membantu perjalanan Anda</p>
          <h2>Dipercaya untuk<br /><span>setiap perjalanan</span></h2>
          <div className="dm-trust-points">
            <p><ShieldCheck /><span><strong>Unit dipersiapkan</strong>Kebersihan dan kondisi kendaraan diperiksa.</span></p>
            <p><MessageCircle /><span><strong>Komunikasi langsung</strong>Detail kebutuhan dibahas melalui WhatsApp.</span></p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="faq-section dm-faq-section">
      <div className="container-page">
        <Reveal className="dm-centered-heading"><p className="dm-kicker">Pertanyaan umum</p><h2>Sebelum memesan kendaraan</h2></Reveal>
        <div className="faq-grid">
          <div>{faqs.slice(0, 3).map((faq) => <FAQItem key={faq.question} {...faq} />)}</div>
          <div>{faqs.slice(3).map((faq) => <FAQItem key={faq.question} {...faq} />)}</div>
        </div>
      </div>
    </section>
  );
}
