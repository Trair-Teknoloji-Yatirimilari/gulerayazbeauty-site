/**
 * Çerez rızası (KVKK m.5/m.9).
 *
 * Meta Pixel zorunlu çerez değildir; ziyaretçinin IP adresini ve `_fbp`
 * çerezini Meta'ya (yurt dışı) gönderir. Bu yüzden Pixel YALNIZCA açık rıza
 * verildikten sonra yüklenir. Rıza verilmeden `window.fbq` hiç tanımlanmaz,
 * dolayısıyla track.ts'teki `window.fbq?.(...)` çağrıları sessizce boşa düşer.
 */

export const CONSENT_KEY = "ga.consent.v1";

export type ConsentValue = "granted" | "denied";

/** Kayıtlı rıza; henüz seçim yapılmadıysa null. */
export function readConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function writeConsent(v: ConsentValue): void {
  try {
    window.localStorage.setItem(CONSENT_KEY, v);
  } catch {
    /* localStorage kapalıysa oturum boyunca rıza geçerli sayılır */
  }
}

/** Çerez bandını yeniden açmak için yayılan olay (footer bağlantısı kullanır). */
export const CONSENT_REOPEN_EVENT = "ga:consent:reopen";

/**
 * Kayıtlı kararı siler ve bandı yeniden açar.
 *
 * KVKK, rızanın geri alınmasının verilmesi kadar kolay olmasını arar; bu
 * yüzden footer'daki "Çerez tercihleri" bağlantısı buraya bağlıdır. Not:
 * sayfa yenilenene kadar hâlihazırda yüklenmiş Pixel betiği bellekte kalır,
 * bu yüzden reddedildiğinde sayfa bir kez yeniden yüklenir.
 */
export function reopenConsent(): void {
  try {
    window.localStorage.removeItem(CONSENT_KEY);
  } catch {
    /* yoksay */
  }
  window.dispatchEvent(new Event(CONSENT_REOPEN_EVENT));
}

/** Meta (Facebook) Pixel kimliği — rıza sonrası yüklenir. */
export const META_PIXEL_ID = "1807896346887596";

type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push?: unknown;
  loaded?: boolean;
  version?: string;
};

type PixelWindow = Window & { fbq?: Fbq; _fbq?: Fbq };

let pixelLoaded = false;

/**
 * Pixel bu sayfa yaşam döngüsünde yüklendi mi?
 *
 * Rıza geri alınırken buna bakılır: localStorage'daki kayda bakmak yanıltıcı,
 * çünkü bandı yeniden açan reopenConsent() kaydı zaten silmiş oluyor.
 */
export function isPixelLoaded(): boolean {
  return pixelLoaded;
}

/**
 * Meta'nın standart pixel betiğini çalıştırır ve PageView gönderir.
 * Birden fazla çağrılsa da bir kez yüklenir.
 */
export function loadMetaPixel(): void {
  if (typeof window === "undefined" || pixelLoaded) return;
  pixelLoaded = true;

  const w = window as PixelWindow;

  if (!w.fbq) {
    const n = function (...args: unknown[]) {
      if (n.callMethod) n.callMethod.apply(n, args);
      else n.queue.push(args);
    } as Fbq;
    n.queue = [];
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    w.fbq = n;
    if (!w._fbq) w._fbq = n;

    const s = document.createElement("script");
    s.async = true;
    s.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(s);
  }

  w.fbq("init", META_PIXEL_ID);
  w.fbq("track", "PageView");
}
