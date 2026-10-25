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
    // TR ile aynı anahtar: ana sayfadaki "nail" kartının hedefi.
    serviceKey: "nail",
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
      { t: "p", html: "Gel and acrylic extensions are a separate subject and are covered on our <a href=\"/en/protez-tirnak\">nail extensions page</a>." },

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

      { t: "h2", text: "Giving Your Nails a Break" },
      { t: "p", html: "Resting the nail between applications rather than going straight on is a question we hear often. We assess together at your appointment when a break would make sense, based on the current condition of your nails." },

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

  {
    path: "/kuafor",
    serviceKey: "kuafor",
    blogCategory: "Hair Salon",
    navLabel: "Hair Salon",
    title: "Hair Salon in Maslak | Cut, Blow-Dry & Care — Güler Ayaz",
    description:
      "Haircuts, blow-dry, hair care and occasion styling at Maslak 1453, Sarıyer. Beauty, nails and hair in a single visit.",
    h1: "Hair Salon Services in Maslak",
    cover: "service-kuafor.jpg",
    coverAlt: "Treatment area inside the Güler Ayaz Beauty salon",
    blocks: [
      { t: "p", html: "At Güler Ayaz Beauty the beauty centre and the hair salon are under one roof. At our salon in Maslak 1453, Sarıyer, Istanbul you do not need a second address for a haircut, a blow-dry, hair care or occasion styling — skin, nail and hair appointments can be arranged within the same visit." },

      { t: "h2", text: "What We Offer" },
      { t: "h3", text: "Haircuts" },
      { t: "p", html: "The cut is decided together, based on your hair type, your face shape and your daily routine. The aim is a cut that holds its shape and is practical to look after at home." },
      { t: "h3", text: "Blow-Dry, Curls and Waves" },
      { t: "p", html: "From an everyday blow-dry to tongs and wave styling. Heat protection is part of every service." },
      { t: "h3", text: "Hair Care" },
      { t: "p", html: "Moisture, nourishment and repair programmes planned around the condition of your hair. A scalp massage during the wash is part of the treatment." },
      { t: "h3", text: "Updos and Occasion Hair" },
      { t: "p", html: "Updos and styling for weddings, engagements and events. We recommend booking occasion appointments in advance; make-up and nails can be placed on the same day if you wish." },
      { t: "h3", text: "Hair Colouring" },
      { t: "p", html: "Ombre, sombre, balayage, highlights and root touch-ups. The technique and the colour plan are set according to your hair's history — details are on our <a href=\"/en/sac-boyama\">hair colouring page</a>." },
      { t: "h3", text: "Keratin Treatment and Brazilian Blowout" },
      { t: "p", html: "The treatments most often chosen for hair that frizzes and will not settle. The difference between the two and the aftercare are explained on our <a href=\"/en/keratin-brezilya-fonu\">keratin and Brazilian blowout page</a>." },
      { t: "h3", text: "Hair Extensions" },
      { t: "p", html: "Extensions are applied to add length and density. The method is chosen according to your own hair, and the maintenance routine is explained at the consultation — details on our <a href=\"/en/protez-sac\">hair extensions page</a>." },

      { t: "h2", text: "Why One Visit" },
      { t: "ul", items: [
        "Skin care, nails and hair on the same day, at the same address",
        "After-work appointments for those working in the Maslak offices",
        "Parking and valet service available",
        "Appointments arranged on WhatsApp",
      ] },

      { t: "h2", text: "Finding Us" },
      { t: "p", html: "Our salon is inside Maslak 1453 in Sarıyer, and is easy to reach from Ayazağa, Levent, Etiler and Şişli. We are open every day from 08:30 to 21:00." },
    ],
    faqs: [
      { q: "Can I come without an appointment?", a: "We work by appointment because of demand; we can arrange a suitable time together on WhatsApp." },
      { q: "How far ahead should I book for occasion hair?", a: "A few days in advance is advisable, particularly for weekends." },
      { q: "Can I have hair and nails on the same day?", a: "Yes. The duration of both is taken into account when the appointment is arranged." },
      { q: "Can colouring and keratin be done in the same appointment?", a: "The order and the interval depend on the condition of your hair; the two are usually not done on the same day. We plan them together at the consultation." },
    ],
    afterFaqHtml:
      "More on our hair services: <a href=\"/en/sac-boyama\">hair colouring (balayage, ombre, sombre)</a> and <a href=\"/en/keratin-brezilya-fonu\">keratin treatment and Brazilian blowout</a>. You can reach us on WhatsApp to book.",
    note: NOTE_EN,
  },

  {
    path: "/sac-boyama",
    serviceKey: "sac-boyama",
    blogCategory: "Hair Colouring",
    navLabel: "Hair Colouring (Balayage & Ombre)",
    title: "Hair Colour in Maslak | Balayage, Ombre & Highlights",
    description:
      "Balayage, ombre, sombre, highlights and root touch-ups at Maslak 1453, Sarıyer. Colour planned around your base tone and hair history.",
    h1: "Hair Colouring in Maslak: Balayage, Ombre and Sombre",
    cover: "service-kuafor.jpg",
    coverAlt: "Hair colour work in the Güler Ayaz Beauty salon",
    blocks: [
      { t: "p", html: "The hair department at Güler Ayaz Beauty in Maslak 1453, Sarıyer, Istanbul covers balayage, ombre, sombre, highlights and root touch-ups. Every colour appointment is planned after looking at your base tone, any colour already in the hair and its current condition." },

      { t: "h2", text: "The Difference Between the Techniques" },
      { t: "h3", text: "Ombre" },
      { t: "p", html: "A defined graduation from the roots down to the ends. The transition line is clearer, so the ends read noticeably lighter. Because it reduces the need for root work, the maintenance interval is usually longer." },
      { t: "h3", text: "Sombre" },
      { t: "p", html: "A softer version of ombre. The difference in tone is kept small and the transition is blurred, which suits anyone looking for a result close to natural." },
      { t: "h3", text: "Balayage" },
      { t: "p", html: "Colour is painted onto the strands freehand to create light across the surface. Because the strands are placed to follow the movement of the hair, it grows out more naturally." },
      { t: "h3", text: "Highlights and Root Touch-Ups" },
      { t: "p", html: "With highlights the strands are separated with foil or a cap so they lift evenly. A root touch-up matches the regrown root area to the existing colour; the interval depends on how fast your hair grows." },

      { t: "h2", text: "The Assessment Before Colour" },
      { t: "p", html: "Where a technique requires lifting, we first assess whether the hair can take that much lift. Permanent colour, henna or straightening treatments already in the hair affect the result directly, which is why sharing your hair history matters. Where necessary we work towards the target colour across several appointments rather than one." },

      { t: "h2", text: "Aftercare" },
      { t: "ul", items: [
        "A colour-protecting, sulphate-free shampoo is recommended",
        "Wait a few days before the first wash",
        "Use heat protection before blow-drying or using tongs",
        "Rinsing the hair after the pool or the sea extends the life of the colour",
      ] },

      { t: "h2", text: "Finding Us" },
      { t: "p", html: "Our salon is inside Maslak 1453 in Sarıyer; parking and valet service are available. We are open every day from 08:30 to 21:00, and we are easy to reach from Ayazağa, Levent and Şişli." },
    ],
    faqs: [
      { q: "What is the difference between ombre and sombre?", a: "Both are a graduation from root to end; in sombre the difference in tone is smaller and the transition softer, while in ombre it is more defined." },
      { q: "How often does balayage need refreshing?", a: "It depends on how fast your hair grows and the tone chosen. Because balayage does not leave a hard line at the root, the interval is usually longer than for a root touch-up." },
      { q: "How long does an appointment take?", a: "It depends on length, density and the target colour. We agree an estimate when the appointment is booked." },
      { q: "Can keratin treatment be done on coloured hair?", a: "It is planned after an assessment. The order of the two and the gap between them depend on the condition of your hair." },
      { q: "Can I go from black to a light tone in one appointment?", a: "Not always. We assess the base tone and the hair's history; if needed we work towards the target across several appointments." },
    ],
    afterFaqHtml:
      "For aftercare following colour work see <a href=\"/en/keratin-brezilya-fonu\">keratin treatment and Brazilian blowout</a>, and for cutting and styling our <a href=\"/en/kuafor\">hair salon page</a>. You can reach us on WhatsApp to book.",
    note: NOTE_EN,
  },

  {
    path: "/ipek-kirpik",
    serviceKey: "kirpik",
    blogCategory: "Lashes & Brows",
    navLabel: "Lash Extensions & Brows",
    title: "Eyelash Extensions & Lash Lift in Maslak | Güler Ayaz",
    description:
      "Classic and volume eyelash extensions, lash lift and brow lamination at Maslak 1453, Sarıyer. Designed around your eye and face shape.",
    h1: "Eyelash Extensions, Lash Lift and Brow Lamination in Maslak",
    cover: "service-kirpik.jpg",
    coverAlt: "Eyelash extension application at our centre",
    blocks: [
      { t: "p", html: "Güler Ayaz Beauty in Maslak 1453, Sarıyer, Istanbul offers eyelash extensions, lash lift, brow lamination and brow shaping. Every appointment begins by looking at the shape of your eyes and face; density and curl are chosen from there." },

      { t: "h2", text: "Eyelash Extensions" },
      { t: "p", html: "Light synthetic lashes are attached one by one to your own lashes. Your natural lashes are not removed — the extension sits on the lash and sheds with it as part of the natural cycle." },
      { t: "h3", text: "Classic, Volume and Mega Volume" },
      { t: "p", html: "In the classic technique one extension is applied to each natural lash, for a more natural result. In volume and mega volume, light fans made of several fine lashes are placed on each natural lash, giving a fuller look. The choice is made according to the density your own lashes can carry." },

      { t: "h2", text: "Lash Lift" },
      { t: "p", html: "Nothing is added to the lash. Your own lashes are curled from the root so they sit higher and read more defined. It can be planned together with a lash tint if you wish." },

      { t: "h2", text: "Brow Lamination and Brow Shaping" },
      { t: "p", html: "Brow lamination sets the brow hairs in the direction you want for a fuller, tidier look. Brow shaping follows the line of your face and is finished with tinting or henna where wanted." },

      { t: "h2", text: "Hygiene and Products" },
      { t: "ul", items: [
        "Single-use brushes and applicators",
        "Hypoallergenic adhesive",
        "An assessment beforehand where there is irritation, infection or a known allergy around the eye",
        "A briefing before the appointment for contact lens wearers",
      ] },

      { t: "h2", text: "Aftercare" },
      { t: "ul", items: [
        "Keep lashes and brows dry for the first 24 hours",
        "Avoid oil-based eye make-up removers",
        "Do not rub or pull the lashes; comb them gently with the brush provided",
        "For extensions, plan an infill every few weeks to keep the look",
      ] },

      { t: "h2", text: "Finding Us" },
      { t: "p", html: "Our centre is inside Maslak 1453 in Sarıyer; parking and valet service are available. We are easy to reach from Ayazağa, Levent and Şişli, and we are open every day from 08:30 to 21:00." },
    ],
    faqs: [
      { q: "What is the difference between extensions and a lash lift?", a: "Extensions add a synthetic lash to your own, giving both length and density. A lash lift adds nothing — it curls the lashes you already have so they read more defined." },
      { q: "Do extensions damage the natural lash?", a: "Applied with the right technique and at a density your own lashes can carry, damage is not expected. Not pulling the lashes off is the important part." },
      { q: "How long does the appointment take?", a: "A full set of extensions usually takes an hour and a half to two hours. A lash lift and brow lamination are shorter." },
      { q: "Can brow lamination and a lash lift be done on the same day?", a: "Yes, where suitable they can be planned in the same appointment. Suitability is assessed at the consultation." },
    ],
    afterFaqHtml:
      "You can reach us on WhatsApp to book an appointment, or call the centre during opening hours.",
    note: NOTE_EN,
  },

  {
    path: "/protez-tirnak",
    serviceKey: "protez-tirnak",
    blogCategory: "Nail Extensions",
    navLabel: "Nail Extensions & Nail Art",
    title: "Nail Extensions & Nail Art in Maslak | Güler Ayaz Beauty",
    description:
      "Gel and acrylic nail extensions, gel polish, manicure and nail art at Maslak 1453, Sarıyer. Material and shape chosen for your own nails.",
    h1: "Nail Extensions, Manicure and Nail Art in Maslak",
    cover: "service-nail-gercek.jpg",
    coverAlt: "Gel polish application during a manicure at our centre",
    blocks: [
      { t: "p", html: "Güler Ayaz Beauty in Maslak 1453, Sarıyer, Istanbul offers nail extensions, gel polish, manicure, pedicure and nail art. Every appointment begins by looking at the structure of your own nail; material, length and shape are then chosen together." },

      { t: "h2", text: "What We Offer" },
      { t: "h3", text: "Nail Extensions" },
      { t: "p", html: "Shape and length are built over your own nail with gel or acrylic. Gel feels lighter and more flexible; acrylic is harder and can be the better choice for longer designs. Which suits you is assessed against how you use your hands." },
      { t: "h3", text: "Gel Polish and Nail Strengthening" },
      { t: "p", html: "Applied over your natural nail without adding length, gel polish holds colour longer through daily wear. On thin or brittle nails it can be planned together with a strengthening layer." },
      { t: "h3", text: "Manicure and Pedicure" },
      { t: "p", html: "A classic manicure and pedicure covers cuticle care, shaping and hydration. We work with single-use files and sterilised tools — more on our <a href=\"/en/manikur-pedikur\">manicure and pedicure page</a>." },
      { t: "h3", text: "Nail Art" },
      { t: "p", html: "From French, ombre, chrome, stone and foil detail to designs for a particular occasion. The design is decided together so that it fits your daily routine." },

      { t: "h2", text: "Choosing Shape and Length" },
      { t: "p", html: "Round and almond shapes are more comfortable for everyday wear; coffin and stiletto shapes suit anyone after a more striking look. Typing, sport and housework all feed directly into the decision on length." },

      { t: "h2", text: "Hygiene" },
      { t: "ul", items: [
        "Single-use files and buffers",
        "Metal tools sterilised after every guest",
        "Hands and nail surface disinfected before the appointment",
        "Where there is any sign of infection or a fungal problem, the appointment is postponed",
      ] },

      { t: "h2", text: "Maintenance and Infills" },
      { t: "p", html: "As the nail grows a gap appears at the base; an infill at that point both refreshes the look and keeps the extension from lifting. The interval depends on how fast your nails grow. Wearing gloves for work involving a lot of water, and using cuticle oil, extends the life of the application." },

      { t: "h2", text: "Finding Us" },
      { t: "p", html: "Our centre is inside Maslak 1453 in Sarıyer; parking and valet service are available. We are easy to reach from Ayazağa, Levent and Şişli, and we are open every day from 08:30 to 21:00." },
    ],
    faqs: [
      { q: "Do nail extensions damage the natural nail?", a: "Applied correctly, with regular infills and professional removal, damage is not expected. Problems mostly come from forcing them off at home or leaving them unmaintained for a long time." },
      { q: "Should I choose gel or acrylic?", a: "Gel feels more natural and lighter; acrylic is more durable for longer designs. We choose together, based on your nail structure and how you use your hands." },
      { q: "When should I come for an infill?", a: "It depends on how fast your nails grow; usually it is planned at intervals of a few weeks." },
      { q: "Can a manicure and extensions be done in the same appointment?", a: "Yes. The time needed depends on the design chosen, and we agree it when the appointment is booked." },
    ],
    afterFaqHtml:
      "For work on your own nails without added length, see our <a href=\"/en/manikur-pedikur\">manicure, pedicure and gel polish page</a>. You can reach us on WhatsApp to book.",
    note: NOTE_EN,
  },

  {
    path: "/protez-sac",
    serviceKey: "protez-sac",
    blogCategory: "Hair Extensions",
    navLabel: "Hair Extensions",
    title: "Hair Extensions in Maslak, Istanbul | Güler Ayaz Beauty",
    description:
      "Hair extensions at Maslak 1453, Sarıyer. Method, colour match and maintenance planned after assessing your hair density and scalp.",
    h1: "Hair Extensions in Maslak",
    cover: "service-kuafor.jpg",
    coverAlt: "Hair work in the Güler Ayaz Beauty salon",
    blocks: [
      { t: "p", html: "Hair extensions are applied to add length or density to the hair you already have. In the hair department at Güler Ayaz Beauty in Maslak 1453, Sarıyer, Istanbul, every application begins with an assessment of your hair density and your scalp." },

      { t: "h2", text: "Choosing the Method" },
      { t: "p", html: "There is more than one method, and none of them suits every head of hair. The choice is made together at the consultation, based on the thickness of your hair, its current density, the sensitivity of your scalp and your daily care routine. The method to be used, the maintenance interval and the removal process are all discussed clearly before the appointment." },
      { t: "h3", text: "Matching Colour and Texture" },
      { t: "p", html: "The tone and texture of the added hair are matched to your own. Where necessary, colour work before or after the application brings the two together; in that case the order is planned separately — see our <a href=\"/en/sac-boyama\">hair colouring page</a>." },

      { t: "h2", text: "Care and Everyday Wear" },
      { t: "ul", items: [
        "The brushing and washing routine is explained at the end of the appointment",
        "Regular brushing is needed to prevent tangling at the attachment points",
        "As the hair grows the attachment points move down, so a periodic maintenance appointment is planned",
        "We recommend having the extensions removed at the salon",
      ] },

      { t: "h2", text: "When It Isn't Suitable" },
      { t: "p", html: "Where there is an active problem on the scalp — eczema, a fungal condition or an open wound — the application is not carried out. If you have widespread hair loss we recommend a medical assessment first; added weight can make matters harder before the cause of the loss has been established. Very fine and fragile hair needs particular care in choosing the method." },

      { t: "h2", text: "Finding Us" },
      { t: "p", html: "Our salon is inside Maslak 1453 in Sarıyer; parking and valet service are available. We are open every day from 08:30 to 21:00." },
    ],
    faqs: [
      { q: "Will it damage my own hair?", a: "Not expected when the right method is chosen and the maintenance intervals are kept. The risk rises with the wrong method, too much weight or missed maintenance, which is why the assessment and periodic checks are part of the service." },
      { q: "How long does it last?", a: "It depends on the method, how fast your hair grows and the care it gets. We tell you the maintenance interval to expect at the consultation." },
      { q: "Can I wash and blow-dry my hair?", a: "Yes. The washing and styling routine is explained in detail at the end of the appointment, including what to watch for around the attachment points." },
      { q: "I have hair loss — can I still have extensions?", a: "We recommend having the cause assessed by a doctor first. Suitability is discussed together after that assessment." },
      { q: "What happens when I want them removed?", a: "We recommend having removal done at the salon. Forcing them out at home can break the hair shaft." },
    ],
    afterFaqHtml:
      "For colour matching see <a href=\"/en/sac-boyama\">hair colouring</a>, and for treatments <a href=\"/en/keratin-brezilya-fonu\">keratin treatment and Brazilian blowout</a>. You can reach us on WhatsApp to book.",
    note: NOTE_EN,
  },

  {
    path: "/reformer-pilates",
    serviceKey: "pilates",
    blogCategory: "Reformer Pilates",
    navLabel: "Reformer Pilates",
    title: "Reformer Pilates in Maslak | Private Classes — Güler Ayaz",
    description:
      "Private, duet and small-group reformer pilates at Maslak 1453, Sarıyer. Certified instructors and a programme planned around you.",
    h1: "Reformer Pilates in Maslak",
    cover: "service-pilates.jpg",
    coverAlt: "A private reformer pilates class in the studio",
    blocks: [
      { t: "p", html: "At the Güler Ayaz Beauty studio in Maslak 1453, reformer pilates classes run with certified instructors as private sessions, duets (2 people) and small groups (3–4 people). The programme is built on the posture and movement assessment done in your first class." },

      { t: "h2", text: "What Reformer Pilates Is" },
      { t: "p", html: "The reformer is a pilates apparatus that works with spring resistance. The springs can make a movement harder or support it, which means the exercises can be set to different levels. Core strength, posture, flexibility and controlled movement are the focus of the classes." },

      { t: "h2", text: "Class Formats" },
      { t: "h3", text: "Private Classes" },
      { t: "p", html: "The instructor works only with you for the whole class. This suits beginners, anyone with a specific goal, and anyone who wants the programme built entirely around them." },
      { t: "h3", text: "Duets and Small Groups" },
      { t: "p", html: "In duets of two and small groups of three or four, participants are grouped at a similar level and the instructor follows each person's movement." },
      { t: "h3", text: "Pregnancy and Postnatal" },
      { t: "p", html: "Pregnancy and postnatal recovery classes begin with your doctor's approval and a programme appropriate to that stage." },

      { t: "h2", text: "Your First Class" },
      { t: "p", html: "In the first class we look at posture, flexibility and basic movement patterns, and talk through any past injuries and your general health. The programme is planned from that. If you have a known condition, we recommend speaking to your doctor before starting." },

      { t: "h2", text: "What to Bring" },
      { t: "ul", items: [
        "Comfortable, close-fitting sportswear",
        "Grip socks, for hygiene and safety",
        "Avoid a heavy meal before class",
        "A water bottle",
      ] },

      { t: "h2", text: "Finding Us" },
      { t: "p", html: "Our studio is inside Maslak 1453 in Sarıyer; parking and valet service are available. After-work times can be arranged for those working in the Maslak offices." },
    ],
    faqs: [
      { q: "I have never done pilates — can I start?", a: "Yes. The spring resistance on the reformer is set to your level; we recommend starting with private classes." },
      { q: "How many classes a week should I do?", a: "It depends on your goal and the programme; we set a frequency that suits you after the first assessment." },
      { q: "What is the difference between reformer and mat pilates?", a: "Mat pilates works with your own body weight; on the reformer, spring resistance can either support or challenge the movement, which allows finer adjustment to your level." },
      { q: "Can I do pilates while pregnant?", a: "You can start with your doctor's approval and a programme appropriate to that stage. We do not plan classes without that approval." },
    ],
    afterFaqHtml:
      "You can reach us on WhatsApp to arrange your first class, or call the studio during opening hours.",
    note: NOTE_EN,
  },

  {
    path: "/erkek-lazer-epilasyon",
    serviceKey: "lazer-erkek",
    blogCategory: "Men's Laser Hair Removal",
    navLabel: "Men's Laser Hair Removal",
    title: "Men's Laser Hair Removal in Maslak | Diode — Güler Ayaz",
    description:
      "Diode laser hair removal for men at Maslak 1453, Sarıyer. Back, chest, neckline, beard line and full-body plans built around you.",
    h1: "Men's Laser Hair Removal in Maslak",
    cover: "service-lazer.jpg",
    coverAlt: "Diode laser hair removal session for a male guest at our centre",
    blocks: [
      { t: "p", html: "Güler Ayaz Beauty in Maslak 1453, Sarıyer, Istanbul treats male guests with cooled diode laser hair removal. As with every guest, the process begins with an analysis of skin tone and hair structure — but because men's hair is generally thicker and denser, the session parameters and intervals are planned differently." },

      { t: "h2", text: "Areas We Treat" },
      { t: "p", html: "The most frequently requested areas are the back, shoulders, chest, abdomen, neckline and beard line. Arms, legs, underarms and full-body combinations are also treated. Which areas to include is decided together at the free assessment." },
      { t: "h3", text: "Beard Line and Neckline" },
      { t: "p", html: "Rather than removing the beard entirely, most guests choose boundary work: the stray hairs on the neck and along the cheekbone are thinned out and the shape of the beard is kept. The neckline is tidied on the same principle. We agree the look you are aiming for before the first session, because the result moves in a lasting direction." },

      { t: "h2", text: "Why the Plan Differs for Men" },
      { t: "p", html: "Thick, dark hair absorbs more laser energy, which means the parameters have to be set carefully. On large areas such as the back and chest the regrowth cycle can also run differently from the rest of the body. Session intervals are therefore set per area and reviewed as the course progresses." },
      { t: "ul", items: [
        "The area needs to be shaved before the session; waxing and plucking are not used",
        "Intense sun and tanning beds are not advised in the days before and after a session",
        "Sauna, hammam and hot showers are postponed briefly after the session",
        "Temporary redness is normal and settles quickly",
      ] },

      { t: "h2", text: "When It Isn't Suitable" },
      { t: "p", html: "Sessions may be postponed or declined with an active skin infection, after recent intense sun exposure, while taking medication that increases light sensitivity, and with certain chronic conditions. This is why sharing your medical history at the consultation matters." },

      { t: "h2", text: "Finding Us" },
      { t: "p", html: "Our centre is inside Maslak 1453 in Sarıyer; parking and valet service are available. After-work times suit those working in the Maslak offices — we are open every day, weekdays and weekends, from 08:30 to 21:00. We are easy to reach by metro and main roads from Sarıyer, Ayazağa, Levent and Şişli." },
    ],
    faqs: [
      { q: "Is there a separate room for male guests?", a: "Treatments are carried out one-to-one in a closed room. You can tell us your preference when booking." },
      { q: "How many sessions for the back and chest?", a: "It depends on hair density, hormonal factors and the area. We build a plan specific to you after the assessment; we do not quote a number without one." },
      { q: "Do I have to have the whole beard removed?", a: "No. Most guests only have the boundary on the neck and cheekbone tidied; the shape of the beard is kept." },
      { q: "Should I shave before the session?", a: "Yes, the area needs to have been shaved shortly before the day of the session. Waxing and plucking remove the follicle, so they are not used beforehand." },
      { q: "Does it hurt?", a: "It varies from person to person. Thanks to the cooled handpiece, most guests describe the session as warmth and tingling." },
    ],
    afterFaqHtml:
      "The area list and session structure for female guests are on our <a href=\"/en/lazer-epilasyon\">laser hair removal page</a>. You can reach us on WhatsApp to arrange your free assessment.",
    note: NOTE_EN,
  },

  {
    path: "/karbon-peeling",
    serviceKey: "karbon-peeling",
    blogCategory: "Carbon Peel",
    navLabel: "Carbon Peel",
    title: "Carbon Peel in Maslak | Q-Switch Laser — Güler Ayaz Beauty",
    description:
      "Q-Switch carbon peel at Maslak 1453, Sarıyer. Sessions planned from a skin analysis, aimed at pores, oiliness and surface texture.",
    h1: "Q-Switch Carbon Peel in Maslak",
    cover: "service-cilt-gercek.jpg",
    coverAlt: "Preparation for a skin treatment at our centre",
    blocks: [
      { t: "p", html: "A carbon peel is a treatment in which a thin carbon solution is applied to the skin and then worked with Q-Switch laser pulses. It is carried out at Güler Ayaz Beauty in Maslak 1453, Sarıyer, Istanbul, and every session begins with a skin analysis." },

      { t: "h2", text: "How It Is Done" },
      { t: "p", html: "The skin is cleansed and the carbon solution is applied, then left for a short time. During that time the solution binds to the surface of the pores and to dead skin cells. That layer is then removed with Q-Switch laser pulses. The energy level of the device is adjusted to your skin type throughout." },
      { t: "h3", text: "When It Is Chosen" },
      { t: "p", html: "Most often for the appearance of pores, oiliness, dullness and uneven surface texture. Suitability and the number of sessions to expect are decided individually after the analysis; we do not quote a session count without one." },

      { t: "h2", text: "After the Session" },
      { t: "ul", items: [
        "Brief mild pinkness is normal",
        "Intense sun and tanning beds are not advised in the days following",
        "Sunscreen is part of the process",
        "Exfoliating home-care products are postponed for a while",
      ] },

      { t: "h2", text: "When It Isn't Suitable" },
      { t: "p", html: "Treatment may be postponed or declined with an active skin infection, an open wound, recent intense sun exposure, medication that increases light sensitivity, and certain chronic conditions. This is why sharing your medical history at the consultation matters." },

      { t: "h2", text: "Finding Us" },
      { t: "p", html: "Our centre is inside Maslak 1453 in Sarıyer; parking and valet service are available. We are open every day from 08:30 to 21:00, which suits after-work appointments." },
    ],
    faqs: [
      { q: "What is the difference between a carbon peel and a Hydrafacial?", a: "A Hydrafacial is a water- and vacuum-based cleansing and nourishing treatment; a carbon peel works with laser pulses. Which one suits you is decided at the skin analysis, and in some cases the two are alternated." },
      { q: "How many sessions will I need?", a: "It depends on your skin type and what you want to achieve. We build a plan specific to you after the analysis; we do not quote a number without one." },
      { q: "Can I go back to work afterwards?", a: "Most guests return to their day the same day. There may be brief mild pinkness." },
      { q: "Can it be done in summer?", a: "It can be considered if there has been no recent intense sun exposure. Using sunscreen after the session matters." },
    ],
    afterFaqHtml:
      "For the full range of skin care programmes and Hydrafacial see our <a href=\"/en/cilt-bakimi\">skin care page</a>, and for tattoo removal with the same Q-Switch device our <a href=\"/en/dovme-silme\">tattoo removal page</a>.",
    note: NOTE_EN,
  },

  {
    path: "/dovme-silme",
    serviceKey: "dovme",
    blogCategory: "Tattoo Removal",
    navLabel: "Tattoo Removal",
    title: "Laser Tattoo Removal in Maslak | Q-Switch — Güler Ayaz",
    description:
      "Q-Switch laser tattoo and permanent make-up removal at Maslak 1453, Sarıyer. A free assessment builds a plan for your tattoo.",
    h1: "Q-Switch Laser Tattoo Removal in Maslak and Sarıyer",
    cover: "service-dovme-silme.jpg",
    coverAlt: "Tattoo removal with the Q-Switch laser handpiece",
    blocks: [
      { t: "p", html: "A tattoo you once chose happily may stop fitting your style, your profession or the stage of life you are in. At our centre, tattoo and permanent make-up removal is carried out with Q-Switch laser technology." },

      { t: "h2", text: "How the Q-Switch Laser Works" },
      { t: "p", html: "The Q-Switch laser produces very short, high-energy pulses. These target the tattoo pigment beneath the skin and break it into very small particles; the body's immune and lymphatic systems then clear the fragmented pigment naturally over time. A tattoo is not erased in one go — each session breaks down part of the pigment and the body completes the rest over the following weeks." },

      { t: "h2", text: "Which Tattoos It Works On" },
      { t: "p", html: "Black and dark-toned tattoos generally show clearer progress. Colours such as light green and yellow can take longer. The same technology is also used to remove permanent make-up that has changed colour or whose shape no longer suits." },

      { t: "h2", text: "What Determines the Number of Sessions" },
      { t: "ul", items: [
        "<strong>The age of the tattoo:</strong> in older tattoos the pigment has partly faded, so the process usually moves faster",
        "<strong>Colour and pigment density:</strong> professional, deep and densely pigmented tattoos can need more sessions",
        "<strong>The area:</strong> pigment can clear faster where circulation is stronger",
        "<strong>Skin type and healing rate:</strong> this varies from person to person",
      ] },
      { t: "p", html: "For this reason the process always begins with an individual assessment; your tattoo and your skin are examined together and the session plan is built from that." },

      { t: "h2", text: "The Session and Aftercare" },
      { t: "p", html: "The area is cleansed beforehand, and measures to improve comfort are taken where appropriate. During the laser pulses the sensation is usually described as similar to the snap of an elastic band. Intervals of around six to eight weeks are generally left between sessions so the skin can recover and the pigment can clear." },
      { t: "p", html: "Mild redness and tenderness in the area are possible after a session. During healing it is important to protect the area from the sun, to use the recommended aftercare cream, and not to pick at any scabbing." },

      { t: "h2", text: "Finding Us" },
      { t: "p", html: "Our centre is inside Maslak 1453 in Sarıyer; parking and valet service are available. We are open every day from 08:30 to 21:00." },
    ],
    faqs: [
      { q: "Will the tattoo come off completely?", a: "The process depends on the colour, depth and age of the tattoo. We talk through realistic expectations at the assessment, with your tattoo in front of us." },
      { q: "Will it leave a mark?", a: "That depends on the depth of the tattoo, your skin and the aftercare. With appropriate session intervals and correct care, the aim is for the skin to keep its healthy appearance." },
      { q: "Can permanent make-up be removed too?", a: "Yes. Brow, eyeliner and lip work can also be removed with the Q-Switch laser; the plan is assessed separately according to the type of pigment." },
      { q: "How long between sessions?", a: "Usually six to eight weeks." },
    ],
    afterFaqHtml:
      "The same Q-Switch device is used for our <a href=\"/en/karbon-peeling\">carbon peel</a>. You can reach us on WhatsApp to arrange a free assessment.",
    note: NOTE_EN,
  },

  {
    path: "/vucut-sekillendirme",
    serviceKey: "vucut",
    blogCategory: "Body Contouring",
    navLabel: "Body Contouring",
    title: "Body Contouring in Maslak | Slim-X, EMS Pro & G5",
    description:
      "Body contouring programmes with Slim-X, EMS Pro and G5 at Maslak 1453, Sarıyer. Every programme begins with a free body analysis.",
    h1: "Body Contouring in Maslak",
    cover: "service-vucut.jpg",
    coverAlt: "Body contouring treatment with the G5 massage handpiece",
    blocks: [
      { t: "p", html: "Localised slimming, firming and the appearance of cellulite are three different needs, and a different technology comes to the fore for each. At our centre these three are planned together, after a body analysis." },
      { t: "p", html: "<strong>To be clear from the start:</strong> these are not a weight-loss method. The aim is to support the appearance and quality of the tissue in specific areas, alongside regular eating and movement habits. Results differ according to body structure and how closely the programme is followed." },

      { t: "h2", text: "Three Technologies, Three Different Jobs" },
      { t: "h3", text: "Slim-X — Localised Slimming" },
      { t: "p", html: "A body contouring technology directed at the fat tissue in the target area. Handpieces are placed on areas such as the abdomen, waist and hips; you rest lying down through the session. This is the &ldquo;volume&rdquo; side of the programme." },
      { t: "h3", text: "EMS Pro — Firming" },
      { t: "p", html: "Electrical muscle stimulation creates a contract-and-release cycle in the muscle group of the target area. This is the &ldquo;tone&rdquo; side of the programme; it does not replace regular exercise, it complements it." },
      { t: "h3", text: "G5 — Cellulite Massage" },
      { t: "p", html: "A mechanical vibration massage device. Rhythmic movement directed at the deeper tissue aims to support circulation and lymph flow and to soften the appearance of cellulite." },

      { t: "h2", text: "How a Programme Is Built" },
      { t: "p", html: "Every programme begins with a body analysis: priority areas, tissue structure, muscle tone and your general routine are assessed together. Sessions are usually once or twice a week. At a mid-programme review the balance between the devices can be changed." },
      { t: "p", html: "Example combinations:" },
      { t: "ul", items: [
        "Volume concern around the abdomen and waist → Slim-X led, EMS Pro supporting",
        "Appearance of cellulite on hips and legs → G5 led, Slim-X supporting where needed",
        "Postnatal or post-weight-loss laxity → EMS Pro first, G5 supporting",
      ] },

      { t: "h2", text: "Alongside Reformer Pilates" },
      { t: "p", html: "For anyone who wants to bring a movement habit into the process, the <a href=\"/en/reformer-pilates\">reformer pilates</a> sessions at our centre can be added to the programme. Planning device-based treatments together with regular movement helps the process hold over time." },

      { t: "h2", text: "What to Be Aware Of" },
      { t: "p", html: "Treatments may be postponed during pregnancy, with a pacemaker, with an active infection and with certain chronic conditions. You need to share your medical history at the consultation. Drinking plenty of water and staying active during the day are recommended after a session." },

      { t: "h2", text: "Finding Us" },
      { t: "p", html: "Our centre is inside Maslak 1453 in Sarıyer; parking and valet service are available. We are open every day from 08:30 to 21:00." },
    ],
    faqs: [
      { q: "Will it make me lose weight?", a: "No. These treatments are not a weight-loss method; they should be considered alongside your general routine." },
      { q: "How many sessions will I need?", a: "It depends on body structure, the target area and how closely the programme is followed; it is set after the body analysis." },
      { q: "Can all three be done on the same day?", a: "Depending on the analysis, some combinations can be planned consecutively within the same session." },
      { q: "Is the session painful?", a: "No. During EMS the sensation is muscle contraction, and during G5 a firm massage." },
      { q: "Do you offer classic massage?", a: "No. We do not offer classic or relaxation massage at our centre. G5 is a mechanical device treatment that forms part of the body contouring programme." },
    ],
    afterFaqHtml:
      "You can reach us on WhatsApp to arrange your free body analysis, or call the centre during opening hours.",
    note: NOTE_EN,
  },

  {
    path: "/kalici-makyaj",
    serviceKey: "kalicimakyaj",
    blogCategory: "Permanent Make-up",
    navLabel: "Permanent Make-up",
    title: "Permanent Make-up in Maslak | Brows, Eyeliner & Lips",
    description:
      "Permanent make-up at Maslak 1453, Sarıyer: microblading and powder brows, permanent eyeliner, lip blush. Nothing starts without your approval.",
    h1: "Permanent Make-up in Maslak",
    cover: "service-kalici-makyaj.jpg",
    coverAlt: "Natural brow and lip result after permanent make-up",
    blocks: [
      { t: "p", html: "Permanent make-up is a semi-permanent treatment in which specialised pigments are placed in the upper layer of the skin. It differs from a tattoo in that the pigment stays more superficial and fades over time, which means it can be renewed as your features change." },

      { t: "h2", text: "What We Offer" },
      { t: "h3", text: "Brows — Microblading and Powder" },
      { t: "p", html: "With microblading, fine strokes are worked in to read as individual hairs, aiming at natural fullness on sparse or asymmetric brows. The powder technique gives a shaded, made-up look and is generally preferred on oily skin and by anyone who fills their brows daily." },
      { t: "h3", text: "Permanent Eyeliner" },
      { t: "p", html: "Options range from a fine fill at the lash line to a defined line with a tail. The shape is drawn together at the consultation, according to your eyes and your everyday make-up habits." },
      { t: "h3", text: "Lip Blush" },
      { t: "p", html: "The aim is to define the lip contour and bring out the natural tone. Colour is chosen with your lip tone and skin undertone in mind." },

      { t: "h2", text: "The Process" },
      { t: "h3", text: "Drawing and Approval" },
      { t: "p", html: "Every treatment begins with a drawing made to your features. The brow shape, eyeliner thickness or lip contour is drawn in pencil first; <strong>we do not move to pigment until you approve it.</strong>" },
      { t: "h3", text: "The Treatment" },
      { t: "p", html: "The area is cleansed and measures to improve comfort are taken. Single-use sterile needle tips are used in every session. Including the design stage, a session usually takes one to two hours." },
      { t: "h3", text: "Healing and Touch-Up" },
      { t: "p", html: "In the first days the colour looks darker than intended; this is expected. There may be light flaking, and the colour softens gradually. At a touch-up session four to six weeks later the shape takes its final form." },

      { t: "h2", text: "How Long It Lasts, and Care" },
      { t: "p", html: "How long the pigment stays varies from person to person with skin type, lifestyle and sun exposure; for most treatments a refresh comes up somewhere between one and three years." },
      { t: "p", html: "For the first week do not wet or rub the area, do not pick at any flaking, postpone sauna, pool, sea and anything that makes you sweat, and keep the area out of the sun." },

      { t: "h2", text: "When It Isn't Suitable" },
      { t: "p", html: "Treatment may be postponed or declined during pregnancy and breastfeeding, with active skin conditions, a tendency to keloid scarring, certain chronic conditions and while taking blood thinners." },

      { t: "h2", text: "Finding Us" },
      { t: "p", html: "Our centre is inside Maslak 1453 in Sarıyer; parking and valet service are available. We are open every day from 08:30 to 21:00." },
    ],
    faqs: [
      { q: "Does it hurt?", a: "Most guests describe it as a light itching or scratching sensation; measures to improve comfort are taken." },
      { q: "How long does it last?", a: "Generally a refresh comes up somewhere between one and three years; the time varies from person to person." },
      { q: "Can I go back to work the same day?", a: "Yes. In the first days the colour is darker and the area can be slightly tender." },
      { q: "I am not happy with my existing permanent make-up — what can be done?", a: "Correction with a touch-up, or removal with the Q-Switch laser, is assessed at the consultation." },
    ],
    afterFaqHtml:
      "If you are not happy with existing permanent make-up, <a href=\"/en/dovme-silme\">removal with the Q-Switch laser</a> is assessed at the consultation. You can reach us on WhatsApp to book.",
    note: NOTE_EN,
  },

  {
    path: "/led-isik-terapisi",
    serviceKey: "led",
    blogCategory: "LED Light Therapy",
    navLabel: "LED Light Therapy",
    title: "LED Light Therapy in Maslak | Güler Ayaz Beauty",
    description:
      "LED light in skin care at Maslak 1453, Sarıyer: what the colours are used for, how a session runs and what to be aware of.",
    h1: "LED Light in Skin Care",
    cover: "service-cilt-gercek.jpg",
    coverAlt: "Treatment in the Güler Ayaz Beauty skin care room",
    blocks: [
      { t: "p", html: "LED light is used in the skin care department at Güler Ayaz Beauty in Maslak 1453, Sarıyer, Istanbul, as one step within a care programme. It is not a treatment on its own; it is a step that supports the plan." },

      { t: "h2", text: "What LED Light Is" },
      { t: "p", html: "It works by directing light of particular wavelengths at the surface of the skin. It has no heating or cutting effect, and the skin is not broken during the application. For that reason it is usually planned as the closing step of a programme, after the cleansing and care stages." },
      { t: "p", html: "It is not used to diagnose or treat health conditions. If you have a complaint about your skin that needs a diagnosis, we recommend seeing a doctor first." },

      { t: "h2", text: "What the Colours Are Used For" },
      { t: "p", html: "Different wavelengths are chosen for different purposes. Which colour or combination suits you is decided at the skin analysis:" },
      { t: "ul", items: [
        "<strong>Red</strong> — the colour most often chosen in general skin care programmes",
        "<strong>Blue</strong> — as a care step on skin that tends towards oiliness",
        "<strong>Green</strong> — in programmes directed at the appearance of tone",
        "<strong>Yellow</strong> — as the gentler option on skin that tends towards sensitivity",
      ] },

      { t: "h2", text: "How a Session Runs" },
      { t: "p", html: "The session begins with a skin analysis. After the skin is cleansed, eye protection is put on and the device head is positioned at the right distance from the face. You rest lying down through the session. Depending on the programme, moisturising and sunscreen follow." },
      { t: "p", html: "How many sessions are planned and at what interval they are repeated is decided from the skin analysis; we do not quote a session count without one." },

      { t: "h2", text: "Alongside Other Treatments" },
      { t: "p", html: "The LED step is usually part of a care programme rather than something on its own. How Hydrafacial and medical skin care programmes are planned is explained on our <a href=\"/en/cilt-bakimi\">skin care page</a>." },

      { t: "h2", text: "When to Take Care" },
      { t: "p", html: "Treatment may be postponed or declined while taking medication that increases light sensitivity, with a history of epilepsy, with an active skin infection, after recent intense sun exposure and with certain chronic conditions. During pregnancy and breastfeeding you need to tell us beforehand. This is why sharing your medical history at the consultation matters." },

      { t: "h2", text: "What to Expect" },
      { t: "p", html: "LED is a care step, assessed as part of a programme directed at the appearance of the skin. Daily care habits, sun protection and sleep all affect the result directly. We talk through realistic expectations together at the consultation." },

      { t: "h2", text: "Finding Us" },
      { t: "p", html: "Our centre is inside Maslak 1453 in Sarıyer; parking and valet service are available. We are open every day from 08:30 to 21:00." },
    ],
    faqs: [
      { q: "Is LED light a treatment?", a: "No. It is a supporting step within a skin care programme. For anything requiring diagnosis or medical treatment you need to see a doctor." },
      { q: "What does it feel like?", a: "It has no heating or cutting effect. Most guests describe the session as comfortable and restful." },
      { q: "Which colour suits me?", a: "It is decided at the skin analysis. A single colour, or several depending on the programme, may be chosen." },
      { q: "How many sessions will I need?", a: "It depends on your skin and the programme. We do not quote a session count without an analysis." },
      { q: "Can it be done in the same session as another treatment?", a: "It is usually planned within a care programme, after the cleansing steps. Which combination suits you becomes clear after the analysis." },
    ],
    afterFaqHtml:
      "For the full range of care programmes see our <a href=\"/en/cilt-bakimi\">skin care page</a>, and for the devices used at our centre our <a href=\"/en/cihazlar\">devices page</a>.",
    note: NOTE_EN,
  },

  {
    path: "/cihazlar",
    serviceKey: "cihazlar",
    hub: true,
    blogCategory: "Devices",
    navLabel: "Devices",
    title: "The Devices at Our Centre | Maslak Güler Ayaz Beauty",
    description:
      "The devices used at Güler Ayaz Beauty: Slim-X, EMS Pro, G5, cooled diode laser, Hydrafacial and Q-Switch — and what each one is for.",
    h1: "The Devices We Use at Our Centre",
    cover: "service-vucut.jpg",
    coverAlt: "Device handpiece used in a body contouring treatment",
    blocks: [
      { t: "p", html: "Two things decide the outcome of a treatment: what the device does, and who it is applied to and how. On this page we have gathered the devices used at our centre in Maslak 1453, what need each one addresses, and which service it sits under." },
      { t: "p", html: "Which device suits you is not decided without an assessment. What follows is not here for you to decide with — it is here so you know what will be discussed." },

      { t: "h2", text: "Three Devices for Body Treatments" },
      { t: "p", html: "Localised slimming, firming and the appearance of cellulite are different needs, and a different device comes to the fore for each. The three are most often planned together within a single programme." },
      { t: "h3", text: "Slim-X — Localised Slimming" },
      { t: "p", html: "A body contouring device that works on the fat tissue in the target area. Handpieces are placed on areas such as the abdomen, waist and hips; you rest lying down through the session. This is the &ldquo;volume&rdquo; side of the programme." },
      { t: "h3", text: "EMS Pro — Firming" },
      { t: "p", html: "Electrical muscle stimulation creates a contract-and-release cycle in the muscle group of the target area. This is the &ldquo;tone&rdquo; side of the programme; it does not replace regular exercise, it complements it. The intensity is set to your comfort." },
      { t: "h3", text: "G5 — Cellulite Massage" },
      { t: "p", html: "A device working with a mechanical vibrating head. Rhythmic movement directed at the deeper tissue aims to support circulation and soften the appearance of cellulite. We do not offer classic or relaxation massage at our centre; G5 is a device treatment." },
      { t: "p", html: "How the three are planned together is explained on our <a href=\"/en/vucut-sekillendirme\">body contouring page</a>." },

      { t: "h2", text: "Cooled Diode Laser" },
      { t: "p", html: "The laser technology used in hair removal. Light energy targets the dark pigment in the hair follicle; the energy converts to heat and affects the hair's growth cycle. The handpiece cools the skin at the moment of application, which makes the session more comfortable and allows work across a wider range of skin tones." },
      { t: "p", html: "For areas and session structure see <a href=\"/en/lazer-epilasyon\">laser hair removal</a>, and for male guests <a href=\"/en/erkek-lazer-epilasyon\">men's laser hair removal</a>." },

      { t: "h2", text: "Hydrafacial" },
      { t: "p", html: "A skin care device that combines deep cleansing, exfoliation, vacuum extraction and hydration in one session. The treatment begins with a skin analysis; the serums used and the intensity are set according to skin type. It is programmed differently for combination, oily, dry and sensitive skin." },
      { t: "p", html: "For the full range of care programmes see our <a href=\"/en/cilt-bakimi\">skin care page</a>." },

      { t: "h2", text: "Q-Switch Laser — One Device, Four Treatments" },
      { t: "p", html: "Q-Switch is a laser technology producing very short, high-energy pulses. These target the pigment beneath the skin and break it into very small particles, which the body's lymphatic system clears over time. Because the same principle serves different needs, one device covers four separate treatments:" },
      { t: "ul", items: [
        "<strong>Carbon peel</strong> — removing a carbon solution applied to the skin with laser pulses; worked on the appearance of pores and the skin surface",
        "<strong>Skin renewal</strong> — sessions directed at unevenness of tone at the surface",
        "<strong>Hair lightening</strong> — a treatment aimed at lightening the appearance of fine dark hair",
        "<strong>Tattoo and permanent make-up removal</strong> — breaking down the pigment gradually",
      ] },
      { t: "p", html: "There is more on <a href=\"/en/karbon-peeling\">Q-Switch carbon peel</a> and on <a href=\"/en/dovme-silme\">tattoo removal</a>." },

      { t: "h2", text: "LED Light" },
      { t: "p", html: "Light of particular wavelengths directed at the surface of the skin, with no heating or cutting effect. It is planned as a step within a care programme rather than on its own — see our <a href=\"/en/led-isik-terapisi\">LED light therapy page</a>." },

      { t: "h2", text: "How the Device Is Chosen" },
      { t: "p", html: "Every course begins with an assessment. A skin or body analysis, your past treatments, any medication you take and what you are hoping for are discussed together; the device and session structure are decided after that. Some goals are not reached in one session, in which case the plan is spread across several appointments and we say so at the start." },

      { t: "h2", text: "Safety and Suitability" },
      { t: "p", html: "Device treatments may be postponed or declined during pregnancy and breastfeeding, with a pacemaker, with an active skin infection, after recent intense sun exposure, while taking medication that increases light sensitivity, and with certain chronic conditions. This is why sharing your medical history at the consultation matters." },

      { t: "h2", text: "Finding Us" },
      { t: "p", html: "Our centre is inside Maslak 1453 in Sarıyer; parking and valet service are available. We are open every day from 08:30 to 21:00." },
    ],
    faqs: [
      { q: "How do I find out which device suits me?", a: "At the assessment we carry out a skin or body analysis and discuss your past treatments and what you are hoping for; the device is then chosen together." },
      { q: "Can more than one device be used in the same session?", a: "Depending on the analysis, some combinations can be planned consecutively in the same session. Which ones can be combined becomes clear after the assessment." },
      { q: "Is Q-Switch used for both carbon peel and tattoo removal?", a: "Yes. The working principle of the device is the same; the parameters are set according to the treatment and the area." },
      { q: "Are device treatments painful?", a: "Most guests describe them as mild warmth, tingling or muscle contraction. The intensity is set to your comfort." },
      { q: "How many sessions will I need?", a: "It depends on the device, the area and the person. We do not quote a session count without an analysis." },
    ],
    afterFaqHtml:
      "You can reach us on WhatsApp to arrange an assessment, or call the centre during opening hours.",
    note: NOTE_EN,
  },
];
