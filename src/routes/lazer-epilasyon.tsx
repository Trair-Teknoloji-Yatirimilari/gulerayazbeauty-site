import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { serviceHead } from "@/lib/service-head";
import { SERVICE_BY_PATH } from "@/lib/service-pages";

const DATA = SERVICE_BY_PATH["/lazer-epilasyon"];

export const Route = createFileRoute("/lazer-epilasyon")({
  head: () => serviceHead(DATA),
  component: () => <ServicePage data={DATA} />,
});
