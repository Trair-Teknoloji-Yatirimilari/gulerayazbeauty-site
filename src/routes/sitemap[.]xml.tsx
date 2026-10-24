import { createFileRoute } from "@tanstack/react-router";
import { TRANSLATED_PATHS, isTranslatedPath, localizedPath } from "@/i18n/locale-path";

const STATIC_PAGES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/hizmetler", changefreq: "weekly", priority: "0.9" },
  { path: "/cihazlar", changefreq: "monthly", priority: "0.8" },
  { path: "/lazer-epilasyon", changefreq: "monthly", priority: "0.9" },
  { path: "/erkek-lazer-epilasyon", changefreq: "monthly", priority: "0.9" },
  { path: "/cilt-bakimi", changefreq: "monthly", priority: "0.9" },
  { path: "/led-isik-terapisi", changefreq: "monthly", priority: "0.9" },
  { path: "/karbon-peeling", changefreq: "monthly", priority: "0.9" },
  { path: "/vucut-sekillendirme", changefreq: "monthly", priority: "0.9" },
  { path: "/dovme-silme", changefreq: "monthly", priority: "0.9" },
  { path: "/kalici-makyaj", changefreq: "monthly", priority: "0.9" },
  { path: "/protez-tirnak", changefreq: "monthly", priority: "0.9" },
  { path: "/manikur-pedikur", changefreq: "monthly", priority: "0.9" },
  { path: "/ipek-kirpik", changefreq: "monthly", priority: "0.9" },
  { path: "/reformer-pilates", changefreq: "monthly", priority: "0.9" },
  { path: "/kuafor", changefreq: "monthly", priority: "0.9" },
  { path: "/sac-boyama", changefreq: "monthly", priority: "0.9" },
  { path: "/keratin-brezilya-fonu", changefreq: "monthly", priority: "0.9" },
  { path: "/protez-sac", changefreq: "monthly", priority: "0.9" },
  { path: "/kampanya", changefreq: "weekly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/galeri", changefreq: "weekly", priority: "0.7" },
  { path: "/kvkk", changefreq: "yearly", priority: "0.3" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const host =
          request.headers.get("x-forwarded-host") ??
          request.headers.get("host") ??
          "gulerayazbeauty.com";
        const base = `https://${host}`;

        let posts: { slug: string; updated_at: string }[] = [];
        try {
          const { db } = await import("@/lib/db");
          const res = await db().query(
            `SELECT slug, updated_at FROM blog_posts WHERE status = 'published' ORDER BY published_at DESC`,
          );
          posts = res.rows;
        } catch {
          /* DB erişilemezse statik sayfalarla devam */
        }

        // Çevrilmiş sayfalar üç dilde, karşılıklı xhtml:link alternatifleriyle.
        // Liste TRANSLATED_PATHS'ten gelir; Aşama 2'de oraya ekleme yapmak yeterli.
        const altBlock = (basePath: string) =>
          (["tr", "en", "fa"] as const)
            .map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${base}${localizedPath(basePath, l)}"/>`)
            .join("") +
          `<xhtml:link rel="alternate" hreflang="x-default" href="${base}${basePath}"/>`;

        const urls = [
          ...STATIC_PAGES.map((p) => {
            const translated = isTranslatedPath(p.path);
            const alts = translated ? altBlock(p.path) : "";
            return `  <url><loc>${base}${p.path}</loc><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority>${alts}</url>`;
          }),
          // Türkçe dışındaki diller
          ...TRANSLATED_PATHS.flatMap((basePath) =>
            (["en", "fa"] as const).map((l) => {
              const sp = STATIC_PAGES.find((x) => x.path === basePath);
              return `  <url><loc>${base}${localizedPath(basePath, l)}</loc><changefreq>${sp?.changefreq ?? "monthly"}</changefreq><priority>${sp?.priority ?? "0.5"}</priority>${altBlock(basePath)}</url>`;
            }),
          ),
          ...posts.map(
            (p) =>
              `  <url><loc>${base}/blog/${p.slug}</loc><lastmod>${new Date(p.updated_at).toISOString().slice(0, 10)}</lastmod><priority>0.7</priority></url>`,
          ),
        ].join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
        return new Response(xml, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
