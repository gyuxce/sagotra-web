import type { Destination, Experience, Faq, Partner, Story } from "./types";

/**
 * Launch content for Kadipaten Yogyakarta. Experience details and destination
 * facts are sourced from the Pokdarwis Hudyanasari "Paket Wisata Kadipaten"
 * brochure (rev 2-1). Public prices are loaded only from CRM sale pricing.
 */

export const destinations: Destination[] = [
  {
    slug: "kadipaten-yogyakarta",
    name: { id: "Kadipaten Yogyakarta", en: "Kadipaten Yogyakarta" },
    overview: {
      id: "Berdiri di Kemantren Kraton, Kota Yogyakarta, Kadipaten adalah kelurahan mungil seluas 0,34 km² yang terbagi menjadi 15 RW, 53 RT, dan 4 kampung: Kadipaten Wetan, Kadipaten Kulon, Kadipaten Kidul, dan Ngasem. Namanya sendiri berasal dari gelar Kanjeng Gusti Pangeran Adipati Anom — dari Adipati, lahirlah sebutan Kadipaten.",
      en: "Set within Kemantren Kraton, Yogyakarta City, Kadipaten is a compact 0.34 km² neighborhood split into 15 RW, 53 RT, and 4 kampung: Kadipaten Wetan, Kadipaten Kulon, Kadipaten Kidul, and Ngasem. Its name traces back to the title Kanjeng Gusti Pangeran Adipati Anom — Adipati giving rise to Kadipaten.",
    },
    culturalContext: {
      id: "Tak mungkin bicara sejarah Kadipaten tanpa menyebut Kompleks Dalem Mangkubumen, berdiri 1865–1886 dan mula-mula dihuni GPH Hangabehi, putra sulung Sri Sultan HB VI yang kelak bergelar KGPAA Hamangkunegara. Begitu ia dinobatkan sebagai Sri Sultan HB VII, adiknya, Kanjeng Pangeran Adipati Mangkubumi, yang menggantikannya tinggal di sana. Bahkan pada masa awal kemerdekaan 1945–1947, dalem ini sempat menjadi tempat tinggal Panglima Besar Jenderal Sudirman, dan pada 1949 — atas izin Sri Sultan HB IX — sempat pula berfungsi sebagai fakultas kedokteran UGM sebelum kampus Bulaksumur rampung dibangun. Jejak sejarah itu masih terasa lewat lima dalem bersejarah yang berdiri di Kadipaten hari ini — Pakuningratan, Benawan, Kaneman, Mangkubumen, dan Joyokusuman — sebagian besar masih dihuni keturunan keluarga Keraton.",
      en: "You can't tell Kadipaten's history without the Dalem Mangkubumen complex, built 1865–1886 and first home to GPH Hangabehi, eldest son of Sri Sultan HB VI, later titled KGPAA Hamangkunegara. Once he was crowned Sri Sultan HB VII, his younger brother, Kanjeng Pangeran Adipati Mangkubumi, took his place there. During the early days of independence, 1945–1947, the residence was even home to Panglima Besar Jenderal Sudirman, and in 1949 — with the permission of Sri Sultan HB IX — it briefly served as UGM's Faculty of Medicine before the Bulaksumur campus was finished. That history still lives on through five historic dalem standing in Kadipaten today — Pakuningratan, Benawan, Kaneman, Mangkubumen, and Joyokusuman — most still home to descendants of the Keraton family.",
    },
    practicalNotes: {
      id: "Menjelajahi Kadipaten bisa dengan berbagai cara: naik kendaraan wisata Si Thole, menyewa sepeda listrik mulai Rp 65.000/jam, sepeda wisata mulai Rp 550.000, atau motor dan mobil dari warga setempat. Urusan perut juga tak perlu khawatir — ada sekitar 70 spot kuliner, dari angkringan dan kafe hingga santap ala kerajaan, dengan nama-nama populer seperti Bakmi Gandhok, Semanak Coffee & Eatery, Gadri Resto, dan Royal Cuisine Kaneman Heritage. Untuk menginap, warga setempat mengelola sejumlah guesthouse dan homestay seperti AJ Bike Guest House, Oemah Ardea, NOAH House, dan Griyane Eyang Jogja. Sepanjang Jl. Polowijan, Jl. Rotowijayan, dan Jl. Ngasem, fasilitas seperti klinik, apotik, ATM/bank, kantor pos, dan pasar tradisional juga mudah dijangkau.",
      en: "Getting around Kadipaten is flexible: hop on the Si Thole tourist shuttle, rent an electric bike from Rp 65,000/hour, a touring bicycle from Rp 550,000, or a motorbike or car from local residents. Food is never far off either — around 70 culinary spots range from angkringan and cafes to royal-style dining, with local favorites including Bakmi Gandhok, Semanak Coffee & Eatery, Gadri Resto, and Royal Cuisine Kaneman Heritage. For a place to stay, residents run a number of guesthouses and homestays such as AJ Bike Guest House, Oemah Ardea, NOAH House, and Griyane Eyang Jogja. Along Jl. Polowijan, Jl. Rotowijayan, and Jl. Ngasem, everyday facilities like clinics, pharmacies, ATMs/banks, a post office, and a traditional market are all within easy reach.",
    },
    zones: [
      {
        order: 1,
        name: { id: "Kelompok Tani Naga Asri", en: "Kelompok Tani Naga Asri" },
        highlights: [
          { id: "Organisasi Ash Habul Kahfi", en: "Ash Habul Kahfi organization" },
          { id: "Gedung Pertemuan Sido Mukti & Surya Puri", en: "Sido Mukti and Surya Puri meeting halls" },
          { id: "Produksi Ampyang Coklat Bu Dati", en: "Bu Dati's ampyang chocolate production" },
          { id: "Homestay dan kuliner", en: "Homestays and culinary spots" },
        ],
      },
      {
        order: 2,
        name: { id: "Dalem Kaneman & Plengkung Jagabaya", en: "Dalem Kaneman & Plengkung Jagabaya" },
        highlights: [
          { id: "Royal Cuisine Kaneman Heritage", en: "Royal Cuisine Kaneman Heritage" },
          { id: "Organisasi OMM 114 dan YSAB", en: "OMM 114 and YSAB organizations" },
          { id: "Pusat Kajian KRT Wiraguna, Bale Seni Condroradono", en: "KRT Wiraguna study center, Bale Seni Condroradono" },
          { id: "Kuliner", en: "Culinary spots" },
        ],
      },
      {
        order: 3,
        name: { id: "Kelompok Tani Kencana Asri", en: "Kelompok Tani Kencana Asri" },
        highlights: [
          { id: "Homestay", en: "Homestays" },
          { id: "Cinderamata", en: "Souvenirs" },
          { id: "Kuliner", en: "Culinary spots" },
        ],
      },
      {
        order: 4,
        name: { id: "Pojok Beteng Lor Kulon & Forum Bank Sampah", en: "Pojok Beteng Lor Kulon & Waste Bank Forum" },
        highlights: [
          { id: "Aksesori busana tradisional", en: "Traditional attire accessories" },
          { id: "Taman Kadipaten", en: "Kadipaten park" },
          { id: "Homestay dan kuliner", en: "Homestays and culinary spots" },
        ],
      },
      {
        order: 5,
        name: { id: "Dalem Mangkubumen", en: "Dalem Mangkubumen" },
        highlights: [
          { id: "Kalithi Wedding & Art, Universitas Widya Mataram", en: "Kalithi Wedding & Art, Widya Mataram University" },
          { id: "Lukis Batik \"Mas Totok\", Kesenian Gejog Lesung", en: "\"Mas Totok\" batik painting, Gejog Lesung music" },
          { id: "Homestay dan kuliner", en: "Homestays and culinary spots" },
        ],
      },
      {
        order: 6,
        name: { id: "Dalem Suryaputran", en: "Dalem Suryaputran" },
        highlights: [
          { id: "Sentra kerajinan drumband, kaos, dompet batik, akrilik, kain jumputan & baju batik", en: "Craft center for drumband gear, t-shirts, batik wallets, acrylic crafts, jumputan cloth & batik clothing" },
          { id: "Homestay, Bakpia 99, dan kuliner", en: "Homestays, Bakpia 99, and culinary spots" },
        ],
      },
      {
        order: 7,
        name: { id: "Museum Kereta Karaton Ngayogyakarta", en: "Museum Kereta Karaton Ngayogyakarta" },
        highlights: [
          { id: "Lukis batik, jemparingan & produksi alat jemparingan", en: "Batik painting, jemparingan archery & equipment production" },
          { id: "Bregada Ratawijaya", en: "Bregada Ratawijaya" },
          { id: "Transportasi wisata sepeda listrik & sepeda onthel", en: "Electric and vintage bicycle tourist transport" },
          { id: "Kuliner", en: "Culinary spots" },
        ],
      },
      {
        order: 8,
        name: { id: "Dalem Benawan & Dalem Joyokusuman", en: "Dalem Benawan & Dalem Joyokusuman" },
        highlights: [
          { id: "Pusat cinderamata Kampung Wisata Kadipaten", en: "Kampung Wisata Kadipaten souvenir center" },
          { id: "Pusat oleh-oleh, suvenir, dan produksi batik", en: "Gift, souvenir, and batik production center" },
          { id: "Paguyuban Seni Puspa Swara", en: "Puspa Swara arts association" },
          { id: "Kuliner", en: "Culinary spots" },
        ],
      },
      {
        order: 9,
        name: { id: "Dalem Purbanegaran & Masjid Kagungan Dalem Ratawijayan", en: "Dalem Purbanegaran & Ratawijayan Mosque" },
        highlights: [
          { id: "Pusat pendidikan budaya gagrak Ngayogyakarta (karawitan, nembang, aksara Jawa)", en: "Ngayogyakarta cultural education center (karawitan gamelan, traditional singing, Javanese script)" },
          { id: "Kuliner", en: "Culinary spots" },
        ],
      },
      {
        order: 10,
        name: { id: "Dalem Pakuningratan", en: "Dalem Pakuningratan" },
        highlights: [
          { id: "Sentra permainan & olahraga tradisional", en: "Traditional games & sports center" },
          { id: "Angkringan Pendapa", en: "Angkringan Pendapa" },
          { id: "Homestay dan kawasan niaga batik & cinderamata", en: "Homestays and a batik and souvenir trade area" },
          { id: "Kuliner", en: "Culinary spots" },
        ],
      },
    ],
    heroImage: {
      alt: { id: "Kawasan Kadipaten Yogyakarta", en: "Kadipaten Yogyakarta area" },
    },
  },
];

