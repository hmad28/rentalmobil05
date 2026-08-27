"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CarFront, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { whatsappUrl } from "@/lib/data";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : { opacity: 0, y: 18 };

  return (
    <section id="beranda" className="hero-section">
      <div className="container-page hero-grid">
        <div className="hero-copy">
          <motion.p
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hero-eyebrow"
          >
            Rental Mobil Surabaya & Sidoarjo
          </motion.p>
          <motion.h1
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            Rental Mobil
            <span>Surabaya & Sidoarjo</span>
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            Perjalanan nyaman, aman, dan menyenangkan dengan armada terawat dan pelayanan profesional.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <ButtonLink href="#armada" icon={CarFront}>Lihat Armada</ButtonLink>
            <ButtonLink href={whatsappUrl()} icon={MessageCircle} variant="secondary">
              Booking via WhatsApp
            </ButtonLink>
          </motion.div>
          <motion.div
            className="hero-trust"
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <span><ShieldCheck size={16} />Armada Terawat</span>
            <span><CarFront size={16} />Pilihan Mobil Lengkap</span>
            <span><MapPin size={16} />Siap Surabaya & Sidoarjo</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, x: 28, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.72, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/hero-fleet-final.png"
            alt="Toyota Innova Reborn, Suzuki XL7, dan Toyota Hiace"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 58vw"
            className="hero-fleet-image"
          />
        </motion.div>
      </div>
    </section>
  );
}
