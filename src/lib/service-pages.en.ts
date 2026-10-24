/**
 * İngilizce hizmet sayfası içerikleri.
 *
 * Metinler kaynak dosyadan BİREBİR alındı — düzenlemeyin, kısaltmayın.
 * Fiyat, ₺ ve indirim oranı geçmez.
 *
 * Bu dizi TR'den BAĞIMSIZ kurulur; eşlemeler (path/serviceKey/blogCategory)
 * service-pages.ts'te dil başına AYRI üretilir, havuz birleştirilmez.
 */

import type { ServicePage } from "./service-pages";

const NOTE_EN =
  "The information on this page is for general guidance and does not replace a personal assessment. Results vary from person to person.";

export const SERVICE_PAGES_EN: ServicePage[] = [
  {
    path: "/lazer-epilasyon",
    serviceKey: "lazer",
    blogCategory: "Laser Hair Removal",
    navLabel: "Laser Hair Removal",
    title: "Laser Hair Removal in Maslak, Istanbul | Güler Ayaz Beauty",
    description:
      "Cooled diode laser hair removal at Maslak 1453, Sarıyer. Your session plan is set after a free assessment of skin tone and hair type.",
    h1: "Laser Hair Removal in Maslak and Sarıyer",
    cover: "service-lazer.jpg",
    coverAlt: "Diode laser hair removal session at our centre",
    blocks: [
      { t: "p", html: "Güler Ayaz Beauty provides laser hair removal with cooled diode technology at Maslak 1453 in Sarıyer, Istanbul. Every course begins with an assessment of your skin tone and hair structure, and the session settings are adjusted to you rather than to a standard protocol." },

      { t: "h2", text: "How Diode Laser Works" },
      { t: "p", html: "Laser hair removal works by directing light energy at the dark pigment (melanin) in the hair follicle. When the energy reaches the follicle it converts to heat and affects the hair's regrowth cycle. Because hairs are not all in the same growth phase at the same time, sessions are repeated at set intervals rather than done once." },
      { t: "p", html: "The cooled diode handpiece we use chills the skin at the moment of application. This makes the session more comfortable and allows us to work across a wider range of skin tones." },

      { t: "h3", text: "Treatment Areas" },
      { t: "p", html: "Face (upper lip, chin, sideburns), underarms, arms, legs, back, chest, bikini area, and full-body combinations. Which areas to combine is decided together during your assessment." },

      { t: "h2", text: "What a Session Involves" },
      { t: "h3", text: "Initial Assessment" },
      { t: "p", html: "The first step is always a face-to-face consultation. We look at skin tone, hair structure, medical history and any medication you are taking. This consultation is free and does not commit you to booking a session." },
      { t: "h3", text: "On the Day" },
      { t: "p", html: "The area is cleaned, and we ask that you have shaved rather than waxed or plucked beforehand — the follicle needs to be in place for the laser to work. A session takes anywhere from a few minutes to about half an hour depending on the area." },
      { t: "h3", text: "Intervals Between Sessions" },
      { t: "p", html: "Sessions are usually planned four to eight weeks apart, depending on the area and your hair cycle. The total number of sessions differs from person to person; hormonal factors, hair density and the area all affect it. This is why we do not quote a session count before the assessment." },

      { t: "h2", text: "Before and After Your Session" },
      { t: "ul", items: [
        "Avoid intense sun exposure and tanning beds for two to four weeks before a session",
        "Come without cream, lotion or deodorant on the treatment area",
        "Stay away from the sea, pools, saunas and direct sun for the first few days afterwards",
        "Protect the area from the sun and use the soothing aftercare we recommend",
        "Temporary redness is normal and settles quickly",
      ] },

      { t: "h2", text: "When It Isn't Suitable" },
      { t: "p", html: "Sessions may be postponed or declined during pregnancy, with an active skin infection, after recent intense sun exposure, while taking medication that increases light sensitivity, and with certain chronic conditions. This is why sharing your medical history at the consultation matters." },

      { t: "h2", text: "Getting Here from Sarıyer and Maslak" },
      { t: "p", html: "Our centre is inside Maslak 1453; parking and valet service are available. We are easy to reach by metro and main roads from Sarıyer, Ayazağa, Levent, Etiler, Nişantaşı and Şişli. We are open every day from 08:30 to 21:00." },
    ],
    faqs: [
      { q: "Does laser hair removal hurt?", a: "It varies from person to person. Thanks to the cooled handpiece, most guests describe the session as a mild warmth and tingling rather than pain." },
      { q: "How many sessions will I need?", a: "It depends on hair structure, hormonal factors and the area. We build a plan specific to you after the assessment; we do not quote a number without one." },
      { q: "Can I have sessions in summer?", a: "Yes, if your skin tone is even. If you have tanned recently the session is postponed until your skin settles." },
      { q: "Do you treat male guests?", a: "Yes. Areas such as the back, shoulders, neckline and beard line are treated, and the session plan is arranged accordingly." },
      { q: "Should I shave before coming?", a: "Yes, shaving is right. Waxing and plucking are not, because the laser needs the follicle to still be in place." },
    ],
    afterFaqHtml:
      "You can reach us on WhatsApp to arrange your free assessment, or call the centre during opening hours.",
    note: NOTE_EN,
  },
];
