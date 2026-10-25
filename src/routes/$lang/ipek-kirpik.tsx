import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { serviceHead } from "@/lib/service-head";
import { serviceByPath } from "@/lib/service-pages";
import type { Locale } from "@/i18n/types";

const PATH = "/ipek-kirpik";

export const Route = createFileRoute("/$lang/ipek-kirpik")({
  head: ({ params }) => serviceHead(serviceByPath(params.lang as Locale)[PATH], params.lang as Locale),
  component: function LangIpekKirpik() {
    const { lang } = Route.useParams();
    return <ServicePage data={serviceByPath(lang as Locale)[PATH]} />;
  },
});
