import { SITE_URL } from "@/lib/site";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SERVICE_PAGES } from "@/lib/service-pages";
import { BEAUTY_SALON_ID } from "@/lib/service-head";

const TITLE = "Hizmetlerimiz | Maslak Güzellik Merkezi — Güler Ayaz Beauty";
const DESCRIPTION =
  "Güler Ayaz Beauty'nin Maslak 1453'teki tüm hizmetleri: lazer epilasyon, cilt bakımı, karbon peeling, vücut şekillendirme, kalıcı makyaj, tırnak, kirpik, reformer pilates ve kuaför.";

/**
 * Hizmet listesi hub sayfası.
 *
 * Amaç yalnızca listelemek değil: her hizmet sayfasına gövde metninden,
 * açıklayıcı bağlantı metniyle en az bir iç link vermek. Yalnızca footer'dan
 * link alan sayfalar "keşfedildi, dizine eklenmedi" durumunda takılabiliyor.
 */
export const Route = createFileRoute("/hizmetler")({
  head: () => {
    const url = `${SITE_URL}/hizmetler`;
    return {
      meta: [
        { title: TITLE },
        { name: "description", content: DESCRIPTION },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESCRIPTION },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Güler Ayaz Beauty hizmetleri",
            itemListElement: SERVICE_PAGES.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.navLabel,
              url: `${SITE_URL}${s.path}`,
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Hizmetler", item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "Hizmet listesi",
            provider: { "@id": BEAUTY_SALON_ID },
            itemListElement: SERVICE_PAGES.map((s) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: s.navLabel,
                url: `${SITE_URL}${s.path}`,
              },
            })),
          }),
        },
      ],
    };
  },
  component: ServicesHubPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

/** Hub'daki gruplama — ziyaretçi ihtiyaca göre tarasın diye. */
const GROUPS: { title: string; intro: string; paths: string[] }[] = [
  {
    title: "Lazer Uygulamaları",
    intro:
      "Soğutmalı diode ve Q-Switch lazer cihazlarıyla yapılan uygulamalar. Hepsi cilt tonu ve kıl/pigment yapısı değerlendirmesiyle başlar.",
    paths: ["/lazer-epilasyon", "/erkek-lazer-epilasyon", "/dovme-silme", "/karbon-peeling"],
  },
  {
    title: "Cilt ve Vücut",
    intro:
      "Cilt analiziyle planlanan bakım programları ve ölçüm temelli vücut uygulamaları.",
    paths: ["/cilt-bakimi", "/vucut-sekillendirme", "/reformer-pilates"],
  },
  {
    title: "Saç",
    intro:
      "Kuaför bölümümüzde kesim ve şekillendirmenin yanında renk, bakım ve uzatma uygulamaları yapılır.",
    paths: ["/kuafor", "/sac-boyama", "/keratin-brezilya-fonu", "/protez-sac"],
  },
  {
    title: "Tırnak, Kirpik ve Kalıcı Makyaj",
    intro:
      "Tek kullanımlık ve sterilize ekipmanla çalışılan detay uygulamaları.",
    paths: ["/protez-tirnak", "/ipek-kirpik", "/kalici-makyaj"],
  },
];

function ServicesHubPage() {
  const byPath = Object.fromEntries(SERVICE_PAGES.map((s) => [s.path, s]));

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />

      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24 lg:px-10">
        <motion.div {...fadeUp}>
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">
            Maslak 1453 · Sarıyer / İstanbul
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-gold-gradient italic">
            Hizmetlerimiz
          </h1>
          <p className="mt-6 max-w-2xl text-foreground/70 leading-relaxed">
            Güler Ayaz Beauty, güzellik merkezi ve kuaförü tek çatı altında toplar; cilt, vücut,
            tırnak ve saç randevuları aynı ziyarette planlanabilir. Her uygulama ücretsiz bir ön
            değerlendirmeyle başlar ve seans planı kişiye özel hazırlanır. Merkezimiz her gün
            08:30–21:00 arası açıktır ve otoparkı vardır.
          </p>
        </motion.div>

        <div className="mt-16 space-y-16">
          {GROUPS.map((group) => (
            <motion.section key={group.title} {...fadeUp}>
              <h2 className="font-display text-2xl md:text-3xl">{group.title}</h2>
              <p className="mt-3 max-w-2xl text-sm text-foreground/60 leading-relaxed">
                {group.intro}
              </p>

              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {group.paths.map((path) => {
                  const s = byPath[path];
                  if (!s) return null;
                  return (
                    <li key={path}>
                      <Link
                        to={s.path}
                        className="group flex h-full flex-col gap-2 rounded-2xl border border-border/50 p-5 transition-colors hover:border-primary/50"
                      >
                        <span className="flex items-center gap-2 font-display text-lg">
                          {s.navLabel}
                          <ArrowUpRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                        </span>
                        <span className="text-sm leading-relaxed text-foreground/65">
                          {s.description}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.section>
          ))}
        </div>

        <motion.p {...fadeUp} className="mt-16 text-sm text-foreground/60 leading-relaxed">
          Hangi uygulamanın size uygun olduğundan emin değilseniz, ücretsiz ön değerlendirme için{" "}
          <a
            href="https://wa.me/905010274777"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-primary"
          >
            WhatsApp'tan yazabilirsiniz
          </a>
          . Güncel kampanyalar için <Link to="/kampanya" className="underline underline-offset-2 hover:text-primary">kampanya sayfamıza</Link>,
          uygulamalara dair yazılar için <Link to="/blog" className="underline underline-offset-2 hover:text-primary">blog bölümümüze</Link> bakabilirsiniz.
        </motion.p>

        <motion.p {...fadeUp} className="mt-10 text-xs italic text-muted-foreground leading-relaxed">
          Bu sayfadaki bilgiler tanıtım ve bilgilendirme amaçlıdır; kişisel bir değerlendirme
          yerine geçmez. Uygulama sonuçları kişiye göre farklılık gösterebilir.
        </motion.p>
      </main>

      <SiteFooter />
    </div>
  );
}
