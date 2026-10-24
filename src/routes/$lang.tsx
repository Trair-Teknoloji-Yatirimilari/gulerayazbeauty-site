import { Outlet, createFileRoute, notFound } from "@tanstack/react-router";

/**
 * Dil öneki düzeni (/en, /fa). Türkçe kökte kaldığı için burada yer almaz.
 *
 * Statik rotalar (/kvkk, /lazer-epilasyon, /blog …) bu dinamik segmentten
 * önce eşleşir; buraya yalnızca statik karşılığı olmayan tek segmentler düşer.
 * Desteklenmeyen bir dil (örn. /de) gerçek 404 döner — notFound() beforeLoad'dan
 * fırlatıldığında router statusCode'u 404'e çeker.
 */
export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (params.lang !== "en" && params.lang !== "fa") throw notFound();
  },
  component: () => <Outlet />,
});
