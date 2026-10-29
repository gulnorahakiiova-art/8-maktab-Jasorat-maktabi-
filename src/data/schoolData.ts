import { Achievement, GalleryItem, NewsItem, ResourceItem, Teacher, Testimonial, EventItem } from '../types';

/**
 * ====================================================================
 * NAMANGAN VILOYATI MINGBULOQ TUMANI 8-SONLI MAKTAB - ASOSIY MA'LUMOTLAR
 * (SCHOOL DATA FILE)
 * ====================================================================
 * Maktab xodimlari va administratorlar ushbu fayldagi barcha ma'lumotlarni
 * (o'qituvchilar, yutuqlar, yangiliklar, darsliklar va kontaktlar)
 * to'g'ridan-to'g'ri o'zgartirishi yoki yangilarini qo'shishi mumkin.
 */

// Rasmlar (Generated & Local assets)
export const IMAGES = {
  heroCampus: '/src/assets/images/hero_school_campus_1793267877920.jpg',
  jasoratHall: '/src/assets/images/jasorat_courage_hall_1793267877477.jpg',
  physicsLab: '/src/assets/images/science_physics_lab_1793267878829.jpg',
  sportsField: '/src/assets/images/sports_military_field_1793267879828.jpg',
  libraryStudy: '/src/assets/images/school_library_study_1793267880053.jpg',
};

// Maktab statistikasi
export const SCHOOL_STATS = {
  studentsCount: 1120,
  teachersCount: 78,
  graduatesCount: 2450,
  awardsCount: 135,
  foundedYear: 1982,
  yearsActive: 44,
  higherEdRate: '94.2%',
  classroomsCount: 42,
  smartBoardsCount: 28,
  computersCount: 110,
};

// Maktab kontaktlari va xarita
export const SCHOOL_CONTACT = {
  schoolNumber: 8,
  nameUz: "Namangan viloyati Mingbuloq tumani 8-sonli umumiy o'rta ta'lim maktabi",
  nameRu: "Общеобразовательная школа № 8 Мингбулакского района Наманганской области",
  nameEn: "Secondary School No. 8, Mingbuloq District, Namangan Region",
  addressUz: "Namangan viloyati, Mingbuloq tumani, Gulbog' MFY, Maktab ko'chasi, 8-bino",
  addressRu: "Наманганская область, Мингбулакский район, ССГ Гулбог, улица Мактаб, здание 8",
  addressEn: "Building 8, Maktab Street, Gulbog neighborhood, Mingbuloq District, Namangan Region, Uzbekistan",
  phones: ["+998 (69) 442-12-08", "+998 (93) 492-08-08"],
  email: "mingbuloq8maktab@edu.uz",
  telegram: "https://t.me/mingbuloq_8maktab",
  instagram: "https://instagram.com/mingbuloq_8maktab",
  youtube: "https://youtube.com/@mingbuloq8maktab",
  workingHours: "08:00 - 17:00 (Dush - Shanba)",
  // Google Maps Coordinates: Mingbuloq district center coordinates
  latitude: 40.8354,
  longitude: 71.4921,
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12093.842774880572!2d71.4800!3d40.8350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4bbfa4d1737d%3A0xc0c8702c2e91280!2sMingbuloq%2C%20Namangan%20Region!5e0!3m2!1sen!2suz!4v1714000000000!5m2!1sen!2suz",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=40.8354,71.4921",
};

