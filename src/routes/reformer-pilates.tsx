import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { serviceHead } from "@/lib/service-head";
import { SERVICE_BY_PATH } from "@/lib/service-pages";

const DATA = SERVICE_BY_PATH["/reformer-pilates"];

export const Route = createFileRoute("/reformer-pilates")({
  head: () => serviceHead(DATA),
  component: () => <ServicePage data={DATA} />,
});
