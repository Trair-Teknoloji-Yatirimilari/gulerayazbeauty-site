// Sitenin kanonik adresi — kendi domainine taşınınca SADECE burayı güncelle.
export const SITE_URL = "https://gulerayazbeauty.com";

// İletişim numaraları. WhatsApp numarası wa.me formatında (başında + ve boşluk yok).
export const WHATSAPP_PHONE = "905010274777";
export const PHONE_MOBILE = "+905010274777";
export const PHONE_LANDLINE = "+902122234777";

// Çalışma saatleri — hem JSON-LD openingHoursSpecification hem de iletişim
// bölümündeki görünür metin buradan beslenir ki ikisi birbirinden ayrılmasın.
export const OPENING_HOURS = { opens: "08:30", closes: "21:00" };

/** Hazır mesajlı WhatsApp sohbet linki. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
