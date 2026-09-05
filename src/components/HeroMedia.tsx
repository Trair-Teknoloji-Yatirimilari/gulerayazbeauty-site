import { useEffect, useState } from "react";

type NetworkInfo = { saveData?: boolean; effectiveType?: string };

/**
 * Hero arka planı: poster her zaman basılır, video yalnızca uygun koşullarda
 * üzerine bindirilir ve hazır olduğunda yumuşakça açılır.
 *
 * Video YÜKLENMEZ:
 *  - prefers-reduced-motion: reduce
 *  - < 768px (mobil veri ve pil)
 *  - Save-Data açık veya bağlantı 2g / slow-2g
 *
 * SSR'da her zaman yalnızca poster render edilir; karar istemcide veriliyor.
 */
export function HeroMedia({ alt }: { alt: string }) {
  const [playVideo, setPlayVideo] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallMq = window.matchMedia("(max-width: 767px)");

    const decide = () => {
      const net: NetworkInfo | undefined = (
        navigator as Navigator & { connection?: NetworkInfo }
      ).connection;
      const slowLink =
        !!net && (net.saveData === true || net.effectiveType === "2g" || net.effectiveType === "slow-2g");
      setPlayVideo(!motionMq.matches && !smallMq.matches && !slowLink);
    };

    decide();
    motionMq.addEventListener("change", decide);
    smallMq.addEventListener("change", decide);
    return () => {
      motionMq.removeEventListener("change", decide);
      smallMq.removeEventListener("change", decide);
    };
  }, []);

  return (
    <>
      <img
        src="/video/hero-poster.jpg"
        alt={alt}
        width={960}
        height={1200}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {playVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video/hero-poster.jpg"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/video/hero.webm" type="video/webm" />
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
}
