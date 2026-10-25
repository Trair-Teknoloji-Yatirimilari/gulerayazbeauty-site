import { createFileRoute } from "@tanstack/react-router";
import { ServicesHubPage, servicesHubHead } from "@/components/ServicesHubPage";

/**
 * Hizmet listesi hub sayfası (Türkçe).
 *
 * Amaç yalnızca listelemek değil: her hizmet sayfasına gövde metninden,
 * açıklayıcı bağlantı metniyle en az bir iç link vermek. Yalnızca footer'dan
 * link alan sayfalar "keşfedildi, dizine eklenmedi" durumunda takılabiliyor.
 *
 * İçerik ve şemalar ServicesHubPage'de; /$lang/hizmetler aynı bileşeni
 * kullanır, tek fark dil.
 */
export const Route = createFileRoute("/hizmetler")({
  head: () => servicesHubHead("tr"),
  component: () => <ServicesHubPage locale="tr" />,
});
