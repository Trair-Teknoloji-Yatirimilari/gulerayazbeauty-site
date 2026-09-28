/**
 * Hizmet sayfalarının içeriği.
 *
 * Metinler estetik/sağlık tanıtım mevzuatına göre yazıldı ve kaynak dosyadan
 * BİREBİR alındı — düzenlemeyin, kısaltmayın. Fiyat, ₺ ve indirim oranı geçmez.
 */

export type Block =
  | { t: "p"; html: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] };

export interface ServicePage {
  /** Route yolu — sitemap ve iç bağlantılar bunu kullanır */
  path:
    | "/lazer-epilasyon" | "/cilt-bakimi" | "/vucut-sekillendirme" | "/dovme-silme" | "/kalici-makyaj"
    | "/protez-tirnak" | "/ipek-kirpik" | "/reformer-pilates" | "/kuafor";
  /** Ana sayfadaki hizmet kartı anahtarı (SERVICE_IMAGES ile aynı) */
  serviceKey: string;
  /** Blog kategorisi eşlemesi (blog detayındaki "İlgili hizmet" kutusu) */
  blogCategory: string;
  /** Footer ve menülerde kullanılan kısa ad */
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  /** src/assets altındaki kapak dosyası adı */
  cover: string;
  coverAlt: string;
  blocks: Block[];
  faqs: { q: string; a: string }[];
  /** SSS'den sonra gelen, bağlantı içerebilen kapanış paragrafı */
  afterFaqHtml?: string;
  /** Sayfa sonundaki italik bilgilendirme notu */
  note: string;
}

const NOTE =
  "Bu sayfadaki bilgiler tanıtım ve bilgilendirme amaçlıdır; kişisel bir değerlendirme yerine geçmez. Uygulama sonuçları kişiye göre farklılık gösterebilir.";

