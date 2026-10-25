import { createFileRoute } from "@tanstack/react-router";
import { ServicesHubPage, servicesHubHead } from "@/components/ServicesHubPage";
import type { Locale } from "@/i18n/types";

export const Route = createFileRoute("/$lang/hizmetler")({
  head: ({ params }) => servicesHubHead(params.lang as Locale),
  component: function LangHizmetler() {
    const { lang } = Route.useParams();
    return <ServicesHubPage locale={lang as Locale} />;
  },
});