// Maktab Ma'muriyati va O'qituvchilar (12 ta to'liq profil)
export const TEACHERS: Teacher[] = [
  {
    id: 't-1',
    fullName: {
      uz: "Oripov Rustamjon Maxmudovich",
      ru: "Орипов Рустамжон Махмудович",
      en: "Rustamjon Oripov"
    },
    role: {
      uz: "Maktab direktori, Oliy toifali Fizika o'qituvchisi",
      ru: "Директор школы, учитель физики высшей категории",
      en: "School Principal, Senior Physics Master Teacher"
    },
    subject: {
      uz: "Fizika va Astronomiya",
      ru: "Физика и астрономия",
      en: "Physics & Astronomy"
    },
    subjectCode: 'physics',
    category: 'oliy',
    experienceYears: 26,
    photo: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400",
    bio: {
      uz: "Namangan Davlat Universitetining fizika-matematika fakultetini imtiyozli tamomlagan. Xalq ta'limi a'lochisi ko'krak nishoni sohibi.",
      ru: "С отличием окончил физико-математический факультет НамГУ. Отличник народного образования Республики Узбекистан.",
      en: "Graduated with honors from Namangan State University. Recipient of the Excellence in Public Education medal."
    },
    achievements: {
      uz: ["Xalq ta'limi a'lochisi ko'krak nishoni (2018)", "Yilning eng yaxshi maktab rahbari tuman g'olibi (2023)"],
      ru: ["Знак «Отличник народного образования» (2018)", "Победитель районного конкурса директоров (2023)"],
      en: ["National Excellence in Public Education Award (2018)", "District Principal of the Year (2023)"]
    },
    isAdministration: true,
    email: "r.oripov@edu.uz",
    phone: "+998 90 215-08-01"
  },
  {
    id: 't-2',
    fullName: {
      uz: "Sobirova Dilnoza Ergashboyevna",
      ru: "Собирова Дилноза Эргашбоевна",
      en: "Dilnoza Sobirova"
    },
    role: {
      uz: "O'quv ishlari bo'yicha direktor o'rinbosari, Matematika",
      ru: "Заместитель директора по учебной работе, математика",
      en: "Vice Principal for Academic Affairs, Mathematics"
    },
    subject: {
      uz: "Matematika va Algebra",
      ru: "Математика и алгебра",
      en: "Mathematics & Algebra"
    },
    subjectCode: 'math',
    category: 'oliy',
    experienceYears: 20,
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: {
      uz: "Ko'p yillar davomida Respublika matematika olimpiadasi sovrindorlarini tayyorlagan tajribali metodist o'qituvchi.",
      ru: "Опытный методист, подготовивший множество призеров республиканских математических олимпиад.",
      en: "Senior educator with extensive track record in preparing National Olympiad winners in advanced algebra and calculus."
    },
    achievements: {
      uz: ["O'quvchilari 4 marta viloyat olimpiadasi g'olibi bo'lgan", "Oliy toifali mutaxassis"],
      ru: ["Ученики четырежды побеждали на областных олимпиадах", "Специалист высшей категории"],
      en: ["Coached 4 regional math Olympiad gold medalists", "Master Category Educator"]
    },
    isAdministration: true,
    email: "d.sobirova@edu.uz",
    phone: "+998 91 185-08-02"
  },
  {
    id: 't-3',
    fullName: {
      uz: "Mayor Karimov Farxodjon Akramovich",
      ru: "Майор Каримов Фарходжон Акрамович",
      en: "Major Farkhodjon Karimov"
    },
    role: {
      uz: "Jasorat Maktabi rahbari, ChQBT harbiy rahbari",
      ru: "Руководитель направления «Школа Мужества», военрук",
      en: "Director of 'Jasorat Maktabi', Military Training Head"
    },
    subject: {
      uz: "Chaqiruvga qadar boshlang'ich tayyorgarlik (ChQBT)",
      ru: "Начальная допризывная подготовка (НДП)",
      en: "Initial Pre-Conscription Military Training"
    },
    subjectCode: 'military',
    category: 'oliy',
    experienceYears: 18,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: {
      uz: "Qurolli Kuchlar zaxiradagi mayori. O'quvchilarda yuksak vatanparvarlik, tartib-intizom va harbiy mahoratni shakllantirish bo'yicha yetakchi murabbiy.",
      ru: "Майор запаса Вооруженных Сил. Руководитель патриотических клубов и военно-спортивных сборов молодежи.",
      en: "Reserve Major of the Armed Forces. Spearheads military drill, civil defense simulations, and youth leadership training."
    },
    achievements: {
      uz: ["'Jasorat' medali sohibi", "'Shunqorlar' respublika harbiy o'yinlari faxriy murabbiysi (2024)"],
      ru: ["Медаль «Жасорат»", "Лучший наставник республиканских соревнований «Шункорлар» (2024)"],
      en: ["National 'Jasorat' (Valor) Medal recipient", "Lead Mentor of Republican Cadet Games (2024)"]
    },
    isAdministration: true,
    email: "f.karimov@edu.uz",
    phone: "+998 93 680-08-03"
  },
  {
    id: 't-4',
    fullName: {
      uz: "Xasanova Nilufar Anvarovna",
      ru: "Хасанова Нилуфар Анваровна",
      en: "Nilufar Khasanova"
    },
    role: {
      uz: "Ingliz tili kafedrasi mudiri, IELTS 8.5 sohibasi",
      ru: "Заведующая кафедрой английского языка, IELTS 8.5",
      en: "Head of English Department, IELTS 8.5 Instructor"
    },
    subject: {
      uz: "Ingliz tili (Chuqurlashtirilgan)",
      ru: "Английский язык (углубленный)",
      en: "Advanced English Language & Literature"
    },
    subjectCode: 'english',
    category: 'oliy',
    experienceYears: 14,
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    bio: {
      uz: "O'zbekiston Davlat Jahon Tillari Universitetini bitirgan. CELTA xalqaro sertifikati va CEFR C1 mutaxassisi.",
      ru: "Выпускница УзГУМЯ. Обладатель международного сертификата CELTA и уровня CEFR C1.",
      en: "Graduated from Uzbek State University of World Languages. Certified CELTA instructor with CEFR C1 accreditation."
    },
    achievements: {
      uz: ["IELTS 8.5 sertifikati (2023)", "30 dan ortiq o'quvchilari IELTS 7.0+ va CEFR B2/C1 olgan"],
      ru: ["Сертификат IELTS 8.5 (2023)", "Более 30 учеников сдали IELTS 7.0+ и CEFR B2/C1"],
      en: ["IELTS Band 8.5 overall", "Mentored 30+ students achieving IELTS 7.0+ & CEFR B2/C1"]
    },
    email: "n.xasanova@edu.uz"
  },
  {
    id: 't-5',
    fullName: {
      uz: "Tursunov Jahongir Bobur o'g'li",
      ru: "Турсунов Жахонгир Бобур угли",
      en: "Jakhongir Tursunov"
    },
    role: {
      uz: "Fizika o'qituvchisi, Robototexnika to'garagi rahbari",
      ru: "Учитель физики, руководитель кружка робототехники",
      en: "Physics Teacher & STEM Robotics Coach"
    },
    subject: {
      uz: "Fizika va Amaliy Mexanika",
      ru: "Физика и прикладная механика",
      en: "Physics & Applied Mechanics"
    },
    subjectCode: 'physics',
    category: '1-toifa',
    experienceYears: 11,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    bio: {
      uz: "Innovatsion laboratoriya mashg'ulotlari muallifi. STEM ta'limi bo'yicha viloyat amaliy seminarlari spikeri.",
      ru: "Автор инновационных лабораторных практикумов. Спикер областных STEM-семинаров.",
      en: "Pioneered active STEM lab investigations and sensor-based physics experiments for secondary grades."
    },
    achievements: {
      uz: ["STEM Innovatsiya festivali laureati", "Viloyat ochiq darslar tanlovi 1-o'rini"],
      ru: ["Лауреат регионального STEM-фестиваля", "1-е место на областном смотре открытых уроков"],
      en: ["Regional STEM Innovation Laureate", "First Place in Regional Model Physics Lesson Showcase"]
    },
    email: "j.tursunov@edu.uz"
  },
  {
    id: 't-6',
    fullName: {
      uz: "Qodirova Shahnoza Komiljonovna",
      ru: "Кадырова Шахноза Комилжоновна",
      en: "Shakhnoza Kadirova"
    },
    role: {
      uz: "Matematika fani o'qituvchisi, Olimpiada koordinatori",
      ru: "Учитель математики, координатор олимпиад",
      en: "Mathematics Teacher, Olympiad Coordinator"
    },
    subject: {
      uz: "Geometriya va Matematik Mantiq",
      ru: "Геометрия и математическая логика",
      en: "Geometry & Mathematical Logic"
    },
    subjectCode: 'math',
    category: '1-toifa',
    experienceYears: 12,
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    bio: {
      uz: "Al-Xorazmiy nomidagi xalqaro olimpiadalar uchun o'quvchilarni tayyorlash bo'yicha maxsus dastur muallifi.",
      ru: "Разработчик методики подготовки к международным математическим состязаниям имени Аль-Хорезми.",
      en: "Designer of accelerated training modules for Al-Khwarizmi Mathematical Olympiads."
    },
    achievements: {
      uz: ["Respublika olimpiadasida 2 nafar o'quvchisi 2-o'rinni egallagan"],
      ru: ["Двое учеников завоевали серебро на Республиканской олимпиаде"],
      en: ["Coached two national silver medalists in State Mathematics Olympiad"]
    },
    email: "sh.qodirova@edu.uz"
  },
  {
    id: 't-7',
    fullName: {
      uz: "Polvonov Sherzodbek Abdullayevich",
      ru: "Полвонов Шерзодбек Абдуллаевич",
      en: "Sherzodbek Polvonov"
    },
    role: {
      uz: "Jismoniy tarbiya o'qituvchisi, Kurash bo'yicha sport ustasi",
      ru: "Учитель физкультуры, мастер спорта по Курашу",
      en: "Physical Education Specialist, Master of Sports in Kurash"
    },
    subject: {
      uz: "Jismoniy tarbiya va Milliy Kurash",
      ru: "Физическая культура и национальный Кураш",
      en: "Physical Education & National Wrestling"
    },
    subjectCode: 'pe',
    category: 'oliy',
    experienceYears: 16,
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400",
    bio: {
      uz: "O'zbekiston chempioni. Maktab sport klubida yuzlab o'g'il-qizlarni sog'lom turmush tarziga jalb etgan fidoyi murabbiy.",
      ru: "Чемпион Узбекистана по борьбе. Воспитал призеров юношеских спартакиад страны.",
      en: "National Champion in traditional wrestling. Promotes holistic fitness, stamina, and team spirit."
    },
    achievements: {
      uz: ["Kurash bo'yicha Sport ustasi", "Respublika o'quvchilar spartakiadasi g'olibi murabbiy"],
      ru: ["Мастер спорта Республики Узбекистан", "Тренер победителей республиканской спартакиады"],
      en: ["Master of Sports of Uzbekistan", "Head Coach for Youth Republican Athletic Games"]
    },
    email: "sh.polvonov@edu.uz"
  },
  {
    id: 't-8',
    fullName: {
      uz: "Yusupova Madinabonu Erkinovna",
      ru: "Юсупова Мадинабону Эркиновна",
      en: "Madinabonu Yusupova"
    },
    role: {
      uz: "Ingliz tili o'qituvchisi, Speaking Club rahbari",
      ru: "Учитель английского языка, руководитель Speaking Club",
      en: "English Teacher & Debate Club Moderator"
    },
    subject: {
      uz: "Ingliz tili va Muloqot ko'nikmalari",
      ru: "Английский язык и разговорные навыки",
      en: "English Communication & Debate"
    },
    subjectCode: 'english',
    category: '2-toifa',
    experienceYears: 7,
    photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400",
    bio: {
      uz: "Interaktiv multimedia uslublari orqali ingliz tilida erkin so'zlashuvni shakllantirish bo'yicha iqtidorli yosh pedagog.",
      ru: "Талантливый педагог, применяющий интерактивные мультимедийные технологии в преподавании языка.",
      en: "Focuses on immersive communicative language teaching and Model UN debate training."
    },
    achievements: {
      uz: ["CEFR C1 xalqaro sertifikati", "Tuman yosh o'qituvchilari tanlovi sovrindori"],
      ru: ["Международный сертификат CEFR C1", "Призер районного конкурса молодых специалистов"],
      en: ["Certified CEFR C1", "District Young Educator of the Year finalist"]
    },
    email: "m.yusupova@edu.uz"
  },
  {
    id: 't-9',
    fullName: {
      uz: "Normatov Alisher Qodirovich",
      ru: "Норматов Алишер Кадырович",
      en: "Alisher Normatov"
    },
    role: {
      uz: "Informatika va Raqamli texnologiyalar o'qituvchisi",
      ru: "Учитель информатики и цифровых технологий",
      en: "Computer Science & Digital Technologies Teacher"
    },
    subject: {
      uz: "Informatika va Dasturlash (Python / Web)",
      ru: "Информатика и программирование (Python / Web)",
      en: "Informatics & Programming"
    },
    subjectCode: 'other',
    category: '1-toifa',
    experienceYears: 9,
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    bio: {
      uz: "Maktabda 'Bir million dasturchi' loyihasi koordinatori. O'quvchilarga algoritmlar va dasturlash asoslarini o'rgatadi.",
      ru: "Координатор проекта «Один миллион программистов». Обучает веб-разработке и Python.",
      en: "Coordinator of 'One Million Uzbek Coders' school chapter. Teaches Python, web design, and computational logic."
    },
    achievements: {
      uz: ["RoboContest platformasi bo'yicha tuman yetakchisi", "IT-Park loyihasi faol ustozi"],
      ru: ["Лидер соревнований RoboContest в районе", "Сертифицированный ментор IT-Park"],
      en: ["District lead in national algorithmic programming", "Certified IT Park Educator"]
    },
    email: "a.normatov@edu.uz"
  },
  {
    id: 't-10',
    fullName: {
      uz: "Mirzayeva Gulchehra To'xtasinovna",
      ru: "Мирзаева Гулчехра Тухтасиновна",
      en: "Gulchekhra Mirzayeva"
    },
    role: {
      uz: "Ona tili va Adabiyot o'qituvchisi",
      ru: "Учитель родного языка и литературы",
      en: "Uzbek Language & Classical Literature"
    },
    subject: {
      uz: "Ona tili va Adabiyot",
      ru: "Родной язык и литература",
      en: "Native Language & Literature"
    },
    subjectCode: 'uzbek',
    category: 'oliy',
    experienceYears: 24,
    photo: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=400",
    bio: {
      uz: "Alisher Navoiy va Bobur merosini o'rganish bo'yicha adabiy to'garaklar tashkilotchisi, yosh ijodkorlar ustozi.",
      ru: "Организатор литературных чтений, посвященных наследию Навои и Бабура. Наставник юных поэтов.",
      en: "Leader of classical literary circles celebrating Uzbek poetic heritage and expressive rhetoric."
    },
    achievements: {
      uz: ["'Yil o'qituvchisi' viloyat ko'rik-tanlovi g'olibi", "Xalq ta'limi a'lochisi"],
      ru: ["Победитель областного конкурса «Учитель года»", "Отличник народного образования"],
      en: ["Regional Teacher of the Year winner", "Distinguished Educator Medal"]
    },
    email: "g.mirzayeva@edu.uz"
  },
  {
    id: 't-11',
    fullName: {
      uz: "Ahmedov Sardorbek Bahromovich",
      ru: "Ахмедов Сардорбек Бахромович",
      en: "Sardorbek Akhmedov"
    },
    role: {
      uz: "Boshlang'ich ta'lim o'qituvchisi",
      ru: "Учитель начальных классов",
      en: "Primary Education Specialist"
    },
    subject: {
      uz: "Boshlang'ich sinf fanlari",
      ru: "Предметы начальной школы",
      en: "Elementary Fundamentals"
    },
    subjectCode: 'primary',
    category: '2-toifa',
    experienceYears: 8,
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    bio: {
      uz: "Zamonaviy o'yinli ta'lim metodikalarini boshlang'ich sinflarda qo'llash orqali bolalarda o'qishga bo'lgan qiziqishni oshiradi.",
      ru: "Применяет современные игровые методики для вовлечения первоклассников в активный учебный процесс.",
      en: "Specializes in gamified numeracy and early literacy pedagogy for foundation stage pupils."
    },
    achievements: {
      uz: ["Boshlang'ich sinflar o'rtasida namunali ochiq darslar sohibi"],
      ru: ["Автор образцовых методических уроков для младших классов"],
      en: ["Exemplary primary teaching portfolio commended by regional education board"]
    },
    email: "s.ahmedov@edu.uz"
  },
  {
    id: 't-12',
    fullName: {
      uz: "Rahimova Kamola Botirovna",
      ru: "Рахимова Камола Ботировна",
      en: "Kamola Rahimova"
    },
    role: {
      uz: "Maktab amaliyotchi psixologi",
      ru: "Практический психолог школы",
      en: "School Counselor & Child Psychologist"
    },
    subject: {
      uz: "Psixologik xizmat va kasbga yo'naltirish",
      ru: "Психологическая служба и профориентация",
      en: "Psychological Counseling & Career Guidance"
    },
    subjectCode: 'other',
    category: 'mutaxassis',
    experienceYears: 5,
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    bio: {
      uz: "O'quvchilarning individual qobiliyatlari, stressga chidamliligi va kasb tanlash jarayonida doimiy ko'makchi mutaxassis.",
      ru: "Помогает учащимся в адаптации, преодолении стресса при экзаменах и осознанном выборе будущей профессии.",
      en: "Guides pupils in academic stress resilience, cognitive strengths mapping, and university major selection."
    },
    achievements: {
      uz: ["Yoshlar psixologiyasi bo'yicha Respublika forumi qatnashchisi"],
      ru: ["Участница Республиканского форума школьных психологов"],
      en: ["Participant in National Educational Psychology Symposium"]
    },
    email: "k.rahimova@edu.uz"
  }
];

