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
  { id: "quran-study",label: "Quran Studies",             labelUrdu: "قرآن پاک",         color: "#1e3a5f", bg: "#dbeafe" },
  { id: "hadith",     label: "Hadith & Sunnah",           labelUrdu: "حدیث و سنت",        color: "#b45309", bg: "#fef3c7" },
  { id: "seerah",     label: "Seerah & History",          labelUrdu: "سیرت و تاریخ",      color: "#701a75", bg: "#fae8ff" },
  { id: "aqeedah",    label: "Aqeedah & Beliefs",         labelUrdu: "عقیدہ و ایمان",     color: "#1e40af", bg: "#dbeafe" },
  { id: "duas",       label: "Duas & Dhikr",              labelUrdu: "دعائیں اور اذکار",  color: "#047857", bg: "#d1fae5" },
  { id: "kids",       label: "Islamic Kids",              labelUrdu: "اسلامی بچوں کی کتابیں", color: "#db2777", bg: "#fce7f3" },
  { id: "women",      label: "Muslim Women",              labelUrdu: "مسلمان خاتون",      color: "#be185d", bg: "#fce7f3" },
  { id: "youth",      label: "Youth & Students",          labelUrdu: "نوجوان و طلباء",    color: "#2563eb", bg: "#dbeafe" },
  { id: "cooking",    label: "Islamic Cooking",           labelUrdu: "اسلامی پکوان",      color: "#ea580c", bg: "#ffedd5" },
  { id: "death",      label: "Death & Afterlife",         labelUrdu: "موت اور آخرت",      color: "#475569", bg: "#f1f5f9" },
  { id: "dawah",      label: "Dawah & Outreach",          labelUrdu: "دعوت و تبلیغ",      color: "#0891b2", bg: "#cffafe" },
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
  // ─── Category 1: Hajj & Umrah (8 books, 3 featured) ───
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
    description: "Budhape mein beemar ya kamzor walidain ke saath Umrah kaise mukammal karen. Wheelchair services, special arrangements aur jinki zaroorat hai her woh cheez in detail.",
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
    id: 7, title: "Hajj Day by Day", subtitle: "8 Zilhijja se 13 Zilhijja tak har lamha",
    description: "Hajj ke 5 dinon ka hour-by-hour planner — ihram se qurbani tak. Har rukan ki fiqhi detail, masnoon duayen aur common galtiyon se bachao.",
    category: "hajj-umrah", categoryLabel: "Hajj & Umrah", price: "PKR 1,000",
  },
  {
    id: 8, title: "Zam Zam aur Science", subtitle: "Zamzam pani ki tibbi tahqeeq aur barkat",
    description: "Zamzam ke paani ki modern science research, iski minerals, energy properties aur jismani o ruhani fawaid ka mufassal jaiza.",
    category: "hajj-umrah", categoryLabel: "Hajj & Umrah", price: "PKR 750",
  },

  // ─── Category 2: Ziyarat & Heritage (8 books, 3 featured) ───
  {
    id: 9, title: "Quds ki Pukaar", subtitle: "Palestine ki ziyarat aur mukammal safari guide",
    description: "Masjid Al-Aqsa, Qubbatus Sakhra aur Jerusalem ki saari tareeqi maqamaat ka mukammal raasta. Visa, rihayish aur ibadat ka poora plan.",
    category: "ziyarat", categoryLabel: "Ziyarat & Heritage", price: "PKR 1,300", featured: true,
  },
  {
    id: 10, title: "Turkiye ka Safar", subtitle: "Istanbul se Konya tak Islami wirsay ki sair",
    description: "Ayasofya, Topkapi, Konya Rumi dargah aur Ottoman qile — Turkey ke Islami mahaarat ka 14-day itinerary. Budget aur luxury dono options.",
    category: "ziyarat", categoryLabel: "Ziyarat & Heritage", price: "PKR 1,400",
  },
  {
    id: 11, title: "Sarzameen-e-Anbiya", subtitle: "Misr ki tareekhi aur ruhani ziyarat ka raasta",
    description: "Egypt mein Masjid Amr ibn al-As, Islamic Cairo, Sinai aur Hazrat Moosa (AS) ke maqamaat ki guided spiritual tour.",
    category: "ziyarat", categoryLabel: "Ziyarat & Heritage", price: "PKR 1,200",
  },
  {
    id: 12, title: "Iran ki Ziyaratein", subtitle: "Mashhad, Qom aur Tehran ka mukammal guide",
    description: "Imam Raza (AS) dargah, Fatima Masuma (SA) mazar aur Tehran ke tareeky masjid. Visa, rihayish, ziyarat ka schedule.",
    category: "ziyarat", categoryLabel: "Ziyarat & Heritage", price: "PKR 1,100",
  },
  {
    id: 13, title: "Shaam o Jordan", subtitle: "Muqaddas maqamaat aur qadeem tareekh ka safar",
    description: "Petra, Wadi Rum, Hazrat Yahya (AS) mazar, Masjid Umawi — Shaam aur Jordan ka dual-country Islamic itinerary.",
    category: "ziyarat", categoryLabel: "Ziyarat & Heritage", price: "PKR 1,300", featured: true,
  },
  {
    id: 14, title: "Samarkand o Bukhara", subtitle: "Wasti Asia ke azeem wirsay ki sair",
    description: "Imam Bukhari mazar, Shah-i-Zinda, Registan complex aur Timur ka maqbara — Central Asia ka 10-day Islamic heritage tour.",
    category: "ziyarat", categoryLabel: "Ziyarat & Heritage", price: "PKR 1,200", featured: true,
  },
  {
    id: 15, title: "Cheen ke Musalman", subtitle: "Chinese Musalmanon ki 1400 saala tareekh",
    description: "Xi'an Grand Mosque, Hui Musalmano ki tareekh, Silk Road ka Islami safar aur aaj ke Chinese Muslims ki zindagi.",
    category: "ziyarat", categoryLabel: "Ziyarat & Heritage", price: "PKR 1,000",
  },
  {
    id: 16, title: "Andalus ki Yaad", subtitle: "Spain mein Islami taamir ka 800 saala safar",
    description: "Alhambra, Cordoba Mosque, Seville aur Granada — Spain ke Islamic civilization ki tareekh aur un maqamaat ka ziyarat guide.",
    category: "ziyarat", categoryLabel: "Ziyarat & Heritage", price: "PKR 1,250",
  },

  // ─── Category 3: Islamic Finance (7 books, 2 featured) ───
  {
    id: 17, title: "Saudi Arab Business Guide", subtitle: "Halal tareeqe se munafa kaise kamayen",
    description: "Saudi Vision 2030, Iqama business visa, halal investment aur Riyadh-Jeddah-Dammam mein business start karne ka step-by-step guide.",
    category: "finance", categoryLabel: "Islamic Finance", price: "PKR 1,500", featured: true,
  },
  {
    id: 18, title: "Umrah Fund", subtitle: "Aik saal mein 5 lakh bachane ka mansuba",
    description: "Rozana 1,370 rupay bacha ke 12 mahine mein poora Umrah fund kaise complete karen. Zero interest savings plan aur halal investment strategies.",
    category: "finance", categoryLabel: "Islamic Finance", price: "PKR 800",
  },
  {
    id: 19, title: "Beroon-e-Mulk Naukri", subtitle: "Halal job aur visa hasil karne ka tareeqa",
    description: "Saudi, UAE, Qatar, Malaysia mein halal naukri dhoondhne, visa apply karne aur pehle 6 mahine survive karne ka mufassal guide.",
    category: "finance", categoryLabel: "Islamic Finance", price: "PKR 1,000",
  },
  {
    id: 20, title: "Digital Nomad Musalman", subtitle: "Ghar baithe alami satah par kamayen",
    description: "Freelancing, online business aur remote work ke zariye ghar baithay dollar income — halal methods, sharia-compliant contracts.",
    category: "finance", categoryLabel: "Islamic Finance", price: "PKR 1,200", featured: true,
  },
  {
    id: 21, title: "Sood se Pak Ghar", subtitle: "Islami financing ka asaan tareeqa",
    description: "Bank sood ke baghair ghar kaise khariden — Murabaha, Musharaka aur Islamic banking products ka practical guide Pakistan ke liye.",
    category: "finance", categoryLabel: "Islamic Finance", price: "PKR 900",
  },
  {
    id: 22, title: "Mahr aur Shaadi", subtitle: "Islami tohfa, kharcha aur maali hifazat",
    description: "Mahr ki fiqhi haisiyat, shaadi ke maasi masail, dowry se bachao aur naye jode ke liye budget planner aur sharia-compliant plan.",
    category: "finance", categoryLabel: "Islamic Finance", price: "PKR 850",
  },
  {
    id: 23, title: "Fitrana aur Zakat Calculator", subtitle: "Har saal ki zakat asaan hisaab",
    description: "Gold, silver, cash, property aur business par zakat ka hisaab. Fitrana, sadqa-e-fitr aur nisab ki maloomat ke saath yearly planner.",
    category: "finance", categoryLabel: "Islamic Finance", price: "PKR 700",
  },

  // ─── Category 4: Islamic Lifestyle (7 books, 2 featured) ───
  {
    id: 24, title: "Ramzan Master Plan", subtitle: "Ibadat, khorak aur waqt ki tanzim",
    description: "Ramzan ka 30-day complete planner — Tahajjud se Iftar tak, Quran khatam se Aitikaf tak. Nutrition, energy aur spiritual peak ka balance.",
    category: "lifestyle", categoryLabel: "Islamic Lifestyle", price: "PKR 900", featured: true,
  },
  {
    id: 25, title: "Aik Saal Mein Hifz-e-Quran", subtitle: "Har umar ke liye asaan plan",
    description: "Bache, jawaan aur budhay — sabke liye 365-day Hifz plan. Memory techniques, repeat schedule aur daily 20-minute system.",
    category: "lifestyle", categoryLabel: "Islamic Lifestyle", price: "PKR 1,000",
  },
  {
    id: 26, title: "Kamil Namaz", subtitle: "Wazu se salam tak har rukan ki durusti",
    description: "Namaz ki har harkaat, tilawat aur dua ka tajweedi aur fiqhi correction. Hadith references ke saath illustrated guide.",
    category: "lifestyle", categoryLabel: "Islamic Lifestyle", price: "PKR 800",
  },
  {
    id: 27, title: "Subah 4 Baje ka Jadu", subtitle: "Fajr ki barkat se din ka aghaz",
    description: "Fajr se pehle uthne ka 21-day challenge, Tahajjud ki barkat, morning azkar aur productivity ka Islami formula.",
    category: "lifestyle", categoryLabel: "Islamic Lifestyle", price: "PKR 700", featured: true,
  },
  {
    id: 28, title: "Masnoon Duayein aur Wazaif", subtitle: "Har mushkil ka Qurani hal",
    description: "200+ masnoon duayen roznama zindagi ke liye — safar, khaana, ghar, karobar aur beemari. Arabic, Roman Urdu aur Urdu tarjuma.",
    category: "lifestyle", categoryLabel: "Islamic Lifestyle", price: "PKR 750",
  },
  {
    id: 29, title: "Islami Home Design", subtitle: "Sunnat ke mutabiq ghar ki araish",
    description: "Ghar ka layout, rang, decoration aur furniture — Islami usoolon ke mutabiq. Tasweer, muzak aur haram cheezoon se bachne ka guide.",
    category: "lifestyle", categoryLabel: "Islamic Lifestyle", price: "PKR 850",
  },
  {
    id: 30, title: "Tasbeeh Digital Detox", subtitle: "30 din mein phone se azadi ka plan",
    description: "Social media addiction se nijaat ka 30-day Islami detox. Phone usage ko kam karke zikr, Quran aur family time barhane ka proven system.",
    category: "lifestyle", categoryLabel: "Islamic Lifestyle", price: "PKR 650",
  },

  // ─── Category 5: Muslim Parenting (7 books, 2 featured) ───
  {
    id: 31, title: "Namazi Bache", subtitle: "30 din mein bachon ko namaz ka aadi banayen",
    description: "7 saal se 15 saal ke bachon ke liye namaz ki aadat dalne ka 30-day proven system. Fun activities, rewards aur Islamic stories.",
    category: "parenting", categoryLabel: "Muslim Parenting", price: "PKR 900", featured: true,
  },
  {
    id: 32, title: "Mubarak Naam", subtitle: "Bachon ke naam, maani aur sahi talaffuz",
    description: "1000+ Islami naam, unke arabi maani aur Urdu talaffuz. Sahabah, Sahabiyaat aur Anbiya ke naamon ki complete list.",
    category: "parenting", categoryLabel: "Muslim Parenting", price: "PKR 700",
  },
  {
    id: 33, title: "Digital Tarbiyat", subtitle: "Bachon ka screen time aur halal mutabadil",
    description: "Smartphone addiction se bachao, halal educational apps, YouTube alternatives aur ghar mein digital balance — parents ke liye.",
    category: "parenting", categoryLabel: "Muslim Parenting", price: "PKR 950", featured: true,
  },
  {
    id: 34, title: "Betiyon ki Parwarish", subtitle: "Haya, ilm aur khud-atemadi ka imtizaj",
    description: "Betiyon mein deen, haya, confidence aur modern education ka balance. Rishte ki tarbiyat aur ghar ki rani banane ka guide.",
    category: "parenting", categoryLabel: "Muslim Parenting", price: "PKR 900",
  },
  {
    id: 35, title: "Barkat wala Schedule", subtitle: "Musalman khandan ka misali timetable",
    description: "Poore khandan ke liye Fajr se Isha tak ka barakti schedule — khaana, ibadat, taleem, khail aur aaraam ka Islami balance.",
    category: "parenting", categoryLabel: "Muslim Parenting", price: "PKR 800",
  },
  {
    id: 36, title: "Bachon ke liye Seerah Comics", subtitle: "Rangeen tasweeron mein Nabi ki zindagi",
    description: "Bachon ke liye illustrated Seerah stories — Nabi ki paidaish se Wahi tak. Har page par rang, har qissay par sabak. 8+ saal ke bachon ke liye ideal.",
    category: "parenting", categoryLabel: "Muslim Parenting", price: "PKR 1,100",
  },
  {
    id: 37, title: "Teenagers ki Tarbiyat", subtitle: "13 se 19 saal ke naujawanon ki rahnumai",
    description: "Daur-e-jadeed ke teenagers ke liye Islami tarbiyat — dosti, career, shadi, deen aur dunya ka balance. Parents aur teachers dono ke liye.",
    category: "parenting", categoryLabel: "Muslim Parenting", price: "PKR 950",
  },

  // ─── Category 6: Health & Wellness (7 books, 2 featured) ───
  {
    id: 38, title: "Tibb-e-Nabwi", subtitle: "30 din mein mukammal jismani safai aur sehat",
    description: "Kalonji, shahad, zeit-ul-zaitoon aur Nabi ke bataye dawao ka medical research ke saath mukammal 30-day detox protocol.",
    category: "health", categoryLabel: "Health & Wellness", price: "PKR 1,000", featured: true,
  },
  {
    id: 39, title: "Halal Fitness", subtitle: "Sunnat ke mutabiq wazan kam karne ka tareeqa",
    description: "Islam-approved workout routine, halal supplements aur Nabi ki sunnat par mabni diet plan. Men & women dono ke liye.",
    category: "health", categoryLabel: "Health & Wellness", price: "PKR 900",
  },
  {
    id: 40, title: "Hajj Tayyari Fitness", subtitle: "Umrah aur Hajj ki jismani tayyari",
    description: "Hajj aur Umrah ke liye 3 mahine ka pre-trip fitness plan — walking stamina, heat tolerance aur 10+ km daily walking ki tayari.",
    category: "health", categoryLabel: "Health & Wellness", price: "PKR 800", featured: true,
  },
  {
    id: 41, title: "Pakistani Food Guide", subtitle: "50 shehron ke behtareen halal khane",
    description: "Pakistan ke 50 shehron mein certified halal, hygienic aur mazedaar khane ki best places. Hidden gems aur local favorites.",
    category: "health", categoryLabel: "Health & Wellness", price: "PKR 700",
  },
  {
    id: 42, title: "Ruhani Sukoon", subtitle: "Depression aur be-chaini ka Qurani ilaj",
    description: "Anxiety, depression aur gham ka Qurani aur tibbi ilaj. Ayat-e-Shifa, masnoon duayen aur daily Islami therapy ka 40-day program.",
    category: "health", categoryLabel: "Health & Wellness", price: "PKR 950",
  },
  {
    id: 43, title: "Hijrat ka Plan", subtitle: "Muslim mulkon mein naye ghar ka mansuba",
    description: "Pakistan se hijrat karne ka step-by-step guide — visa, naukri, qanoon, bachon ki taleem aur nayi community mein settle hone ka tareeqa.",
    category: "health", categoryLabel: "Health & Wellness", price: "PKR 1,100",
  },
  {
    id: 44, title: "Beemari aur Sabr", subtitle: "Bemar ho kar bhi deen par qaim rehna",
    description: "Chronic beemari, cancer, disability ke dauran Islami tareeqe se sabr aur shukr. Patient aur unke ghar walon ke liye ruhani support.",
    category: "health", categoryLabel: "Health & Wellness", price: "PKR 850",
  },

  // ─── Category 7: Quran Studies (7 books, 2 featured) ───
  {
    id: 45, title: "Surah Yaseen ki Tashreeh", subtitle: "Dil ki qalb ka har lafz maani ke saath",
    description: "Surah Yaseen ka word-by-word tarjuma, tafsir aur har ayat ki scientific explanation. Rozana parhne ka schedule aur fawaid ka mukammal bayan.",
    category: "quran-study", categoryLabel: "Quran Studies", price: "PKR 1,100", featured: true,
  },
  {
    id: 46, title: "30-Paray ka Tarjuma", subtitle: "Roman Urdu mein poora Quran samajhna",
    description: "Har Juz ka mukhtasir tarjuma aur asbaab-e-nuzul Roman Urdu mein. Jummah ke Jummah aik Juz parhne ka asaan plan.",
    category: "quran-study", categoryLabel: "Quran Studies", price: "PKR 1,300",
  },
  {
    id: 47, title: "Quran ka Safar", subtitle: "Wahi se Aaj tak ki 1400 saala dastan",
    description: "Quran ki tareekhi revelation, compilation, aur aaj tak ke safar ki dastan. Khilafat-e-Rashida se lekar digital age tak ki hifazat.",
    category: "quran-study", categoryLabel: "Quran Studies", price: "PKR 950",
  },
  {
    id: 48, title: "Tafseer ka Usool", subtitle: "Qurani ayat samajhne ke 10 qaaiday",
    description: "Tafsir parhne ke liye basic principles — sabab-e-nuzul, nasikh mansookh, muhkam mutashabeh aur fiqhi istidlal ka asaan course.",
    category: "quran-study", categoryLabel: "Quran Studies", price: "PKR 1,000", featured: true,
  },
  {
    id: 49, title: "Ijaz-e-Quran", subtitle: "Qurani lafzon ki taseer aur rohani taqat",
    description: "Qurani haroof ki rohani aur jismani taseer, ruqya ke masail, aur her ayat se nijaat ka tareeqa. Authentic references ke saath.",
    category: "quran-study", categoryLabel: "Quran Studies", price: "PKR 900",
  },
  {
    id: 50, title: "Qurani Duaon ka Majmua", subtitle: "Quran se nikli hui behtareen duayen",
    description: "Quran mein maujood 100+ duayen har maqam ke liye — nijaat, rehmat, ilm, sabr, maafi. Arabic text, tarjuma aur fazilat.",
    category: "quran-study", categoryLabel: "Quran Studies", price: "PKR 800",
  },
  {
    id: 51, title: "Aik Ruku Rozana", subtitle: "Sal bhar mein Quran samajhne ka nizam",
    description: "Roz sirf aik ruku parhen aur uski tafsir samajhen. 365 din mein poora Quran cover karne ka practical aur sustainable plan.",
    category: "quran-study", categoryLabel: "Quran Studies", price: "PKR 750",
  },

  // ─── Category 8: Hadith & Sunnah (7 books, 2 featured) ───
  {
    id: 52, title: "40 Hadith-e-Nawawi", subtitle: "Har hadith ki mufassal tashreeh aur amal",
    description: "Imam Nawawi ki mashhur 40 hadith ka mufassal sharh. Har hadith ka matan, tarjuma, sharah aur aaj ke daur mein amal ka tareeqa.",
    category: "hadith", categoryLabel: "Hadith & Sunnah", price: "PKR 1,200", featured: true,
  },
  {
    id: 53, title: "Riyaz us Saliheen ka Khulasa", subtitle: "1800 hadith ka asaan khulasa",
    description: "Imam Nawawi ki Riyaz us Saliheen ke mukammal 19 baaab ka concise summary. Har bab ki top 10 ahadith aur unki practical application.",
    category: "hadith", categoryLabel: "Hadith & Sunnah", price: "PKR 1,100",
  },
  {
    id: 54, title: "Hadith ki Tashreeh ka Tareeqa", subtitle: "Sahih, Daif aur Maudu ki pehchan",
    description: "Hadith ki sanad aur matan ki scrutiny ka tareeqa. Sahih, Hasan, Daif aur Maudu ki pehchan — common doubts ka jawab.",
    category: "hadith", categoryLabel: "Hadith & Sunnah", price: "PKR 950",
  },
  {
    id: 55, title: "Sunnat ki Pehchan", subtitle: "Rozmarra zindagi mein 50 choti sunnatein",
    description: "Nabi ki 50 choti sunnatein jo rozana amal mein lai ja sakti hain — khana, peena, sona, uthna, safar aur ghar ke kaam. Illustrated guide.",
    category: "hadith", categoryLabel: "Hadith & Sunnah", price: "PKR 850", featured: true,
  },
  {
    id: 56, title: "Bukhari ke 100 Ahadith", subtitle: "Sahih Bukhari ki behtareen 100 riwayat",
    description: "Imam Bukhari ki top 100 ahadith — Aqeedah, Ibadat, Muamlaat aur Akhlaq par mabni. Har hadith ki context aur fazilat.",
    category: "hadith", categoryLabel: "Hadith & Sunnah", price: "PKR 1,000",
  },
  {
    id: 57, title: "Hadith aur Science", subtitle: "Modern science ki roshni mein Nabi ki batain",
    description: "1400 saal pehle Nabi (SAW) ki batayi hui baatein jo aaj modern science ne prove ki hain. 50+ amazing examples with research references.",
    category: "hadith", categoryLabel: "Hadith & Sunnah", price: "PKR 900",
  },
  {
    id: 58, title: "Silsila Sahiha", subtitle: "Sheikh Albani ki sahih ahadith ka mukammal set",
    description: "Sheikh Nasiruddin Albani ki Silsila as-Sahiha ka concise Roman Urdu edition. 5,000+ sahih ahadith ka topic-wise compilation.",
    category: "hadith", categoryLabel: "Hadith & Sunnah", price: "PKR 1,400",
  },

  // ─── Category 9: Seerah & History (7 books, 2 featured) ───
  {
    id: 59, title: "Khulafa-e-Rashideen", subtitle: "Char azeem hidayatkaroun ki 30 saala dastan",
    description: "Hazrat Abu Bakr, Umar, Usman aur Ali (RA) ki 30 saala khilafat ka mukammal tareekhi jaiza. Har khilafat ki reforms, jung aur taamir.",
    category: "seerah", categoryLabel: "Seerah & History", price: "PKR 1,300", featured: true,
  },
  {
    id: 60, title: "Seerah ka Dastan Go", subtitle: "Nabi ki zindagi qissagoi ke andaaz mein",
    description: "Makkah aur Madina ke 63 saal ka safar dastaan nawazi ke style mein. Bachon, naujawanon aur buzurgon ke liye equally dilchasp.",
    category: "seerah", categoryLabel: "Seerah & History", price: "PKR 1,100",
  },
  {
    id: 61, title: "Makkah ki Nazar se", subtitle: "Nabi ki paidaish se hijrat tak",
    description: "Makkah ka 40 saala daur — Nabi ki wiladat, Wahi ka aghaz, Tableegh ki sakhtiyan aur Hijrat ka mufassal waqiya-waar bayan.",
    category: "seerah", categoryLabel: "Seerah & History", price: "PKR 1,000",
  },
  {
    id: 62, title: "Madina ka Naya Savera", subtitle: "Hijrat se Wafat-e-Nabi tak",
    description: "Madina ki 10 saala daur — Constitution, Ghazawat, Conquests aur Nabi ka aakhri wasiatnama. Har ghazwa ka strategy aur nateeja.",
    category: "seerah", categoryLabel: "Seerah & History", price: "PKR 1,200", featured: true,
  },
  {
    id: 63, title: "Ghazawat ki Tareekh", subtitle: "27 jungon ki strategy aur sabak",
    description: "Nabi ki tamam ghazawat ka military, political aur spiritual analysis. Badr se Tabook tak — har jung ki tareekh, location aur sabak.",
    category: "seerah", categoryLabel: "Seerah & History", price: "PKR 1,150",
  },
  {
    id: 64, title: "Nabi ki Shakhsiyat", subtitle: "Aap ke akhlaq, guftagu aur muashrat",
    description: "Nabi (SAW) ki shakhsiyat ka har pehlu — hasna, roona, guftagu, muashrat, khana, pehana aur aap ka mizaj. Seerah se nikli hui batain.",
    category: "seerah", categoryLabel: "Seerah & History", price: "PKR 950",
  },
  {
    id: 65, title: "Seerah for Women", subtitle: "Khawateen ke liye Nabi ki zindagi ke sabak",
    description: "Khawateen ka Nabi ke daur mein kirdaar, Sahabiyaat ki zindagi, Nabi ki khawateen se muashrat aur unke liye khaas sabak.",
    category: "seerah", categoryLabel: "Seerah & History", price: "PKR 900",
  },

  // ─── Category 10: Aqeedah & Beliefs (7 books, 2 featured) ───
  {
    id: 66, title: "Tawheed ki Taaqat", subtitle: "Aik Allah par yaqeen ki zindagi badalne wali taqat",
    description: "Tawheed ki three types — Rububiyyah, Uluhiyyah, Asma wa Sifaat. Har qism ka ghar mein amal, common shubhaat ka jawab aur zindagi mein tabdeeli.",
    category: "aqeedah", categoryLabel: "Aqeedah & Beliefs", price: "PKR 1,000", featured: true,
  },
  {
    id: 67, title: "Jannat ka Ticket", subtitle: "Doosre din ki tayyari ka mukammal guide",
    description: "Qayamat ke din ke manazir, hisaab kitab, pul-e-sirat, Jannat aur Dozakh ki sachai. Aakhirat ki tayyari ka aik saal ka amali plan.",
    category: "aqeedah", categoryLabel: "Aqeedah & Beliefs", price: "PKR 1,100",
  },
  {
    id: 68, title: "Shirk se Bachao", subtitle: "Bari aur choti shirk ki pehchan aur ilaj",
    description: "Major aur minor shirk ki tafseel, tawaiz, jadoo, nazar, taawun aur riya ki pehchan. Ghar se shirk ka safaya karne ka amali guide.",
    category: "aqeedah", categoryLabel: "Aqeedah & Beliefs", price: "PKR 950", featured: true,
  },
  {
    id: 69, title: "Iman ke Arkan", subtitle: "6 arkan par mukammal yaqeen kaise paida karen",
    description: "Angels, Books, Prophets, Qiyamat, Taqdeer — har rukn ki fiqhi, philosophical aur scientific explanation. Shubhaat ka jawab.",
    category: "aqeedah", categoryLabel: "Aqeedah & Beliefs", price: "PKR 900",
  },
  {
    id: 70, title: "Qiyamat ki Nishaniyan", subtitle: "Choti aur bari nishaniyon ki tafseel",
    description: "Minor aur Major signs of Judgment Day ka mufassal bayan. Dajjal, Yajooj-Majooj, Mahdi, Isa (AS) ka nazool — sab kuch detail mein.",
    category: "aqeedah", categoryLabel: "Aqeedah & Beliefs", price: "PKR 1,050",
  },
  {
    id: 71, title: "Farishton ki Dunya", subtitle: "Allah ke payghambar farishton ki haqeeqat",
    description: "Jibreel, Mikaeel, Israfeel, Izraeel aur dusre farishton ke kaam. Farishton ki creation, powers, duties aur unka Qurani tazkira.",
    category: "aqeedah", categoryLabel: "Aqeedah & Beliefs", price: "PKR 850",
  },
  {
    id: 72, title: "Aakhirat ki Tayyari", subtitle: "Maut se pehle hone wale kaam ka hisaab",
    description: "Maut ke baad ki zindagi — qabar ke sawalat, torment, blessings, barzakh ka waqt. Aaj se aakhirat ki tayyari ka step-by-step program.",
    category: "aqeedah", categoryLabel: "Aqeedah & Beliefs", price: "PKR 900",
  },

  // ─── Category 11: Duas & Dhikr (7 books, 2 featured) ───
  {
    id: 73, title: "Subah ke Azkaar", subtitle: "Fajr se dupehar tak ki masnoon duayen",
    description: "Uthne, wuzu, namaz, ghar se nikalne, safar, kaam shuru karne ki masnoon duayen. Arabic text, tarjuma aur fazilat ka mukammal majmua.",
    category: "duas", categoryLabel: "Duas & Dhikr", price: "PKR 800", featured: true,
  },
  {
    id: 74, title: "Shaam ke Azkaar", subtitle: "Asr se Fajr tak ki ruhani hifazat",
    description: "Shaam, Maghrib, Isha, sone waqt aur raat bhar ke azkaar. Dua-e-Qunoot, Ayat-ul-Kursi, last surahs aur nightmares se bachao.",
    category: "duas", categoryLabel: "Duas & Dhikr", price: "PKR 800",
  },
  {
    id: 75, title: "Qurbani ki Dua", subtitle: "Eid-ul-Adha ki mukammal adaiyat aur wazaif",
    description: "Qurbani ka sunnat tareeqa, Dua, Takbeer, distribution rules aur qasam ke masail. Aik encyclopedia for Eid-ul-Adha ki taqreebaat.",
    category: "duas", categoryLabel: "Duas & Dhikr", price: "PKR 750",
  },
  {
    id: 76, title: "Dua-e-Qunoot ka Majmua", subtitle: "Har maqam ke liye qunoot ki behtareen duayen",
    description: "Witr, nazila, haraj aur dusre muqaamon par padhi jane wali qunoot ki duayen. Arabic, tarjuma aur padhne ka sahi tareeqa.",
    category: "duas", categoryLabel: "Duas & Dhikr", price: "PKR 700", featured: true,
  },
  {
    id: 77, title: "Safar ki Duayen", subtitle: "Ghar se nikalne se waapasi tak ki hifazat",
    description: "Safar shuru hone, gaadi mein bethte, hotel mein rukne, musafat dauran aur ghar waapasi ki masnoon duayen aur azkaar.",
    category: "duas", categoryLabel: "Duas & Dhikr", price: "PKR 650",
  },
  {
    id: 78, title: "Beemari ki Duayen", subtitle: "Har marz ki shifa ke liye Qurani ilaj",
    description: "Har beemari ke liye specific Qurani duayen aur wazaif — sugar, blood pressure, cancer, depression, nazar, jadoo. Ruqya ka sahi tareeqa.",
    category: "duas", categoryLabel: "Duas & Dhikr", price: "PKR 850",
  },
  {
    id: 79, title: "Roza ki Duayen", subtitle: "Sehri se Iftar tak ki masnoon adaiyat",
    description: "Sehri ki dua, Iftar ki dua, Roza kholne ka sunnat tareeqa, Ramzan ke har ashray ki special duayen aur fazilat.",
    category: "duas", categoryLabel: "Duas & Dhikr", price: "PKR 600",
  },

  // ─── Category 12: Islamic Kids (7 books, 2 featured) ───
  {
    id: 80, title: "Bachon ke Islami Kahaniyan", subtitle: "100 qissay akhlaq aur deen ke sabaq ke saath",
    description: "Bachon ke liye 100 mukhtasir Islami kahaniyan — jhoot, shareef, bukhl, mehrbani par. Har qissa 5 minute ka with colorful moral.",
    category: "kids", categoryLabel: "Islamic Kids", price: "PKR 900", featured: true,
  },
  {
    id: 81, title: "Bachon ka Islami Encyclopedia", subtitle: "A se Z tak Islam har lafz mein",
    description: "Islamic A-Z encyclopedia for kids — Allah, Bismillah, Caliph, Dua, Eid, Fajr... Har lafz ki definition, picture aur fun fact.",
    category: "kids", categoryLabel: "Islamic Kids", price: "PKR 1,000",
  },
  {
    id: 82, title: "5 Waqt ki Namaz bache", subtitle: "7 saal se shuru hone wala namaz course",
    description: "Bachon ko 5 waqt ki namaz sikhane ka step-by-step course. Wuzu, Qiyam, Ruku, Sajda, Dua — har rukan ki pictures aur videos links.",
    category: "kids", categoryLabel: "Islamic Kids", price: "PKR 850",
  },
  {
    id: 83, title: "Wuzu kaise karte hain", subtitle: "Bachon ke liye illustrated wuzu guide",
    description: "Rang birangi tasweeron mein wuzu ka mukammal tareeqa. Farz, Sunnat, Mustahab har cheez bachon ki zubaan mein samjhai gayi hai.",
    category: "kids", categoryLabel: "Islamic Kids", price: "PKR 700", featured: true,
  },
  {
    id: 84, title: "Islami Rang Bharo", subtitle: "Bachon ke liye deeni rang bhari activities",
    description: "50+ coloring pages, puzzles, mazes aur word search — Islamic themes par. Masjid, Kaaba, Crescent, Dates, Camel aur dusre topics.",
    category: "kids", categoryLabel: "Islamic Kids", price: "PKR 600",
  },
  {
    id: 85, title: "Bachon ke liye 99 Naam", subtitle: "Allah ke khubsurat naam yaad karne ka tarz",
    description: "Asma-ul-Husna ka bachon ke liye easy memorization guide. Har naam ka meaning, story aur relevant daily activity.",
    category: "kids", categoryLabel: "Islamic Kids", price: "PKR 750",
  },
  {
    id: 86, title: "Eid ki Taiyari", subtitle: "Bachon ke liye Eid-ul-Fitr aur Eid-ul-Adha guide",
    description: "Eid ki tiyari, new kapde, chaand raat, Eid ki namaz, qurbani, meethai aur Eidi — bachon ke liye mukammal celebration guide.",
    category: "kids", categoryLabel: "Islamic Kids", price: "PKR 650",
  },

  // ─── Category 13: Muslim Women (6 books, 2 featured) ───
  {
    id: 87, title: "Haya aur Hijab", subtitle: "Pardah ki fiqhi haisiyat aur modern challenges",
    description: "Hijab, Niqab aur modest dressing ki fiqhi, social aur spiritual haisiyat. Career, university, travel mein pardah kaise karen. Modern doubts ka jawab.",
    category: "women", categoryLabel: "Muslim Women", price: "PKR 950", featured: true,
  },
  {
    id: 88, title: "Ghar ki Rani", subtitle: "Khawateen ke liye ghar chalane ka Islami formula",
    description: "Islami nazar mein biwi, maa aur beti ka kirdaar. Ghar ki tanzim, bachon ki tarbiyat aur husband ke huqooq ka balance.",
    category: "women", categoryLabel: "Muslim Women", price: "PKR 900",
  },
  {
    id: 89, title: "Islami Mahwari Guide", subtitle: "Haiz, nifas aur istihaza ke masail",
    description: "Women's health ke Islami usool — haiz ke dauran ibadat, nifas, istihaza ki pehchan aur common fiqhi masail ka hal.",
    category: "women", categoryLabel: "Muslim Women", price: "PKR 800",
  },
  {
    id: 90, title: "Khawateen ka Hajj", subtitle: "Auraton ke liye safar ki khaas hidayat",
    description: "Auraton ke liye Hajj aur Umrah ka khaas guide. Ihram, tawaaf, saee, qurbani aur special health aur safety tips.",
    category: "women", categoryLabel: "Muslim Women", price: "PKR 1,100", featured: true,
  },
  {
    id: 91, title: "Beti ki Shadi", subtitle: "Islami rasm-o-rivaj aur maasi muamlaat",
    description: "Beti ki shadi ke Islami usool — rukhsati, jahez, mehar, walima aur naye rishte ki shuruat. Cultural pressures se nijaat.",
    category: "women", categoryLabel: "Muslim Women", price: "PKR 850",
  },
  {
    id: 92, title: "Khawateen ka Karobar", subtitle: "Ghar baithe halal income ke tareeqe",
    description: "Khawateen ke liye ghar se karobar — online selling, tutoring, baking, freelancing, arts aur crafts. Sharia-compliant aur practical ideas.",
    category: "women", categoryLabel: "Muslim Women", price: "PKR 900",
  },

  // ─── Category 14: Youth & Students (6 books, 2 featured) ───
  {
    id: 93, title: "University mein Deen", subtitle: "Campus life mein Islam kaise zinda rakhen",
    description: "University ke dauran namaz, roza, haya aur akhlaq kaise barqaraar rakhen. Peer pressure, relationships aur career ka Islami hal.",
    category: "youth", categoryLabel: "Youth & Students", price: "PKR 850", featured: true,
  },
  {
    id: 94, title: "Muslim Mulko mein Taleem", subtitle: "Students ke liye behtareen Muslim mulkon mein taleem",
    description: "Turkey, Malaysia, Saudi, UAE mein university admissions, scholarships, visa aur student life ka mukammal guide. Halal environment mein degree.",
    category: "youth", categoryLabel: "Youth & Students", price: "PKR 1,000",
  },
  {
    id: 95, title: "Career Guidance Musalman", subtitle: "Deen aur dunya dono mein kamyabi",
    description: "Islami nazar mein career selection — halal fields, haram jobs se bachao, passion vs income aur long-term planning for Muslim youth.",
    category: "youth", categoryLabel: "Youth & Students", price: "PKR 900",
  },
  {
    id: 96, title: "Social Media aur Deen", subtitle: "Instagram, TikTok aur YouTube par Islami hidayat",
    description: "Social media ka halal istemal — content creation, dawah, privacy, addiction se bachao aur online akhlaq. Youth-specific strategies.",
    category: "youth", categoryLabel: "Youth & Students", price: "PKR 750", featured: true,
  },
  {
    id: 97, title: "Shadi se Pehle", subtitle: "Naujawanon ke liye rishte ki samajhdaari",
    description: "Shadi se pehle honi wali tayyari — deeni, maali, jismani aur zehni. Rishta dhoondhne, baat cheet, engagement aur nikah tak ka rasta.",
    category: "youth", categoryLabel: "Youth & Students", price: "PKR 850",
  },
  {
    id: 98, title: "Exam ki Dua aur Tawakkul", subtitle: "Parhai mein barakat ka nizaam",
    description: "Exam ki tayyari ka Islami tareeqa — dua, wazaif, time management, stress control aur tawakkul. Results ke baad shukr aur sabr.",
    category: "youth", categoryLabel: "Youth & Students", price: "PKR 700",
  },

  // ─── Category 15: Islamic Cooking (6 books, 2 featured) ───
  {
    id: 99, title: "Sunnat ka Kitchen", subtitle: "Nabi ki pasandeeda ghizain aur unki sehat",
    description: "Taqwa se bharpoor 50+ recipes — dates, olive oil, honey, barley, vinegar, milk, pumpkin, figs aur dusri Sunnat foods. Har dish ka tibbi faida.",
    category: "cooking", categoryLabel: "Islamic Cooking", price: "PKR 950", featured: true,
  },
  {
    id: 100, title: "Ramzan Special Recipes", subtitle: "Sehri aur Iftar ke 60 behtareen khaane",
    description: "60 tested recipes for Ramzan — energy se bharpoor sehri, halki phulki iftari, desserts aur drinks. Pakistan, Arab aur Turkish fusion.",
    category: "cooking", categoryLabel: "Islamic Cooking", price: "PKR 900",
  },
  {
    id: 101, title: "Bachon ka Halal Menu", subtitle: "Sehatmand aur mazedaar bachon ke khaane",
    description: "Bachon ke liye 40+ healthy, halal aur easy recipes. Lunchbox ideas, snacks, desserts aur Eid special — jo bache shauq se khayen.",
    category: "cooking", categoryLabel: "Islamic Cooking", price: "PKR 800",
  },
  {
    id: 102, title: "Eid ka Dastarkhwan", subtitle: "Eid-ul-Fitr aur Eid-ul-Adha ke khaas khaane",
    description: "Eid ki tiyari se lekar dastarkhwan tak — traditional Pakistani, Arab aur Turkish Eid recipes. Presentation aur mehmaan nawazi ke tareeqe.",
    category: "cooking", categoryLabel: "Islamic Cooking", price: "PKR 850", featured: true,
  },
  {
    id: 103, title: "Sehri aur Iftar Planner", subtitle: "30 din ka complete nutrition plan",
    description: "Ramzan ka 30-day meal planner — sehri ki energy, iftar ki nutrition aur weight management. Calorie count aur Islamic fasting science.",
    category: "cooking", categoryLabel: "Islamic Cooking", price: "PKR 750",
  },
  {
    id: 104, title: "Tibb-e-Nabwi Foods", subtitle: "Nabi ki batayi hui ghizain ka modern guide",
    description: "Kalonji, honey, dates, olive oil, black seed aur dusri prophetic foods ki recipes. Har food ka medical research aur daily use.",
    category: "cooking", categoryLabel: "Islamic Cooking", price: "PKR 850",
  },

  // ─── Category 16: Death & Afterlife (6 books, 2 featured) ───
  {
    id: 105, title: "Qabar ka Safar", subtitle: "Maut se qabar tak ka mukammal manzar",
    description: "Maut ka waqt, rooh ka nikalna, ghusl, kafan, janazah, dafan aur qabar ke sawalat. Aik mukammal end-of-life guide har Musalman ke liye.",
    category: "death", categoryLabel: "Death & Afterlife", price: "PKR 1,000", featured: true,
  },
  {
    id: 106, title: "Ghusl aur Kafan ka Tareeqa", subtitle: "Mayyit ke liye zaroori amal ka sahi tareeqa",
    description: "Mayyit ko ghusl dene, kafan pehnane, namaz-e-janazah padhne aur dafan ka step-by-step fiqhi guide. Ghar walon ke liye asaan instructions.",
    category: "death", categoryLabel: "Death & Afterlife", price: "PKR 900",
  },
  {
    id: 107, title: "Mayyit ke Haqooq", subtitle: "Marhoom ke liye zinda rehne wale ke faraiz",
    description: "Mayyit ke huqooq — dua, sadqa, Quran parhna, debt clearance aur unke liye rohani amal. Aulaad, rishtedaar aur society ka farz.",
    category: "death", categoryLabel: "Death & Afterlife", price: "PKR 850",
  },
  {
    id: 108, title: "Tazkiya-e-Nafs", subtitle: "Qabar se pehle nafs ki islah kaise karen",
    description: "Nafs ki ammarah se ilaahi tak ka safar. Riya, hasad, bukhl, ghussay aur dusre aibon ka ilaj. 40-day purification program.",
    category: "death", categoryLabel: "Death & Afterlife", price: "PKR 950", featured: true,
  },
  {
    id: 109, title: "Waqf aur Sadaqah Jariyah", subtitle: "Marne ke baad bhi sawab kaise hasil karen",
    description: "Waqf, sadaqah jariyah, ilm ka phailana, masjid, hospital, school banana — aise kaam jo maut ke baad bhi sawab dete rahen.",
    category: "death", categoryLabel: "Death & Afterlife", price: "PKR 1,100",
  },
  {
    id: 110, title: "Wasiyat kaise Likhen", subtitle: "Islami wasiyat nama likhne ka tareeqa",
    description: "Sharia-compliant wasiyat nama likhne ka asaan guide. Property division, debt, funeral instructions aur heirs ke huqooq ka hisaab.",
    category: "death", categoryLabel: "Death & Afterlife", price: "PKR 800",
  },

  // ─── Category 17: Dawah & Outreach (6 books, 2 featured) ───
  {
    id: 111, title: "Dawah ke 10 Usool", subtitle: "Nabi ki tarz par logon ko Islam ki taraf bulana",
    description: "Dawah ke 10 fundamental principles — hikmah, mauizat hasanah, jidal se bachna, patience aur daleel. Har principle par practical examples.",
    category: "dawah", categoryLabel: "Dawah & Outreach", price: "PKR 900", featured: true,
  },
  {
    id: 112, title: "Non-Muslim se Guftagu", subtitle: "Islam introduce karne ka behtareen tareeqa",
    description: "Non-Muslim doston, colleagues aur neighbors se Islam ki baat kaise karen. Common questions, misconceptions aur jawabat ka mukammal guide.",
    category: "dawah", categoryLabel: "Dawah & Outreach", price: "PKR 850",
  },
  {
    id: 113, title: "Social Media Dawah", subtitle: "Online platform par Islam ka pigham phelana",
    description: "YouTube, Instagram, TikTok, Facebook aur Twitter par dawah kaise karen. Content strategy, audience building aur halal monetization.",
    category: "dawah", categoryLabel: "Dawah & Outreach", price: "PKR 950", featured: true,
  },
  {
    id: 114, title: "Ghar par Dawah Circle", subtitle: "Apne ghar mein ilm ka halqa kaise chalain",
    description: "Ghar par dars, halqa, study circle aur family dawah program kaise organize karen. Guests, topics, schedule aur long-term impact.",
    category: "dawah", categoryLabel: "Dawah & Outreach", price: "PKR 700",
  },
  {
    id: 115, title: "Dawah ke Jawabat", subtitle: "Islam ke dushmano ke 50 common objections",
    description: "Terrorism, women rights, slavery, science, evolution aur dusre 50 common objections ka researched aur polite jawab.",
    category: "dawah", categoryLabel: "Dawah & Outreach", price: "PKR 1,000",
  },
  {
    id: 116, title: "New Muslim Guide", subtitle: "Islam qubool karne wale ke liye mukammal rehnumai",
    description: "Shahadah ke baad kya karen — ghusl, namaz seekhna, Quran, community join karna aur family se muamlaat. Step-by-step new Muslim handbook.",
    category: "dawah", categoryLabel: "Dawah & Outreach", price: "PKR 850",
  },
];

export const featuredEbooks = ebooks.filter((b) => b.featured);

export const getEbooksByCategory = (categoryId: string) =>
  ebooks.filter((b) => b.category === categoryId);
