import { ArrowRight } from "lucide-react";
import type { IconItem } from "@/lib/data";

export function BookingStep({
  title,
  description,
  icon: Icon,
  index,
  isLast,
}: IconItem & { index: number; isLast: boolean }) {
  return (
    <article className="booking-step">
      <div className="booking-number">{index + 1}</div>
      <div className="booking-step-copy">
        <Icon size={27} strokeWidth={1.8} aria-hidden="true" />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      {!isLast ? <ArrowRight className="booking-arrow" size={23} aria-hidden="true" /> : null}
    </article>
  );
}