// Yutuqlar (2021-2026 yillar bo'yicha vertical timeline)
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    year: 2026,
    date: '2026-03-14',
    title: {
      uz: "Respublika Fan Olimpiadasida Matematika bo'yicha mutlaq g'alaba",
      ru: "Абсолютная победа на Республиканской олимпиаде по математике",
      en: "First Place at National Mathematical Olympiad"
    },
    studentName: "Mirzayev Asadbek (10-A sinf)",
    place: 1,
    category: 'math',
    level: 'republic',
    description: {
      uz: "O'quvchimiz Mirzayev Asadbek Respublikamizning barcha viloyatlaridan qatnashgan 150 nafardan ortiq eng kuchli o'quvchilar o'rtasida oliy natija ko'rsatib, Oltin medalni qo'lga kiritdi.",
      ru: "Наш ученик Асадбек Мирзаев среди более чем 150 сильнейших участников со всей страны показал наивысший результат и завоевал Золотую медаль.",
      en: "Our 10th-grade scholar Asadbek Mirzayev outperformed 150 elite regional finalists across Uzbekistan, capturing the National Gold Medal in Advanced Mathematics."
    },
    photo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'ach-2',
    year: 2025,
    date: '2025-11-20',
    title: {
      uz: "'Shunqorlar' harbiy-sport o'yinlari Respublika chempionligi",
      ru: "Чемпионство в республиканских военно-спортивных играх «Шункорлар»",
      en: "National Champions in 'Shunqorlar' Military-Patriotic Games"
    },
    studentName: "Jasorat Maktabi terma jamoasi (11-sinf)",
    place: 1,
    category: 'military',
    level: 'republic',
    description: {
      uz: "Maktabimizning 'Jasorat' guruhi to'siqlarni yengib o'tish, saf tayyorgarligi va nishonga otish bo'yicha tengsiz deb topilib, Mudofaa Vazirligi maxsus kubogi bilan taqdirlandi.",
      ru: "Команда школы «Жасорат» признана лучшей в преодолении полосы препятствий, строевой подготовке и стрельбе, завоевав Кубок Министерства обороны.",
      en: "Our school cadet squad captured 1st place in obstacle traversal, drill precision, and marksmanship, receiving the Ministry of Defense National Honors Cup."
    },
    photo: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'ach-3',
    year: 2025,
    date: '2025-05-18',
    title: {
      uz: "Xalqaro Fizika turnirida Kumush medal",
      ru: "Серебряная медаль на Международном физическом турнире",
      en: "Silver Medal at International Youth Physics Tournament"
    },
    studentName: "Qodirov Sardorbek (11-B sinf)",
    place: 2,
    category: 'physics',
    level: 'international',
    description: {
      uz: "Amaliy optika va elektrodinamika bo'yicha murakkab tajriba masalalarini muvaffaqiyatli himoya qilib, xalqaro hakamlar hay'atining yuqori bahosiga sazovor bo'ldi.",
      ru: "Успешно защитил сложнейшие экспериментальные задачи по оптике и электродинамике, заслужив высокую оценку международного жюри.",
      en: "Defended experimental physics research in laser optics and electrodynamics, earning an international silver medal and honorary distinction."
    },
    photo: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'ach-4',
    year: 2024,
    date: '2024-10-12',
    title: {
      uz: "Viloyat Ingliz tili notiqlik va debatlar tanlovida 1-o'rin",
      ru: "1-е место на областном конкурсе ораторского искусства на английском",
      en: "First Place in Regional English Public Speaking & Debate Championship"
    },
    studentName: "Ergasheva Sevinch (9-A sinf)",
    place: 1,
    category: 'english',
    level: 'region',
    description: {
      uz: "Global ekologik muammolar va yoshlar roli mavzusidagi inglizcha nutqi va tezkor savol-javob bahsida eng yuqori ballni to'pladi.",
      ru: "Набрала максимальные баллы за блестящую речь о глобальной экологии и победу в раундах дебатов на английском языке.",
      en: "Delivered an inspiring keynote address on sustainable technologies and secured top debate speaker honors in the Namangan regional championship."
    },
    photo: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'ach-5',
    year: 2024,
    date: '2024-04-05',
    title: {
      uz: "Milliy Kurash bo'yicha O'zbekiston Chempionatida Bronza",
      ru: "Бронза на Чемпионате Узбекистана по борьбе Кураш",
      en: "Bronze Medal at Uzbekistan National Youth Kurash Championship"
    },
    studentName: "Yoqubov Diyorbek (10-B sinf)",
    place: 3,
    category: 'sports',
    level: 'republic',
    description: {
      uz: "Vazni 68 kg gacha bo'lgan polvonlar bahsida matonat ko'rsatib, shohsupaning 3-pog'onasidan joy oldi va sport ustaligiga nomzod bo'ldi.",
      ru: "В весовой категории до 68 кг проявил высокое мастерство и волю к победе, завоевав бронзу и звание кандидата в мастера спорта.",
      en: "Competed in the 68kg division, earning national bronze and Candidate Master of Sports status."
    },
    photo: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'ach-6',
    year: 2023,
    date: '2023-12-08',
    title: {
      uz: "Viloyat 'Jasorat' spartakiadasida Mutlaq g'oliblik",
      ru: "Абсолютная победа на областной спартакиаде мужества",
      en: "Overall Champion Trophy at Regional Courage Spartakiad"
    },
    studentName: "8-maktab o'quvchilar otryadi",
    place: 1,
    category: 'military',
    level: 'region',
    description: {
      uz: "Namangan viloyatining barcha tuman maktablari ishtirok etgan ko'pkurash bo'yicha jamoamiz barcha bosqichlarda peshqadamlikni qo'ldan boy bermadi.",
      ru: "В многоборье среди школ всех районов Наманганской области наша команда лидировала на всех этапах эстафеты.",
      en: "Dominated all multidisciplinary tactical relay stages among schools from across the entire Namangan region."
    },
    photo: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'ach-7',
    year: 2023,
    date: '2023-05-22',
    title: {
      uz: "Matematika fanidan viloyat bosqichida 2-o'rin",
      ru: "2-е место на областном этапе олимпиады по математике",
      en: "Second Place in Regional Mathematics Olympiad"
    },
    studentName: "Nematullayev Bobur (9-B sinf)",
    place: 2,
    category: 'math',
    level: 'region',
    description: {
      uz: "Kombinatorika va sonlar nazariyasi bo'yicha nostandart yechimlari bilan hay'at a'zolarini qoyil qoldirdi.",
      ru: "Удивил жюри нестандартными решениями задач по комбинаторике и теории чисел.",
      en: "Commended for innovative proofs in combinatorics and number theory."
    },
    photo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'ach-8',
    year: 2022,
    date: '2022-10-18',
    title: {
      uz: "Yosh fiziklar tuman bellashuvida Oltin medal",
      ru: "Золотая медаль на районном конкурсе юных физиков",
      en: "First Place at District Young Physicists Olympiad"
    },
    studentName: "Rahmonova Diyora (8-A sinf)",
    place: 1,
    category: 'physics',
    level: 'district',
    description: {
      uz: "Termodinamika va mexanika masalalarida eng yuqori 100% natija qayd etib, tuman birinchiligini qo'lga kiritdi.",
      ru: "Показала абсолютный 100% результат при решении задач по термодинамике и механике.",
      en: "Achieved a flawless 100% score on thermodynamics and mechanics problem sets."
    },
    photo: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'ach-9',
    year: 2021,
    date: '2021-11-15',
    title: {
      uz: "Tuman 'Vatanparvarlar' sport musobaqasida 1-o'rin",
      ru: "1-е место на районных соревнованиях «Ватанпарвар»",
      en: "Gold in District Patriotic Athletic Tournament"
    },
    studentName: "8-maktab harbiy to'garagi a'zolari",
    place: 1,
    category: 'military',
    level: 'district',
    description: {
      uz: "Saf ko'rigi va qurolni to'liq qismlarga ajratish va yig'ish tezligi bo'yicha mutlaq rekord o'rnatildi.",
      ru: "Установлен рекорд района по скорости неполной разборки и сборки автомата и строевому смотру.",
      en: "Set the district record for assembly-disassembly timing and ceremonial squad drill."
    },
    photo: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&q=80&w=600"
  }
];