export const experiences: Experience[] = [
  {
    slug: "dalem-pakuningratan",
    category: "heritage",
    destinationSlug: "kadipaten-yogyakarta",
    audiences: ["cultural-traveler", "family", "corporate"],
    durationHours: 6,
    languages: ["id"],
    title: { id: "Wisata Heritage Dalem Pakuningratan", en: "Dalem Pakuningratan Heritage Tour" },
    summary: {
      id: "Satu hari menyusuri Tamansari, disambut tari di pendapa, lalu mencoba membatik di kediaman bangsawan Dalem Pakuningratan.",
      en: "A day through Tamansari, welcomed with dance in the pendapa, before trying your hand at batik at the noble residence of Dalem Pakuningratan.",
    },
    story: {
      id: "Namanya berubah beberapa kali mengikuti siapa yang tinggal di dalamnya. Dibangun sekitar 1890-an pada masa Sri Sultan HB VII dengan sebutan Dalem Purbayan, penghuni pertamanya adalah GRM Sujadi yang kemudian bergelar BPH Puruboyo. Ketika Sri Sultan HB VIII naik tahta, rumah ini diwariskan ke putrinya, GKR Pembayun, yang menikah dengan BPH Pakoeningrat — dari pernikahan itulah nama Dalem Pakuningratan melekat hingga hari ini.",
      en: "The name changed more than once depending on who lived there. Built around the 1890s during the reign of Sri Sultan HB VII under the name Dalem Purbayan, its first occupant was GRM Sujadi, later titled BPH Puruboyo. When Sri Sultan HB VIII took the throne, the residence passed to his daughter, GKR Pembayun, who married BPH Pakoeningrat — and from that marriage came the name Dalem Pakuningratan, still used today.",
    },
    highlights: [
      { id: "Tur Tamansari didampingi pemandu resmi Tamansari", en: "Tamansari tour with an official Tamansari guide" },
      { id: "Welcome drink dan pertunjukan tari di Dalem Pakuningratan", en: "Welcome drink and dance performance at Dalem Pakuningratan" },
      { id: "Pengenalan dolanan anak tradisional dan jemparingan (pilihan)", en: "Introduction to traditional children's games and jemparingan archery (optional)" },
      { id: "Lokakarya singkat membatik di Batik Darmo", en: "Short batik workshop at Batik Darmo" },
    ],
    practicalDetails: {
      meetingPoint: { id: "Plataran Masjid Ratawijayan, pukul 09.00 WIB", en: "Ratawijayan Mosque courtyard, 9:00 AM local time" },
      minimumGroup: { id: "Minimum 5 orang", en: "Minimum 5 people" },
      accessibility: { id: "Berjalan kaki dan naik kendaraan wisata Si Thole; sebagian area Tamansari berupa tangga dan lorong sempit", en: "Involves walking and riding the Si Thole tourist shuttle; some areas of Tamansari have stairs and narrow passages" },
      whatToBring: { id: "Pakaian sopan, alas kaki nyaman, uang tunai untuk belanja di Jl. Rotowijayan/Ngasem (opsional)", en: "Modest clothing, comfortable footwear, cash for optional shopping on Jl. Rotowijayan/Ngasem" },
    },
    includes: [
      { id: "Tur Tamansari dan Dalem Pakuningratan", en: "Tamansari and Dalem Pakuningratan tour" },
      { id: "Welcome drink dan pertunjukan tari", en: "Welcome drink and dance performance" },
      { id: "Makan siang", en: "Lunch" },
      { id: "Lokakarya batik di Batik Darmo", en: "Batik workshop at Batik Darmo" },
    ],
    excludes: [
      { id: "Transportasi menuju titik kumpul", en: "Transport to the meeting point" },
      { id: "Belanja pribadi di Jl. Rotowijayan/Ngasem", en: "Personal shopping on Jl. Rotowijayan/Ngasem" },
    ],
    responsibleVisitNotes: {
      id: "Dalem Pakuningratan adalah kediaman keluarga bangsawan yang masih ditinggali, bukan museum kosong. Mohon izin sebelum memotret anggota keluarga atau staf, dan ikuti arahan pemandu resmi.",
      en: "Dalem Pakuningratan is a still-occupied noble family residence, not an empty museum. Please ask permission before photographing family members or staff, and follow the official guide's directions.",
    },
    images: [],
    relatedExperienceSlugs: ["dalem-benawan", "dalem-mangkubumen"],
    relatedStorySlugs: ["tamansari-heritage-spaces"],
    priceUnit: "per-person",
    inquiryStatus: "open",
  },
  {
    slug: "dalem-benawan",
    category: "heritage",
    destinationSlug: "kadipaten-yogyakarta",
    audiences: ["cultural-traveler", "family", "corporate"],
    durationHours: 6,
    languages: ["id"],
    title: { id: "Wisata Heritage Dalem Benawan", en: "Dalem Benawan Heritage Tour" },
    summary: {
      id: "Dari Pagelaran dan Kedhaton Keraton, perjalanan berlanjut ke Dalem Benawan untuk mencicipi apem hangat langsung dari dapur dan mencoba membatik.",
      en: "From the Keraton's Pagelaran and Kedhaton, the journey continues to Dalem Benawan for warm apem straight from the kitchen and a hands-on batik session.",
    },
    story: {
      id: "Rumah ini berdiri sejak 1877 di masa Sri Sultan HB VII, awalnya disebut Dalem Mangunnegaran karena dihuni GBPH Mangunnegara. Namanya berganti menjadi Dalem Benawan setelah KBPH Benawa, putra Sri Sultan HB VIII, menempatinya pada 1964 — dan keluarga GBPH Benowo yang meneruskannya masih tinggal di sana sampai sekarang.",
      en: "Standing since 1877 during the reign of Sri Sultan HB VII, this residence was first called Dalem Mangunnegaran after its occupant, GBPH Mangunnegara. It became Dalem Benawan once KBPH Benawa, son of Sri Sultan HB VIII, moved in during 1964 — and the family of GBPH Benowo who succeeded him still lives there today.",
    },
    highlights: [
      { id: "Tur Pagelaran Keraton Yogyakarta", en: "Keraton Yogyakarta Pagelaran tour" },
      { id: "Tur Wahanarata dan Kedhaton", en: "Wahanarata and Kedhaton tour" },
      { id: "Welcome drink dengan open kitchen apem dan pertunjukan tari (pilihan)", en: "Welcome drink with an open apem kitchen and dance performance (optional)" },
      { id: "Lokakarya batik di Luwes-Luwes", en: "Batik workshop at Luwes-Luwes" },
    ],
    practicalDetails: {
      meetingPoint: { id: "Depan Pracimasana, pukul 09.00 WIB", en: "In front of Pracimasana, 9:00 AM local time" },
      minimumGroup: { id: "Minimum 5 orang", en: "Minimum 5 people" },
      accessibility: { id: "Tur berjalan kaki di kompleks Keraton; permukaan ubin tradisional", en: "Walking tour through the Keraton complex; traditional tiled surfaces" },
      whatToBring: { id: "Pakaian sopan, alas kaki nyaman, uang tunai untuk belanja opsional", en: "Modest clothing, comfortable footwear, cash for optional shopping" },
    },
    includes: [
      { id: "Tur Pagelaran, Wahanarata, dan Kedhaton dipandu Guide Resmi Kraton", en: "Pagelaran, Wahanarata, and Kedhaton tour with an official Kraton guide" },
      { id: "Welcome drink dan makan siang", en: "Welcome drink and lunch" },
      { id: "Lokakarya batik di Luwes-Luwes", en: "Batik workshop at Luwes-Luwes" },
    ],
    excludes: [
      { id: "Transportasi menuju titik kumpul", en: "Transport to the meeting point" },
      { id: "Belanja pribadi di Jl. Rotowijayan/Sidomukti/Ngasem", en: "Personal shopping on Jl. Rotowijayan/Sidomukti/Ngasem" },
    ],
    responsibleVisitNotes: {
      id: "Dalem Benawan masih ditinggali keluarga GBPH Benowo. Hormati area privat keluarga dan ikuti arahan Guide Resmi Kraton selama berada di kompleks Keraton.",
      en: "Dalem Benawan is still home to the family of GBPH Benowo. Respect the family's private areas and follow the official Kraton guide's directions while inside the Keraton complex.",
    },
    images: [],
    relatedExperienceSlugs: ["dalem-pakuningratan", "dalem-kaneman"],
    relatedStorySlugs: ["tamansari-heritage-spaces"],
    priceUnit: "per-person",
    inquiryStatus: "open",
  },
  {
    slug: "dalem-kaneman",
    category: "heritage",
    destinationSlug: "kadipaten-yogyakarta",
    audiences: ["cultural-traveler", "family", "corporate"],
    durationHours: 6,
    languages: ["id"],
    title: { id: "Wisata Heritage Dalem Kaneman", en: "Dalem Kaneman Heritage Tour" },
    summary: {
      id: "Mampir ke Pagelaran dan Kedhaton Keraton sebelum tiba di Dalem Kaneman untuk mencicipi Manuk Nom hangat dan belajar gerak tari dasar.",
      en: "Stop by the Keraton's Pagelaran and Kedhaton before arriving at Dalem Kaneman for warm Manuk Nom and a basic dance lesson.",
    },
    story: {
      id: "Tiga nama pernah melekat pada rumah ini sepanjang sejarahnya. Berdiri tahun 1855 di era Sri Sultan HB VI sebagai Dalem Wirogunan, kediaman KRT Wiroguno yang menjabat patih putra mahkota, rumah ini lalu diteruskan putranya, KPH Purwodiningrat, menantu Sri Sultan HB VIII, dengan sebutan Dalem Purwadiningratan. Sejak 1989, GKR Anom, putri sulung Sri Sultan HB IX, tinggal di sini dan memberinya nama yang bertahan hingga sekarang: Dalem Kaneman.",
      en: "Three names have marked this residence over its history. Built in 1855 during the reign of Sri Sultan HB VI as Dalem Wirogunan, home to KRT Wiroguno, patih to the crown prince, it later passed to his son KPH Purwodiningrat, son-in-law of Sri Sultan HB VIII, under the name Dalem Purwadiningratan. Since 1989 it has been home to GKR Anom, eldest daughter of Sri Sultan HB IX, who gave it the name it still carries: Dalem Kaneman.",
    },
    highlights: [
      { id: "Tur Pagelaran Keraton Yogyakarta", en: "Keraton Yogyakarta Pagelaran tour" },
      { id: "Tur Wahanarata / Kedhaton (pilihan)", en: "Wahanarata / Kedhaton tour (optional)" },
      { id: "Welcome drink dengan open kitchen Manuk Nom", en: "Welcome drink with an open Manuk Nom kitchen" },
      { id: "Lokakarya singkat tari tradisional", en: "Short traditional dance workshop" },
    ],
    practicalDetails: {
      meetingPoint: { id: "Depan Pracimasana, pukul 09.00 WIB", en: "In front of Pracimasana, 9:00 AM local time" },
      minimumGroup: { id: "Minimum 5 orang", en: "Minimum 5 people" },
      accessibility: { id: "Tur berjalan kaki dan naik kendaraan wisata Si Thole", en: "Walking tour combined with the Si Thole tourist shuttle" },
      whatToBring: { id: "Pakaian sopan, alas kaki nyaman, uang tunai untuk belanja opsional", en: "Modest clothing, comfortable footwear, cash for optional shopping" },
    },
    includes: [
      { id: "Tur Pagelaran dan Kedhaton dipandu Guide Resmi Kraton", en: "Pagelaran and Kedhaton tour with an official Kraton guide" },
      { id: "Welcome drink dan makan siang", en: "Welcome drink and lunch" },
      { id: "Lokakarya tari", en: "Dance workshop" },
    ],
    excludes: [
      { id: "Transportasi menuju titik kumpul", en: "Transport to the meeting point" },
      { id: "Belanja pribadi di Jl. Kadipaten/Nagan", en: "Personal shopping on Jl. Kadipaten/Nagan" },
    ],
    responsibleVisitNotes: {
      id: "Dalem Kaneman adalah kediaman GKR Anom, putri Sri Sultan HB IX. Jaga sikap sopan dan hormati privasi keluarga selama kunjungan.",
      en: "Dalem Kaneman is the residence of GKR Anom, daughter of Sri Sultan HB IX. Maintain respectful conduct and honor the family's privacy during your visit.",
    },
    images: [],
    relatedExperienceSlugs: ["royal-dinner-dalem-kaneman", "dalem-benawan"],
    relatedStorySlugs: [],
    priceUnit: "per-person",
    inquiryStatus: "open",
  },
  {
    slug: "dalem-mangkubumen",
    category: "heritage",
    destinationSlug: "kadipaten-yogyakarta",
    audiences: ["cultural-traveler", "family", "corporate"],
    durationHours: 6,
    languages: ["id"],
    title: { id: "Wisata Heritage Dalem Mangkubumen", en: "Dalem Mangkubumen Heritage Tour" },
    summary: {
      id: "Kunjungan ke tempat asal-usul nama Kadipaten ini ditutup dengan lokakarya mengenakan busana adat kraton di Dalem Mangkubumen.",
      en: "A visit to where the Kadipaten name began, closing with a workshop on wearing traditional Kraton attire at Dalem Mangkubumen.",
    },
    story: {
      id: "Nama kelurahan Kadipaten sebenarnya berakar dari rumah ini. Didirikan antara 1865 dan 1886 untuk seorang Adipati Anom, putra mahkota di masa Sri Sultan HB VI, dalem ini awalnya disebut Dalem Kadipaten. Setelah sang putra mahkota naik tahta, rumah diteruskan ke KGPH Mangkubumi hingga 1918, kemudian adiknya KGPH Buminoto hingga 1928 — dan sejak masa itulah namanya berubah menjadi Dalem Mangkubumen.",
      en: "The name of the Kadipaten neighborhood actually traces back to this residence. Built between 1865 and 1886 for an Adipati Anom, crown prince under Sri Sultan HB VI, it was first known as Dalem Kadipaten. After the crown prince ascended the throne, the residence passed to KGPH Mangkubumi until 1918, then his younger brother KGPH Buminoto until 1928 — and it was from that period the name changed to Dalem Mangkubumen.",
    },
    highlights: [
      { id: "Tur Pagelaran dan Kedhaton Keraton Yogyakarta", en: "Keraton Yogyakarta Pagelaran and Kedhaton tour" },
      { id: "Welcome drink di Dalem Mangkubumen, asal nama Kadipaten", en: "Welcome drink at Dalem Mangkubumen, the origin of the Kadipaten name" },
      { id: "Lokakarya miru kain dan memakai busana adat Kraton Yogyakarta, atau lukis batik bersama Mas Totok (pilihan)", en: "Workshop on wearing traditional Kraton Yogyakarta attire, or a batik painting session with Mas Totok (optional)" },
    ],
    practicalDetails: {
      meetingPoint: { id: "Depan Pracimasana, pukul 09.00 WIB", en: "In front of Pracimasana, 9:00 AM local time" },
      minimumGroup: { id: "Minimum 5 orang", en: "Minimum 5 people" },
      accessibility: { id: "Tur berjalan kaki dan naik kendaraan wisata Si Thole", en: "Walking tour combined with the Si Thole tourist shuttle" },
      whatToBring: { id: "Pakaian sopan, alas kaki nyaman, uang tunai untuk belanja opsional", en: "Modest clothing, comfortable footwear, cash for optional shopping" },
    },
    includes: [
      { id: "Tur Pagelaran dan Kedhaton dipandu Guide Resmi Kraton", en: "Pagelaran and Kedhaton tour with an official Kraton guide" },
      { id: "Welcome drink dan makan siang", en: "Welcome drink and lunch" },
      { id: "Lokakarya busana adat atau lukis batik", en: "Traditional attire or batik painting workshop" },
    ],
    excludes: [
      { id: "Transportasi menuju titik kumpul", en: "Transport to the meeting point" },
      { id: "Belanja pribadi di Rotowijayan/Ngasem", en: "Personal shopping in Rotowijayan/Ngasem" },
    ],
    responsibleVisitNotes: {
      id: "Dalem Mangkubumen adalah tempat kelahiran nama Kadipaten dan masih memiliki nilai sejarah keluarga yang hidup. Ikuti arahan pemandu dan jaga sikap hormat di area dalem.",
      en: "Dalem Mangkubumen is the birthplace of the Kadipaten name and still carries living family history. Follow your guide's directions and maintain respectful conduct within the residence grounds.",
    },
    images: [],
    relatedExperienceSlugs: ["dalem-pakuningratan", "dalem-joyokusuman"],
    relatedStorySlugs: ["budaya-yang-hidup"],
    priceUnit: "per-person",
    inquiryStatus: "open",
  },
  {
    slug: "dalem-joyokusuman",
    category: "heritage",
    destinationSlug: "kadipaten-yogyakarta",
    audiences: ["cultural-traveler", "family", "corporate"],
    durationHours: 6,
    languages: ["id"],
    title: { id: "Wisata Heritage Dalem Joyokusuman", en: "Dalem Joyokusuman Heritage Tour" },
    summary: {
      id: "Sore diisi tarian dolanan anak dan lokakarya membatik di kediaman keluarga GBPH Joyokusumo yang masih dihuni hingga kini.",
      en: "An afternoon of children's folk dance and a batik workshop at the residence still home to the GBPH Joyokusumo family.",
    },
    story: {
      id: "Berusia lebih dari satu abad, dalem ini dibangun tahun 1916 pada masa Sri Sultan HB VII untuk RW Condrokusumo, sepupu sang sultan — karena itu sempat disebut Dalem Condrokusuman. Penghuni berikutnya adalah GBPH Bintoro, kerabat Sri Sultan HB IX, sebelum akhirnya pada 1988 ditempati GBPH Joyokusumo, adik Sri Sultan HB X, yang keturunannya masih menempati rumah ini sampai sekarang.",
      en: "More than a century old, this residence was built in 1916 during the reign of Sri Sultan HB VII for RW Condrokusumo, a cousin of the sultan — hence its early name, Dalem Condrokusuman. It later passed to GBPH Bintoro, a relative of Sri Sultan HB IX, before being occupied in 1988 by GBPH Joyokusumo, younger brother of Sri Sultan HB X, whose descendants still live there today.",
    },
    highlights: [
      { id: "Tur Pagelaran, Wahanarata, dan Kedhaton Keraton Yogyakarta", en: "Keraton Yogyakarta Pagelaran, Wahanarata, and Kedhaton tour" },
      { id: "Welcome drink dan pertunjukan Tari Dolanan Anak di Dalem Joyokusuman", en: "Welcome drink and a children's folk dance performance at Dalem Joyokusuman" },
      { id: "Lokakarya batik di Luwes-Luwes", en: "Batik workshop at Luwes-Luwes" },
    ],
    practicalDetails: {
      meetingPoint: { id: "Depan Pracimasana, pukul 09.00 WIB", en: "In front of Pracimasana, 9:00 AM local time" },
      minimumGroup: { id: "Minimum 5 orang", en: "Minimum 5 people" },
      accessibility: { id: "Tur berjalan kaki di kompleks Keraton dan menuju Dalem Joyokusuman", en: "Walking tour through the Keraton complex and on to Dalem Joyokusuman" },
      whatToBring: { id: "Pakaian sopan, alas kaki nyaman, uang tunai untuk belanja opsional", en: "Modest clothing, comfortable footwear, cash for optional shopping" },
    },
    includes: [
      { id: "Tur Pagelaran, Wahanarata, dan Kedhaton dipandu Guide Resmi Kraton", en: "Pagelaran, Wahanarata, and Kedhaton tour with an official Kraton guide" },
      { id: "Welcome drink, pertunjukan tari, dan makan siang", en: "Welcome drink, dance performance, and lunch" },
      { id: "Lokakarya batik di Luwes-Luwes", en: "Batik workshop at Luwes-Luwes" },
    ],
    excludes: [
      { id: "Transportasi menuju titik kumpul", en: "Transport to the meeting point" },
      { id: "Belanja pribadi di Rotowijayan/Sidomukti/Ngasem", en: "Personal shopping in Rotowijayan/Sidomukti/Ngasem" },
    ],
    responsibleVisitNotes: {
      id: "Dalem Joyokusuman masih ditinggali keluarga GBPH Joyokusumo. Mohon izin sebelum memotret anggota keluarga dan ikuti arahan pemandu resmi.",
      en: "Dalem Joyokusuman is still home to the GBPH Joyokusumo family. Please ask permission before photographing family members and follow the official guide's directions.",
    },
    images: [],
    relatedExperienceSlugs: ["dalem-mangkubumen", "royal-dinner-gadri-resto-joyokusuman"],
    relatedStorySlugs: [],
    priceUnit: "per-person",
    inquiryStatus: "open",
  },
  {
    slug: "short-course-jumputan",
    category: "arts",
    destinationSlug: "kadipaten-yogyakarta",
    audiences: ["family", "school-community", "cultural-traveler"],
    durationHours: 3,
    languages: ["id"],
    title: { id: "Short Course Jumputan", en: "Jumputan Tie-Dye Short Course" },
    summary: {
      id: "Coba langsung teknik ikat celup jumputan bersama perajin yang tinggal di kampung-kampung Kadipaten.",
      en: "Try the jumputan tie-dye technique hands-on with craftspeople from the kampung around Kadipaten.",
    },
    story: {
      id: "Di kampung-kampung sekitar Kadipaten, keterampilan mengikat dan mencelup kain jumputan terus diturunkan dari satu generasi ke generasi berikutnya. Dalam kelas ini Anda praktik langsung — mengikat kain, mencelupkannya ke pewarna, hingga membawa pulang hasil karya sendiri.",
      en: "Across the kampung surrounding Kadipaten, the skill of tying and dyeing jumputan fabric keeps passing from one generation to the next. In this class you practice it yourself — tying the fabric, dyeing it, and taking home a piece you made.",
    },
    highlights: [
      { id: "Praktik langsung mengikat dan mencelup kain jumputan", en: "Hands-on tying and dyeing of jumputan fabric" },
      { id: "Pendampingan dari titik penjemputan menuju lokasi pelatihan", en: "Escort from the pickup point to the training location" },
      { id: "Snack dan minuman selama pelatihan", en: "Snacks and drinks during the training" },
      { id: "Hasil karya dibawa pulang sebagai suvenir", en: "Take your finished piece home as a souvenir" },
    ],
    practicalDetails: {
      meetingPoint: { id: "Titik penjemputan dikonfirmasi tim SAGOTRA saat pemesanan", en: "Pickup point confirmed by the SAGOTRA team upon booking" },
      minimumGroup: { id: "Minimum 5 orang (peserta kurang dari 5 tetap dikenakan biaya untuk 5 orang)", en: "Minimum 5 people (fewer than 5 participants are still charged for 5)" },
      accessibility: { id: "Duduk di ruang pelatihan komunitas, kursi biasa tersedia atas permintaan", en: "Seating in a community training space; standard chairs available on request" },
      whatToBring: { id: "Pakaian yang boleh terkena noda pewarna", en: "Clothing you don't mind getting dye on" },
    },
    includes: [
      { id: "Pendampingan dari titik penjemputan", en: "Escort from the pickup point" },
      { id: "Snack dan minuman", en: "Snacks and drinks" },
      { id: "Soft file foto selama pelatihan", en: "Soft-copy photos from the training" },
      { id: "Hasil karya pelatihan", en: "Your finished piece" },
    ],
    excludes: [
      { id: "Transportasi menuju titik penjemputan", en: "Transport to the pickup point" },
      { id: "Makan siang", en: "Lunch" },
    ],
    responsibleVisitNotes: {
      id: "Ikuti arahan perajin dan hormati waktu kerja komunitas selama pelatihan berlangsung.",
      en: "Follow the craftsperson's guidance and respect the community's working hours during the training.",
    },
    images: [],
    relatedExperienceSlugs: ["short-course-batik-tulis-lukis", "susur-kampung-perjuangan-kemerdekaan"],
    relatedStorySlugs: ["people-behind-the-batik"],
    priceUnit: "per-person",
    inquiryStatus: "open",
  },
  {
    slug: "short-course-batik-tulis-lukis",
    category: "arts",
    destinationSlug: "kadipaten-yogyakarta",
    audiences: ["family", "school-community", "cultural-traveler"],
    durationHours: 3,
    languages: ["id"],
    title: { id: "Short Course Batik Tulis & Lukis Batik", en: "Batik Tulis & Batik Painting Short Course" },
    summary: {
      id: "Duduk bersama perajin di Batik Darmo atau Batik Luwes-Luwes untuk belajar canting batik tulis sekaligus mencoba melukis batik.",
      en: "Sit with craftspeople at Batik Darmo or Batik Luwes-Luwes to learn hand-drawn batik tulis and try your hand at batik painting.",
    },
    story: {
      id: "Batik Darmo dan Batik Luwes-Luwes menjadi tempat berkumpulnya perajin batik Kadipaten yang menekuni batik tulis, lukis batik, dan batik cap selama bertahun-tahun. Di sinilah peserta diajak belajar langsung dari tangan-tangan yang sudah berpengalaman.",
      en: "Batik Darmo and Batik Luwes-Luwes bring together Kadipaten's batik makers, who have spent years mastering batik tulis, batik painting, and batik cap. Here, participants learn directly from experienced hands.",
    },
    highlights: [
      { id: "Praktik membatik tulis dengan canting", en: "Hands-on batik tulis drawing with a canting tool" },
      { id: "Pengenalan teknik lukis batik", en: "Introduction to batik painting technique" },
      { id: "Pendampingan dari titik penjemputan menuju lokasi pelatihan", en: "Escort from the pickup point to the training location" },
      { id: "Hasil karya dibawa pulang sebagai suvenir", en: "Take your finished piece home as a souvenir" },
    ],
    practicalDetails: {
      meetingPoint: { id: "Titik penjemputan dikonfirmasi tim SAGOTRA saat pemesanan", en: "Pickup point confirmed by the SAGOTRA team upon booking" },
      minimumGroup: { id: "Minimum 5 orang (peserta kurang dari 5 tetap dikenakan biaya untuk 5 orang)", en: "Minimum 5 people (fewer than 5 participants are still charged for 5)" },
      accessibility: { id: "Duduk di sanggar batik, kursi biasa tersedia atas permintaan", en: "Seating at a batik studio; standard chairs available on request" },
      whatToBring: { id: "Pakaian yang boleh terkena noda lilin atau pewarna", en: "Clothing you don't mind getting wax or dye on" },
    },
    includes: [
      { id: "Pendampingan dari titik penjemputan", en: "Escort from the pickup point" },
      { id: "Bahan dan alat membatik", en: "Batik materials and tools" },
      { id: "Soft file foto selama pelatihan", en: "Soft-copy photos from the training" },
      { id: "Hasil karya pelatihan", en: "Your finished piece" },
    ],
    excludes: [
      { id: "Transportasi menuju titik penjemputan", en: "Transport to the pickup point" },
      { id: "Makan siang", en: "Lunch" },
    ],
    responsibleVisitNotes: {
      id: "Ikuti arahan perajin saat menggunakan lilin panas dan hormati waktu kerja sanggar.",
      en: "Follow the craftsperson's guidance when using hot wax and respect the studio's working hours.",
    },
    images: [],
    relatedExperienceSlugs: ["short-course-jumputan", "short-course-lukis-kaos"],
    relatedStorySlugs: ["people-behind-the-batik"],
    priceUnit: "per-person",
    inquiryStatus: "open",
  },
  {
    slug: "short-course-lukis-kaos",
    category: "arts",
    destinationSlug: "kadipaten-yogyakarta",
    audiences: ["family", "school-community", "cultural-traveler"],
    durationHours: 3,
    languages: ["id"],
    title: { id: "Short Course Lukis Kaos", en: "T-Shirt Painting Short Course" },
    summary: {
      id: "Bawa pulang kaos rancangan sendiri setelah bereksperimen dengan cat bersama seniman lokal Kadipaten.",
      en: "Take home a t-shirt of your own design after experimenting with paint alongside a local Kadipaten artist.",
    },
    story: {
      id: "Kaos polos menjadi kanvas dalam lokakarya ini. Dipandu seniman lokal yang terbiasa berkarya di atas kain, peserta bebas bereksperimen dengan warna dan motif sesuai selera masing-masing.",
      en: "A plain t-shirt becomes the canvas in this workshop. Guided by a local artist experienced in working with fabric, participants are free to experiment with colors and motifs however they like.",
    },
    highlights: [
      { id: "Praktik melukis kaos dengan cat tekstil", en: "Hands-on t-shirt painting with textile paint" },
      { id: "Bebas berkreasi dengan motif sendiri", en: "Freedom to create your own design" },
      { id: "Pendampingan dari titik penjemputan menuju lokasi pelatihan", en: "Escort from the pickup point to the training location" },
      { id: "Hasil karya dibawa pulang", en: "Take your finished piece home" },
    ],
    practicalDetails: {
      meetingPoint: { id: "Titik penjemputan dikonfirmasi tim SAGOTRA saat pemesanan", en: "Pickup point confirmed by the SAGOTRA team upon booking" },
      minimumGroup: { id: "Minimum 5 orang (peserta kurang dari 5 tetap dikenakan biaya untuk 5 orang)", en: "Minimum 5 people (fewer than 5 participants are still charged for 5)" },
      accessibility: { id: "Duduk di ruang pelatihan komunitas", en: "Seating in a community training space" },
      whatToBring: { id: "Pakaian yang boleh terkena cat", en: "Clothing you don't mind getting paint on" },
    },
    includes: [
      { id: "Pendampingan dari titik penjemputan", en: "Escort from the pickup point" },
      { id: "Kaos polos dan cat tekstil", en: "Plain t-shirt and textile paint" },
      { id: "Soft file foto selama pelatihan", en: "Soft-copy photos from the training" },
      { id: "Hasil karya pelatihan", en: "Your finished piece" },
    ],
    excludes: [
      { id: "Transportasi menuju titik penjemputan", en: "Transport to the pickup point" },
      { id: "Makan siang", en: "Lunch" },
    ],
    responsibleVisitNotes: {
      id: "Ikuti arahan instruktur saat menggunakan cat dan alat lukis.",
      en: "Follow the instructor's guidance when using paint and painting tools.",
    },
    images: [],
    relatedExperienceSlugs: ["short-course-batik-tulis-lukis", "short-course-jumputan"],
    relatedStorySlugs: [],
    priceUnit: "per-person",
    inquiryStatus: "open",
  },
  {
    slug: "short-course-tari-klasik",
    category: "arts",
    destinationSlug: "kadipaten-yogyakarta",
    audiences: ["family", "school-community", "cultural-traveler"],
    durationHours: 3,
    languages: ["id"],
    title: { id: "Short Course Tari Klasik Gaya Yogyakarta", en: "Yogyakarta Classical Dance Short Course" },
    summary: {
      id: "Bersama penari lokal, kenali gerak dasar dan filosofi di balik tari klasik gaya Yogyakarta.",
      en: "Learn the basic movements and philosophy behind Yogyakarta-style classical dance from a local dancer.",
    },
    story: {
      id: "Sanggar-sanggar kampung di Kadipaten menjadi tempat tari klasik gaya Yogyakarta terus hidup, dengan gerak dan filosofinya diwariskan dari satu generasi ke generasi berikutnya. Kelas ini mengenalkan gerak dasar sekaligus makna yang tersimpan di baliknya.",
      en: "Kampung studios across Kadipaten keep Yogyakarta-style classical dance alive, its movement and philosophy handed down through generations. This class introduces the basic movements and the meaning behind them.",
    },
    highlights: [
      { id: "Kelas gerak dasar tari klasik Yogyakarta", en: "Basic Yogyakarta classical dance movement class" },
      { id: "Pengenalan filosofi dan makna gerak tari", en: "Introduction to the philosophy and meaning behind the movements" },
      { id: "Pendampingan dari titik penjemputan menuju lokasi pelatihan", en: "Escort from the pickup point to the training location" },
      { id: "Dokumentasi foto selama pelatihan", en: "Photo documentation during the training" },
    ],
    practicalDetails: {
      meetingPoint: { id: "Titik penjemputan dikonfirmasi tim SAGOTRA saat pemesanan", en: "Pickup point confirmed by the SAGOTRA team upon booking" },
      minimumGroup: { id: "Minimum 5 orang (peserta kurang dari 5 tetap dikenakan biaya untuk 5 orang)", en: "Minimum 5 people (fewer than 5 participants are still charged for 5)" },
      accessibility: { id: "Lantai datar di ruang latihan tari, disarankan pakaian yang mudah bergerak", en: "Flat flooring in the dance studio; easy-to-move-in clothing recommended" },
      whatToBring: { id: "Pakaian yang nyaman untuk bergerak", en: "Comfortable clothing for movement" },
    },
    includes: [
      { id: "Pendampingan dari titik penjemputan", en: "Escort from the pickup point" },
      { id: "Instruktur tari lokal", en: "Local dance instructor" },
      { id: "Soft file foto selama pelatihan", en: "Soft-copy photos from the training" },
      { id: "Snack dan minuman", en: "Snacks and drinks" },
    ],
    excludes: [
      { id: "Transportasi menuju titik penjemputan", en: "Transport to the pickup point" },
      { id: "Makan siang", en: "Lunch" },
    ],
    responsibleVisitNotes: {
      id: "Perlakukan properti tari dengan hati-hati; properti ini adalah bagian dari warisan sanggar.",
      en: "Handle dance props with care; they are part of the studio's heritage.",
    },
    images: [],
    relatedExperienceSlugs: ["short-course-miru-kain-busana-adat", "dalem-mangkubumen"],
    relatedStorySlugs: ["budaya-yang-hidup"],
    priceUnit: "per-person",
    inquiryStatus: "open",
  },
  {
    slug: "short-course-miru-kain-busana-adat",
    category: "arts",
    destinationSlug: "kadipaten-yogyakarta",
    audiences: ["family", "school-community", "cultural-traveler"],
    durationHours: 3,
    languages: ["id"],
    title: { id: "Short Course Miru Kain & Busana Adat Jawa", en: "Javanese Traditional Attire Wearing Short Course" },
    summary: {
      id: "Kenali cara melipat kain secara tradisional (miru) hingga mengenakan busana adat Kraton Yogyakarta dengan tepat.",
      en: "Learn the traditional miru kain folding technique and how to correctly wear Kraton Yogyakarta attire.",
    },
    story: {
      id: "Sebelum busana adat lengkap dikenakan, ada keterampilan melipat kain secara tradisional yang disebut miru — sebuah langkah yang jarang diketahui pengunjung. Lokakarya ini membawa Anda memahami tata cara itu, hingga mengenakan busana adat Kraton Yogyakarta secara benar dan penuh makna.",
      en: "Before a full set of traditional attire is worn, there's a lesser-known step: miru, the traditional skill of folding cloth. This workshop walks you through that process, then on to wearing Kraton Yogyakarta attire the correct and meaningful way.",
    },
    highlights: [
      { id: "Praktik miru kain secara langsung", en: "Hands-on practice of the miru kain technique" },
      { id: "Belajar memakai busana adat Kraton Yogyakarta", en: "Learn to wear traditional Kraton Yogyakarta attire" },
      { id: "Pendampingan dari titik penjemputan menuju lokasi pelatihan", en: "Escort from the pickup point to the training location" },
      { id: "Dokumentasi foto mengenakan busana adat", en: "Photo documentation while wearing the traditional attire" },
    ],
    practicalDetails: {
      meetingPoint: { id: "Titik penjemputan dikonfirmasi tim SAGOTRA saat pemesanan", en: "Pickup point confirmed by the SAGOTRA team upon booking" },
      minimumGroup: { id: "Minimum 5 orang (peserta kurang dari 5 tetap dikenakan biaya untuk 5 orang)", en: "Minimum 5 people (fewer than 5 participants are still charged for 5)" },
      accessibility: { id: "Duduk di ruang pelatihan, busana disediakan dalam berbagai ukuran", en: "Seating in the training space; attire provided in various sizes" },
      whatToBring: { id: "Pakaian yang mudah diganti untuk mencoba busana adat", en: "Clothing that's easy to change out of for the attire fitting" },
    },
    includes: [
      { id: "Pendampingan dari titik penjemputan", en: "Escort from the pickup point" },
      { id: "Penggunaan busana dan kain adat", en: "Use of traditional attire and cloth" },
      { id: "Soft file foto selama pelatihan", en: "Soft-copy photos from the training" },
      { id: "Snack dan minuman", en: "Snacks and drinks" },
    ],
    excludes: [
      { id: "Transportasi menuju titik penjemputan", en: "Transport to the pickup point" },
      { id: "Makan siang", en: "Lunch" },
    ],
    responsibleVisitNotes: {
      id: "Perlakukan busana adat dengan hati-hati karena merupakan warisan budaya yang bernilai.",
      en: "Handle the traditional attire with care, as it is a valuable piece of cultural heritage.",
    },
    images: [],
    relatedExperienceSlugs: ["short-course-tari-klasik", "dalem-mangkubumen"],
    relatedStorySlugs: [],
    priceUnit: "per-person",
    inquiryStatus: "open",
  },
  {
    slug: "cooking-class-manuk-nom",
    category: "arts",
    destinationSlug: "kadipaten-yogyakarta",
    audiences: ["family", "school-community", "cultural-traveler"],
    durationHours: 3,
    languages: ["id"],
    title: { id: "Cooking Class Manuk Nom", en: "Manuk Nom Cooking Class" },
    summary: {
      id: "Turun langsung ke dapur warga dan pelajari resep Manuk Nom, hidangan tradisional yang jadi ciri khas Kadipaten.",
      en: "Step into a local kitchen and learn to cook Manuk Nom, the traditional dish that's become a Kadipaten signature.",
    },
    story: {
      id: "Di beberapa dalem Kadipaten, Manuk Nom kerap dihidangkan lewat sesi open kitchen yang bisa disaksikan tamu. Kelas memasak ini membawa pengalaman itu lebih dekat — peserta praktik langsung meracik resep dan tekniknya bersama warga setempat.",
      en: "Manuk Nom often appears in open-kitchen moments guests can watch at several Kadipaten dalem. This class brings that closer — participants cook the recipe and technique hands-on alongside local residents.",
    },
    highlights: [
      { id: "Praktik memasak Manuk Nom dari awal hingga akhir", en: "Hands-on cooking of Manuk Nom from start to finish" },
      { id: "Pendampingan dari titik penjemputan menuju lokasi pelatihan", en: "Escort from the pickup point to the training location" },
      { id: "Hasil masakan dibawa pulang atau dinikmati bersama", en: "Take your dish home or enjoy it together" },
      { id: "Dokumentasi foto selama kelas memasak", en: "Photo documentation during the cooking class" },
    ],
    practicalDetails: {
      meetingPoint: { id: "Titik penjemputan dikonfirmasi tim SAGOTRA saat pemesanan", en: "Pickup point confirmed by the SAGOTRA team upon booking" },
      minimumGroup: { id: "Minimum 5 orang (peserta kurang dari 5 tetap dikenakan biaya untuk 5 orang)", en: "Minimum 5 people (fewer than 5 participants are still charged for 5)" },
      accessibility: { id: "Berdiri di area dapur terbuka; informasikan alergi makanan sebelumnya", en: "Standing in an open kitchen area; let us know about food allergies in advance" },
      whatToBring: { id: "Pakaian yang nyaman untuk memasak", en: "Comfortable clothing for cooking" },
    },
    includes: [
      { id: "Pendampingan dari titik penjemputan", en: "Escort from the pickup point" },
      { id: "Bahan masakan dan peralatan dapur", en: "Cooking ingredients and kitchen equipment" },
      { id: "Soft file foto selama pelatihan", en: "Soft-copy photos from the training" },
      { id: "Snack dan minuman", en: "Snacks and drinks" },
    ],
    excludes: [
      { id: "Transportasi menuju titik penjemputan", en: "Transport to the pickup point" },
    ],
    responsibleVisitNotes: {
      id: "Ikuti arahan pengajar dan perhatikan keselamatan di area dapur.",
      en: "Follow the instructor's guidance and be mindful of safety in the kitchen area.",
    },
    images: [],
    relatedExperienceSlugs: ["royal-dinner-dalem-kaneman", "royal-dinner-gadri-resto-joyokusuman"],
    relatedStorySlugs: ["royal-kitchen-traditions"],
    priceUnit: "per-person",
    inquiryStatus: "open",
  },
  {
    slug: "susur-kampung-perjuangan-kemerdekaan",
    category: "community",
    destinationSlug: "kadipaten-yogyakarta",
    audiences: ["school-community", "cultural-traveler", "corporate"],
    durationHours: 6,
    languages: ["id"],
    title: { id: "Susur Kampung Perjuangan Kemerdekaan", en: "Independence Struggle Kampung Walk" },
    summary: {
      id: "Berjalan kaki menyusuri Kampung Kadipaten Wetan sambil mendengar langsung kisah perjuangan kemerdekaan dari warganya.",
      en: "Walk through Kampung Kadipaten Wetan and hear the independence struggle story straight from its residents.",
    },
    story: {
      id: "Banyak wisatawan tidak tahu bahwa Kampung Kadipaten Wetan menyimpan jejak perjuangan kemerdekaan Indonesia yang jarang diceritakan. Perjalanan ini memadukan tur Keraton dengan singgah ke titik-titik bersejarah kampung serta sentra kerajinan milik warga setempat.",
      en: "Few visitors realize Kampung Kadipaten Wetan holds traces of Indonesia's independence struggle rarely told. This journey pairs a Keraton tour with stops at the kampung's historic sites and local craft centers.",
    },
    highlights: [
      { id: "Tur Pagelaran, Wahanarata, dan Kedhaton Keraton Yogyakarta", en: "Keraton Yogyakarta Pagelaran, Wahanarata, and Kedhaton tour" },
      { id: "Welcome drink dan pertunjukan Tari Dolanan Anak di Kampung Kadipaten Wetan", en: "Welcome drink and a children's folk dance performance in Kampung Kadipaten Wetan" },
      { id: "Lokakarya kain jumputan atau kunjungan sentra produksi kerajinan", en: "Jumputan workshop or visit to local craft production centers" },
    ],
    practicalDetails: {
      meetingPoint: { id: "Depan Pracimasana, pukul 09.00 WIB", en: "In front of Pracimasana, 9:00 AM local time" },
      minimumGroup: { id: "Minimum 5 orang", en: "Minimum 5 people" },
      accessibility: { id: "Gang kampung dengan lebar bervariasi, sebagian tidak ramah kursi roda", en: "Kampung alleys of varying width, some not wheelchair accessible" },
      whatToBring: { id: "Alas kaki nyaman, uang tunai untuk belanja opsional", en: "Comfortable footwear, cash for optional shopping" },
    },
    includes: [
      { id: "Tur Pagelaran, Wahanarata, dan Kedhaton dipandu Guide Resmi Kraton", en: "Pagelaran, Wahanarata, and Kedhaton tour with an official Kraton guide" },
      { id: "Welcome drink, pertunjukan tari, dan makan siang", en: "Welcome drink, dance performance, and lunch" },
      { id: "Lokakarya kain jumputan atau kunjungan sentra kerajinan", en: "Jumputan workshop or craft center visit" },
    ],
    excludes: [
      { id: "Transportasi menuju titik kumpul", en: "Transport to the meeting point" },
      { id: "Belanja pribadi di Rotowijayan/Sidomukti/Ngasem", en: "Personal shopping in Rotowijayan/Sidomukti/Ngasem" },
    ],
    responsibleVisitNotes: {
      id: "Minta izin sebelum memotret warga dan hormati privasi rumah tinggal di sepanjang rute kampung.",
      en: "Ask permission before photographing residents and respect the privacy of homes along the kampung route.",
    },
    images: [],
    relatedExperienceSlugs: ["short-course-jumputan", "dalem-mangkubumen"],
    relatedStorySlugs: ["budaya-yang-hidup", "responsible-visiting-kraton"],
    priceUnit: "per-person",
    inquiryStatus: "open",
  },
  {
    slug: "workshop-upacara-adat-busana-karaton",
    category: "heritage",
    destinationSlug: "kadipaten-yogyakarta",
    audiences: ["corporate", "school-community"],
    durationHours: 3,
    languages: ["id"],
    title: { id: "Workshop Upacara Adat & Peragaan Busana Adat Karaton", en: "Traditional Ceremony Workshop & Kraton Attire Showcase" },
    summary: {
      id: "Program khusus rombongan besar ini memadukan lokakarya upacara adat dengan peragaan busana Karaton Ngayogyakarta Hadiningrat.",
      en: "Built for large groups, this program pairs a traditional ceremony workshop with a Kraton Ngayogyakarta Hadiningrat attire showcase.",
    },
    story: {
      id: "Dirancang untuk rombongan besar, program minat khusus ini mengajak peserta memahami lebih dalam upacara adat dan busana tradisional Karaton Ngayogyakarta Hadiningrat, dipandu langsung oleh narasumber dan pengrajin lokal Kadipaten.",
      en: "Designed for large groups, this special-interest program invites participants to understand the traditional ceremonies and attire of the Karaton Ngayogyakarta Hadiningrat more deeply, guided directly by local Kadipaten resource people and craftspeople.",
    },
    highlights: [
      { id: "Lokakarya pengenalan upacara adat Karaton", en: "Introductory workshop on Kraton traditional ceremonies" },
      { id: "Peragaan busana adat Karaton Ngayogyakarta Hadiningrat", en: "Kraton Ngayogyakarta Hadiningrat traditional attire showcase" },
      { id: "Sesi tanya jawab dengan narasumber lokal", en: "Q&A session with local resource people" },
    ],
    practicalDetails: {
      meetingPoint: { id: "Lokasi dikonfirmasi tim SAGOTRA saat pemesanan (kawasan Kadipaten)", en: "Location confirmed by the SAGOTRA team upon booking (Kadipaten area)" },
      minimumGroup: { id: "Minimum 50 orang", en: "Minimum 50 people" },
      accessibility: { id: "Diselenggarakan di ruang pertemuan/pendapa komunitas", en: "Held in a community meeting hall or pendapa" },
      whatToBring: { id: "Pakaian sopan sesuai acara formal", en: "Modest clothing suitable for a formal event" },
    },
    includes: [
      { id: "Lokakarya dan peragaan busana adat", en: "Workshop and traditional attire showcase" },
      { id: "Narasumber lokal", en: "Local resource people" },
    ],
    excludes: [
      { id: "Transportasi dan konsumsi", en: "Transport and meals" },
    ],
    responsibleVisitNotes: {
      id: "Program ini melibatkan busana dan simbol budaya yang bernilai sakral bagi komunitas; ikuti arahan narasumber dengan saksama.",
      en: "This program involves attire and cultural symbols that carry sacred value for the community; follow the resource people's guidance closely.",
    },
    images: [],
    relatedExperienceSlugs: ["short-course-miru-kain-busana-adat", "dalem-mangkubumen"],
    relatedStorySlugs: [],
    priceUnit: "per-person",
    inquiryStatus: "open",
  },
  {
    slug: "royal-dinner-dalem-kaneman",
    category: "culinary",
    destinationSlug: "kadipaten-yogyakarta",
    audiences: ["corporate", "cultural-traveler"],
    durationHours: 2.5,
    languages: ["id"],
    title: { id: "Royal Dinner & Lunch Dalem Kaneman", en: "Royal Dinner & Lunch at Dalem Kaneman" },
    summary: {
      id: "Sambil menyantap hidangan kerajaan di Dalem Kaneman, nikmati pertunjukan Tari Ramayana, Golek, Srimpi, atau Menak sesuai pilihan.",
      en: "Enjoy royal cuisine at Dalem Kaneman while a choice of Ramayana, Golek, Srimpi, or Menak dance plays out before you.",
    },
    story: {
      id: "Di Dalem Kaneman, Royal Cuisine Kaneman Heritage menghadirkan hidangan bergaya kerajaan yang disantap sambil menyaksikan pertunjukan tari klasik pilihan — bisa Ramayana, Golek, Srimpi, atau Menak. Dua unsur budaya istana, kuliner dan seni pertunjukan, bertemu dalam satu meja makan.",
      en: "At Dalem Kaneman, Royal Cuisine Kaneman Heritage serves royal-style dishes enjoyed alongside a choice of classical dance — Ramayana, Golek, Srimpi, or Menak. Two strands of palace culture, cuisine and performing arts, meet at the same table.",
    },
    highlights: [
      { id: "Menu santap kerajaan oleh Royal Cuisine Kaneman Heritage", en: "Royal-style dining menu by Royal Cuisine Kaneman Heritage" },
      { id: "Pertunjukan Tari Ramayana, Golek, Srimpi, atau Menak", en: "Ramayana, Golek, Srimpi, or Menak dance performance" },
      { id: "Suasana Dalem Kaneman yang bersejarah", en: "The historic atmosphere of Dalem Kaneman" },
    ],
    practicalDetails: {
      meetingPoint: { id: "Dalem Kaneman, kawasan Kadipaten", en: "Dalem Kaneman, Kadipaten area" },
      minimumGroup: { id: "Minimum 15 orang", en: "Minimum 15 people" },
      accessibility: { id: "Tempat duduk meja formal tersedia", en: "Formal table seating available" },
      whatToBring: { id: "Informasikan alergi atau pantangan makanan sebelumnya", en: "Let us know about allergies or dietary restrictions in advance" },
    },
    includes: [
      { id: "Menu santap kerajaan lengkap", en: "Full royal-style dining menu" },
      { id: "Pertunjukan tari klasik pilihan", en: "Choice of classical dance performance" },
    ],
    excludes: [
      { id: "Transportasi", en: "Transport" },
      { id: "Minuman di luar menu standar", en: "Beverages outside the standard menu" },
    ],
    responsibleVisitNotes: {
      id: "Ikuti tata cara santap yang dijelaskan tuan rumah sebagai bagian dari pengalaman budaya istana.",
      en: "Follow the dining etiquette explained by the host as part of the palace cultural experience.",
    },
    images: [],
    relatedExperienceSlugs: ["dalem-kaneman", "cooking-class-manuk-nom"],
    relatedStorySlugs: ["royal-kitchen-traditions"],
    priceUnit: "per-group",
    inquiryStatus: "open",
  },
  {
    slug: "royal-dinner-gadri-resto-joyokusuman",
    category: "culinary",
    destinationSlug: "kadipaten-yogyakarta",
    audiences: ["corporate", "school-community"],
    durationHours: 2.5,
    languages: ["id"],
    title: { id: "Royal Dinner & Lunch Gadri Resto, Dalem Joyokusuman", en: "Royal Dinner & Lunch at Gadri Resto, Dalem Joyokusuman" },
    summary: {
      id: "Gadri Resto di Prince Joyokusumo's House menyajikan santap kerajaan lengkap dengan iringan Tari Ramayana dan Golek.",
      en: "Gadri Resto at Prince Joyokusumo's House serves royal dining complete with Ramayana and Golek dance.",
    },
    story: {
      id: "Berada di kompleks Dalem Joyokusuman yang dikenal sebagai Prince Joyokusumo's House, Gadri Resto buka setiap hari pukul 09.00–17.00 WIB dengan menu dan minuman sesuai daftar yang tersedia. Pertunjukan Tari Ramayana dan Golek melengkapi suasana santap kerajaan di sini.",
      en: "Set within the Dalem Joyokusuman complex known as Prince Joyokusumo's House, Gadri Resto opens daily from 9:00 AM to 5:00 PM with dishes and drinks from its regular menu. Ramayana and Golek dance performances round out the royal dining atmosphere.",
    },
    highlights: [
      { id: "Menu Gadri Resto sesuai daftar menu", en: "Gadri Resto's regular menu" },
      { id: "Pertunjukan Tari Ramayana dan Golek", en: "Ramayana and Golek dance performance" },
      { id: "Suasana Prince Joyokusumo's House", en: "The atmosphere of Prince Joyokusumo's House" },
    ],
    practicalDetails: {
      meetingPoint: { id: "Gadri Resto, Dalem Joyokusuman (buka 09.00–17.00 WIB)", en: "Gadri Resto, Dalem Joyokusuman (open 9:00 AM–5:00 PM local time)" },
      minimumGroup: { id: "Minimum 20 orang", en: "Minimum 20 people" },
      accessibility: { id: "Tempat duduk restoran formal tersedia", en: "Formal restaurant seating available" },
      whatToBring: { id: "Informasikan alergi atau pantangan makanan sebelumnya", en: "Let us know about allergies or dietary restrictions in advance" },
    },
    includes: [
      { id: "Hidangan sesuai daftar menu Gadri Resto", en: "Dishes from Gadri Resto's regular menu" },
      { id: "Pertunjukan Tari Ramayana dan Golek", en: "Ramayana and Golek dance performance" },
    ],
    excludes: [
      { id: "Transportasi", en: "Transport" },
      { id: "Paket tari premium (tersedia mulai Rp 750.000/pax, tanyakan pilihannya)", en: "Premium dance package (available from Rp 750,000/pax, ask about options)" },
    ],
    responsibleVisitNotes: {
      id: "Gadri Resto berada di kompleks kediaman keluarga; jaga sikap hormat selama berada di area restoran dan dalem.",
      en: "Gadri Resto sits within a family residence complex; maintain respectful conduct throughout the restaurant and residence area.",
    },
    images: [],
    relatedExperienceSlugs: ["dalem-joyokusuman", "royal-dinner-dalem-kaneman"],
    relatedStorySlugs: ["royal-kitchen-traditions"],
    priceUnit: "per-person",
    inquiryStatus: "open",
  },
];

