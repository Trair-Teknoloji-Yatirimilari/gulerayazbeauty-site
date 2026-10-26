#!/usr/bin/env node
/**
 * Sitemap'teki tüm URL'leri tek çağrıda IndexNow'a bildirir.
 *
 * Tek seferlik toplu bildirim için yazıldı (Bing siteyi ilk kez görecek),
 * ama repoda kalıyor: toplu içerik güncellemelerinden sonra yeniden
 * çalıştırılabilir. Gündelik akışta gerek yok — blog yayını zaten
 * src/lib/indexnow.ts üzerinden tek tek bildiriyor.
 *
 * Çalıştırma:
 *   node scripts/indexnow-bulk.mjs            # gerçek gönderim
 *   node scripts/indexnow-bulk.mjs --dry-run  # yalnızca listeyi göster
 *
 * Bağımlılık yok: düz Node ESM + global fetch (Node 18+).
 * IndexNow yanıtı: 200/202 başarı · 403 anahtar dosyası bulunamadı
 * · 422 URL host ile eşleşmiyor · 429 çok fazla istek.
 */

const KEY = "53bedbd193a049399f4f5c0e54739d04";
const HOST = "gulerayazbeauty.com";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";
const MAX_URLS = 10000;

const dryRun = process.argv.includes("--dry-run");

async function main() {
  // 1) Anahtar dosyası erişilebilir mi — yoksa IndexNow 403 döner
  const keyRes = await fetch(KEY_LOCATION);
  const keyBody = (await keyRes.text()).trim();
  if (keyRes.status !== 200 || keyBody !== KEY) {
    console.error(`HATA: anahtar dosyası doğrulanamadı — HTTP ${keyRes.status}, içerik ${JSON.stringify(keyBody.slice(0, 60))}`);
    process.exit(1);
  }
  console.log(`anahtar dosyası OK: ${KEY_LOCATION}`);

  // 2) Sitemap'ten URL'leri topla
  const xml = await fetch(SITEMAP).then((r) => r.text());
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  const urlList = [...new Set(urls)].filter((u) => u.startsWith(`https://${HOST}/`) || u === `https://${HOST}`);

  console.log(`sitemap: ${urls.length} <loc> · tekil ve host eşleşen: ${urlList.length}`);
  if (urlList.length !== urls.length) {
    console.log(`  elenen: ${urls.filter((u) => !urlList.includes(u)).join(", ") || "(tekrar edenler)"}`);
  }
  if (urlList.length === 0) {
    console.error("HATA: gönderilecek URL yok");
    process.exit(1);
  }
  if (urlList.length > MAX_URLS) {
    console.error(`HATA: ${urlList.length} URL tek çağrı sınırını (${MAX_URLS}) aşıyor`);
    process.exit(1);
  }

  if (dryRun) {
    console.log("\n--dry-run: istek atılmadı. Gönderilecek URL'ler:");
    for (const u of urlList) console.log(`  ${u}`);
    return;
  }

  // 3) Tek çağrıda gönder
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  const body = await res.text();
  console.log(`\nIndexNow HTTP ${res.status} ${res.statusText}`);
  if (body.trim()) console.log(`yanıt gövdesi: ${body.slice(0, 300)}`);
  if (res.status === 200 || res.status === 202) {
    console.log(`BAŞARILI: ${urlList.length} URL bildirildi`);
  } else {
    console.error("BAŞARISIZ — 403: anahtar dosyası · 422: host uyuşmazlığı · 429: hız sınırı");
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("HATA:", err);
  process.exit(1);
});
