import { createFileRoute } from "@tanstack/react-router";
import { KvkkPage } from "@/routes/kvkk";
import { getDict } from "@/i18n";
import { alternateLinks } from "@/i18n/locale-path";
import { SITE_URL } from "@/lib/site";
import type { Locale } from "@/i18n/types";

export const Route = createFileRoute("/$lang/kvkk")({
  head: ({ params }) => {
    const locale = params.lang as Locale;
    const m = getDict(locale).meta.legal;
    return {
      meta: [
        { title: m.title },
        { name: "description", content: m.description },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: m.title },
        { property: "og:description", content: m.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${SITE_URL}/${locale}/kvkk` },
        { name: "twitter:card", content: "summary" },
      ],
      links: alternateLinks("/kvkk", locale),
    };
  },
  component: () => <KvkkPage />,
});
