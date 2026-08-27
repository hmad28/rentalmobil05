import Image from "next/image";
import { ArrowRight, Check, Info, MapPin, MessageCircle } from "lucide-react";
import { BookingStep } from "@/components/BookingStep";
import { CTA } from "@/components/CTA";
import { FAQItem } from "@/components/FAQ";
import { FeatureCard } from "@/components/FeatureCard";
import { FleetCard } from "@/components/FleetCard";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MobileWhatsapp } from "@/components/MobileWhatsapp";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import {
  benefits,
  bookingSteps,
  business,
  demoAreas,
  faqs,
  featuredFleet,
  featuredSpecs,
  gallery,
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
      description:
        "Azbu Trans Jaya menyediakan layanan rental mobil untuk kebutuhan perjalanan di Surabaya dan Sidoarjo dengan berbagai pilihan armada.",
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: schemaFaq },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Beranda", item: business.baseUrl }],
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FleetSection />
        <GallerySection />
        <WhySection />
        <FeaturedVehicle />
        <ServicesSection />
        <BookingSection />
        <ServiceAreaSection />
        <FAQSection />
        <CTA />
      </main>
      <Footer />
      <MobileWhatsapp />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }}
      />
    </>
  );
}

function FleetSection() {
  return (
    <section id="armada" className="fleet-section">
      <div className="container-page">
        <Reveal className="section-heading fleet-heading">
          <div>
            <h2>Armada Pilihan</h2>
            <p>Empat tipe utama untuk kebutuhan personal, keluarga, bisnis, atau rombongan.</p>
          </div>
          <a href="#kontak">Lihat semua armada <ArrowRight size={18} /></a>
        </Reveal>
        <div className="fleet-track no-scrollbar">
          {featuredFleet.map((vehicle) => <FleetCard key={vehicle.name} {...vehicle} />)}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="gallery-section" aria-labelledby="gallery-title">
      <div className="container-page">
        <Reveal className="gallery-heading">
          <div>
            <p className="section-kicker">Armada & Perjalanan</p>
            <h2 id="gallery-title">Siap Menemani Setiap Rencana Perjalanan</h2>
          </div>
          <p>Visual representatif layanan. Dokumentasi unit asli dapat menggantikan galeri ini saat tersedia.</p>
        </Reveal>
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <Reveal key={item.image} className={`gallery-item gallery-item-${index + 1}`} delay={index * 0.04}>
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 767px) 88vw, 50vw" />
              <span>{item.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section id="tentang" className="why-section">
      <div className="container-page why-grid">
        <Reveal className="why-title">
          <h2>Kenapa Pilih<span>Azbu Trans Jaya?</span></h2>
        </Reveal>
        <div className="benefit-grid">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.045}>
              <FeatureCard {...benefit} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedVehicle() {
  return (
    <section className="featured-section">
      <div className="container-page featured-grid">
        <Reveal className="featured-media">
          <Image
            src="/images/innova-dark.png"
            alt="Toyota Innova Reborn CVT warna hitam"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="featured-image"
          />
        </Reveal>
        <Reveal className="featured-copy" delay={0.08}>
          <p className="featured-eyebrow">Vehicle Featured</p>
          <h2>Innova Reborn CVT</h2>
          <p className="featured-description">
            Kabin lega dan nyaman untuk kebutuhan keluarga, perjalanan bisnis, maupun perjalanan luar kota.
          </p>
          <div className="featured-specs">
            {featuredSpecs.map(({ label, icon: Icon }) => (
              <div key={label}>
                <Icon size={31} strokeWidth={1.55} />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <a className="featured-cta" href={whatsappUrl("Halo Azbu Trans Jaya, saya ingin menanyakan ketersediaan Innova Reborn CVT.")}>
            <MessageCircle size={18} />Tanyakan Ketersediaan<ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="layanan" className="services-section">
      <div className="container-page">
        <Reveal className="section-heading services-heading">
          <div>
          <h2>Layanan Kami</h2>
          <p>Tiga kebutuhan utama, dengan detail perjalanan yang dikonsultasikan langsung.</p>
          </div>
        </Reveal>
        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.035}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
  return (
    <section className="booking-section">
      <div className="container-page">
        <Reveal className="center-heading booking-heading">
          <h2>Cara Booking</h2>
          <p>Empat langkah sederhana untuk menyiapkan perjalanan Anda.</p>
        </Reveal>
        <div className="booking-grid">
          {bookingSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.045}>
              <BookingStep {...step} index={index} isLast={index === bookingSteps.length - 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreaSection() {
  return (
    <section className="area-section">
      <Image
        src="/images/service-map-v2.png"
        alt="Visual abstrak peta area Surabaya dan Sidoarjo"
        fill
        sizes="100vw"
        className="area-map-image"
      />
      <div className="area-scrim" />
      <div className="container-page area-grid">
        <Reveal className="area-copy">
          <p className="section-kicker">Area Layanan</p>
          <h2>Berangkat dari Surabaya & Sidoarjo</h2>
          <p>Tujuan perjalanan dan titik jemput lainnya dikonfirmasi terlebih dahulu sesuai ketersediaan layanan.</p>
          <div className="area-list">
            {demoAreas.map((area) => (
              <span key={area.label}><Check size={16} />{area.label}</span>
            ))}
          </div>
          <small><Info size={15} /> Lokasi pada visual adalah demo dan perlu diverifikasi oleh klien.</small>
        </Reveal>
        <div className="area-pin-layer" aria-hidden="true">
          {demoAreas.map((area) => (
            <div key={area.label} className="map-pin" style={{ left: area.left, top: area.top }}>
              <MapPin size={21} fill="currentColor" /><span>{area.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="faq-section">
      <div className="container-page">
        <Reveal className="center-heading faq-heading">
          <h2>Pertanyaan yang Sering Diajukan</h2>
          <p>Jawaban umum sebelum Anda menghubungi tim Azbu Trans Jaya.</p>
        </Reveal>
        <div className="faq-grid">
          <div>{faqs.slice(0, 3).map((faq) => <FAQItem key={faq.question} {...faq} />)}</div>
          <div>{faqs.slice(3).map((faq) => <FAQItem key={faq.question} {...faq} />)}</div>
        </div>
      </div>
    </section>
  );
}
