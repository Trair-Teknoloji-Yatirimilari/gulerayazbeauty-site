import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/routes/galeri";
import { getDict } from "@/i18n";
import { alternateLinks } from "@/i18n/locale-path";
import { SITE_URL } from "@/lib/site";
import type { Locale } from "@/i18n/types";

export const Route = createFileRoute("/$lang/galeri")({
  head: ({ params }) => {
    const locale = params.lang as Locale;
    const m = getDict(locale).meta.gallery;
    return {
      meta: [
        { title: m.title },
        { name: "description", content: m.description },
        { property: "og:title", content: m.title },
        { property: "og:description", content: m.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${SITE_URL}/${locale}/galeri` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: alternateLinks("/galeri", locale),
    };
  },
  component: () => <GalleryPage />,
});
