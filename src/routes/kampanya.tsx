import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck, Sparkles, Cpu, MapPin, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";

import merkezGercek from "@/assets/merkez-gercek.jpg";
import serviceCilt from "@/assets/service-cilt-gercek.jpg";
import serviceLazer from "@/assets/service-lazer.jpg";
import serviceVucut from "@/assets/service-vucut.jpg";

/** Kampanyaya özel WhatsApp bağlantısı (ön mesaj metni kampanya adını taşır) */
const WA =
  "https://wa.me/905010274777?text=Merhaba%2C%20Sonbahar%20Yenilenme%20program%C4%B1%20i%C3%A7in%20randevu%20almak%20istiyorum.";

const URL = `${SITE_URL}/kampanya`;
const TITLE = "Sonbahar Yenilenme Programları | Güler Ayaz Beauty Maslak";
const DESC =
  "Maslak 1453'te cilt yenileme, lazer epilasyon ve vücut şekillendirme programları. Ücretsiz ön değerlendirme için randevu alın.";

export const Route = createFileRoute("/kampanya")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      // Kampanyaya özel paylaşım görseli (1200x630, rakamsız sürüm).
      { property: "og:image", content: `${SITE_URL}/og/kampanya.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Güler Ayaz Beauty Clinic — Sonbahar Yenilenme" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/og/kampanya.jpg` },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: KampanyaPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const PACKAGES = [
  {
    title: "Yaz Sonrası Cilt Yenileme",
    subtitle: "Hydrafacial · Karbon peeling",
    body: "Yaz boyunca güneş, deniz ve klimaya maruz kalan cilt için analiz, derin temizlik, arındırma ve besleme aşamalarını içeren bakım programı. İçerik ve seans planı, ilk seanstaki cilt analizine göre size özel belirlenir.",
    image: serviceCilt,
    alt: "Merkezimizde cilt bakımı seansı",
    to: "/cilt-bakimi" as const,
  },
  {
    title: "Lazer Sezonu Başlangıcı",
    subtitle: "Soğutmalı diode lazer",
    body: "Cilt tonunuza göre kişiselleştirilen ayarlarla, sezona düzenli bir başlangıç. Seans aralıkları ve bölge planlaması, ön değerlendirmede cilt ve kıl yapınız incelenerek kurgulanır.",
    image: serviceLazer,
    alt: "Soğutmalı diode lazer epilasyon uygulaması",
    to: "/lazer-epilasyon" as const,
  },
  {
    title: "Form Programı",
    subtitle: "Slim-X · EMS Pro · G5",
    body: "Bölgesel incelme, sıkılaşma ve dolaşım desteği için üç teknolojinin birlikte planlandığı program. Hangi kombinasyonun size uygun olduğu vücut analizi sonrası belirlenir. Bu uygulamalar kilo verme yöntemi değildir; düzenli yaşam alışkanlıklarının yanında destekleyici programlardır.",
    image: serviceVucut,
    alt: "G5 başlığı ile vücut şekillendirme uygulaması",
    to: "/vucut-sekillendirme" as const,
  },
];

const STEPS = [
  { n: "01", t: "Randevu", d: "WhatsApp'tan yazın, size uygun günü birlikte belirleyelim." },
  { n: "02", t: "Ücretsiz Ön Değerlendirme", d: "Cilt veya vücut analizi yapılır; herhangi bir başlama zorunluluğu yoktur." },
  { n: "03", t: "Kişiye Özel Plan", d: "Size uygun program, seans sayısı ve aralıkları birlikte netleşir." },
  { n: "04", t: "Uygulama", d: "Steril kabinlerde, uzman kadro eşliğinde seanslarınız başlar." },
];

const TRUST = [
  { icon: ShieldCheck, t: "Tek kullanımlık ekipman", d: "Her seansta steril, tek kullanımlık malzeme." },
  { icon: Sparkles, t: "Kişiye özel planlama", d: "Analiz olmadan program başlamaz." },
  { icon: Cpu, t: "Premium cihaz altyapısı", d: "Alma, Alpha ve benzeri profesyonel markalar." },
  { icon: MapPin, t: "Kolay ulaşım", d: "Maslak 1453 içinde, otoparklı." },
];

const FAQS = [
  { q: "Ön değerlendirme gerçekten ücretsiz mi?", a: "Evet. Ön değerlendirme ve analiz görüşmesi ücretsizdir ve herhangi bir programa başlama zorunluluğu doğurmaz." },
  { q: "Kaç seans gerekir?", a: "Kişiye, hedef bölgeye ve cilt yapısına göre değişir. Bu nedenle analiz yapılmadan seans sayısı söylemiyoruz; planlama ön değerlendirmede birlikte belirlenir." },
  { q: "Paket koşullarını nasıl öğrenebilirim?", a: "Güncel koşulları WhatsApp'tan veya merkezimizde yüz yüze paylaşıyoruz." },
  { q: "Kampanya ne zamana kadar geçerli?", a: "Sonbahar Yenilenme programları 31 Ekim 2026 tarihine kadar devam etmektedir." },
  { q: "Erkek misafir kabul ediliyor mu?", a: "Evet, erkek misafirlerimizi ağırlıyoruz." },
];

