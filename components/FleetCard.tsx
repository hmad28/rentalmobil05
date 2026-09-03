import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { FleetVehicle } from "@/lib/data";

export function FleetCard({ name, category, image, transmission, seats, price }: FleetVehicle) {
  return (
    <a
      href={`#kontak`}
      className="fleet-card"
      aria-label={`Tanyakan ketersediaan ${name}`}
    >
      <div className="fleet-image-wrap">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 767px) 78vw, (max-width: 1279px) 45vw, 25vw"
          className="fleet-image"
        />
      </div>
      <div className="fleet-card-tags"><span>{category}</span><span>{transmission}</span></div>
      <strong>{name}</strong>
      <span className="fleet-card-meta">{transmission} • {seats}</span>
      <div className="fleet-card-price"><small>Mulai</small><b>Rp{price.toLocaleString("id-ID")}</b><span>/ hari</span></div>
      <span className="fleet-card-cta">Pesan sekarang <ArrowRight size={15} /></span>
    </a>
  );
}
