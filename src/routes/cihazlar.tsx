import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { serviceHead } from "@/lib/service-head";
import { SERVICE_BY_PATH } from "@/lib/service-pages";

const DATA = SERVICE_BY_PATH["/cihazlar"];

export const Route = createFileRoute("/cihazlar")({
  head: () => serviceHead(DATA),
  component: () => <ServicePage data={DATA} />,
});
