/**
 * IndexNow bildirimi.
 *
 * Yeni veya güncellenen bir URL'yi IndexNow'a bildirir; Bing ve onu besleyen
 * arama/asistan yüzeyleri sayfayı dakikalar içinde keşfeder.
 *
 * Gönderim ateşle-unut: ağ hatası, zaman aşımı ya da IndexNow'un hata kodu
 * hiçbir koşulda kullanıcı isteğini geciktirmez veya başarısız etmez.
 * trackContact() ile aynı desen — ölçüm/bildirim asıl işi bozmaz.
 *
 * Yalnızca sunucuda çalışır. Anahtar zaten herkese açık (doğrulama dosyası
 * sitede yayında) ama tarayıcıdan istek atmanın faydası yok.
 */

export const INDEXNOW_KEY = "53bedbd193a049399f4f5c0e54739d04";
export const INDEXNOW_HOST = "gulerayazbeauty.com";
export const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;

const ENDPOINT = "https://api.indexnow.org/IndexNow";
/** Tek çağrıda izin verilen üst sınır; 88 URL'lik site için fazlasıyla yeterli. */
const MAX_URLS = 10000;
const TIMEOUT_MS = 5000;

/**
 * Verilen URL'leri IndexNow'a bildirir.
 *
 * Döndürdüğü söz HİÇBİR ZAMAN reddetmez; çağıran `await` etmek zorunda değil.
 * Sonuç yalnızca günlük/tanı için döner.
 */
export async function pingIndexNow(urls: string[]): Promise<{ ok: boolean; status?: number }> {
  try {
    if (typeof window !== "undefined") return { ok: false }; // yalnızca sunucu
    const urlList = urls.filter((u) => typeof u === "string" && u.startsWith(`https://${INDEXNOW_HOST}/`));
    if (urlList.length === 0) return { ok: false }; // boş listede istek atma

    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: INDEXNOW_HOST,
        key: INDEXNOW_KEY,
        keyLocation: INDEXNOW_KEY_LOCATION,
        urlList: urlList.slice(0, MAX_URLS),
      }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    // 200/202 başarı · 403 anahtar dosyası bulunamadı · 422 URL host ile eşleşmiyor
    console.log(`[indexnow] ${urlList.length} URL · HTTP ${res.status}`);
    return { ok: res.status === 200 || res.status === 202, status: res.status };
  } catch (err) {
    console.log(`[indexnow] bildirim atlandı: ${err instanceof Error ? err.message : String(err)}`);
    return { ok: false };
  }
}

/** Blog yazısının tam URL'si. */
export function blogPostUrl(slug: string): string {
  return `https://${INDEXNOW_HOST}/blog/${slug}`;
}
