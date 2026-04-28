export type EbookCategory = {
  id: string;
  label: string;
  labelUrdu: string;
  color: string;
  bg: string;
};

export const categories: EbookCategory[] = [
  { id: "hajj-umrah", label: "Hajj & Umrah",              labelUrdu: "سفرِ سعادت",      color: "#0d9488", bg: "#ccfbf1" },
  { id: "ziyarat",    label: "Ziyarat & Heritage",        labelUrdu: "تاریخ و زیارات",   color: "#4f46e5", bg: "#e0e7ff" },
  { id: "finance",    label: "Islamic Finance",           labelUrdu: "حلال معیشت",       color: "#d97706", bg: "#fef3c7" },
  { id: "lifestyle",  label: "Islamic Lifestyle",         labelUrdu: "طرزِ زندگی",        color: "#e11d48", bg: "#ffe4e6" },
  { id: "parenting",  label: "Muslim Parenting",          labelUrdu: "تربیتِ اولاد",      color: "#7c3aed", bg: "#ede9fe" },
  { id: "health",     label: "Health & Wellness",         labelUrdu: "صحت و تندرستی",    color: "#059669", bg: "#d1fae5" },
];

export type Ebook = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  categoryLabel: string;
  price: string;
  featured?: boolean;
};

export const ebooks: Ebook[] = [
  // Category 1: Hajj & Umrah
  {
    id: 1, title: "Baghair Agent Hajj", subtitle: "Apna package khud banayen aur lakhon bachayen",
    description: "Kisi agent ki zaroorat ke baghair apna Hajj package khud design karen. Visa, accommodation, transport aur ziarat ka step-by-step mukammal guide. Lakhon rupay ki guaranteed bachat ke saath peer-tested rahnumai.",
    category: "hajj-umrah", categoryLabel: "Hajj & Umrah", price: "PKR 1,200", featured: true,
  },
  {
    id: 2, title: "Nanhe Zaireen", subtitle: "Bachon ke saath Umrah aur Hajj ka mukammal tareeqa",
    description: "Chhote bacchon ke saath Haramain Sharifain ki ziyarat ka har pehlu cover kiya gaya hai. Ihram, tavaf, sa'ee aur unke liye special duas ka practical aur dil-kash guide.",
    category: "hajj-umrah", categoryLabel: "Hajj & Umrah", price: "PKR 900", featured: true,
  },
  {
    id: 3, title: "Khidmat-e-Walidain", subtitle: "Buzurgon ke saath Umrah ka sahal tareeqa",
    description: "Budhape mein beemar ya kamzor walidain ke saath Umrah kaise mukammal karen. Wheelchair services, special arrangements aur jiski zaroorat hai her woh cheez in detail.",
    category: "hajj-umrah", categoryLabel: "Hajj & Umrah", price: "PKR 1,000",
  },
  {
    id: 4, title: "Tanha Umrah", subtitle: "Khawateen ke liye self-guide aur mukammal tariqa-e-kar",
    description: "Akeli khawateen ke liye Umrah ka mufassal aur mahfooz guide. Mehram ki zaroorat, visa rules, qiyam, transport aur ibadat — sab kuch aik jaga.",
    category: "hajj-umrah", categoryLabel: "Hajj & Umrah", price: "PKR 1,100", featured: true,
  },
  {
    id: 5, title: "Umrah Budget Hacks", subtitle: "Adhi qeemat mein Umrah karne ke makhfi tareeqe",
    description: "Saste flights, budget hotels, local food aur smart planning se Umrah ko aadha kharche mein mukammal karo. Real tested tips jo agent kabhi nahi batata.",
    category: "hajj-umrah", categoryLabel: "Hajj & Umrah", price: "PKR 800",
  },
  {
    id: 6, title: "Haramain Express", subtitle: "Ticket, rasta aur safar ki mukammal maloomat",
    description: "Makkah-Madinah Haramain Train, SAPTCO buses, taxi apps aur local transport ka mukammal guide. Waqt aur paise dono bachao.",
    category: "hajj-umrah", categoryLabel: "Hajj & Umrah", price: "PKR 700",
  },
  {
    id: 7, title: "Saudi Arab Food Directory", subtitle: "Behtareen desi khano ka pata",
    description: "Makkah, Madinah, Jeddah mein Pakistani, Indian aur Bangladeshi halal khane dhoondhne ka aasaan faisla. 100+ restaurants ki list with ratings.",
    category: "hajj-umrah", categoryLabel: "Hajj & Umrah", price: "PKR 600",
  },

  // Category 2: Ziyarat & Heritage
  {
    id: 8, title: "Quds ki Pukaar", subtitle: "Palestine ki ziyarat aur mukammal safari guide",
    description: "Masjid Al-Aqsa, Qubbatus Sakhra aur Jerusalem ki saari tareeqi maqamaat ka mukammal raasta. Visa, rihayish aur ibadat ka poora plan.",
    category: "ziyarat", categoryLabel: "Ziyarat & Heritage", price: "PKR 1,300", featured: true,
  },
  {
    id: 9, title: "Turkiye ka Safar", subtitle: "Istanbul se Konya tak Islami wirsay ki sair",
    description: "Ayasofya, Topkapi, Konya Rumi dargah aur Ottoman qile — Turkey ke Islami mahaarat ka 14-day itinerary. Budget aur luxury dono options.",
    category: "ziyarat", categoryLabel: "Ziyarat & Heritage", price: "PKR 1,400",
  },
  {
    id: 10, title: "Sarzameen-e-Anbiya", subtitle: "Misr ki tareekhi aur ruhani ziyarat ka raasta",
    description: "Egypt mein Masjid Amr ibn al-As, Islamic Cairo, Sinai aur Hazrat Moosa (AS) ke maqamaat ki guided spiritual tour.",
    category: "ziyarat", categoryLabel: "Ziyarat & Heritage", price: "PKR 1,200",
  },
  {
    id: 11, title: "Iran ki Ziyaratein", subtitle: "Mashhad, Qom aur Tehran ka mukammal guide",
    description: "Imam Raza (AS) dargah, Fatima Masuma (SA) mazar aur Tehran ke tareeky masjid. Visa, rihayish, ziyarat ka schedule.",
    category: "ziyarat", categoryLabel: "Ziyarat & Heritage", price: "PKR 1,100",
  },
  {
    id: 12, title: "Shaam o Jordan", subtitle: "Muqaddas maqamaat aur qadeem tareekh ka safar",
    description: "Petra, Wadi Rum, Hazrat Yahya (AS) mazar, Masjid Umawi — Shaam aur Jordan ka dual-country Islamic itinerary.",
    category: "ziyarat", categoryLabel: "Ziyarat & Heritage", price: "PKR 1,300",
  },
  {
    id: 13, title: "Samarkand o Bukhara", subtitle: "Wasti Asia ke azeem wirsay ki sair",
    description: "Imam Bukhari mazar, Shah-i-Zinda, Registan complex aur Timur ka maqbara — Central Asia ka 10-day Islamic heritage tour.",
    category: "ziyarat", categoryLabel: "Ziyarat & Heritage", price: "PKR 1,200", featured: true,
  },
  {
    id: 14, title: "Cheen ke Musalman", subtitle: "Chinese Musalmanon ki 1400 saala tareekh",
    description: "Xi'an Grand Mosque, Hui Musalmano ki tareekh, Silk Road ka Islami safar aur aaj ke Chinese Muslims ki zindagi.",
    category: "ziyarat", categoryLabel: "Ziyarat & Heritage", price: "PKR 1,000",
  },

  // Category 3: Islamic Finance
  {
    id: 15, title: "Saudi Arab Business Guide", subtitle: "Halal tareeqe se munafa kaise kamayen",
    description: "Saudi Vision 2030, Iqama business visa, halal investment aur Riyadh-Jeddah-Dammam mein business start karne ka step-by-step guide.",
    category: "finance", categoryLabel: "Islamic Finance", price: "PKR 1,500", featured: true,
  },
  {
    id: 16, title: "Umrah Fund", subtitle: "Aik saal mein 5 lakh bachane ka mansuba",
    description: "Rozana 1,370 rupay bacha ke 12 mahine mein poora Umrah fund kaise complete karen. Zero interest savings plan aur halal investment strategies.",
    category: "finance", categoryLabel: "Islamic Finance", price: "PKR 800",
  },
  {
    id: 17, title: "Beroon-e-Mulk Naukri", subtitle: "Halal job aur visa hasil karne ka tareeqa",
    description: "Saudi, UAE, Qatar, Malaysia mein halal naukri dhoondhne, visa apply karne aur pehle 6 mahine survive karne ka mufassal guide.",
    category: "finance", categoryLabel: "Islamic Finance", price: "PKR 1,000",
  },
  {
    id: 18, title: "Digital Nomad Musalman", subtitle: "Ghar baithe alami satah par kamayen",
    description: "Freelancing, online business aur remote work ke zariye ghar baithay dollar income — halal methods, sharia-compliant contracts.",
    category: "finance", categoryLabel: "Islamic Finance", price: "PKR 1,200", featured: true,
  },
  {
    id: 19, title: "Sood se Pak Ghar", subtitle: "Islami financing ka asaan tareeqa",
    description: "Bank sood ke baghair ghar kaise khariden — Murabaha, Musharaka aur Islamic banking products ka practical guide Pakistan ke liye.",
    category: "finance", categoryLabel: "Islamic Finance", price: "PKR 900",
  },

  // Category 4: Islamic Lifestyle
  {
    id: 20, title: "Ramzan Master Plan", subtitle: "Ibadat, khorak aur waqt ki tanzim",
    description: "Ramzan ka 30-day complete planner — Tahajjud se Iftar tak, Quran khatam se Aitikaf tak. Nutrition, energy aur spiritual peak ka balance.",
    category: "lifestyle", categoryLabel: "Islamic Lifestyle", price: "PKR 900", featured: true,
  },
  {
    id: 21, title: "Aik Saal Mein Hifz-e-Quran", subtitle: "Har umar ke liye asaan plan",
    description: "Bache, jawaan aur budhay — sabke liye 365-day Hifz plan. Memory techniques, repeat schedule aur daily 20-minute system.",
    category: "lifestyle", categoryLabel: "Islamic Lifestyle", price: "PKR 1,000",
  },
  {
    id: 22, title: "Kamil Namaz", subtitle: "Wazu se salam tak har rukan ki durusti",
    description: "Namaz ki har harkaat, tilawat aur dua ka tajweedi aur fiqhi correction. Hadith references ke saath illustrated guide.",
    category: "lifestyle", categoryLabel: "Islamic Lifestyle", price: "PKR 800",
  },
  {
    id: 23, title: "Subah 4 Baje ka Jadu", subtitle: "Fajr ki barkat se din ka aghaz",
    description: "Fajr se pehle uthne ka 21-day challenge, Tahajjud ki barkat, morning azkar aur productivity ka Islami formula.",
    category: "lifestyle", categoryLabel: "Islamic Lifestyle", price: "PKR 700", featured: true,
  },
  {
    id: 24, title: "Masnoon Duayein aur Wazaif", subtitle: "Har mushkil ka Qurani hal",
    description: "200+ masnoon duayen roznama zindagi ke liye — safar, khaana, ghar, karobar aur beemari. Arabic, Roman Urdu aur Urdu tarjuma.",
    category: "lifestyle", categoryLabel: "Islamic Lifestyle", price: "PKR 750",
  },
  {
    id: 25, title: "Islami Home Design", subtitle: "Sunnat ke mutabiq ghar ki araish",
    description: "Ghar ka layout, rang, decoration aur furniture — Islami usoolon ke mutabiq. Tasweer, muzak aur haram cheezoon se bachne ka guide.",
    category: "lifestyle", categoryLabel: "Islamic Lifestyle", price: "PKR 850",
  },

  // Category 5: Muslim Parenting
  {
    id: 26, title: "Namazi Bache", subtitle: "30 din mein bachon ko namaz ka aadi banayen",
    description: "7 saal se 15 saal ke bachon ke liye namaz ki aadat dalne ka 30-day proven system. Fun activities, rewards aur Islamic stories.",
    category: "parenting", categoryLabel: "Muslim Parenting", price: "PKR 900", featured: true,
  },
  {
    id: 27, title: "Mubarak Naam", subtitle: "Bachon ke naam, maani aur sahi talaffuz",
    description: "1000+ Islami naam, unke arabi maani aur Urdu talaffuz. Sahabah, Sahabiyaat aur Anbiya ke naamon ki complete list.",
    category: "parenting", categoryLabel: "Muslim Parenting", price: "PKR 700",
  },
  {
    id: 28, title: "Digital Tarbiyat", subtitle: "Bachon ka screen time aur halal mutabadil",
    description: "Smartphone addiction se bachao, halal educational apps, YouTube alternatives aur ghar mein digital balance — parents ke liye.",
    category: "parenting", categoryLabel: "Muslim Parenting", price: "PKR 950", featured: true,
  },
  {
    id: 29, title: "Betiyon ki Parwarish", subtitle: "Haya, ilm aur khud-atemadi ka imtizaj",
    description: "Betiyon mein deen, haya, confidence aur modern education ka balance. Rishte ki tarbiyat aur ghar ki rani banane ka guide.",
    category: "parenting", categoryLabel: "Muslim Parenting", price: "PKR 900",
  },
  {
    id: 30, title: "Barkat wala Schedule", subtitle: "Musalman khandan ka misali timetable",
    description: "Poore khandan ke liye Fajr se Isha tak ka barakti schedule — khaana, ibadat, taleem, khail aur aaraam ka Islami balance.",
    category: "parenting", categoryLabel: "Muslim Parenting", price: "PKR 800",
  },

  // Category 6: Health & Wellness
  {
    id: 31, title: "Tibb-e-Nabwi", subtitle: "30 din mein mukammal jismani safai aur sehat",
    description: "Kalonji, shahad, zeit-ul-zaitoon aur Nabi ke bataye dawao ka medical research ke saath mukammal 30-day detox protocol.",
    category: "health", categoryLabel: "Health & Wellness", price: "PKR 1,000", featured: true,
  },
  {
    id: 32, title: "Halal Fitness", subtitle: "Sunnat ke mutabiq wazan kam karne ka tareeqa",
    description: "Islam-approved workout routine, halal supplements aur Nabi ki sunnat par mabni diet plan. Men & women dono ke liye.",
    category: "health", categoryLabel: "Health & Wellness", price: "PKR 900",
  },
  {
    id: 33, title: "Haram ke liye Fitness", subtitle: "Umrah aur Hajj ki jismani tayyari",
    description: "Hajj aur Umrah ke liye 3 mahine ka pre-trip fitness plan — walking stamina, heat tolerance aur 10+ km daily walking ki tayari.",
    category: "health", categoryLabel: "Health & Wellness", price: "PKR 800", featured: true,
  },
  {
    id: 34, title: "Pakistani Food Guide", subtitle: "50 shehron ke behtareen halal khane",
    description: "Pakistan ke 50 shehron mein certified halal, hygienic aur mazedaar khane ki best places. Hidden gems aur local favorites.",
    category: "health", categoryLabel: "Health & Wellness", price: "PKR 700",
  },
  {
    id: 35, title: "Ruhani Sukoon", subtitle: "Depression aur be-chaini ka Qurani ilaj",
    description: "Anxiety, depression aur gham ka Qurani aur tibbi ilaj. Ayat-e-Shifa, masnoon duayen aur daily Islami therapy ka 40-day program.",
    category: "health", categoryLabel: "Health & Wellness", price: "PKR 950",
  },
];

export const featuredEbooks = ebooks.filter((b) => b.featured);

export const getEbooksByCategory = (categoryId: string) =>
  ebooks.filter((b) => b.category === categoryId);