// Yangiliklar (6 ta batafsil maqola)
export const NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: {
      uz: "8-sonli maktabda 'Jasorat burchagi' va yangi elektron nishonga otish tiri ochildi",
      ru: "В школе № 8 открыт «Уголок Мужества» и современный лазерный тир",
      en: "New Laser Marksmanship Arena and 'Hall of Courage' Inaugurated at School No. 8"
    },
    excerpt: {
      uz: "O'quvchilarning harbiy tayyorgarligi va nishonga aniq otish mahoratini oshirish maqsadida zamonaviy trenajyorlar bilan jihozlangan zal foydalanishga topshirildi.",
      ru: "Для совершенствования стрелковых навыков и военной выправки учащихся сдан в эксплуатацию современный тренажерный комплекс.",
      en: "State-of-the-art electronic target simulators and tactical training facilities officially launched to support Jasorat Maktabi cadets."
    },
    content: {
      uz: "Mingbuloq tumani hokimligi, Mudofaa ishlari bo'limi hamda maktab ma'muriyati tashabbusi bilan maktabimizda zamonaviy 'Jasorat burchagi' va elektron optik tir majmuasi tantanali ravishda ochildi. Ushbu majmuada o'quvchilar xavfsiz sharoitda nishonni mo'ljalga olish, nafas olishni nazorat qilish va harbiy-amaliy ko'nikmalarni shakllantirishadi. Tadbirda Qurolli Kuchlar faxriylari va mahalla faollari ishtirok etib, yoshlarga o'z oq fotihalarini berdilar.",
      ru: "По инициативе хокимията Мингбулакского района, Отдела по делам обороны и администрации школы состоялось торжественное открытие зала боевой славы и лазерного тира. Комплекс позволяет в полностью безопасных условиях отрабатывать координацию, концентрацию и меткость. На церемонии присутствовали ветераны Вооруженных Сил и почетные гости.",
      en: "In partnership with district authorities and defense departments, School No. 8 unveiled a cutting-edge electronic target simulation range and patriotic honors museum. The facility enables safe, interactive marksmanship coaching and discipline training under the direct supervision of certified officers."
    },
    date: "2026-10-24",
    category: "jasorat",
    image: "/src/assets/images/jasorat_courage_hall_1793267877477.jpg",
    readTime: "3 min",
    author: "F. Karimov"
  },
  {
    id: 'news-2',
    title: {
      uz: "Ingliz tili chuqurlashtirilgan sinflari uchun xalqaro 'Speaking Club' loyihasi boshlandi",
      ru: "Стартовал международный проект «Speaking Club» для профильных классов",
      en: "International 'Speaking Club' Launched for Advanced English Cohorts"
    },
    excerpt: {
      uz: "Har shanba kuni o'quvchilar xorijlik volontyorlar va xalqaro universitet talabalari bilan onlayn muloqot qiladilar.",
      ru: "Каждую субботу ученики практикуют разговорный английский в формате телемостов с международными студентами.",
      en: "Every Saturday, pupils participate in structured dialogue rounds and debates with international university students."
    },
    content: {
      uz: "Maktabimizning xorijiy tillarni chuqur o'rganish dasturi doirasida yangi 'Global Voices Speaking Club' loyihasiga start berildi. Loyiha doirasida o'quvchilar har hafta zamonaviy mavzularda ingliz tilida erkin fikr almashadilar, IELTS Speaking imtihoni formati bo'yicha simulyatsiyalarda qatnashadilar. Bu loyiha bitiruvchilarimizning xalqaro sertifikat olish ko'rsatkichini yanada oshirishga xizmat qiladi.",
      ru: "В рамках программы углубленного изучения иностранных языков запущен разговорный клуб «Global Voices». Учащиеся каждую неделю дискутируют на актуальные темы мировой науки и культуры, тренируют формат интервью IELTS и преодолевают языковой барьер.",
      en: "As part of our specialized foreign language track, the 'Global Voices Speaking Club' provides immersive weekly conversational rounds, academic vocabulary drills, and simulated IELTS interviews led by accredited mentors."
    },
    date: "2026-10-18",
    category: "olympiad",
    image: "/src/assets/images/school_library_study_1793267880053.jpg",
    readTime: "4 min",
    author: "N. Xasanova"
  },
  {
    id: 'news-3',
    title: {
      uz: "Fizika laboratoriyasiga yangi lazer va optika qurilmalari yetkazib berildi",
      ru: "В лабораторию физики поступило новейшее оптическое и лазерное оборудование",
      en: "New Laser Optics and Circuitry Stations Delivered to Physics Laboratory"
    },
    excerpt: {
      uz: "O'quvchilar yorug'lik dispersiyasi, lazer nurlari sinishi va elektromagnetizm qonunlarini amalda tekshirish imkoniyatiga ega bo'ldilar.",
      ru: "Ученики получили возможность на практике исследовать дисперсию света, интерференцию и электромагнитные поля.",
      en: "Scholars can now conduct hands-on empirical experiments exploring wave refraction, laser optics, and electromagnetic induction."
    },
    content: {
      uz: "Davlat dasturi asosida 8-sonli maktabning fizika laboratoriyasi eng zamonaviy o'quv-tajriba stendlari bilan boyitildi. Yangi jihozlar yordamida 7-11-sinf o'quvchilari yorug'likning to'lqin tabiati, linzalar optikasi hamda yarimo'tkazgichlar fizikasini bevosita laboratoriya stollarida amaliy sinab ko'rishmoqda. Bu darslarning qiziqarli va tushunarli bo'lishini ta'minlamoqda.",
      ru: "Физическая лаборатория школы оснащена современными учебно-исследовательскими стендами. Теперь учащиеся 7-11 классов могут на практике наблюдать волновые свойства света, спектральный анализ и принципы работы полупроводников.",
      en: "The school's dedicated Physics Laboratory has been upgraded with modular experimental apparatus, precision sensors, and optical benches, bringing theoretical formulas to life through direct experimentation."
    },
    date: "2026-10-10",
    category: "science",
    image: "/src/assets/images/science_physics_lab_1793267878829.jpg",
    readTime: "3 min",
    author: "J. Tursunov"
  },
  {
    id: 'news-4',
    title: {
      uz: "Maktabimiz o'quvchilari 'Vatanparvarlar' tuman spartakiadasida birinchi o'rinni egalladi",
      ru: "Ученики школы № 8 заняли 1-е место на районной спартакиаде «Ватанпарвар»",
      en: "School No. 8 Takes 1st Place in District 'Vatanparvar' Youth Games"
    },
    excerpt: {
      uz: "100 metrga yugurish, to'siqlarni yengish va estafeta yo'nalishlarida maktabimiz sportchilari mutlaq peshqadamlikni namoyish etdi.",
      ru: "В беге на 100 метров, кроссе и тактической эстафете наши юные атлеты продемонстрировали блестящие результаты.",
      en: "Our athletes dominated the 100m sprint, obstacle hurdles, and tactical squad relays with flawless team coordination."
    },
    content: {
      uz: "Mingbuloq tumani markaziy stadionida o'tkazilgan an'anaviy yoshlar sport spartakiadasida 8-maktabning o'g'il-qizlardan iborat jamoasi yuqori tayyorgarlik va temir intizom ko'rsatib, 32 ta maktab jamoalari orasida 1-o'rinni egalladi va tuman hokimi kubogiga sazovor bo'ldi.",
      ru: "На центральном стадионе Мингбулакского района завершилась спартакиада среди школьников. Наша сборная проявила железную волю и заняла 1-е место среди 32 команд района, удостоившись кубка хокима.",
      en: "At the district stadium, our combined athletic team outperformed 32 competing schools with exceptional physical fitness and disciplined execution, proudly lifting the Governor's Trophy."
    },
    date: "2026-09-28",
    category: "sports",
    image: "/src/assets/images/sports_military_field_1793267879828.jpg",
    readTime: "2 min",
    author: "Sh. Polvonov"
  },
  {
    id: 'news-5',
    title: {
      uz: "Al-Xorazmiy olimpiadasiga tayyorgarlik: Maktabimizda intensiv matematika oromgohi",
      ru: "Подготовка к олимпиаде Аль-Хорезми: интенсивный математический лагерь",
      en: "Al-Khwarizmi Olympiad Bootcamp Underway at School No. 8"
    },
    excerpt: {
      uz: "Iqtidorli o'quvchilar uchun oliy toifali mutaxassislar ishtirokida maxsus mahorat darslari va treninglar tashkil etildi.",
      ru: "Для одаренных школьников организованы мастер-классы и олимпиадные интенсивы с участием ведущих тренеров.",
      en: "An accelerated 10-day mathematics workshop is training promising students in advanced problem solving."
    },
    content: {
      uz: "Maktabimizning matematika yo'nalishidagi iqtidorli o'quvchilari uchun maxsus qishki va kuzgi o'quv oromgohi faoliyat olib bormoqda. Mashg'ulotlarda algebraik tengsizliklar, ehtimollar nazariyasi va murakkab planimetriya masalalarini nostandart usullarda yechish sirlari o'rgatilmoqda.",
      ru: "Для талантливых ребят стартовал математический интенсив, нацеленный на глубокий разбор нестандартных задач по теории чисел, неравенствам и высшей геометрии.",
      en: "Dedicated Olympiad mentors are coaching student cohorts through non-routine proofs, number theory challenges, and high-difficulty combinatorial mathematics."
    },
    date: "2026-09-15",
    category: "olympiad",
    image: "/src/assets/images/hero_school_campus_1793267877920.jpg",
    readTime: "3 min",
    author: "Sh. Qodirova"
  },
  {
    id: 'news-6',
    title: {
      uz: "Maktab kutubxonasiga 1500 dan ortiq yangi xorijiy va ilmiy adabiyotlar keltirildi",
      ru: "Библиотечный фонд пополнился более чем 1500 новыми научными изданиями",
      en: "Over 1,500 New Academic and International Books Added to Library"
    },
    excerpt: {
      uz: "Fizika, matematika, ingliz tili darsliklari hamda vatanparvarlik tarbiyasiga oid sara kitoblar kutubxona fondidan o'rin oldi.",
      ru: "В фонды поступили современные пособия по физике, математике, издания на английском языке и исторические монографии.",
      en: "The school library has cataloged 1,500+ contemporary STEM textbooks, graded English readers, and historical literature."
    },
    content: {
      uz: "Raqamli kutubxonamiz va an'anaviy o'quv zali yangi adabiyotlar bilan boyitildi. O'quvchilar endi zamonaviy Cambridge va Oxford dasturlaridagi qo'llanmalar hamda ilmiy-ommabop ensiklopediyalardan erkin foydalanishlari mumkin.",
      ru: "Библиотека пополнилась изданиями Oxford и Cambridge, сборниками задач повышенной сложности и серией книг о выдающихся деятелях науки и полководцах Востока.",
      en: "Our digital and print library now houses acclaimed Oxford and Cambridge pedagogical series, state-approved test compilations, and historical manuscripts."
    },
    date: "2026-09-02",
    category: "events",
    image: "/src/assets/images/school_library_study_1793267880053.jpg",
    readTime: "2 min",
    author: "Kutubxona mudiri"
  }
];