export const stories: Story[] = [
  {
    slug: "budaya-yang-hidup",
    title: { id: "Budaya yang Hidup", en: "Living Culture" },
    excerpt: {
      id: "Di Kadipaten, budaya bukan artefak di balik kaca — ia hidup dalam rutinitas harian abdi dalem, perajin, dan warga kampung.",
      en: "In Kadipaten, culture isn't an artifact behind glass — it lives in the daily routines of palace attendants, craftspeople, and kampung residents.",
    },
    body: [
      {
        id: "Setiap pagi, sebelum wisatawan pertama datang, kehidupan di Kadipaten sudah bergerak: abdi dalem bersiap menjalankan tugas, perajin batik menyalakan kompor lilin, dan pedagang angkringan menyusun dagangan.",
        en: "Every morning, before the first visitors arrive, life in Kadipaten is already in motion: abdi dalem prepare for their duties, batik makers light their wax stoves, and angkringan vendors set up their stalls.",
      },
      {
        id: "SAGOTRA percaya cerita ini layak diceritakan apa adanya — bukan sebagai pertunjukan untuk kamera, melainkan sebagai undangan untuk memahami cara hidup yang terus dijaga oleh komunitas Yogyakarta.",
        en: "SAGOTRA believes this story deserves to be told honestly — not as a show for the camera, but as an invitation to understand a way of life that Yogyakarta's communities continue to care for.",
      },
    ],
    topic: "living-culture",
    destinationSlug: "kadipaten-yogyakarta",
    publishDate: "2026-08-15",
    heroImage: { alt: { id: "Kehidupan pagi di Kadipaten", en: "Morning life in Kadipaten" } },
    relatedExperienceSlugs: ["dalem-mangkubumen", "susur-kampung-perjuangan-kemerdekaan"],
  },
  {
    slug: "people-behind-the-batik",
    title: { id: "Orang-Orang di Balik Batik", en: "The People Behind the Batik" },
    excerpt: {
      id: "Mengenal perajin batik dan jumputan yang menjadikan kampung sekitar keraton sebagai bengkel kerja lintas generasi.",
      en: "Meet the batik and jumputan craftspeople who turned the kampung around the palace into a workshop spanning generations.",
    },
    body: [
      {
        id: "Bu Sri sudah membatik sejak usia dua belas tahun, meneruskan keterampilan dari ibunya. Kini, ia membuka pintu rumahnya bagi pengunjung yang ingin belajar canting dan mendengar cerita di balik setiap motif.",
        en: "Bu Sri has been making batik since she was twelve, continuing a skill passed down from her mother. Today, she opens her home to visitors who want to learn canting and hear the story behind each motif.",
      },
    ],
    topic: "people",
    destinationSlug: "kadipaten-yogyakarta",
    publishDate: "2026-08-22",
    heroImage: { alt: { id: "Perajin batik menyelesaikan motif", en: "A batik maker finishing a motif" } },
    relatedExperienceSlugs: ["short-course-batik-tulis-lukis", "short-course-jumputan"],
  },
  {
    slug: "royal-kitchen-traditions",
    title: { id: "Tradisi Dapur Kerajaan", en: "Royal Kitchen Traditions" },
    excerpt: {
      id: "Resep yang diwariskan turun-temurun menyimpan lebih dari sekadar rasa — ia menyimpan filosofi dan tata krama.",
      en: "Recipes passed down through generations hold more than flavor — they hold philosophy and etiquette.",
    },
    body: [
      {
        id: "Di dapur keluarga dalem, setiap bumbu memiliki takaran yang dijaga ketat, bukan hanya demi rasa, tetapi juga makna simbolis dalam penyajian untuk tamu.",
        en: "In dalem family kitchens, every spice is measured with care — not only for flavor, but for the symbolic meaning behind how it's served to guests.",
      },
    ],
    topic: "culinary",
    destinationSlug: "kadipaten-yogyakarta",
    publishDate: "2026-09-01",
    heroImage: { alt: { id: "Dapur tradisional menyiapkan santap kerajaan", en: "A traditional kitchen preparing royal dining" } },
    relatedExperienceSlugs: ["royal-dinner-dalem-kaneman", "royal-dinner-gadri-resto-joyokusuman"],
  },
  {
    slug: "tamansari-heritage-spaces",
    title: { id: "Ruang Warisan Tamansari", en: "Tamansari's Heritage Spaces" },
    excerpt: {
      id: "Lorong bawah tanah dan kolam pemandian Tamansari menyimpan cerita kompleks yang lebih dari sekadar taman air.",
      en: "Tamansari's underground passages and bathing pools hold a story more complex than a simple water garden.",
    },
    body: [
      {
        id: "Tamansari dirancang sebagai ruang ganda: tempat rekreasi keluarga kerajaan sekaligus benteng pertahanan tersembunyi, lengkap dengan jalur pelarian bawah tanah.",
        en: "Tamansari was designed as a dual-purpose space: a recreation area for the royal family and a hidden defensive stronghold, complete with underground escape routes.",
      },
    ],
    topic: "heritage-spaces",
    destinationSlug: "kadipaten-yogyakarta",
    publishDate: "2026-09-05",
    heroImage: { alt: { id: "Lorong bawah tanah Tamansari", en: "Tamansari underground passage" } },
    relatedExperienceSlugs: ["dalem-pakuningratan", "dalem-benawan"],
  },
  {
    slug: "responsible-visiting-kraton",
    title: { id: "Berkunjung dengan Bertanggung Jawab", en: "Visiting Responsibly" },
    excerpt: {
      id: "Panduan singkat agar kunjungan Anda ke ruang budaya Kadipaten tetap menghormati komunitas dan tradisinya.",
      en: "A short guide to keeping your visit to Kadipaten's cultural spaces respectful of its community and traditions.",
    },
    body: [
      {
        id: "Berpakaian sopan, bertanya sebelum memotret, dan mengikuti arahan pemandu adalah cara sederhana menjaga hubungan baik dengan komunitas yang membuka pintu bagi pengunjung.",
        en: "Dressing modestly, asking before you photograph, and following your guide's directions are simple ways to maintain a good relationship with the communities that open their doors to visitors.",
      },
    ],
    topic: "responsible-visiting",
    destinationSlug: "kadipaten-yogyakarta",
    publishDate: "2026-09-10",
    heroImage: { alt: { id: "Pengunjung mendengarkan pemandu lokal", en: "Visitors listening to a local guide" } },
    relatedExperienceSlugs: ["dalem-pakuningratan", "susur-kampung-perjuangan-kemerdekaan"],
  },
  {
    slug: "menginap-bersama-warga-kadipaten",
    title: { id: "Menginap Bersama Warga Kadipaten", en: "Staying with the People of Kadipaten" },
    excerpt: {
      id: "Dari rumah klasik hingga bangunan modern minimalis, menginap di Kadipaten berarti tidur di rumah warga sungguhan, bukan sekadar kamar hotel.",
      en: "From classic old houses to modern minimalist builds, staying in Kadipaten means sleeping in a real resident's home, not just a hotel room.",
    },
    body: [
      {
        id: "Di sepanjang gang-gang Kadipaten, guesthouse dan homestay milik warga tersebar dari Astuti Guest House yang klasik hingga NOAH House yang serba modern. Sebagian menyewakan per kamar, sebagian menyewakan satu rumah utuh untuk rombongan keluarga.",
        en: "Along Kadipaten's alleyways, resident-owned guesthouses and homestays range from the classic Astuti Guest House to the fully modern NOAH House. Some rent by the room, others rent out an entire house for a family group.",
      },
      {
        id: "Menginap di sini bukan cuma soal tempat tidur — ini kesempatan bangun pagi mendengar suara kampung mulai bergerak, ngobrol dengan pemilik rumah, dan merasakan Kadipaten bukan sebagai turis yang lewat, tapi sebagai tamu yang diterima.",
        en: "Staying here isn't just about a bed — it's a chance to wake up to the sound of the kampung stirring, chat with your host, and experience Kadipaten not as a passing tourist, but as a welcomed guest.",
      },
    ],
    topic: "people",
    destinationSlug: "kadipaten-yogyakarta",
    publishDate: "2026-09-15",
    heroImage: { alt: { id: "Halaman homestay warga Kadipaten", en: "A resident homestay courtyard in Kadipaten" } },
    relatedExperienceSlugs: ["susur-kampung-perjuangan-kemerdekaan"],
  },
  {
    slug: "wisata-rasa-kadipaten",
    title: { id: "Wisata Rasa di Setiap Sudut Kadipaten", en: "A Taste of Kadipaten on Every Corner" },
    excerpt: {
      id: "Dengan sekitar 70 titik kuliner, dari angkringan sederhana sampai santap kerajaan, Kadipaten adalah destinasi yang bisa dijelajahi lewat perut.",
      en: "With around 70 culinary spots, from simple angkringan to royal dining, Kadipaten is a destination best explored through the stomach.",
    },
    body: [
      {
        id: "Angkringan Ngesengan RW 08 menyajikan nasi kucing sederhana, sementara beberapa langkah dari situ, Semanak Coffee & Eatery menawarkan suasana kafe modern. Di antara keduanya ada Bakmi Gandhok, penjual apem dan gudeg, hingga siomay legendaris Mang Ujang.",
        en: "Angkringan Ngesengan RW 08 serves simple nasi kucing, while just steps away, Semanak Coffee & Eatery offers a modern café atmosphere. In between are Bakmi Gandhok, apem and gudeg vendors, and the legendary Siomay Mang Ujang.",
      },
      {
        id: "Yang membuat kuliner Kadipaten istimewa bukan cuma rasanya, tapi kesempatan menyaksikan langsung proses memasaknya — mulai dari open kitchen di beberapa dalem hingga jajanan pasar yang dibuat di depan mata pengunjung.",
        en: "What makes Kadipaten's food scene special isn't just the taste, but the chance to watch it being made — from open-kitchen moments at several dalem to market snacks prepared right in front of visitors.",
      },
    ],
    topic: "culinary",
    destinationSlug: "kadipaten-yogyakarta",
    publishDate: "2026-09-18",
    heroImage: { alt: { id: "Jajanan kaki lima di Kadipaten", en: "Street snacks in Kadipaten" } },
    relatedExperienceSlugs: ["royal-dinner-dalem-kaneman", "cooking-class-manuk-nom"],
  },
  {
    slug: "menjelajah-kadipaten-dari-dekat",
    title: { id: "Menjelajah Kadipaten dari Dekat", en: "Getting Around Kadipaten" },
    excerpt: {
      id: "Si Thole, sepeda listrik, hingga sepeda onthel — begini caranya berpindah dari satu sudut Kadipaten ke sudut lainnya.",
      en: "From the Si Thole shuttle to electric and vintage bicycles — here's how to move between Kadipaten's corners.",
    },
    body: [
      {
        id: "Si Thole, moda transportasi wisata milik Pemerintah Kota Yogyakarta, berhenti di titik-titik wisata utama dan jadi cara termudah berpindah tanpa harus jalan kaki jauh. Bagi yang ingin lebih santai, sepeda listrik bisa disewa mulai Rp 65.000 per jam, atau sepeda wisata mulai Rp 550.000.",
        en: "Si Thole, a tourist shuttle run by the Yogyakarta City Government, stops at major tourist points and is the easiest way to get around without long walks. For a more leisurely pace, electric bikes can be rented from Rp 65,000 per hour, or touring bicycles from Rp 550,000.",
      },
      {
        id: "Warga setempat juga menyewakan motor dan mobil bagi yang ingin menjelajah lebih jauh, sementara sepeda onthel klasik tetap jadi favorit bagi yang ingin menikmati kampung dengan ritme lebih pelan.",
        en: "Local residents also rent out motorbikes and cars for those wanting to explore further afield, while classic onthel bicycles remain a favorite for taking in the kampung at a slower pace.",
      },
    ],
    topic: "living-culture",
    destinationSlug: "kadipaten-yogyakarta",
    publishDate: "2026-09-20",
    heroImage: { alt: { id: "Si Thole, transportasi wisata Kadipaten", en: "Si Thole, Kadipaten's tourist shuttle" } },
    relatedExperienceSlugs: [],
  },
  {
    slug: "satu-kampung-sepuluh-wajah",
    title: { id: "Satu Kampung, Sepuluh Wajah Budaya", en: "One Kampung, Ten Faces of Culture" },
    excerpt: {
      id: "Kelurahan Kadipaten terbagi menjadi 10 zona wisata, masing-masing dengan karakter, kerajinan, dan komunitasnya sendiri.",
      en: "Kadipaten is mapped into 10 tourism zones, each with its own character, craft, and community.",
    },
    body: [
      {
        id: "Dari Kelompok Tani Naga Asri di zona 1 hingga kawasan niaga batik di Dalem Pakuningratan pada zona 10, peta wisata Kadipaten menunjukkan bagaimana satu kelurahan bisa menyimpan begitu banyak wajah — mulai dari sentra kerajinan drumband dan kaos di Dalem Suryaputran, pusat pendidikan budaya Jawa di Dalem Purbanegaran, hingga Museum Kereta Karaton yang jadi rumah bagi jemparingan dan sepeda onthel.",
        en: "From Kelompok Tani Naga Asri in zone 1 to the batik trading area at Dalem Pakuningratan in zone 10, Kadipaten's tourism map shows how a single neighborhood can hold so many faces — a drumband and t-shirt craft center at Dalem Suryaputran, a center for Javanese cultural education at Dalem Purbanegaran, and the Museum Kereta Karaton, home to jemparingan archery and vintage bicycles.",
      },
      {
        id: "Setiap zona dikelola paguyuban dan kelompok warganya sendiri — dari Forum Bank Sampah hingga Paguyuban Seni Puspa Swara — bukti bahwa pariwisata di sini tumbuh dari inisiatif kampung, bukan dari atas ke bawah.",
        en: "Each zone is run by its own community group — from the Waste Bank Forum to the Puspa Swara arts association — proof that tourism here grows from grassroots kampung initiative, not top-down planning.",
      },
    ],
    topic: "living-culture",
    destinationSlug: "kadipaten-yogyakarta",
    publishDate: "2026-09-22",
    heroImage: { alt: { id: "Peta wisata kampung Kadipaten", en: "Kadipaten's kampung tourism map" } },
    relatedExperienceSlugs: [],
  },
];

