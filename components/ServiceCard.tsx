import { CircleCheck } from "lucide-react";
import type { ServiceItem } from "@/lib/data";

export function ServiceCard({ title, description, icon: Icon, points }: ServiceItem) {
  return (
    <article className="service-item">
      <div className="service-content">
        <div className="service-title-row">
          <span className="service-icon"><Icon size={31} strokeWidth={1.7} aria-hidden="true" /></span>
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
        <ul>
          {points.map((point) => <li key={point}><CircleCheck size={14} />{point}</li>)}
        </ul>
      </div>
    </article>
  );
}