function Cta({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-sheen group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-3.5 text-sm uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-all glow-gold ${className}`}
    >
      {label}
      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </a>
  );
}

function KampanyaPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />

      {/* HERO */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={merkezGercek} alt="" aria-hidden="true" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-background" />
        </div>
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <motion.div {...fadeUp}>
            <span className="text-xs uppercase tracking-[0.4em] text-white/90">
              Maslak 1453 · 15 Eylül – 31 Ekim
            </span>
            <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-white">
              Sonbahar <span className="italic text-gold-gradient-light">Yenilenme</span>
            </h1>
            <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
              Yaz bitti, sıra sizde. Cilt yenileme, lazer epilasyon ve form programlarında sonbahara özel paket
              koşullarıyla, Maslak 1453'teki merkezimizde.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Cta label="Ücretsiz Ön Değerlendirme Randevusu" />
              <a
                href="#programlar"
                className="inline-flex items-center gap-3 rounded-full border border-white/50 px-8 py-3.5 text-sm uppercase tracking-widest text-white/90 hover:bg-white/10 hover:border-white transition-all"
              >
                Programları İncele
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEDEN SONBAHAR */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">Neden sonbahar?</h2>
            <div className="hairline mt-6 mx-auto max-w-xs" />
            <p className="mt-7 text-foreground/75 leading-relaxed">
              Sonbahar, bu üç program için yılın en uygun dönemi. Lazer epilasyonda güneşin çekilmesiyle cilt tonu
              dengelenir ve seanslar daha düzenli planlanabilir. Ciltte yaz boyunca güneş, deniz ve klimanın bıraktığı
              yorgunluk onarım ister. Tatil dönüşü ise form programlarına başlamak için doğal bir başlangıç noktasıdır.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PAKETLER */}
      <section id="programlar" className="relative py-12 md:py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col rounded-2xl border border-border/50 bg-card/85 backdrop-blur overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
                  <p className="mt-1.5 text-primary italic font-display">{p.subtitle}</p>
                  <p className="mt-4 text-sm text-foreground/75 leading-relaxed flex-1">{p.body}</p>
                  <Link
                    to={p.to}
                    className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:text-foreground transition-colors underline underline-offset-4"
                  >
                    Ayrıntılı bilgi <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-12 text-center">
            <p className="text-foreground/70">Güncel paket koşulları için WhatsApp'tan bize ulaşabilirsiniz.</p>
            <div className="mt-6">
              <Cta label="Paket Koşullarını Sor" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SÜREÇ */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.07 }}
                className="rounded-sm border border-border/50 bg-card/70 p-6"
              >
                <div className="font-display text-primary text-lg">{s.n}</div>
                <h3 className="mt-3 font-display text-xl leading-tight">{s.t}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GÜVEN */}
      <section className="relative pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST.map((item, i) => (
              <motion.div
                key={item.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.07 }}
                className="text-center"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto" strokeWidth={1} />
                <h3 className="mt-4 font-display text-lg">{item.t}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="relative pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <motion.div {...fadeUp} className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-primary" />
            <h2 className="text-xs uppercase tracking-[0.4em] text-primary">Sık Sorulan Sorular</h2>
          </motion.div>
          <motion.div {...fadeUp}>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, idx) => (
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
        </div>
      </section>

      {/* KAPANIŞ */}
      <section className="relative pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="rounded-sm border border-border/60 bg-card/85 backdrop-blur px-6 py-10 md:px-12 md:py-14 text-center shadow-elegant">
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              <span className="italic text-gold-gradient">Tanışalım</span>
            </h2>
            <p className="mt-5 text-foreground/70 leading-relaxed max-w-xl mx-auto">
              Hangi programın size uygun olduğunu konuşmak için ücretsiz ön değerlendirmeye bekliyoruz.
              Maslak 1453, Sarıyer / İstanbul · Pazartesi–Cumartesi 08:30–21:00
            </p>
            <div className="mt-8">
              <Cta label="WhatsApp'tan Randevu Al" />
            </div>
          </div>
          <p className="mt-8 text-xs text-muted-foreground text-center italic leading-relaxed max-w-2xl mx-auto">
            Bu sayfadaki bilgiler tanıtım amaçlıdır. Uygulama sonuçları kişiye göre farklılık gösterebilir.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