// O'quv resurslari va darsliklar (Kutubxona)
export const RESOURCES: ResourceItem[] = [
  // English
  {
    id: 'res-eng-1',
    title: {
      uz: "English Grammar in Use — O'rta va yuqori sinflar uchun qo'llanma",
      ru: "English Grammar in Use — практическое пособие по грамматике",
      en: "English Grammar in Use — Intermediate & Advanced Reference"
    },
    subject: 'english',
    grade: 9,
    type: 'pdf',
    fileSize: '14.2 MB',
    url: '#resource-preview-grammar',
    description: {
      uz: "Barcha asosiy grammatik zamonlar, fe'l shakllari va mashqlar javoblari bilan.",
      ru: "Полный свод грамматических правил с практическими упражнениями и ключами.",
      en: "Comprehensive guide to English verb tenses, conditionals, and usage exercises."
    },
    downloads: 384
  },
  {
    id: 'res-eng-2',
    title: {
      uz: "IELTS & CEFR Academic Vocabulary 1200 Essential Words",
      ru: "IELTS & CEFR Academic Vocabulary — 1200 ключевых академических слов",
      en: "IELTS & CEFR Academic Vocabulary — 1200 Essential Terms"
    },
    subject: 'english',
    grade: 10,
    type: 'worksheet',
    fileSize: '4.8 MB',
    url: '#resource-preview-vocab',
    description: {
      uz: "Ilmiy matnlarni o'qish va insho yozishda eng ko'p uchraydigan akademik so'zlar.",
      ru: "Словарь академической лексики для успешной сдачи экзаменов B2 и C1.",
      en: "High-frequency academic wordlist with collocations and context sentences."
    },
    downloads: 512
  },
  {
    id: 'res-eng-3',
    title: {
      uz: "Speaking Club Debate Topics & Discussion Prompts",
      ru: "Темы для дискуссионного клуба и разговорной практики",
      en: "Speaking Club Debate Topics & Discussion Prompts"
    },
    subject: 'english',
    grade: 11,
    type: 'presentation',
    fileSize: '8.1 MB',
    url: '#resource-preview-debate',
    description: {
      uz: "Bahs-munozara, notiqlik mahorati va taqdimotlar tayyorlash uchun 50 ta interaktiv mavzu.",
      ru: "50 интерактивных тем для дебатов, развития аргументации и публичных выступлений.",
      en: "50 curated debate resolutions with pro/con argument structures."
    },
    downloads: 290
  },

  // Physics
  {
    id: 'res-phys-1',
    title: {
      uz: "Fizika 8-11-sinf: Laboratoriya ishlari va amaliy tajribalar yo'riqnomasi",
      ru: "Физика 8-11 класс: Практикум лабораторных работ и инструкций",
      en: "Physics Grades 8-11: Practical Laboratory Guide & Procedures"
    },
    subject: 'physics',
    grade: 9,
    type: 'pdf',
    fileSize: '18.6 MB',
    url: '#resource-preview-phys-lab',
    description: {
      uz: "Mexanika, issiqlik hodisalari, elektr va optika bo'yicha bosqichma-bosqich tajribalar.",
      ru: "Пошаговые методические указания к проведению лабораторных экспериментов.",
      en: "Step-by-step instructions for mechanics, circuits, thermal physics, and optics experiments."
    },
    downloads: 420
  },
  {
    id: 'res-phys-2',
    title: {
      uz: "Fizika formulalari va qonunlari to'liq spravochnigi (Chetel formulalari)",
      ru: "Полный справочник физических формул и фундаментальных законов",
      en: "Complete Physics Formula Handbook & Fundamental Constants"
    },
    subject: 'physics',
    grade: 11,
    type: 'worksheet',
    fileSize: '3.2 MB',
    url: '#resource-preview-formulas',
    description: {
      uz: "Kvant fizikasi, to'lqinlar, termodinamika va kinematika formulalari jamlanmasi.",
      ru: "Компактный сборник формул по кинематике, электродинамике и квантовой физике.",
      en: "Concise cheat-sheet of SI units, constants, and analytical equations."
    },
    downloads: 670
  },
  {
    id: 'res-phys-3',
    title: {
      uz: "PhET Interactive Simulations — Interaktiv virtual laboratoriyalar",
      ru: "Интерактивные физические симуляторы PhET — онлайн практикум",
      en: "PhET Interactive Physics Simulations — Virtual Science Lab"
    },
    subject: 'physics',
    grade: 8,
    type: 'link',
    fileSize: 'Onlayn havola',
    url: 'https://phet.colorado.edu',
    description: {
      uz: "Atom tuzilishi, zanjirlar va to'lqinlarni kompyuterda vizual tajriba qilish havolasi.",
      ru: "Визуальные интерактивные симуляции строения атома, гравитации и электрических цепей.",
      en: "Direct link to world-class interactive educational physics simulators."
    },
    downloads: 890
  },

  // Math
  {
    id: 'res-math-1',
    title: {
      uz: "Olimpiada matematikasi: Nostandart tenglamalar va geometriya masalalari",
      ru: "Олимпиадная математика: нестандартные уравнения и планиметрия",
      en: "Olympiad Mathematics: Advanced Equations & Geometry Problems"
    },
    subject: 'math',
    grade: 10,
    type: 'pdf',
    fileSize: '11.5 MB',
    url: '#resource-preview-math-olymp',
    description: {
      uz: "Respublika va xalqaro olimpiadalarga tayyorgarlik uchun 300 ta yechimi bilan masalalar.",
      ru: "300 задач с подробными авторскими решениями для подготовки к олимпиадам.",
      en: "300 competition-level math problems with rigorous mathematical proofs."
    },
    downloads: 540
  },
  {
    id: 'res-math-2',
    title: {
      uz: "Algebra va Matematik analiz asoslari testlar to'plami (OTM ga tayyorgarlik)",
      ru: "Тестовый банк по алгебре и началам анализа для абитуриентов",
      en: "Algebra & Calculus Diagnostic Test Bank for College Prep"
    },
    subject: 'math',
    grade: 11,
    type: 'test',
    fileSize: '5.9 MB',
    url: '#resource-preview-math-test',
    description: {
      uz: "DTM va xalqaro universitetlar kirish imtihonlari standartidagi test topshiriqlari.",
      ru: "Тесты формата вступительных испытаний в ведущие технические вузы.",
      en: "Standardized multiple-choice and free-response exams modeled on university entrance tests."
    },
    downloads: 730
  },

  // Military
  {
    id: 'res-mil-1',
    title: {
      uz: "ChQBT va Jasorat Maktabi darsligi: Saf tayyorgarligi va harbiy nizomlar",
      ru: "Учебник НДП и Школы Мужества: Строевой устав и воинские обязанности",
      en: "Cadet Field Manual: Military Drill Regulations & Civil Defense"
    },
    subject: 'military',
    grade: 10,
    type: 'pdf',
    fileSize: '16.4 MB',
    url: '#resource-preview-mil-manual',
    description: {
      uz: "Qurolli Kuchlar umumharbiy nizomlari, saf tayyorgarligi qoidalari va harbiy qasamyod matni.",
      ru: "Общевоинские уставы, строевые приемы и кодекс чести защитника Отечества.",
      en: "Drill ceremonies, tactical signaling, military oath, and civic responsibilities."
    },
    downloads: 410
  },
  {
    id: 'res-mil-2',
    title: {
      uz: "Favqulodda vaziyatlarda birinchi tibbiy yordam ko'rsatish qo'llanmasi",
      ru: "Пособие по оказанию первой медицинской помощи при ЧС",
      en: "First Aid & Emergency Tactical Response Guide"
    },
    subject: 'military',
    grade: 9,
    type: 'presentation',
    fileSize: '9.3 MB',
    url: '#resource-preview-first-aid',
    description: {
      uz: "Qon ketishini to'xtatish, shinalar qo'yish, sun'iy nafas berish va transportirovka.",
      ru: "Иллюстрированное руководство по наложению жгута, шинированию и реанимации.",
      en: "Field trauma response, tourniquet application, CPR, and safe evacuation procedures."
    },
    downloads: 365
  },

  // Physical Education
  {
    id: 'res-pe-1',
    title: {
      uz: "Jismoniy tarbiya: Davlat ta'lim standartlari va me'yoriy ko'rsatkichlar",
      ru: "Физическая культура: государственные нормативы и стандарты ГТО",
      en: "Physical Fitness Standards & Athletic Performance Benchmarks"
    },
    subject: 'pe',
    grade: 8,
    type: 'pdf',
    fileSize: '4.1 MB',
    url: '#resource-preview-pe-benchmarks',
    description: {
      uz: "O'g'il va qiz bolalar uchun yugurish, turnik, sakrash va suzish me'yorlari jadvali.",
      ru: "Таблицы контрольных нормативов по бегу, подтягиваниям и прыжкам для школьников.",
      en: "Comprehensive grading rubrics for sprint, endurance, pull-ups, and flexibility."
    },
    downloads: 295
  },
  {
    id: 'res-pe-2',
    title: {
      uz: "Milliy Kurash usullari va qoidalari: Yosh kurashchilar uchun video qo'llanma",
      ru: "Правила и приемы борьбы Кураш: методический видеоматериал",
      en: "Uzbek Kurash Techniques & Sportsmanship Rules Video Guide"
    },
    subject: 'pe',
    grade: 7,
    type: 'video',
    fileSize: 'Video dars',
    url: '#resource-preview-kurash-video',
    description: {
      uz: "Kurash usullari: Yonbosh, Chala, Halol tushunchalari va gilamdagi odob-axloq.",
      ru: "Базовые приемы, броски и правила судейства национальной борьбы Кураш.",
      en: "Core grappling holds, balance breaks, scoring categories, and sportsmanship conduct."
    },
    downloads: 480
  }
];

