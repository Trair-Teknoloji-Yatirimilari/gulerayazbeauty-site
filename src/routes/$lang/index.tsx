import { createFileRoute } from "@tanstack/react-router";
import { Index } from "@/routes/index";
import { getDict } from "@/i18n";
import { alternateLinks } from "@/i18n/locale-path";
import { SITE_URL } from "@/lib/site";
import type { Locale } from "@/i18n/types";

/**
 * /en ve /fa ana sayfası. Türkçe ana sayfanın bileşeni yeniden kullanılır.
 * Loader YOK: blog yazıları DB'den Türkçe geldiği için bu dillerde bölüm hiç
 * render edilmiyor (Index'e posts verilmiyor) ve sorgu da çalıştırılmıyor.
 */
export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const locale = params.lang as Locale;
    const m = getDict(locale).meta.home;
    return {
      meta: [
        { title: m.title },
        { name: "description", content: m.description },
        { property: "og:title", content: m.ogTitle },
        { property: "og:description", content: m.ogDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${SITE_URL}/${locale}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: alternateLinks("/", locale),
    };
  },
  component: () => <Index />,
});