export const SERVICE_PAGES: ServicePage[] = [
  {
    path: "/lazer-epilasyon",
    serviceKey: "lazer",
    blogCategory: "Lazer Epilasyon",
    navLabel: "Lazer Epilasyon",
    title: "Maslak & Sarıyer Lazer Epilasyon | Diode Lazer — Güler Ayaz",
    description:
      "Maslak 1453'te soğutmalı diode lazer epilasyon. Cilt tonuna göre kişiselleştirilen seans planı için ücretsiz ön değerlendirme.",
    h1: "Maslak ve Sarıyer'de Lazer Epilasyon",
    cover: "service-lazer.jpg",
    coverAlt: "Merkezimizde diode lazer ile epilasyon uygulaması",
    blocks: [
      { t: "p", html: "Güler Ayaz Beauty, Maslak 1453'te (Sarıyer / İstanbul) soğutmalı diode lazer teknolojisiyle epilasyon hizmeti vermektedir. Her süreç, cilt tonu ve kıl yapısı analiziyle başlar; seans parametreleri kişiye göre ayarlanır." },
      { t: "h2", text: "Diode Lazer Nasıl Çalışır?" },
      { t: "p", html: "Lazer epilasyon, ışık enerjisinin kıl kökündeki koyu pigmenti (melanini) hedeflemesi prensibiyle çalışır. Enerji kıl köküne ulaştığında ısıya dönüşür ve kılın yeniden büyüme döngüsünü etkiler. Kıllar aynı anda aynı büyüme evresinde bulunmadığı için seanslar belirli aralıklarla tekrarlanır." },
      { t: "p", html: "Merkezimizde kullandığımız soğutmalı diode lazer başlığı, uygulama sırasında cildi eş zamanlı soğutur. Bu, seans konforunu artırır ve farklı cilt tonlarında çalışılabilmesine olanak tanır." },
      { t: "h3", text: "Uygulama Yapılan Bölgeler" },
      { t: "p", html: "Yüz bölgesi (üst dudak, çene, favori), koltuk altı, kollar, bacaklar, sırt, göğüs, bikini bölgesi ve tüm vücut kombinasyonları. Bölge kombinasyonları ön değerlendirmede birlikte belirlenir." },
      { t: "h2", text: "Seans Süreci" },
      { t: "h3", text: "Ön Değerlendirme" },
      { t: "p", html: "İlk adım her zaman yüz yüze bir görüşmedir. Cilt tonu, kıl yapısı, sağlık geçmişi ve varsa kullandığınız ilaçlar değerlendirilir. Bu görüşme ücretsizdir ve seansa başlama zorunluluğu doğurmaz." },
      { t: "h3", text: "Seans Günü" },
      { t: "p", html: "Uygulama bölgesi temizlenir, jilet ile kısaltma yapılmış olması beklenir — ağda ve cımbız kullanılmamalıdır, çünkü kıl kökünün yerinde olması gerekir. Seans süresi bölgeye göre birkaç dakika ile yarım saat arasında değişir." },
      { t: "h3", text: "Seans Aralıkları" },
      { t: "p", html: "Bölgeye ve kıl döngüsüne göre genellikle 4–8 hafta aralıklarla planlanır. Toplam seans sayısı kişiden kişiye değişir; hormonal durum, kıl yoğunluğu ve bölge bu sayıyı etkiler. Bu nedenle analiz yapılmadan seans sayısı söylenmez." },
      { t: "h2", text: "Seans Öncesi ve Sonrası" },
      { t: "ul", items: [
        "Seans öncesi 2–4 hafta yoğun güneşten ve solaryumdan kaçının",
        "Uygulama günü bölgeye krem, losyon veya deodorant sürmeden gelin",
        "Seans sonrası ilk günlerde deniz, havuz, sauna ve doğrudan güneşten uzak durun",
        "Bölgeyi güneşten koruyun, önerilen yatıştırıcı bakımı uygulayın",
        "Geçici kızarıklık olağandır ve kısa sürede yatışır",
      ] },
      { t: "h2", text: "Kimler İçin Uygun Değildir?" },
      { t: "p", html: "Hamilelik, aktif cilt enfeksiyonu, yakın zamanda yoğun güneşlenme, ışığa duyarlılık yaratan ilaç kullanımı ve bazı kronik durumlarda uygulama ertelenebilir veya yapılmayabilir. Sağlık geçmişinizi ön görüşmede paylaşmanız bu nedenle önemlidir." },
      { t: "h2", text: "Sarıyer ve Maslak'tan Ulaşım" },
      { t: "p", html: "Merkezimiz Maslak 1453 içinde yer alır; otopark mevcuttur. Sarıyer, Ayazağa, Levent, Etiler, Nişantaşı ve Şişli çevresinden metro ve ana arterlerle kolay ulaşılır." },
    ],
    faqs: [
      { q: "Lazer epilasyon acı verir mi?", a: "Kişiden kişiye değişir. Soğutmalı başlık sayesinde çoğu misafir uygulamayı hafif bir sıcaklık ve karıncalanma olarak tanımlar." },
      { q: "Kaç seans gerekir?", a: "Kıl yapısı, hormonal durum ve bölgeye göre değişir. Analiz sonrası size özel bir plan oluşturulur; analiz olmadan sayı söylemiyoruz." },
      { q: "Yazın seans yapılabilir mi?", a: "Cilt tonu dengeliyse evet. Yakın zamanda yoğun bronzlaşma varsa seans ertelenir. Ayrıntı için yazın lazer epilasyon ve güneş rehberimize göz atabilirsiniz." },
      { q: "Erkek misafir kabul ediliyor mu?", a: "Evet." },
    ],
    note: NOTE,
  },
  {
    path: "/cilt-bakimi",
    serviceKey: "cilt",
    blogCategory: "Cilt Bakımı",
    navLabel: "Cilt Bakımı",
    title: "Maslak Cilt Bakımı & Hydrafacial | Güler Ayaz Beauty",
    description:
      "Maslak 1453'te Hydrafacial, karbon peeling ve kişiye özel cilt bakımı. Ücretsiz cilt analizi ile başlayan planlama.",
    h1: "Maslak'ta Cilt Bakımı ve Hydrafacial",
    cover: "service-cilt-gercek.jpg",
    coverAlt: "Merkezimizde buhar destekli cilt bakımı seansı",
    blocks: [
      { t: "p", html: "Güler Ayaz Beauty'de her cilt bakımı süreci, Maslak 1453'teki merkezimizde yapılan bir cilt analiziyle başlar. Uygulanacak bakım türü, yoğunluğu ve seans aralığı bu analiz sonrasında belirlenir." },
      { t: "h2", text: "Uygulamalarımız" },
      { t: "h3", text: "Hydrafacial" },
      { t: "p", html: "Su bazlı teknolojiyle çalışan, aşamalı bir bakım uygulamasıdır: yüzeysel arındırma, gözenek temizliği, nemlendirme ve besleme adımlarını içerir. Cildi zorlamayan yapısı nedeniyle sosyal hayata aynı gün dönmek isteyenler tarafından sık tercih edilir." },
      { t: "h3", text: "Q-Switch Karbon Peeling" },
      { t: "p", html: "Cilde uygulanan karbon solüsyonunun lazer atımlarıyla birlikte çalıştığı bir uygulamadır. Gözenek görünümü, ciltteki matlık ve yüzey pürüzlülüğü gibi konularda destek amaçlanır." },
      { t: "h3", text: "Klasik ve Kişiye Özel Bakımlar" },
      { t: "p", html: "Cilt tipine göre planlanan derin temizlik, nemlendirme ve besleme odaklı bakım programları. Karma, yağlı, kuru ve hassas ciltler için içerik ve yoğunluk farklılaştırılır." },
      { t: "h2", text: "Cilt Analizi Neden Önce Gelir?" },
      { t: "p", html: "Aynı şikâyet farklı ciltlerde farklı nedenlerden kaynaklanabilir. Gözenek belirginliği yağ dengesinden de, ölü deri birikiminden de kaynaklanabilir; ikisinde uygulanacak bakım aynı değildir. Bu nedenle merkezimizde &ldquo;herkese aynı bakım&rdquo; yaklaşımı yoktur — program analiz sonrası kurulur." },
      { t: "h2", text: "Mevsime Göre Planlama" },
      { t: "p", html: "Cilt ihtiyacı yıl boyunca sabit kalmaz. Yaz sonrasında güneş, deniz ve klimanın ardından onarım ve nemlendirme öne çıkar; kış aylarında kuruluk ve bariyer desteği gündeme gelir. Bakım takviminin mevsime göre gözden geçirilmesi, sürecin düzenli ilerlemesine yardımcı olur." },
      { t: "h2", text: "Bakım Sonrası" },
      { t: "ul", items: [
        "İlk 24 saat yoğun makyaj ürünlerinden kaçının",
        "Güneş koruyucu kullanımını aksatmayın",
        "Uygulama sonrası birkaç gün peeling içeren ev bakım ürünlerini erteleyin",
        "Bol su tüketimi ve düzenli uyku, cilt bakımının ev ayağıdır",
      ] },
    ],
    faqs: [
      { q: "Cilt bakımından sonra işe dönebilir miyim?", a: "Uygulamaya göre değişir. Hydrafacial sonrası genellikle aynı gün sosyal hayata dönülür; ciltte kısa süreli hafif pembelik olabilir." },
      { q: "Ne sıklıkla yaptırılmalı?", a: "Cilt tipine ve hedefe göre değişir. Analiz sonrası size özel bir aralık önerilir." },
      { q: "Hassas cildim var, uygun mu?", a: "Hassas ciltler için içerik ve yoğunluk farklılaştırılır. Uygunluk, analiz sırasında değerlendirilir." },
      { q: "Karbon peeling ile Hydrafacial birlikte planlanabilir mi?", a: "Analiz sonucuna göre farklı seanslarda dönüşümlü planlanabilir. Sıralama ve aralık kişiye göre belirlenir." },
    ],
    note: NOTE,
  },
  {
    path: "/vucut-sekillendirme",
    serviceKey: "vucut",
    blogCategory: "Vücut Şekillendirme",
    navLabel: "Vücut Şekillendirme",
    title: "Bölgesel İncelme ve Sıkılaşma Maslak | Güler Ayaz",
    description:
      "Maslak 1453'te Slim-X, EMS Pro ve G5 ile kişiye özel vücut şekillendirme programları. Ücretsiz vücut analizi.",
    h1: "Maslak'ta Vücut Şekillendirme",
    cover: "service-vucut.jpg",
    coverAlt: "G5 selülit masajı başlığı ile vücut şekillendirme uygulaması",
    blocks: [
      { t: "p", html: "Bölgesel incelme, sıkılaşma ve selülit görünümü farklı ihtiyaçlardır; her biri için farklı teknoloji öne çıkar. Merkezimizde bu üç teknoloji, vücut analizi sonrasında birlikte planlanır." },
      { t: "p", html: "<strong>Baştan belirtelim:</strong> bu uygulamalar kilo verme yöntemi değildir. Amaç, düzenli beslenme ve hareket alışkanlıklarının yanında belirli bölgelerde görünüm ve doku kalitesine destek olmaktır. Sonuçlar kişinin vücut yapısına ve programa uyumuna göre farklılık gösterir." },
      { t: "h2", text: "Üç Teknoloji, Üç Farklı Görev" },
      { t: "h3", text: "Slim-X — Bölgesel İncelme" },
      { t: "p", html: "Hedeflenen bölgedeki yağ dokusuna yönelik uygulanan vücut şekillendirme teknolojisidir. Karın, bel, basen gibi bölgelere başlıklar yerleştirilir; seans boyunca uzanarak dinlenirsiniz. Programın &ldquo;hacim&rdquo; ayağıdır." },
      { t: "h3", text: "EMS Pro — Sıkılaşma" },
      { t: "p", html: "Elektriksel kas uyarımıyla hedef bölgedeki kas grubunda kasılma-gevşeme döngüsü oluşturulur. Programın &ldquo;tonus&rdquo; ayağıdır; düzenli sporun yerini almaz, onu tamamlar." },
      { t: "h3", text: "G5 — Selülit Masajı" },
      { t: "p", html: "Mekanik titreşimli masaj cihazıdır. Derin dokuya yönelik ritmik hareketlerle dolaşımın ve lenf akışının desteklenmesi, selülit görünümünün yumuşatılması hedeflenir." },
      { t: "h2", text: "Program Nasıl Kurulur?" },
      { t: "p", html: "Her program vücut analiziyle başlar: öncelikli bölgeler, doku yapısı, kas tonusu ve genel yaşam düzeniniz birlikte değerlendirilir. Seans sıklığı genellikle haftada bir ila iki seanstır. Program ortasında yapılan ara değerlendirmede cihaz ağırlığı değiştirilebilir." },
      { t: "p", html: "Örnek kombinasyonlar:" },
      { t: "ul", items: [
        "Karın ve bel bölgesinde hacim şikâyeti → Slim-X ağırlıklı, EMS Pro destekli",
        "Basen ve bacakta selülit görünümü → G5 ağırlıklı, gerekirse Slim-X destekli",
        "Doğum sonrası veya kilo sonrası gevşeklik → EMS Pro öncelikli, G5 destekli",
      ] },
      { t: "h2", text: "Reformer Pilates ile Birlikte" },
      { t: "p", html: "Hareket alışkanlığını sürece dahil etmek isteyenler için merkezimizdeki reformer Pilates seansları programa eklenebilir. Cihaz destekli uygulamalar ile düzenli hareketin birlikte planlanması, sürecin sürdürülebilirliğine katkı sağlar." },
      { t: "h2", text: "Dikkat Edilmesi Gerekenler" },
      { t: "p", html: "Hamilelik, kalp pili kullanımı, aktif enfeksiyon ve bazı kronik hastalıklarda uygulamalar ertelenebilir. Sağlık geçmişinizi ön görüşmede paylaşmanız gerekir. Seans sonrasında bol su tüketimi ve gün içinde hareketli kalmak önerilir." },
    ],
    faqs: [
      { q: "Kilo verdirir mi?", a: "Hayır. Bu uygulamalar kilo verme yöntemi değildir; genel yaşam düzeniyle birlikte ele alınmalıdır." },
      { q: "Kaç seans gerekir?", a: "Vücut yapısına, hedef bölgeye ve programa uyuma göre değişir; vücut analizi sonrası belirlenir." },
      { q: "Üçü aynı gün yapılabilir mi?", a: "Analiz sonucuna göre bazı kombinasyonlar aynı seansta ardışık planlanabilir." },
      { q: "Seans ağrılı mıdır?", a: "Hayır. EMS sırasında kas kasılması, G5 sırasında kuvvetli masaj hissi tarif edilir." },
    ],
    afterFaqHtml:
      'Ayrıntılı karşılaştırma için <a href="/blog/bolgesel-incelme-slim-x-ems-pro-g5">Slim-X, EMS Pro ve G5 rehberimize</a> göz atabilirsiniz.',
    note: NOTE,
  },
  {
    path: "/dovme-silme",
    serviceKey: "dovme",
    blogCategory: "Dövme Silme",
    navLabel: "Dövme Silme",
    title: "Maslak & Sarıyer Dövme Silme | Q-Switch Lazer — Güler Ayaz",
    description:
      "Maslak 1453'te Q-Switch lazerle dövme ve kalıcı makyaj silme. Dövmeye özel seans planı için ücretsiz ön değerlendirme.",
    h1: "Maslak ve Sarıyer'de Q-Switch Lazer ile Dövme Silme",
    cover: "service-dovme-silme.jpg",
    coverAlt: "Q-Switch lazer başlığı ile dövme silme uygulaması",
    blocks: [
      { t: "p", html: "Bir zamanlar severek yaptırdığınız bir dövme; zamanla tarzınıza, mesleğinize veya hayat döneminize uymayabilir. Merkezimizde Q-Switch lazer teknolojisiyle dövme ve kalıcı makyaj silme uygulaması yapılmaktadır." },
      { t: "h2", text: "Q-Switch Lazer Nasıl Çalışır?" },
      { t: "p", html: "Q-Switch lazer, çok kısa süreli ve yüksek enerjili atımlar üretir. Bu atımlar cilt altındaki dövme pigmentini hedef alarak çok küçük parçacıklara ayırır; parçalanan pigment vücudun bağışıklık ve lenf sistemi tarafından zaman içinde doğal yollarla uzaklaştırılır. Dövme bir anda silinmez — her seans pigmentin bir bölümünü parçalar, kalan işi vücut haftalar içinde tamamlar." },
      { t: "h2", text: "Hangi Dövmelerde Uygulanır?" },
      { t: "p", html: "Siyah ve koyu tonlu dövmelerde genellikle daha belirgin ilerleme sağlanır. Açık yeşil ve sarı gibi renklerde süreç daha uzun olabilir. Aynı teknoloji, rengi değişmiş veya formundan memnun kalınmayan kalıcı makyaj uygulamalarının silinmesinde de kullanılır." },
      { t: "h2", text: "Seans Sayısını Ne Belirler?" },
      { t: "ul", items: [
        "<strong>Dövmenin yaşı:</strong> eski dövmelerde pigment kısmen solmuş olduğundan süreç genellikle daha hızlı ilerler",
        "<strong>Renk ve pigment yoğunluğu:</strong> profesyonel, derin ve yoğun pigmentli dövmeler daha fazla seans gerektirebilir",
        "<strong>Bölge:</strong> kan dolaşımı güçlü bölgelerde pigment daha hızlı uzaklaştırılabilir",
        "<strong>Cilt tipi ve iyileşme hızı:</strong> kişiden kişiye farklılık gösterir",
      ] },
      { t: "p", html: "Bu nedenle süreç her zaman kişiye özel bir ön değerlendirmeyle başlar; dövmenizin durumu ve cilt yapınız birlikte incelenerek seans planı oluşturulur." },
      { t: "h2", text: "Seans ve Bakım" },
      { t: "p", html: "Uygulama öncesi bölge temizlenir; gerekli görülürse konforu artırıcı önlemler alınır. Lazer atımları sırasında lastik çarpması benzeri bir his tarif edilir. Seanslar arasında cildin toparlanması ve pigmentin atılması için genellikle 6–8 haftalık aralıklar bırakılır." },
      { t: "p", html: "Seans sonrasında bölgede hafif kızarıklık ve hassasiyet görülebilir. İyileşme döneminde bölgenin güneşten korunması, önerilen bakım kreminin kullanılması ve kabuklanma olursa koparılmaması önemlidir." },
    ],
    faqs: [
      { q: "Dövme tamamen çıkar mı?", a: "Süreç dövmenin rengine, derinliğine ve yaşına göre değişir. Beklenti, ön değerlendirmede dövmeniz incelenerek gerçekçi biçimde konuşulur." },
      { q: "İz kalır mı?", a: "Dövmenin derinliğine, cilt yapısına ve bakım sürecine bağlıdır. Uygun seans aralıkları ve doğru bakımla cildin sağlıklı görünümünü koruması hedeflenir." },
      { q: "Kalıcı makyaj da silinebilir mi?", a: "Evet. Kaş, eyeliner ve dudak uygulamaları da Q-Switch lazerle silinebilir; pigment türüne göre plan ayrıca değerlendirilir." },
      { q: "Seanslar arasında ne kadar beklenir?", a: "Genellikle 6–8 hafta." },
    ],
    afterFaqHtml:
      'Ayrıntılı anlatım için <a href="/blog/q-switch-lazer-ile-dovme-silme">Q-Switch lazerle dövme silme rehberimize</a> göz atabilirsiniz.',
    note: NOTE,
  },
  {
    path: "/kalici-makyaj",
    serviceKey: "kalicimakyaj",
    blogCategory: "Kalıcı Makyaj",
    navLabel: "Kalıcı Makyaj",
    title: "Maslak Kalıcı Makyaj | Kaş, Eyeliner, Dudak — Güler Ayaz",
    description:
      "Maslak 1453'te kalıcı makyaj: kıl tekniği ve pudra kaş, kalıcı eyeliner, dudak renklendirme. Ön çizim onayıyla başlayan süreç.",
    h1: "Maslak'ta Kalıcı Makyaj",
    cover: "service-kalici-makyaj.jpg",
    coverAlt: "Kalıcı makyaj uygulaması sonrası doğal kaş ve dudak görünümü",
    blocks: [
      { t: "p", html: "Kalıcı makyaj, cildin üst tabakasına özel pigmentlerin yerleştirilmesiyle yapılan yarı kalıcı bir uygulamadır. Dövmeden farkı, pigmentin daha yüzeysel kalması ve zamanla açılmasıdır; bu sayede yüz hatlarındaki değişime göre yenilenebilir." },
      { t: "h2", text: "Uygulama Alanları" },
      { t: "h3", text: "Kaş — Kıl Tekniği ve Pudra" },
      { t: "p", html: "Kıl tekniğinde (microblading) tek tek kıl görünümü verecek ince çizgiler işlenir; seyrek veya asimetrik kaşlarda doğal dolgunluk hedeflenir. Pudra tekniğinde gölgeli, makyajlı bir görünüm elde edilir; yağlı ciltlerde ve kaşını her gün dolduranlarda genellikle tercih edilir." },
      { t: "h3", text: "Kalıcı Eyeliner" },
      { t: "p", html: "Kirpik dibine yapılan ince dolgudan belirgin kuyruklu çizgiye kadar farklı seçenekler bulunur. Form, göz yapınıza ve günlük makyaj alışkanlığınıza göre ön görüşmede birlikte çizilir." },
      { t: "h3", text: "Dudak Renklendirme" },
      { t: "p", html: "Dudak konturunun belirginleştirilmesi ve doğal renk tonunun canlandırılması amaçlanır. Renk seçimi, dudak tonunuz ve cilt alt tonunuz dikkate alınarak yapılır." },
      { t: "h2", text: "Süreç" },
      { t: "h3", text: "Ön Çizim ve Onay" },
      { t: "p", html: "Her uygulama yüz hatlarınıza göre yapılan bir ön çizimle başlar. Kaş formu, eyeliner kalınlığı veya dudak konturu önce kalemle çizilir; <strong>siz onaylamadan pigmente geçilmez.</strong>" },
      { t: "h3", text: "Uygulama" },
      { t: "p", html: "Bölge temizlenir, konforu artırıcı önlemler alınır. Her seansta tek kullanımlık steril iğne uçları kullanılır. Tasarım aşaması dahil seans genellikle bir ila iki saat sürer." },
      { t: "h3", text: "İyileşme ve Rötuş" },
      { t: "p", html: "İlk günlerde renk hedeflenenden daha koyu görünür; bu beklenen bir durumdur. Hafif kabuklanma olabilir, renk kademeli olarak yumuşar. Dört ila altı hafta sonra yapılan rötuş seansında form son hâlini alır." },
      { t: "h2", text: "Kalıcılık ve Bakım" },
      { t: "p", html: "Pigmentin kalış süresi cilt tipine, yaşam tarzına ve güneşe maruz kalma düzeyine göre kişiden kişiye değişir; çoğu uygulamada bir ila üç yıl aralığında tazeleme gündeme gelir." },
      { t: "p", html: "İlk hafta bölgeyi ıslatmayın ve ovalamayın, kabuk oluşursa koparmayın, sauna-havuz-deniz ve terletici aktiviteleri erteleyin, bölgeyi güneşten koruyun." },
      { t: "h2", text: "Kimler İçin Uygun Değildir?" },
      { t: "p", html: "Hamilelik ve emzirme dönemi, aktif cilt hastalıkları, keloid eğilimi, bazı kronik hastalıklar ve kan sulandırıcı kullanımı gibi durumlarda uygulama ertelenebilir veya yapılmayabilir." },
    ],
    faqs: [
      { q: "Acı verir mi?", a: "Çoğu misafir uygulamayı hafif bir kaşıntı ya da çizilme hissi olarak tanımlar; konforu artırıcı önlemler alınır." },
      { q: "Ne kadar kalır?", a: "Genel olarak bir ila üç yıl aralığında tazeleme gündeme gelir; süre kişiye göre değişir." },
      { q: "Aynı gün işe dönebilir miyim?", a: "Evet. İlk günlerde renk daha koyu ve bölge hafif hassas olabilir." },
      { q: "Mevcut kalıcı makyajımdan memnun değilim, ne yapılabilir?", a: "Rötuşla düzeltme veya Q-Switch lazerle silme seçenekleri ön görüşmede değerlendirilir." },
    ],
    afterFaqHtml:
      'Mevcut kalıcı makyajınızdan memnun değilseniz <a href="/dovme-silme">Q-Switch lazerle silme</a> seçeneği ön görüşmede değerlendirilir. Ayrıntılı anlatım için <a href="/blog/kalici-makyaj-kas-eyeliner-dudak">kalıcı makyaj rehberimize</a> göz atabilirsiniz.',
    note: NOTE,
  },
  {
    path: "/protez-tirnak",
    serviceKey: "nail",
    blogCategory: "Tırnak Bakımı",
    navLabel: "Protez Tırnak & Nail Art",
    title: "Maslak Protez Tırnak & Nail Art | Güler Ayaz Beauty",
    description:
      "Maslak 1453'te protez tırnak, kalıcı oje, manikür-pedikür ve nail art. Tırnak yapınıza göre malzeme ve kalıp seçimi, steril ekipman.",
    h1: "Maslak'ta Protez Tırnak, Manikür ve Nail Art",
    cover: "service-nail-gercek.jpg",
    coverAlt: "Merkezimizde kalıcı oje uygulaması yapılan manikür seansı",
    blocks: [
      { t: "p", html: "Güler Ayaz Beauty, Maslak 1453'te (Sarıyer / İstanbul) protez tırnak, kalıcı oje, manikür-pedikür ve nail art uygulamaları sunar. Her uygulama, doğal tırnağın yapısına bakılarak başlar; malzeme, uzunluk ve kalıp bu değerlendirmeye göre birlikte seçilir." },
      { t: "h2", text: "Uygulamalarımız" },
      { t: "h3", text: "Protez Tırnak" },
      { t: "p", html: "Doğal tırnak üzerine jel veya akrilik malzemeyle şekil ve uzunluk kazandırılır. Jel daha esnek ve hafif bir his verir; akrilik daha sert bir yapıya sahiptir ve uzun tasarımlarda tercih edilebilir. Hangisinin uygun olduğu kullanım alışkanlığına göre değerlendirilir." },
      { t: "h3", text: "Kalıcı Oje ve Tırnak Güçlendirme" },
      { t: "p", html: "Uzunluk eklemeden doğal tırnağın üzerine uygulanan kalıcı oje, günlük kullanımda daha dayanıklı bir renk sunar. İnce ve kırılgan tırnaklarda güçlendirme katmanı ile birlikte planlanabilir." },
      { t: "h3", text: "Manikür ve Pedikür" },
      { t: "p", html: "Klasik manikür ve pedikür; kütikül bakımı, şekillendirme ve nemlendirme adımlarını içerir. Tek kullanımlık törpü ve sterilize edilen aletlerle çalışılır." },
      { t: "h3", text: "Nail Art" },
      { t: "p", html: "Fransız, ombré, krom, taş ve folyo detaylarından özel gün temalı tasarımlara kadar farklı seçenekler uygulanır. Tasarım, günlük rutininize uyacak şekilde birlikte belirlenir." },
      { t: "h2", text: "Kalıp ve Uzunluk Seçimi" },
      { t: "p", html: "Yuvarlak ve badem formlar günlük kullanımda daha rahattır; kare-badem (coffin) ve sivri formlar daha belirgin bir görünüm arayanlar tarafından tercih edilir. Klavye kullanımı, spor ve ev işleri gibi alışkanlıklar uzunluk kararını doğrudan etkiler." },
      { t: "h2", text: "Hijyen" },
      { t: "ul", items: [
        "Tek kullanımlık törpü ve buffer",
        "Her misafir sonrası sterilize edilen metal aletler",
        "Uygulama öncesi el ve tırnak yüzeyi dezenfeksiyonu",
        "Tırnakta enfeksiyon veya mantar şüphesi varsa uygulama ertelenir",
      ] },
      { t: "h2", text: "Bakım ve Dolgu" },
      { t: "p", html: "Tırnak uzadıkça dipte boşluk oluşur; bu noktada dolgu yapılması hem görünümü tazeler hem de kalkmayı önler. Dolgu aralığı tırnağın büyüme hızına göre değişir. Suyla yoğun temasta eldiven kullanmak ve kütikül yağıyla nemlendirmek uygulamanın ömrünü uzatır." },
      { t: "h2", text: "Sarıyer ve Maslak'tan Ulaşım" },
      { t: "p", html: "Merkezimiz Maslak 1453 içinde yer alır; otopark mevcuttur. Sarıyer, Ayazağa, Levent ve Şişli çevresinden kolay ulaşılır. Randevu WhatsApp üzerinden planlanır." },
    ],
    faqs: [
      { q: "Protez tırnak doğal tırnağa zarar verir mi?", a: "Doğru uygulama, düzenli dolgu ve profesyonel sökümle zarar vermesi beklenmez. Sorunlar çoğunlukla evde zorla çıkarmaktan veya uzun süre bakımsız bırakmaktan kaynaklanır." },
      { q: "Jel mi akrilik mi seçmeliyim?", a: "Jel daha doğal his ve hafiflik sunar; akrilik uzun tasarımlarda daha dayanıklıdır. Tercih, tırnak yapınız ve kullanım alışkanlığınıza göre birlikte yapılır." },
      { q: "Dolguya ne zaman gelmeliyim?", a: "Tırnağın büyüme hızına bağlıdır; genellikle birkaç haftalık aralıklarla planlanır." },
      { q: "Manikür ve protez tırnak aynı randevuda yapılabilir mi?", a: "Evet. Süre, seçilen tasarıma göre değişir; randevu planlanırken bu süre birlikte belirlenir." },
    ],
    afterFaqHtml:
      'Jel, akrilik ve nail art seçeneklerinin ayrıntılı karşılaştırması için <a href="/blog/protez-tirnak-nedir-jel-akrilik-nail-art">protez tırnak rehberimize</a> göz atabilirsiniz.',
    note: NOTE,
  },
  {
    path: "/ipek-kirpik",
    serviceKey: "kirpik",
    blogCategory: "Kirpik & Kaş",
    navLabel: "İpek Kirpik & Kaş",
    title: "Maslak İpek Kirpik, Lifting & Kaş Laminasyonu | Güler Ayaz",
    description:
      "Maslak 1453'te ipek kirpik, volume kirpik, kirpik lifting ve kaş laminasyonu. Göz ve yüz formuna göre tasarım, hipoalerjenik yapıştırıcı.",
    h1: "Maslak'ta İpek Kirpik, Kirpik Lifting ve Kaş Laminasyonu",
    cover: "service-kirpik.jpg",
    coverAlt: "Merkezimizde ipek kirpik uygulaması",
    blocks: [
      { t: "p", html: "Güler Ayaz Beauty, Maslak 1453'te (Sarıyer / İstanbul) ipek kirpik, kirpik lifting, kaş laminasyonu ve kaş tasarımı uygulamaları sunar. Her uygulama göz ve yüz formunun değerlendirilmesiyle başlar; yoğunluk ve kıvrım bu değerlendirmeye göre seçilir." },
      { t: "h2", text: "İpek Kirpik" },
      { t: "p", html: "Doğal kirpiklerin her birine tek tek hafif sentetik kirpikler eklenir. Doğal kirpik dökülmez, eklenen kirpik onun üzerinde durur ve doğal döngüyle birlikte zamanla dökülür." },
      { t: "h3", text: "Klasik, Volume ve Mega Volume" },
      { t: "p", html: "Klasik teknikte her doğal kirpiğe bir kirpik eklenir ve daha doğal bir görünüm hedeflenir. Volume ve mega volume tekniklerinde her doğal kirpiğe birden fazla ince kirpikten oluşan hafif demetler yerleştirilir; görünüm daha yoğundur. Seçim, doğal kirpiğin taşıyabileceği yoğunluğa göre yapılır." },
      { t: "h2", text: "Kirpik Lifting" },
      { t: "p", html: "Kirpiğe ekleme yapılmaz; mevcut doğal kirpikler kökten kıvrılarak daha dik ve belirgin görünmesi sağlanır. İsteğe göre kirpik boyama ile birlikte planlanabilir." },
      { t: "h2", text: "Kaş Laminasyonu ve Kaş Tasarımı" },
      { t: "p", html: "Kaş laminasyonunda kaş kılları istenen yöne sabitlenerek daha dolgun ve düzenli bir görünüm elde edilir. Kaş tasarımı ise yüz hattına göre şekillendirme, gerekirse boyama veya kına ile tamamlanır." },
      { t: "h2", text: "Hijyen ve Ürünler" },
      { t: "ul", items: [
        "Tek kullanımlık fırça ve aplikatörler",
        "Hipoalerjenik yapıştırıcı",
        "Göz çevresinde tahriş, enfeksiyon veya bilinen alerji varsa uygulama öncesi değerlendirme",
        "Kontakt lens kullananlar için uygulama öncesi bilgilendirme",
      ] },
      { t: "h2", text: "Uygulama Sonrası Bakım" },
      { t: "ul", items: [
        "İlk 24 saat kirpik ve kaşı ıslatmayın",
        "Yağ bazlı göz makyajı temizleyicilerinden kaçının",
        "Kirpikleri ovmayın, koparmayın; özel fırçayla nazikçe tarayın",
        "İpek kirpikte görünümü korumak için birkaç haftada bir bakım planlayın",
      ] },
      { t: "h2", text: "Sarıyer ve Maslak'tan Ulaşım" },
      { t: "p", html: "Merkezimiz Maslak 1453 içinde yer alır; otopark mevcuttur. Sarıyer, Ayazağa, Levent ve Şişli çevresinden kolay ulaşılır. Randevu WhatsApp üzerinden planlanır." },
    ],
    faqs: [
      { q: "İpek kirpik ile kirpik lifting arasındaki fark nedir?", a: "İpek kirpikte doğal kirpiğe sentetik kirpik eklenir ve hem uzunluk hem yoğunluk kazanılır. Lifting'de ekleme yapılmaz, mevcut kirpikler kıvrılarak daha belirgin hale gelir." },
      { q: "İpek kirpik doğal kirpiğe zarar verir mi?", a: "Doğal kirpiğin taşıyabileceği yoğunlukta ve doğru teknikle uygulandığında zarar vermesi beklenmez. Kirpikleri zorla koparmamak önemlidir." },
      { q: "Uygulama ne kadar sürer?", a: "İpek kirpik tam set genellikle bir buçuk ila iki saat sürer. Lifting ve kaş laminasyonu daha kısadır." },
      { q: "Kaş laminasyonu ile kirpik lifting aynı gün yapılabilir mi?", a: "Evet, uygun durumlarda aynı randevuda planlanabilir. Uygunluk ön görüşmede değerlendirilir." },
    ],
    afterFaqHtml:
      'Ayrıntılı anlatım için <a href="/blog/ipek-kirpik-uygulamasi-nedir">ipek kirpik rehberimize</a> ve <a href="/blog/kas-laminasyonu-ve-kirpik-lifting">kaş laminasyonu ve kirpik lifting yazımıza</a> göz atabilirsiniz.',
    note: NOTE,
  },
  {
    path: "/reformer-pilates",
    serviceKey: "pilates",
    blogCategory: "Pilates",
    navLabel: "Reformer Pilates",
    title: "Maslak Reformer Pilates | Birebir Ders — Güler Ayaz Beauty",
    description:
      "Maslak 1453'te birebir, duet ve küçük grup reformer pilates dersleri. Sertifikalı eğitmen, kişiye göre planlanan program.",
    h1: "Maslak'ta Reformer Pilates",
    cover: "service-pilates.jpg",
    coverAlt: "Reformer pilates stüdyosunda birebir ders",
    blocks: [
      { t: "p", html: "Güler Ayaz Beauty'nin Maslak 1453'teki stüdyosunda reformer pilates dersleri sertifikalı eğitmenler eşliğinde birebir, duet (2 kişi) ve küçük grup (3–4 kişi) olarak planlanır. Program, ilk derste yapılan duruş ve hareket değerlendirmesine göre kurulur." },
      { t: "h2", text: "Reformer Pilates Nedir?" },
      { t: "p", html: "Reformer, yaylı direnç sistemiyle çalışan bir pilates aletidir. Yay direnci hareketi hem zorlaştırabilir hem de destekleyebilir; bu sayede egzersizler farklı seviyelere göre ayarlanabilir. Merkez bölge (core) kasları, duruş, esneklik ve kontrollü hareket derslerin odağındadır." },
      { t: "h2", text: "Ders Formatları" },
      { t: "h3", text: "Birebir Ders" },
      { t: "p", html: "Eğitmen tüm ders boyunca yalnızca sizinle çalışır. Başlangıç seviyesi, belirli bir hedefi olanlar veya programını tamamen kişiye göre isteyenler için uygundur." },
      { t: "h3", text: "Duet ve Küçük Grup" },
      { t: "p", html: "İki kişilik duet ve 3–4 kişilik küçük grup derslerinde katılımcılar benzer seviyede gruplanır; eğitmen her katılımcının hareketini takip eder." },
      { t: "h3", text: "Hamilelik Dönemi ve Doğum Sonrası" },
      { t: "p", html: "Hamilelik dönemi ve doğum sonrası toparlanma derslerine, hekim onayıyla ve döneme uygun bir programla başlanır." },
      { t: "h2", text: "İlk Ders Nasıl Geçer?" },
      { t: "p", html: "İlk derste duruş, esneklik ve temel hareket kalıpları değerlendirilir; varsa geçmiş sakatlıklar ve sağlık durumu konuşulur. Program bu bilgilere göre planlanır. Bilinen bir rahatsızlığınız varsa derslere başlamadan önce hekiminize danışmanız önerilir." },
      { t: "h2", text: "Derse Gelirken" },
      { t: "ul", items: [
        "Rahat, vücudu saran spor kıyafeti",
        "Kaymaz çorap (hijyen ve güvenlik için)",
        "Ders öncesi ağır yemekten kaçınma",
        "Su şişesi",
      ] },
      { t: "h2", text: "Sarıyer ve Maslak'tan Ulaşım" },
      { t: "p", html: "Stüdyomuz Maslak 1453 içinde yer alır; otopark mevcuttur. Maslak plazalarında çalışanlar için iş çıkışı saatleri de planlanabilir. Randevu WhatsApp üzerinden alınır." },
    ],
    faqs: [
      { q: "Daha önce hiç pilates yapmadım, başlayabilir miyim?", a: "Evet. Reformer'daki yay direnci seviyeye göre ayarlanır; başlangıç için birebir ders önerilir." },
      { q: "Haftada kaç ders yapmalıyım?", a: "Hedefe ve programa göre değişir; ilk değerlendirmeden sonra size uygun sıklık birlikte belirlenir." },
      { q: "Reformer pilates ile mat pilates arasındaki fark nedir?", a: "Mat pilatesde vücut ağırlığıyla çalışılır; reformer'da yay direnci hareketi hem destekleyebilir hem zorlaştırabilir, bu da seviyeye göre daha hassas ayar imkânı verir." },
      { q: "Hamileyken pilates yapabilir miyim?", a: "Hekim onayıyla ve döneme uygun bir programla başlanabilir. Onay olmadan ders planlanmaz." },
    ],
    afterFaqHtml:
      'Ayrıntılı anlatım için <a href="/blog/reformer-pilates-nedir-maslak">reformer pilates rehberimize</a> göz atabilirsiniz.',
    note: NOTE,
  },
  {
    path: "/kuafor",
    serviceKey: "kuafor",
    blogCategory: "Kuaför",
    navLabel: "Kuaför",
    title: "Maslak Kuaför | Saç Kesim, Fön & Bakım — Güler Ayaz Beauty",
    description:
      "Maslak 1453'te saç kesimi, fön, saç bakımı ve özel gün saçı. Güzellik bakımı, tırnak ve saç randevusu tek ziyarette.",
    h1: "Maslak'ta Kuaför Hizmetleri",
    cover: "service-kuafor.jpg",
    coverAlt: "Güler Ayaz Beauty salon içi bakım alanı",
    blocks: [
      { t: "p", html: "Güler Ayaz Beauty'de güzellik merkezi ve kuaför aynı çatı altındadır. Maslak 1453'teki (Sarıyer / İstanbul) salonumuzda saç kesimi, fön, bakım ve özel gün saçı için ayrı bir adrese gitmenize gerek kalmaz; cilt, tırnak ve saç randevuları aynı ziyarette planlanabilir." },
      { t: "h2", text: "Hizmetlerimiz" },
      { t: "h3", text: "Saç Kesimi" },
      { t: "p", html: "Kesim planı saç tipine, yüz hattına ve günlük rutininize göre birlikte belirlenir. Kolay şekil alan, gündelik bakımı pratik bir kesim hedeflenir." },
      { t: "h3", text: "Fön, Maşa ve Dalga" },
      { t: "p", html: "Gündelik fönden maşa ve dalga şekillendirmeye kadar farklı stiller uygulanır. Isı koruyucu kullanımı her uygulamanın parçasıdır." },
      { t: "h3", text: "Saç Bakımı" },
      { t: "p", html: "Saçın durumuna göre nem, besleme ve onarım odaklı bakım uygulamaları planlanır. Yıkama sırasında saç derisi masajı bakımın parçasıdır." },
      { t: "h3", text: "Topuz ve Özel Gün Saçı" },
      { t: "p", html: "Düğün, nişan ve davet gibi özel günler için topuz ve şekillendirme uygulanır. Özel gün randevularının önceden planlanması önerilir; istenirse makyaj ve tırnak randevusuyla aynı güne yerleştirilebilir." },
      { t: "h2", text: "Neden Tek Ziyaret?" },
      { t: "ul", items: [
        "Cilt bakımı, tırnak ve saç aynı gün, aynı adreste",
        "Maslak plazalarında çalışanlar için iş çıkışı saatleri",
        "Otopark mevcut",
        "Randevu WhatsApp üzerinden",
      ] },
      { t: "h2", text: "Sarıyer ve Maslak'tan Ulaşım" },
      { t: "p", html: "Salonumuz Maslak 1453 içinde yer alır. Sarıyer, Ayazağa, Levent ve Şişli çevresinden kolay ulaşılır." },
    ],
    faqs: [
      { q: "Randevusuz gelebilir miyim?", a: "Yoğunluk nedeniyle randevuyla çalışıyoruz; WhatsApp üzerinden uygun saati birlikte planlayabiliriz." },
      { q: "Özel gün saçı için ne kadar önce randevu almalıyım?", a: "Özellikle hafta sonları için birkaç gün önceden randevu almanız önerilir." },
      { q: "Saç ve tırnak randevusu aynı gün yapılabilir mi?", a: "Evet. Randevu planlanırken iki uygulamanın süresi birlikte hesaplanır." },
    ],
    note: NOTE,
  },
];

export const SERVICE_BY_PATH = Object.fromEntries(SERVICE_PAGES.map((s) => [s.path, s])) as Record<string, ServicePage>;

/** Blog kategorisi → hizmet sayfası (blog detayındaki "İlgili hizmet" kutusu) */
export const SERVICE_BY_BLOG_CATEGORY = Object.fromEntries(
  SERVICE_PAGES.map((s) => [s.blogCategory, s]),
) as Record<string, ServicePage>;

/** Ana sayfa hizmet kartı anahtarı → hizmet sayfası yolu */
export const SERVICE_PATH_BY_KEY = Object.fromEntries(
  SERVICE_PAGES.map((s) => [s.serviceKey, s.path]),
) as Record<string, string>;
