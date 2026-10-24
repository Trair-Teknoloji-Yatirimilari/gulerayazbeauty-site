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

  {
    path: "/cilt-bakimi",
    serviceKey: "cilt",
    blogCategory: "Skin Care",
    navLabel: "Skin Care",
    title: "Skin Care & Hydrafacial in Maslak | Güler Ayaz Beauty",
    description:
      "Hydrafacial, carbon peel and tailored facials at Maslak 1453, Sarıyer. Every programme begins with a free skin analysis.",
    h1: "Skin Care and Hydrafacial in Maslak",
    cover: "service-cilt-gercek.jpg",
    coverAlt: "Steam-assisted facial session at our centre",
    blocks: [
      { t: "p", html: "Every skin care course at Güler Ayaz Beauty begins with a skin analysis at our centre in Maslak 1453, Sarıyer. The type of treatment, its intensity and the interval between sessions are all decided after that analysis rather than before it." },

      { t: "h2", text: "What We Offer" },
      { t: "h3", text: "Hydrafacial" },
      { t: "p", html: "A staged, water-based treatment that combines surface cleansing, pore extraction, hydration and nourishment in one session. Because it is gentle on the skin, it is often chosen by guests who want to return to their day straight afterwards." },
      { t: "h3", text: "Q-Switch Carbon Peel" },
      { t: "p", html: "A carbon solution is applied to the skin and worked with laser pulses. The aim is to support the appearance of pores, dullness and surface texture." },
      { t: "h3", text: "Classic and Tailored Facials" },
      { t: "p", html: "Deep cleansing, hydrating and nourishing programmes planned around your skin type. Content and intensity are adjusted for combination, oily, dry and sensitive skin." },

      { t: "h2", text: "Why the Analysis Comes First" },
      { t: "p", html: "The same complaint can have different causes in different skin. Visible pores may come from oil balance or from a build-up of dead skin, and the right treatment is not the same in both cases. That is why we do not run a single programme for everyone — the plan is built after the analysis." },

      { t: "h2", text: "Planning Around the Season" },
      { t: "p", html: "Skin does not need the same thing all year. After summer, repair and hydration come forward following sun, sea and air conditioning; in winter, dryness and barrier support take over. Reviewing the plan with the season helps the course progress steadily." },

      { t: "h2", text: "After Your Treatment" },
      { t: "ul", items: [
        "Avoid heavy make-up for the first 24 hours",
        "Keep using sunscreen without interruption",
        "Hold off on exfoliating home-care products for a few days",
        "Drinking enough water and sleeping regularly are the home side of skin care",
      ] },

      { t: "h2", text: "Finding Us" },
      { t: "p", html: "Our centre is inside Maslak 1453 in Sarıyer; parking and valet service are available. We are open every day from 08:30 to 21:00." },
    ],
    faqs: [
      { q: "Can I go back to work afterwards?", a: "It depends on the treatment. After a Hydrafacial most guests return to their day the same day; there may be brief mild pinkness." },
      { q: "How often should I have a facial?", a: "It depends on your skin type and what you want to achieve. We suggest an interval specific to you after the analysis." },
      { q: "I have sensitive skin — is this suitable?", a: "Content and intensity are adjusted for sensitive skin. Suitability is assessed during the analysis." },
      { q: "Can carbon peel and Hydrafacial be combined?", a: "Depending on the analysis they can be alternated across separate sessions. The order and interval are set for you individually." },
      { q: "Do I need to prepare anything beforehand?", a: "Come without make-up if you can, and let us know about any active skin treatment or medication you are using." },
    ],
    afterFaqHtml:
      "You can reach us on WhatsApp to book your free skin analysis, or call the centre during opening hours.",
    note: NOTE_EN,
  },

  {
    path: "/keratin-brezilya-fonu",
    serviceKey: "keratin",
    blogCategory: "Keratin Treatment",
    navLabel: "Keratin & Brazilian Blowout",
    title: "Keratin & Brazilian Blowout in Maslak | Güler Ayaz",
    description:
      "Keratin treatment and Brazilian blowout at Maslak 1453, Sarıyer. Product, processing time and aftercare are planned around your hair.",
    h1: "Keratin Treatment and Brazilian Blowout in Maslak",
    cover: "service-kuafor.jpg",
    coverAlt: "Hair treatment at the Güler Ayaz Beauty salon",
    blocks: [
      { t: "p", html: "Frizz, volume that will not settle and hair that fights every blow-dry are the complaints we hear most often. At the salon inside Maslak 1453 in Sarıyer, Istanbul, we address them with keratin treatment and Brazilian blowout." },

      { t: "h2", text: "Are They the Same Thing?" },
      { t: "p", html: "They are often confused. A Brazilian blowout also contains keratin; the difference is in what each one aims for. Keratin treatment is built around nourishing the hair shaft and smoothing the surface. A Brazilian blowout does that and also straightens more visibly, cutting the time you spend styling. Which one suits you depends on your hair's thickness, porosity and what you want from it — we decide that together." },

      { t: "h2", text: "How the Appointment Runs" },
      { t: "p", html: "Your hair is washed with a shampoo that prepares it for the treatment. The product is applied section by section and left for its processing time. The hair is then dried and sealed with heat. Total time varies with length and density; we share an estimate when the appointment is booked." },
      { t: "h3", text: "About the Product" },
      { t: "p", html: "The product is chosen according to the condition of your hair. We tell you before the session which one will be used and what is in it. If you are pregnant, breastfeeding or sensitive to strong scents, please let us know in advance." },

      { t: "h2", text: "Aftercare" },
      { t: "ul", items: [
        "Wait the period we tell you before the first wash",
        "A sulphate-free and salt-free shampoo is recommended",
        "Avoid clipping or tying the hair tightly in the first days",
        "How long the result lasts varies with hair structure, washing frequency and the products you use",
      ] },

      { t: "h2", text: "Planning Alongside Colour" },
      { t: "p", html: "Colour work and keratin are usually not done on the same day. Which comes first and how long to wait between them is decided at the consultation, based on the current condition of your hair." },

      { t: "h2", text: "Finding Us" },
      { t: "p", html: "Our salon is inside Maslak 1453; parking and valet service are available. We are open every day from 08:30 to 21:00, which suits after-work appointments." },
    ],
    faqs: [
      { q: "Is a Brazilian blowout the same as keratin treatment?", a: "A Brazilian blowout also contains keratin. Keratin treatment focuses on nourishing and smoothing; a Brazilian blowout additionally gives a more visible straightening." },
      { q: "How long does the result last?", a: "It varies with hair structure, how often you wash and which shampoo you use. We discuss the expected range for your hair during the consultation." },
      { q: "How long does the appointment take?", a: "It depends on length and density; we share an estimate when booking." },
      { q: "Can it be done on coloured hair?", a: "It is planned after an assessment. The order of colour and keratin, and the gap between them, depend on the condition of your hair." },
      { q: "When can I wash my hair?", a: "There is a waiting period that depends on the product used; we tell you the exact time at the end of the appointment." },
      { q: "Can I have it while pregnant?", a: "We do not recommend it during pregnancy or breastfeeding. Simply let us know before booking." },
    ],
    afterFaqHtml:
      "You can reach us on WhatsApp to arrange a consultation, or call the salon during opening hours.",
    note: NOTE_EN,
  },

  {
    path: "/manikur-pedikur",
    serviceKey: "manikur-pedikur",
    blogCategory: "Manicure & Pedicure",
    navLabel: "Manicure & Pedicure",
    title: "Manicure, Pedicure & Gel Polish in Maslak | Güler Ayaz",
    description:
      "Manicure, pedicure, gel polish and nail art at Maslak 1453, Sarıyer. Single-use tools, sterilised equipment, and the right removal method.",
    h1: "Manicure, Pedicure and Gel Polish in Maslak",
    cover: "service-nail-gercek.jpg",
    coverAlt: "Gel polish application in our nail studio",
    blocks: [
      { t: "p", html: "The nail studio at Güler Ayaz Beauty in Maslak 1453, Sarıyer offers manicure, pedicure, gel polish and nail art. Every appointment starts by looking at the nail and the skin around it, and the treatment is planned from there." },

      { t: "h2", text: "What We Offer" },
      { t: "ul", items: [
        "<strong>Manicure</strong> — shaping the nails and tidying the surrounding skin",
        "<strong>Pedicure</strong> — shaping the toenails and caring for the feet",
        "<strong>Gel polish</strong> — polish cured under a UV/LED lamp",
        "<strong>Nail art</strong> — design and detail work",
      ] },
      { t: "p", html: "Gel and acrylic extensions are a separate subject and are covered on their own page." },

      { t: "h2", text: "How a Manicure Runs" },
      { t: "p", html: "Any existing polish is removed with the right method first. Length and shape are agreed, the nails are shaped, and the surrounding skin is tidied. We then move on to the treatment you have chosen. If we see a cut, redness or anything that suggests a fungal problem, we recommend postponing — and we say so at the start." },

      { t: "h2", text: "Pedicure" },
      { t: "p", html: "This covers shaping the toenails and caring for the feet. Where there is an ingrown nail, thickening or pain, we do not treat and recommend seeing a doctor — those are medical matters rather than beauty ones." },

      { t: "h2", text: "Gel Polish" },
      { t: "p", html: "Gel polish is applied with a product that cures under a lamp and stays in place longer than regular polish. How long it lasts depends on how fast your nails grow, your daily routine and how much your hands are in contact with water." },

      { t: "h2", text: "The Right Way to Remove Gel Polish" },
      { t: "p", html: "Most of the damage attributed to gel polish happens at removal, not application. It should never be lifted, scraped or forced off — that is how layers come away from the nail surface. The correct method is to soften it with the appropriate remover and lift it without stressing the surface." },

      { t: "h2", text: "Hygiene" },
      { t: "p", html: "Single-use items are replaced for every guest, and metal tools that are reused are sterilised between appointments. The work area is cleaned after each one." },

      { t: "h2", text: "Finding Us" },
      { t: "p", html: "Our studio is inside Maslak 1453 in Sarıyer; parking and valet service are available. We are open every day from 08:30 to 21:00." },
    ],
    faqs: [
      { q: "Does gel polish damage the nail?", a: "The removal method is what matters most. Peeling or scraping it off can thin the nail surface; softening it with the right remover reduces that risk." },
      { q: "How long does gel polish last?", a: "It varies with nail growth, how you use your hands and daily contact with water. We discuss the expected range for your nails at the appointment." },
      { q: "Is gel polish the same as nail extensions?", a: "No. Gel polish goes on your own nail; extensions build length and shape with gel or acrylic. Extensions are covered on a separate page." },
      { q: "Can I have a manicure while pregnant?", a: "Let us know before your appointment; the treatment and the product are assessed accordingly. We will also tell you about ventilation and product choice." },
      { q: "I have an ingrown toenail — can I have a pedicure?", a: "We do not treat where there is an ingrown nail, pain or signs of inflammation. That is a medical matter and we recommend seeing a doctor." },
    ],
    afterFaqHtml:
      "You can reach us on WhatsApp to book an appointment, or call the studio during opening hours.",
    note: NOTE_EN,
  },
];
