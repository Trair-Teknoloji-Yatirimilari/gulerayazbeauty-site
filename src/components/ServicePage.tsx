import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, HelpCircle, ChevronRight, Phone } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PHONE_MOBILE, whatsappLink } from "@/lib/site";
import type { ServicePage as ServicePageData } from "@/lib/service-pages";

import serviceLazer from "@/assets/service-lazer.jpg";
import serviceCilt from "@/assets/service-cilt-gercek.jpg";
import serviceVucut from "@/assets/service-vucut.jpg";
import serviceDovme from "@/assets/service-dovme-silme.jpg";
import serviceKaliciMakyaj from "@/assets/service-kalici-makyaj.jpg";

const COVERS: Record<string, string> = {
  "service-lazer.jpg": serviceLazer,
  "service-cilt-gercek.jpg": serviceCilt,
  "service-vucut.jpg": serviceVucut,
  "service-dovme-silme.jpg": serviceDovme,
  "service-kalici-makyaj.jpg": serviceKaliciMakyaj,
};

/** Sayfa genelinde kullanılan randevu mesajı (kampanya sayfası kendi metnini kullanır) */
export const SERVICE_WA_MESSAGE = "Merhaba, randevu almak istiyorum.";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

function Cta({ label }: { label: string }) {
  return (
    <a
      href={whatsappLink(SERVICE_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-sheen group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 text-sm uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-all glow-gold"
    >
      {label}
      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </a>
  );
}

export function ServicePage({ data }: { data: ServicePageData }) {
  const cover = COVERS[data.cover] ?? serviceLazer;

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />

      {/* HERO */}
      <section className="relative pt-28 md:pt-36 pb-14 md:pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <nav aria-label="breadcrumb" className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground/70">{data.navLabel}</span>
          </nav>

          <motion.div {...fadeUp}>
            <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl">{data.h1}</h1>
            <div className="hairline mt-7 max-w-xs" />
          </motion.div>

          <motion.div {...fadeUp} className="mt-10 relative aspect-[16/9] overflow-hidden rounded-sm">
            <img src={cover} alt={data.coverAlt} width={1200} height={675} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>

          <motion.div {...fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <Cta label="WhatsApp'tan Randevu Al" />
            <a
              href={`tel:${PHONE_MOBILE}`}
              className="inline-flex items-center gap-3 rounded-full border border-primary/60 px-8 py-3.5 text-sm uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              Ara
            </a>
          </motion.div>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="relative pb-8">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="service-content">
            {data.blocks.map((b, i) => {
              if (b.t === "h2") return <h2 key={i}>{b.text}</h2>;
              if (b.t === "h3") return <h3 key={i}>{b.text}</h3>;
              if (b.t === "ul")
                return (
                  <ul key={i}>
                    {b.items.map((it, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: it }} />
                    ))}
                  </ul>
                );
              return <p key={i} dangerouslySetInnerHTML={{ __html: b.html }} />;
            })}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <motion.div {...fadeUp} className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-primary" />
            <h2 className="text-xs uppercase tracking-[0.4em] text-primary">Sık Sorulan Sorular</h2>
          </motion.div>

          <motion.div {...fadeUp}>
            <Accordion type="single" collapsible className="w-full">
              {data.faqs.map((f, idx) => (
                <AccordionItem key={f.q} value={`faq-${idx}`} className="border-b border-border/60">
                  <AccordionTrigger className="text-left text-base font-normal text-foreground/90 hover:text-primary hover:no-underline py-5">
                    <span className="flex items-start gap-4">
                      <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.2} />
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-foreground/70 leading-relaxed pb-5 pl-9">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {data.afterFaqHtml && (
            <motion.p
              {...fadeUp}
              className="service-content mt-8 text-sm"
              dangerouslySetInnerHTML={{ __html: data.afterFaqHtml }}
            />
          )}
        </div>
      </section>

      {/* KAPANIŞ CTA */}
      <section className="relative pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="rounded-sm border border-border/60 bg-card/85 backdrop-blur px-6 py-10 md:px-12 md:py-12 text-center shadow-elegant">
            <h2 className="font-display text-2xl md:text-3xl leading-tight">
              Ücretsiz <span className="italic text-gold-gradient">ön değerlendirme</span>
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed max-w-xl mx-auto">
              Size uygun planlamayı birlikte konuşmak için WhatsApp'tan yazabilir ya da doğrudan arayabilirsiniz.
              Maslak 1453, Sarıyer / İstanbul · Pazartesi – Cumartesi 08:30–21:00
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Cta label="WhatsApp'tan Randevu Al" />
              <a
                href={`tel:${PHONE_MOBILE}`}
                className="inline-flex items-center gap-3 rounded-full border border-primary/60 px-8 py-3.5 text-sm uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                Ara
              </a>
            </div>
          </div>

          <p className="mt-8 text-xs text-muted-foreground text-center italic leading-relaxed max-w-2xl mx-auto">
            {data.note}
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
