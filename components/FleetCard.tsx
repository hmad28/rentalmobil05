import Image from "next/image";
import { ArrowRight, Gauge, UsersRound, Star } from "lucide-react";
import type { FleetVehicle } from "@/lib/data";
import { whatsappUrl } from "@/lib/data";

export function FleetCard({ name, category, image, transmission, seats, price }: FleetVehicle) {
  const bookingMessage = `Halo Azbu Trans Jaya, saya ingin booking unit ${name}. Bisa minta informasi ketersediaan?`;

  return (
    <article className="fleet-card">
      <div className="fleet-image-wrap">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="fleet-image"
        />
        <span className="fleet-badge-badge">
          <Star size={11} fill="currentColor" /> {category}
        </span>
        <span className="fleet-badge-status">Tersedia</span>
      </div>

      <div className="fleet-card-body">
        <strong className="fleet-card-title">{name}</strong>

        <div className="fleet-card-specs">
          <span className="fleet-spec-item">
            <Gauge size={13} />
            {transmission}
          </span>
          <span className="fleet-spec-item">
            <UsersRound size={13} />
            {seats}
          </span>
        </div>

        <div className="fleet-card-price-row">
          <div>
            <small>Mulai dari</small>
            <b>Rp {price.toLocaleString("id-ID")} <span className="text-[11px] font-medium text-muted">/ Hari</span></b>
          </div>
        </div>

        <a
          href={whatsappUrl(bookingMessage)}
          target="_blank"
          rel="noreferrer"
          className="fleet-card-cta-btn"
          aria-label={`Pesan ${name} melalui WhatsApp`}
        >
          Pesan Sekarang
          <ArrowRight size={14} />
        </a>
      </div>
    </article>
  );
}