// Interaktiv ta'lim vositalari ma'lumotlari
export const INTERACTIVE_TOOLS_DATA = {
  // Kunning inglizcha so'zi
  wordOfTheDay: {
    word: "Courageous",
    phonetic: "/kəˈreɪ.dʒəs/",
    partOfSpeech: "adjective",
    translation: {
      uz: "Jasur, mard, qo'rqmas",
      ru: "Мужественный, смелый, храбрый",
      en: "Brave, fearless, having courage"
    },
    definition: "Having or showing the mental or moral strength to face danger, fear, or difficulty.",
    example: "The courageous students trained diligently every morning to represent their school in the national competition."
  },

  // Kunning matematika masalasi
  mathChallenge: {
    title: {
      uz: "Kunning mantiqiy-matematik topishmog'i",
      ru: "Математическая логическая задача дня",
      en: "Math Challenge of the Day"
    },
    question: {
      uz: "Uchta ketma-ket butun sonlarning yig'indisi 141 ga teng. Ushbu sonlarning eng kattasini toping.",
      ru: "Сумма трех последовательных целых чисел равна 141. Найдите наибольшее из этих чисел.",
      en: "The sum of three consecutive integers is 141. What is the greatest of these numbers?"
    },
    correctAnswer: "48",
    explanation: {
      uz: "Tushuntirish: Agar sonlar x, x+1, x+2 bo'lsa, ularning yig'indisi 3x + 3 = 141 bo'ladi. 3x = 138, demak x = 46. Eng kattasi x + 2 = 48.",
      ru: "Решение: Пусть числа равны x, x+1, x+2. Тогда 3x + 3 = 141. 3x = 138, x = 46. Наибольшее число x + 2 = 48.",
      en: "Solution: Let the integers be x, x+1, x+2. Their sum is 3x + 3 = 141 -> 3x = 138 -> x = 46. The greatest integer is 46 + 2 = 48."
    }
  },

  // Kunning fizika dalili
  physicsFact: {
    title: {
      uz: "Optika va Yorug'lik tezligi siri",
      ru: "Оптика и фундаментальная скорость света",
      en: "Optics & The Universal Speed of Light"
    },
    fact: {
      uz: "Yorug'lik vakuumda sekundiga 299,792 kilometr tezlikda harakat qiladi. Bu Quyoshdan chiqqan nur bor-yo'g'i 8 daqiqa 20 soniyada Yerga yetib kelishini anglatadi!",
      ru: "Свет в вакууме движется со скоростью 299 792 км/с. Это значит, что солнечный луч преодолевает расстояние до Земли всего за 8 минут и 20 секунд!",
      en: "Light travels in a vacuum at approximately 299,792 km/s (186,282 miles/s). Sunlight takes just 8 minutes and 20 seconds to reach our planet Earth."
    },
    tag: "Astrofizika & Optika"
  },

  // Sinflar dars jadvali
  schedules: {
    "5-A": [
      { day: 'Dushanba', lessons: ["Matematika", "Ingliz tili", "Ona tili", "Adabiyot", "Jismoniy tarbiya"] },
      { day: 'Seshanba', lessons: ["Matematika", "Tabiiy fan", "Ingliz tili", "Tarix", "Tasviriy san'at"] },
      { day: 'Chorshanba', lessons: ["Ona tili", "Matematika", "Ingliz tili (chuqur)", "Musiqa", "Texnologiya"] },
      { day: 'Payshanba', lessons: ["Matematika", "Adabiyot", "Ingliz tili", "Tabiiy fan", "Jismoniy tarbiya"] },
      { day: 'Juma', lessons: ["Ona tili", "Informatika", "Matematika", "Tarix", "Tarbiya"] },
      { day: 'Shanba', lessons: ["Ingliz tili (Speaking)", "Matematika (To'garak)", "Jasorat soati", "Sport to'garagi"] }
    ],
    "9-B": [
      { day: 'Dushanba', lessons: ["Fizika (chuqur)", "Algebra", "Ingliz tili", "Kimyo", "Ona tili", "Jismoniy tarbiya"] },
      { day: 'Seshanba', lessons: ["Geometriya", "Fizika lab", "Ingliz tili (chuqur)", "Biologiya", "Tarix", "Informatika"] },
      { day: 'Chorshanba', lessons: ["Algebra", "Fizika", "Adabiyot", "ChQBT (Harbiy)", "Kimyo", "Geografiya"] },
      { day: 'Payshanba', lessons: ["Ingliz tili (IELTS)", "Geometriya", "Fizika", "Biologiya", "Ona tili", "Jismoniy tarbiya"] },
      { day: 'Juma', lessons: ["Algebra", "Fizika", "Ingliz tili", "Tarix", "Informatika", "Huquq"] },
      { day: 'Shanba', lessons: ["ChQBT saf tayyorgarligi", "Olimpiada to'garagi", "Optika laboratoriyasi", "Sport seksiyasi"] }
    ],
    "11-A": [
      { day: 'Dushanba', lessons: ["Algebra & Analiz", "Fizika (chuqur)", "Ingliz tili (Academic)", "ChQBT harbiy taktika", "Ona tili", "Tarix"] },
      { day: 'Seshanba', lessons: ["Fizika laboratoriya", "Geometriya", "Ingliz tili (Debates)", "Kimyo", "Biologiya", "Jismoniy tarbiya"] },
      { day: 'Chorshanba', lessons: ["Algebra & Analiz", "Fizika", "Ingliz tili", "Informatika / Python", "Adabiyot", "Astronomiya"] },
      { day: 'Payshanba', lessons: ["Geometriya", "Fizika masalalar", "Ingliz tili (CEFR)", "ChQBT otish tiri", "O'zbekiston tarixi", "Jismoniy tarbiya"] },
      { day: 'Juma', lessons: ["Matematika test", "Fizika test", "Ingliz tili test", "Huquqshunoslik", "Ma'naviyat", "Tadbirkorlik"] },
      { day: 'Shanba', lessons: ["OTM ga tayyorgarlik kursi", "Jasorat Maktabi spartakiadasi", "Robototexnika", "Karyera konsultatsiyasi"] }
    ]
  },

  // Yaqinlashayotgan tadbir (Countdown)
  upcomingEvent: {
    title: {
      uz: "Respublika 'Jasorat Maktablari' harbiy-sport forumi",
      ru: "Республиканский военно-спортивный форум Школ Мужества",
      en: "National 'Jasorat Schools' Military & Athletic Forum"
    },
    // Target date set for late 2026
    targetDate: "2026-11-18T09:00:00",
    location: {
      uz: "Mingbuloq tumani markaziy harbiy-sport maydoni",
      ru: "Центральный военно-спортивный комплекс Мингбулака",
      en: "Mingbuloq Central Sports & Tactical Grounds"
    }
  }
};

