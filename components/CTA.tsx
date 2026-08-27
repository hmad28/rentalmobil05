import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { whatsappUrl } from "@/lib/data";

export function CTA() {
  return (
    <section id="kontak" className="cta-section">
      <div className="container-page">
        <Reveal className="cta-banner">
          <div className="cta-icon" aria-hidden="true">
            <MessageCircle size={34} strokeWidth={1.7} />
          </div>
          <div className="cta-copy">
            <h2>Siap untuk perjalanan nyaman Anda?</h2>
            <p>Konsultasikan kebutuhan kendaraan Anda bersama Azbu Trans Jaya.</p>
          </div>
          <ButtonLink href={whatsappUrl()} icon={MessageCircle} variant="light" className="cta-button">
            Chat via WhatsApp Sekarang
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