export const faqs: Faq[] = [
  {
    question: {
      id: "Bagaimana cara memesan pengalaman SAGOTRA?",
      en: "How do I book a SAGOTRA experience?",
    },
    answer: {
      id: "Kirim pertanyaan melalui WhatsApp atau formulir di halaman Rencanakan Kunjungan. Tim kami akan membalas dengan ketersediaan, harga, dan usulan itinerary — pemesanan online belum tersedia pada tahap ini.",
      en: "Send an inquiry through WhatsApp or the form on the Plan Your Visit page. Our team will reply with availability, pricing, and a proposed itinerary — online booking isn't available at this stage.",
    },
    category: "booking",
  },
  {
    question: {
      id: "Apakah harga sudah tercantum di website?",
      en: "Are prices listed on the website?",
    },
    answer: {
      id: "Ya, harga per pengalaman sudah tercantum di setiap halaman detail. Harga dapat berubah sewaktu-waktu mengikuti kebijakan mitra dan musim, jadi konfirmasikan kembali saat mengirim pertanyaan.",
      en: "Yes, pricing for each experience is listed on its detail page. Prices may change based on partner policy and season, so please reconfirm when you send your inquiry.",
    },
    category: "booking",
  },
  {
    question: {
      id: "Berapa lama waktu tunggu balasan pertanyaan?",
      en: "How long does it take to get a reply to an inquiry?",
    },
    answer: {
      id: "Tim kami berupaya membalas dalam waktu layanan yang telah disepakati. Untuk respons tercepat, gunakan WhatsApp.",
      en: "Our team aims to respond within our agreed service level. For the fastest response, use WhatsApp.",
    },
    category: "booking",
  },
  {
    question: {
      id: "Apakah pengalaman cocok untuk rombongan besar atau kelompok sekolah?",
      en: "Are experiences suitable for large groups or school groups?",
    },
    answer: {
      id: "Ya. Sebutkan jumlah rombongan dan kebutuhan khusus Anda saat mengirim pertanyaan, dan tim kami akan menyesuaikan itinerary.",
      en: "Yes. Let us know your group size and any specific needs when you send your inquiry, and our team will tailor the itinerary.",
    },
    category: "group",
  },
  {
    question: {
      id: "Bahasa apa saja yang tersedia untuk pemandu?",
      en: "What languages are guides available in?",
    },
    answer: {
      id: "Pemandu di lapangan pada umumnya berbahasa Indonesia. Sebutkan kebutuhan pendampingan bahasa Inggris pada formulir pertanyaan agar tim SAGOTRA dapat mengaturnya.",
      en: "On-the-ground guides generally speak Indonesian. Let us know if you need English-language support on the inquiry form so the SAGOTRA team can arrange it.",
    },
    category: "practical",
  },
  {
    question: {
      id: "Bagaimana etika memotret selama kunjungan?",
      en: "What's the photography etiquette during a visit?",
    },
    answer: {
      id: "Selalu tanyakan izin sebelum memotret warga, perajin, atau abdi dalem, dan ikuti area yang dibatasi sesuai arahan pemandu.",
      en: "Always ask permission before photographing residents, craftspeople, or palace attendants, and follow any restricted areas as guided.",
    },
    category: "responsible-visit",
  },
];

