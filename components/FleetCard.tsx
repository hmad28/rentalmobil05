import Image from "next/image";
import type { FleetVehicle } from "@/lib/data";

export function FleetCard({ name, category, image }: FleetVehicle) {
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
      <strong>{name}</strong>
      <span>{category}</span>
    </a>
  );
}