// Fotogalereya suratlari
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: {
      uz: "8-sonli maktab zamonaviy binosi va ko'rkam bog'i",
      ru: "Современное здание и ухоженный двор школы № 8",
      en: "Campus grounds and main educational building"
    },
    category: 'campus',
    image: "/src/assets/images/hero_school_campus_1793267877920.jpg",
    caption: {
      uz: "Har kuni 1100 dan ziyod o'quvchini bag'riga oluvchi obod bilim dargohi.",
      ru: "Школа ежедневно распахивает двери для более чем 1100 учащихся.",
      en: "Modern educational complex serving over 1,100 students daily."
    }
  },
  {
    id: 'gal-2',
    title: {
      uz: "Jasorat Maktabi faxriy shon-sharaf zali",
      ru: "Зал воинской славы и трофеев Школы Мужества",
      en: "Cadet Hall of Honor and Military Merit"
    },
    category: 'jasorat',
    image: "/src/assets/images/jasorat_courage_hall_1793267877477.jpg",
    caption: {
      uz: "Yurt tinchligi va mustaqilligini asrovchi mard yoshlar safi.",
      ru: "Воспитание достойных сынов и дочерей, преданных Родине.",
      en: "Cadets gathered in the ceremonial hall of courage."
    }
  },
  {
    id: 'gal-3',
    title: {
      uz: "Fizika laboratoriyasida amaliy tadqiqotlar",
      ru: "Практические опыты в кабинете физики",
      en: "Hands-on discovery in the Physics Lab"
    },
    category: 'lessons',
    image: "/src/assets/images/science_physics_lab_1793267878829.jpg",
    caption: {
      uz: "Lazer nurlarining sinishi va to'lqin xususiyatlarini o'rganish jarayoni.",
      ru: "Исследование свойств лазерного излучения и оптических систем.",
      en: "Students exploring optical refraction and light dispersion."
    }
  },
  {
    id: 'gal-4',
    title: {
      uz: "Maktab stadioni: yugurish va jismoniy tarbiya",
      ru: "Школьный стадион: легкоатлетические тренировки",
      en: "Active school stadium: track & fitness"
    },
    category: 'sports',
    image: "/src/assets/images/sports_military_field_1793267879828.jpg",
    caption: {
      uz: "O'quvchilar sog'lom turmush tarzi va sport me'yorlarini bajargan holda.",
      ru: "Развитие физической выносливости и спортивного духа.",
      en: "Morning athletic training and obstacle course drills."
    }
  },
  {
    id: 'gal-5',
    title: {
      uz: "Raqamli kutubxona va erkin mutolaa maydoni",
      ru: "Цифровая библиотека и пространство самоподготовки",
      en: "Digital learning library & collaborative study space"
    },
    category: 'lessons',
    image: "/src/assets/images/school_library_study_1793267880053.jpg",
    caption: {
      uz: "Ingliz tili va aniq fanlardan darsliklar bilan mustaqil ishlash.",
      ru: "Ученики углубленно осваивают языки и точные науки.",
      en: "Students preparing for international language and STEM certifications."
    }
  },
  {
    id: 'gal-6',
    title: {
      uz: "O'quvchilar ilmiy konferensiyasi va taqdimotlar",
      ru: "Школьная научная конференция и защита проектов",
      en: "Student STEM symposium & research presentations"
    },
    category: 'events',
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    caption: {
      uz: "Yosh ixtirochilar va fiziklar o'z loyihalarini namoyish etmoqda.",
      ru: "Юные исследователи представляют свои инновационные разработки.",
      en: "Young researchers presenting their experimental science projects."
    }
  }
];