export const partners: Partner[] = [
  {
    name: "Royal Cuisine Kaneman Heritage",
    role: {
      id: "Mitra santap kerajaan di Dalem Kaneman",
      en: "Royal dining partner at Dalem Kaneman",
    },
    permissionGranted: true,
  },
  {
    name: "Gadri Resto — Prince Joyokusumo's House",
    role: {
      id: "Mitra santap kerajaan di Dalem Joyokusuman",
      en: "Royal dining partner at Dalem Joyokusuman",
    },
    permissionGranted: true,
  },
  {
    name: "Batik Darmo",
    role: {
      id: "Mitra lokakarya batik tulis dan lukis batik",
      en: "Batik tulis and batik painting workshop partner",
    },
    permissionGranted: true,
  },
  {
    name: "Batik Luwes-Luwes",
    role: {
      id: "Mitra lokakarya batik",
      en: "Batik workshop partner",
    },
    permissionGranted: true,
  },
  {
    name: "Bregada Rotowijaya",
    role: {
      id: "Mitra jemparingan dan olahraga tradisional",
      en: "Jemparingan archery and traditional sports partner",
    },
    permissionGranted: true,
  },
  {
    name: "Sanggar Seni Gejog Lesung Puspa Swara",
    role: {
      id: "Mitra kesenian musik dan tari tradisional",
      en: "Traditional music and dance arts partner",
    },
    permissionGranted: true,
  },
  {
    name: "Bale Seni Condroradono",
    role: {
      id: "Mitra kesenian tari",
      en: "Dance arts partner",
    },
    permissionGranted: true,
  },
  {
    name: "Bakpia 99",
    role: {
      id: "Mitra oleh-oleh dan kuliner khas Kadipaten",
      en: "Kadipaten specialty snacks and culinary partner",
    },
    permissionGranted: true,
  },
  {
    name: "Kampung Wisata Kadipaten",
    role: {
      id: "Pengelola program Kampung Wisata Kadipaten",
      en: "Managing organization of the Kadipaten Tourism Village program",
    },
    permissionGranted: true,
  },
  {
    name: "Rintisan Kelurahan Budaya Raksaka Budhaya",
    role: {
      id: "Mitra inisiatif kelurahan budaya",
      en: "Cultural village initiative partner",
    },
    permissionGranted: true,
  },
  {
    name: "Karang Taruna Adipati Anom",
    role: {
      id: "Mitra organisasi kepemudaan Kadipaten",
      en: "Kadipaten youth organization partner",
    },
    permissionGranted: true,
  },
  {
    name: "Jamaah Muda-Mudi Ash-Habul Kahfi",
    role: {
      id: "Mitra komunitas pemuda-pemudi",
      en: "Youth community partner",
    },
    permissionGranted: true,
  },
  {
    name: "Forum Bank Sampah Kelurahan Kadipaten",
    role: {
      id: "Mitra pengelolaan lingkungan dan bank sampah",
      en: "Waste bank and environmental management partner",
    },
    permissionGranted: true,
  },
  {
    name: "OMM 114 Dalem Kaneman",
    role: {
      id: "Mitra komunitas di Dalem Kaneman",
      en: "Community partner at Dalem Kaneman",
    },
    permissionGranted: true,
  },
  {
    name: "YSAB",
    role: {
      id: "Mitra komunitas Kadipaten",
      en: "Kadipaten community partner",
    },
    permissionGranted: true,
  },
  {
    name: "Kelompok Tani Kencana Asri",
    role: {
      id: "Mitra kelompok tani, homestay, dan cinderamata",
      en: "Farmer group, homestay, and souvenir partner",
    },
    permissionGranted: true,
  },
  {
    name: "Hangabehi and Co",
    role: {
      id: "Mitra usaha kreatif",
      en: "Creative business partner",
    },
    permissionGranted: true,
  },
  {
    name: "Kalithi Wedding & Art Organizer",
    role: {
      id: "Mitra penyelenggara acara dan kesenian",
      en: "Wedding and art event organizer partner",
    },
    permissionGranted: true,
  },
  {
    name: "Meyva",
    role: {
      id: "Mitra kerajinan baju batik, lurik, dan cinderamata",
      en: "Batik and lurik clothing and souvenir craft partner",
    },
    permissionGranted: true,
  },
  {
    name: "Dalem Pakuningratan",
    role: {
      id: "Mitra kediaman heritage dan sentra permainan tradisional",
      en: "Heritage residence and traditional games partner",
    },
    permissionGranted: true,
  },
  {
    name: "Cepuri — Dalem Benawan Gallery",
    role: {
      id: "Mitra galeri oleh-oleh di Dalem Benawan",
      en: "Souvenir gallery partner at Dalem Benawan",
    },
    permissionGranted: true,
  },
  {
    name: "AJ Bike Guest House",
    role: { id: "Mitra penginapan", en: "Accommodation partner" },
    permissionGranted: true,
  },
  {
    name: "Oemah Ardea Guest House",
    role: { id: "Mitra penginapan", en: "Accommodation partner" },
    permissionGranted: true,
  },
  {
    name: "E Kamar Jogja",
    role: { id: "Mitra penginapan", en: "Accommodation partner" },
    permissionGranted: true,
  },
  {
    name: "NOAH House",
    role: { id: "Mitra penginapan", en: "Accommodation partner" },
    permissionGranted: true,
  },
  {
    name: "The Tyasha",
    role: { id: "Mitra penginapan", en: "Accommodation partner" },
    permissionGranted: true,
  },
  {
    name: "Griyane Eyang Jogja",
    role: { id: "Mitra penginapan", en: "Accommodation partner" },
    permissionGranted: true,
  },
  {
    name: "D'SH Guest House",
    role: { id: "Mitra penginapan", en: "Accommodation partner" },
    permissionGranted: true,
  },
  {
    name: "Astuti Guest House",
    role: { id: "Mitra penginapan", en: "Accommodation partner" },
    permissionGranted: true,
  },
  {
    name: "House Of Kadipaten",
    role: { id: "Mitra penginapan", en: "Accommodation partner" },
    permissionGranted: true,
  },
  {
    name: "Griya Narini",
    role: { id: "Mitra penginapan", en: "Accommodation partner" },
    permissionGranted: true,
  },
  {
    name: "Ngasem 81",
    role: { id: "Mitra penginapan", en: "Accommodation partner" },
    permissionGranted: true,
  },
  {
    name: "Kataka Kadipaten",
    role: { id: "Mitra kuliner", en: "Culinary partner" },
    permissionGranted: true,
  },
  {
    name: "Dapoer Yubas",
    role: { id: "Mitra kuliner", en: "Culinary partner" },
    permissionGranted: true,
  },
  {
    name: "Dapur Yulia",
    role: { id: "Mitra kuliner", en: "Culinary partner" },
    permissionGranted: true,
  },
  {
    name: "Semanak Coffee & Eatery",
    role: { id: "Mitra kuliner", en: "Culinary partner" },
    permissionGranted: true,
  },
  {
    name: "Kokies Bu Prodjo",
    role: { id: "Mitra kuliner", en: "Culinary partner" },
    permissionGranted: true,
  },
];
