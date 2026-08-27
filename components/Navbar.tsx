"use client";

import Image from "next/image";
import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";
import { whatsappUrl } from "@/lib/data";

const navItems = [
  ["Beranda", "#beranda"],
  ["Armada", "#armada"],
  ["Layanan", "#layanan"],
  ["Tentang", "#tentang"],
  ["Kontak", "#kontak"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container-page nav-inner">
        <a href="#beranda" className="brand-link" aria-label="Azbu Trans Jaya - Beranda">
          <Image
            src="/images/azbu-logo.png"
            alt="Azbu Trans Jaya"
            width={260}
            height={104}
            priority
            className="brand-logo"
          />
        </a>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navItems.map(([label, href], index) => (
            <a key={label} href={href} className={index === 0 ? "active" : ""}>
              {label}
            </a>
          ))}
        </nav>

        <a href={whatsappUrl()} className="nav-cta">
          <CalendarDays size={17} strokeWidth={2} aria-hidden="true" />
          Booking Sekarang
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} /> : <Menu size={24} />}
        </button>
      </div>

      {open ? (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Navigasi mobile">
          <div className="container-page">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a href={whatsappUrl()} className="mobile-menu-cta" onClick={() => setOpen(false)}>
              Booking Sekarang
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