// O'quvchilar va Ota-onalar fikrlari (Testimonials)
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: "Javohirbek Mahmudov",
    role: {
      uz: "2023-yil bitiruvchisi, Toshkent Axborot Texnologiyalari Universiteti talabasi",
      ru: "Выпускник 2023 года, студент ТАТУ",
      en: "Class of 2023 Alumnus, Software Engineering Student at TUIT"
    },
    text: {
      uz: "8-sonli maktabda chuqurlashtirilgan matematika va fizika darslari mening muhandislik sohasiga kirishimda hal qiluvchi rol o'ynadi. Shuningdek, 'Jasorat' to'garagida o'rgangan intizomim hozir ham hayotimda katta yordam bermoqda.",
      ru: "Углубленные уроки физики и математики в школе № 8 дали мне мощнейшую базу для поступления в университет на бюджет. А выучка в Школе Мужества научила никогда не сдаваться.",
      en: "The rigorous physics and calculus foundations taught at School No. 8 enabled me to secure a top university scholarship. The discipline instilled by Jasorat Maktabi remains my compass."
    },
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200",
    year: "2023"
  },
  {
    id: 'test-2',
    author: "Zulfiyaxon Karimova",
    role: {
      uz: "Ota-onalar qo'mitasi a'zosi",
      ru: "Член родительского комитета",
      en: "Parent Association Executive"
    },
    text: {
      uz: "Ikki nafar farzandim ushbu maktabda o'qiydi. O'qituvchilarning bolalarga mehribonligi, zamonaviy laboratoriyalar va maktabdagi qat'iy xavfsizlik biz ota-onalarni juda quvontiradi.",
      ru: "Двое моих детей учатся здесь. Забота учителей, чистота, передовые лаборатории и железный порядок на территории школы вызывают огромное уважение.",
      en: "Both of my children attend School No. 8. The faculty's personalized dedication, modern lab facilities, and high safety standards give every parent complete peace of mind."
    },
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    year: "2025"
  },
  {
    id: 'test-3',
    author: "Shaxzoda Rahmatullayeva",
    role: {
      uz: "2024-yil bitiruvchisi, IELTS 8.0, O'zbekiston Milliy Universiteti talabasi",
      ru: "Выпускница 2024 года, IELTS 8.0, студентка НУУз",
      en: "Class of 2024 Alumna, IELTS 8.0, National University of Uzbekistan"
    },
    text: {
      uz: "Maktabimizdagi Ingliz tili to'garaklari va Speaking Club tufayli chet tilini mukammal o'zlashtirdim va maktabdayoq IELTS 8.0 sertifikatini oldim. Ustozlarimga cheksiz minnatdorman!",
      ru: "Благодаря школьному разговорному клубу и самоотверженным преподавателям английского я получила сертификат IELTS 8.0 еще до окончания 11 класса.",
      en: "Through the school's specialized English debate clubs, I achieved my IELTS Band 8.0 before graduation. The mentors here truly inspire global ambitions."
    },
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    year: "2024"
  }
];

// OTM hamkorlari (Bitiruvchilarimiz o'qiyotgan nufuzli universitetlar)
export const UNIVERSITY_PARTNERS = [
  { name: "O'zbekiston Milliy Universiteti", short: "O'zMU", city: "Toshkent" },
  { name: "Toshkent Davlat Texnika Universiteti", short: "TDTU", city: "Toshkent" },
  { name: "Toshkent Axborot Texnologiyalari Universiteti", short: "TATU", city: "Toshkent" },
  { name: "Namangan Davlat Universiteti", short: "NamDU", city: "Namangan" },
  { name: "Namangan Muhandislik-Qurilish Instituti", short: "NamMQI", city: "Namangan" },
  { name: "Webster University in Tashkent", short: "WUT", city: "Toshkent" },
  { name: "Inha University in Tashkent", short: "IUT", city: "Toshkent" },
  { name: "Mudofaa Vazirligi Akademiyasi", short: "QQU", city: "Chirchiq" }
];

// Tez-tez beriladigan savollar (FAQ)
export const FAQS = [
  {
    q: {
      uz: "Maktabga 1-sinfga qabul jarayoni qachon va qay tartibda amalga oshiriladi?",
      ru: "Когда и в каком порядке проходит прием в 1-й класс?",
      en: "When and how does the Grade 1 admission process take place?"
    },
    a: {
      uz: "1-sinfga qabul har yili 20-iyundan boshlab my.maktab.uz portali orqali elektron shaklda amalga oshiriladi. Maktab mikrohududida yashovchi bolalar birinchi navbatda qabul qilinadi. Boshqa hududlardan o'quvchilar bo'sh o'rinlar mavjud bo'lganda 1-avgustdan boshlab qabul qilinadi.",
      ru: "Прием заявлений в первый класс открывается 20 июня на портале my.maktab.uz. Дети, проживающие в микроучастке школы, принимаются в приоритетном порядке. На свободные места прием детей из других районов начинается с 1 августа.",
      en: "Grade 1 applications open annually on June 20 via the official my.maktab.uz portal. Micro-district residents receive primary priority, after which general applications are reviewed based on seat availability."
    }
  },
  {
    q: {
      uz: "Maktabda 'Jasorat Maktabi' yo'nalishiga qabul qilinish uchun qanday talablar mavjud?",
      ru: "Каковы требования для зачисления в программу «Школа Мужества»?",
      en: "What are the criteria for enrollment in the 'Jasorat Maktabi' courage curriculum?"
    },
    a: {
      uz: "Jasorat Maktabi dasturiga 8-11-sinf o'quvchilari tibbiy ko'rik xulosasi, umumiy jismoniy tayyorgarlik darajasi va o'quvchining o'z xohishi asosida qabul qilinadi. Mashg'ulotlar darsdan so'ng maxsus ChQBT va sport to'garaklari formatida o'tkaziladi.",
      ru: "В программу «Школа Мужества» зачисляются ученики 8-11 классов на основании медицинской справки о допуске к спортивным нагрузкам, нормативов ОФП и личного заявления. Занятия проходят во внеурочное время.",
      en: "Enrolled pupils in grades 8-11 with standard medical fitness clearance can join the Jasorat military-patriotic cohort. Activities take place in afternoon drill sessions, sports clubs, and field excursions."
    }
  },
  {
    q: {
      uz: "Chuqurlashtirilgan Ingliz tili, Fizika va Matematika sinflariga imtihon bormi?",
      ru: "Предусмотрены ли вступительные тесты в профильные классы физики, математики и английского?",
      en: "Are there diagnostic assessments for specialized cohorts in English, Physics, and Math?"
    },
    a: {
      uz: "Ha, 7-sinfdan boshlab chuqurlashtirilgan yo'nalishlarga o'quvchilarning salohiyatini aniqlash uchun tuman ta'lim bo'limi tomonidan tasdiqlangan test sinovlari va suhbat o'tkaziladi. Bu o'quvchining fanlarni o'zlashtirishini osonlashtiradi.",
      ru: "Да, начиная с 7-го класса проводится диагностическое тестирование по математике, физике и английскому языку для формирования профильных групп с углубленной программой.",
      en: "Yes, beginning in Grade 7, diagnostic baseline examinations and interviews are conducted to match students with enriched curriculum cohorts according to their academic strengths."
    }
  },
  {
    q: {
      uz: "Maktabda to'garaklar bepulmi va qaysi sport turlari mavjud?",
      ru: "Бесплатны ли школьные кружки и какие спортивные секции открыты?",
      en: "Are extracurricular activities complimentary and what athletic sports are offered?"
    },
    a: {
      uz: "Maktabimizdagi barcha fan va sport to'garaklari bepul tashkil etilgan. Maktabda Milliy Kurash, futbol, basketbol, voleybol, yengil atletika, otish tiri hamda robototexnika va shaxmat to'garaklari muntazam faoliyat ko'rsatadi.",
      ru: "Все кружки и секции в школе являются абсолютно бесплатными. Доступны секции борьбы Кураш, футбола, баскетбола, волейбола, легкой атлетики, пулевой стрельбы, шахмат и робототехники.",
      en: "All school clubs are fully complimentary for enrolled students. Offerings include traditional Kurash wrestling, football, basketball, track and field, air-rifle target practice, robotics, and chess."
    }
  }
];
