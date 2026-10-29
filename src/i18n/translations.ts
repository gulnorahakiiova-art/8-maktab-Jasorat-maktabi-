import { Language } from '../types';

export interface Translations {
  nav: {
    home: string;
    about: string;
    jasorat: string;
    subjects: string;
    achievements: string;
    teachers: string;
    resources: string;
    tools: string;
    news: string;
    contact: string;
    installApp: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    aboutBtn: string;
    contactBtn: string;
    scrollDown: string;
    statsYears: string;
    statsStudents: string;
    statsTeachers: string;
    statsHigherEdu: string;
  };
  about: {
    tag: string;
    title: string;
    historyTitle: string;
    historyText1: string;
    historyText2: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    valuesTitle: string;
    val1Title: string;
    val1Desc: string;
    val2Title: string;
    val2Desc: string;
    val3Title: string;
    val3Desc: string;
    val4Title: string;
    val4Desc: string;
    statsTitle: string;
    statStudents: string;
    statTeachers: string;
    statGraduates: string;
    statAwards: string;
    statYears: string;
    statClassrooms: string;
  };
  jasorat: {
    badge: string;
    title: string;
    subtitle: string;
    desc1: string;
    desc2: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
    timelineTitle: string;
    galleryTitle: string;
    moto: string;
  };
  subjects: {
    badge: string;
    title: string;
    subtitle: string;
    english: string;
    physics: string;
    math: string;
    military: string;
    pe: string;
    weeklyHours: string;
    olympiadResults: string;
    specialLab: string;
    teachersList: string;
    syllabus: string;
  };
  achievements: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterMath: string;
    filterPhysics: string;
    filterEnglish: string;
    filterSports: string;
    filterMilitary: string;
    filterOther: string;
    place1: string;
    place2: string;
    place3: string;
    bestStudentsTitle: string;
    levelDistrict: string;
    levelRegion: string;
    levelRepublic: string;
    levelInternational: string;
  };
  teachers: {
    badge: string;
    title: string;
    subtitle: string;
    adminTitle: string;
    teachersTitle: string;
    searchPlaceholder: string;
    filterAll: string;
    filterOliy: string;
    filter1: string;
    filter2: string;
    filterMutaxassis: string;
    expYears: string;
    viewProfile: string;
    achievementsLabel: string;
    biographyLabel: string;
    contactTeacher: string;
    closeModal: string;
  };
  resources: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allSubjects: string;
    allGrades: string;
    allTypes: string;
    typePdf: string;
    typePresentation: string;
    typeVideo: string;
    typeTest: string;
    typeWorksheet: string;
    typeLink: string;
    downloadBtn: string;
    openBtn: string;
    gradeLabel: string;
    sizeLabel: string;
    downloadsCount: string;
    emptyText: string;
  };
  tools: {
    badge: string;
    title: string;
    subtitle: string;
    wordOfTheDayTitle: string;
    listenPronounce: string;
    exampleLabel: string;
    translationLabel: string;
    mathChallengeTitle: string;
    checkAnswer: string;
    correctAnswer: string;
    wrongAnswer: string;
    tryAgain: string;
    physicsFactTitle: string;
    scheduleTitle: string;
    selectClass: string;
    daysMonday: string;
    daysTuesday: string;
    daysWednesday: string;
    daysThursday: string;
    daysFriday: string;
    daysSaturday: string;
    countdownTitle: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    pollTitle: string;
    pollQuestion: string;
    pollVote: string;
    pollThankYou: string;
  };
  news: {
    badge: string;
    title: string;
    subtitle: string;
    readMore: string;
    categoryAll: string;
    featured: string;
    latestNews: string;
    searchPlaceholder: string;
    shareArticle: string;
    relatedNews: string;
    copiedLink: string;
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    jasorat: string;
    lessons: string;
    sports: string;
    events: string;
    campus: string;
    close: string;
    prev: string;
    next: string;
  };
  admission: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    requiredDocsTitle: string;
    doc1: string;
    doc2: string;
    doc3: string;
    doc4: string;
    doc5: string;
    faqTitle: string;
    downloadApplication: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    addressValue: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hoursValue: string;
    getDirections: string;
    formTitle: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
  };
  footer: {
    aboutSchool: string;
    quickLinks: string;
    workingHours: string;
    copyright: string;
    madeWithLove: string;
    allRightsReserved: string;
  };
}

export const translations: Record<Language, Translations> = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      about: "Maktab haqida",
      jasorat: "Jasorat Maktabi",
      subjects: "Chuqurlashtirilgan fanlar",
      achievements: "Yutuqlar",
      teachers: "O'qituvchilar",
      resources: "Kutubxona",
      tools: "Interaktiv",
      news: "Yangiliklar",
      contact: "Bog'lanish",
      installApp: "Ilovani o'rnatish"
    },
    hero: {
      badge: "Namangan viloyati Mingbuloq tumani",
      title: "8-sonli umumiy o'rta ta'lim maktabi",
      titleHighlight: "Bilim, Jasorat, Kelajak",
      subtitle: "Zamonaviy ta'lim, chuqurlashtirilgan Ingliz tili, Fizika va Matematika yo'nalishlari hamda harbiy-vatanparvarlik tarbiyasiga ixtisoslashgan tayanch maktab.",
      aboutBtn: "Maktab haqida",
      contactBtn: "Bog'lanish",
      scrollDown: "Pastga aylantiring",
      statsYears: "Yillik shonli tarix",
      statsStudents: "Iqtidorli o'quvchi",
      statsTeachers: "Malakali ustozlar",
      statsHigherEdu: "OTM ga kirish ko'rsatkichi"
    },
    about: {
      tag: "Bizning maktab tarixi va qadriyatlari",
      title: "Barkamol avlodni tarbiyalovchi maskan",
      historyTitle: "Tariximiz va an'analarimiz",
      historyText1: "Mingbuloq tumani 8-sonli umumiy o'rta ta'lim maktabi ko'p yillik boy tarix va mustahkam an'analarga ega. Maktabimiz hududimizning yetakchi ta'lim muassasasi sifatida yuzlab iqtidorli yoshlarni voyaga yetkazdi.",
      historyText2: "Ayniqsa, maktabga 'Jasorat Maktabi' maqomi berilgandan so'ng, bu yerda yoshlarning harbiy-vatanparvarlik ruhi, qat'iyatliligi va jismoniy tarbiyasiga alohida e'tibor qaratilib, chuqurlashtirilgan fanlar bilan uyg'unlashtirildi.",
      missionTitle: "Bizning vazifamiz",
      missionText: "Har bir o'quvchining aqliy, ma'naviy va jismoniy salohiyatini yuzaga chiqarish, milliy va umuminsoniy qadriyatlarga sodiq, zamonaviy kasblarni egallashga qodir vatanparvar shaxslarni yetishtirish.",
      visionTitle: "Bizning maqsadimiz",
      visionText: "Hududda xalqaro ta'lim standartlariga javob beruvchi, IT, chet tillari va aniq fanlarni chuqur o'rgatuvchi eng nufuzli zamonaviy ta'lim klasteriga aylanish.",
      valuesTitle: "Asosiy qadriyatlarimiz",
      val1Title: "Bilim va Intellekt",
      val1Desc: "Aniq va tabiiy fanlarni chuqur o'rganish, tanqidiy fikrlash.",
      val2Title: "Jasorat va Matonat",
      val2Desc: "Qiyinchiliklardan qo'rqmaslik, dadillik va qat'iy iroda.",
      val3Title: "Vatanparvarlik",
      val3Desc: "Ona yurtga sadoqat, milliy qadriyatlarni asrash.",
      val4Title: "Mehnatsevarlik",
      val4Desc: "Halol mehnat, o'z ustida muntazam ishlash va jamoaviylik.",
      statsTitle: "Maktab raqamlarda",
      statStudents: "O'quvchilar soni",
      statTeachers: "Pedagoglar",
      statGraduates: "Muvaffaqiyatli bitiruvchilar",
      statAwards: "Viloyat va Respublika sovrinlari",
      statYears: "Yillik ta'lim tajribasi",
      statClassrooms: "Zamonaviy o'quv xonalari"
    },
    jasorat: {
      badge: "Maxsus yo'nalish",
      title: "Jasorat Maktabi — Kuch, Iroda va Sadoqat",
      subtitle: "Yosh avlodni harbiy-vatanparvarlik ruhida, jismonan baquvvat, qat'iyatli va jasur qilib tarbiyalash dasturi.",
      desc1: "Maktabimizda 'Jasorat Maktabi' loyihasi doirasida o'quvchilarga ilk harbiy tayyorgarlik, saf tayyorgarligi, shoshilinch tibbiy yordam ko'rsatish va favqulodda vaziyatlarda to'g'ri harakatlanish ko'nikmalari professional darajada o'rgatiladi.",
      desc2: "Maxsus jihozlangan harbiy mashg'ulot maydonchasi, sport zali va otish tiri o'quvchilarimizga amaliy bilim va chaqqonlik baxsh etadi.",
      card1Title: "Harbiy-vatanparvarlik o'yinlari",
      card1Desc: "Har yili o'tkaziladigan 'Shunqorlar', 'Vatanparvar' va 'Zarnitsa' harbiy sport musobaqalarida maktabimiz jamoasi doimiy sovrindor.",
      card2Title: "Faxriylar bilan uchrashuvlar",
      card2Desc: "Qurolli Kuchlar ofitserlari, tinchlikparvar askarlar va urush faxriylari bilan davra suhbatlari, jonli ma'naviyat darslari.",
      card3Title: "Tarixiy obidalarga sayohatlar",
      card3Desc: "O'zbekistonning shonli harbiy tarixi, muzeylari va qadamjolariga maxsus o'quv-tanishuv ekskursiyalari.",
      card4Title: "Jismoniy mukammallik",
      card4Desc: "Yugurish, turnik, to'siqlarni yengib o'tish va milliy kurash bo'yicha maxsus normativlar va mashqlar.",
      timelineTitle: "Jasorat yo'nalishidagi asosiy tadbirlar",
      galleryTitle: "Harbiy tayyorgarlik va sport mashg'ulotlaridan lavhalar",
      moto: "\"Vatan himoyasi — har bir o'g'il-qizning muqaddas burchidir!\""
    },
    subjects: {
      badge: "Ta'lim dasturlari",
      title: "Chuqurlashtirilgan fanlar majmuasi",
      subtitle: "Bizning maktabda o'quvchilar istedodini erta kashf etish uchun maxsus kuchaytirilgan dasturlar yo'lga qo'yilgan.",
      english: "Ingliz tili",
      physics: "Fizika",
      math: "Matematika",
      military: "Harbiy tayyorgarlik",
      pe: "Jismoniy tarbiya",
      weeklyHours: "Haftalik dars soatlari",
      olympiadResults: "Olimpiada natijalari",
      specialLab: "Laboratoriya va jihozlar",
      teachersList: "Yetakchi mutaxassislar",
      syllabus: "O'quv rejasiga kiritilgan mavzular"
    },
    achievements: {
      badge: "Bizning faxrimiz",
      title: "Yutuqlar va g'alabalar yilnomasi",
      subtitle: "O'quvchilarimiz va ustozlarimizning tuman, viloyat va xalqaro miqyosdagi g'alabalari.",
      filterAll: "Barchasi",
      filterMath: "Matematika",
      filterPhysics: "Fizika",
      filterEnglish: "Ingliz tili",
      filterSports: "Sport",
      filterMilitary: "Harbiy-vatanparvarlik",
      filterOther: "Boshqa sohalar",
      place1: "1-o'rin (Oltin)",
      place2: "2-o'rin (Kumush)",
      place3: "3-o'rin (Bronza)",
      bestStudentsTitle: "Faxrli o'quvchilarimiz",
      levelDistrict: "Tuman bosqichi",
      levelRegion: "Viloyat bosqichi",
      levelRepublic: "Respublika bosqichi",
      levelInternational: "Xalqaro daraja"
    },
    teachers: {
      badge: "Pedagogik jamoa",
      title: "O'z ishining fidoyilari va ustozlar",
      subtitle: "Maktabimiz o'qituvchilari zamonaviy pedagogik texnologiyalar asosida dars beruvchi tajribali mutaxassislardir.",
      adminTitle: "Maktab ma'muriyati",
      teachersTitle: "Fan o'qituvchilari",
      searchPlaceholder: "O'qituvchi ismini qidiring...",
      filterAll: "Barcha toifalar",
      filterOliy: "Oliy toifa",
      filter1: "1-toifa",
      filter2: "2-toifa",
      filterMutaxassis: "Mutaxassis",
      expYears: "yil tajriba",
      viewProfile: "Batafsil ma'lumot",
      achievementsLabel: "Erishgan yutuqlari va mukofotlari",
      biographyLabel: "Qisqacha tarjimai hol",
      contactTeacher: "Aloqa",
      closeModal: "Yopish"
    },
    resources: {
      badge: "Raqamli kutubxona",
      title: "O'quv materiallari va qo'llanmalar",
      subtitle: "O'quvchilar va ustozlar uchun darsliklar, laboratoriya ishlari, testlar va taqdimotlar.",
      searchPlaceholder: "Material nomini qidiring...",
      allSubjects: "Barcha fanlar",
      allGrades: "Barcha sinflar",
      allTypes: "Barcha turlar",
      typePdf: "Darslik / PDF",
      typePresentation: "Taqdimot",
      typeVideo: "Video dars",
      typeTest: "Testlar to'plami",
      typeWorksheet: "Ishchi varaqa",
      typeLink: "Foydali havola",
      downloadBtn: "Yuklab olish",
      openBtn: "Ko'rish / Ochish",
      gradeLabel: "sinf",
      sizeLabel: "Hajmi",
      downloadsCount: "yuklab olingan",
      emptyText: "Ushbu parametrlar bo'yicha materiallar topilmadi."
    },
    tools: {
      badge: "Intellektual burchak",
      title: "Interaktiv ta'lim vositalari",
      subtitle: "Har kuni yangi bilim: so'z boyligi, mantiqiy masalalar va qiziqarli fizika faktlari.",
      wordOfTheDayTitle: "Kunning Inglizcha so'zi",
      listenPronounce: "Talaffuzni tinglash",
      exampleLabel: "Misol gap",
      translationLabel: "Tarjimasi",
      mathChallengeTitle: "Kunning matematika masalasi",
      checkAnswer: "Javobni tekshirish",
      correctAnswer: "Ajoyib! Javobingiz to'g'ri!",
      wrongAnswer: "Afsuski noto'g'ri. Yana bir bor urinib ko'ring!",
      tryAgain: "Qayta urinish",
      physicsFactTitle: "Kunning ajoyib Fizika dalili",
      scheduleTitle: "Sinflar dars jadvali",
      selectClass: "Sinfni tanlang",
      daysMonday: "Dushanba",
      daysTuesday: "Seshanba",
      daysWednesday: "Chorshanba",
      daysThursday: "Payshanba",
      daysFriday: "Juma",
      daysSaturday: "Shanba",
      countdownTitle: "Yaqinlashayotgan maktab tadbiri",
      days: "kun",
      hours: "soat",
      minutes: "daqiqa",
      seconds: "soniya",
      pollTitle: "O'quvchilar va ota-onalar so'rovnomasi",
      pollQuestion: "Maktabimizda qaysi to'garak faoliyatini yanada kengaytirishni xohlaysiz?",
      pollVote: "Ovoz berish",
      pollThankYou: "Fikringiz uchun rahmat! Ovoz qabul qilindi."
    },
    news: {
      badge: "Maktab hayoti",
      title: "Eng so'nggi yangiliklar va e'lonlar",
      subtitle: "Maktabimizdagi dolzarb voqealar, tanlovlar va hayotiy jarayonlar.",
      readMore: "Batafsil o'qish",
      categoryAll: "Barchasi",
      featured: "Asosiy yangilik",
      latestNews: "So'nggi yangiliklar",
      searchPlaceholder: "Yangiliklar ichidan qidirish...",
      shareArticle: "Ulashish",
      relatedNews: "O'xshash yangiliklar",
      copiedLink: "Havola nusxalandi!"
    },
    gallery: {
      badge: "Fotojamlanma",
      title: "Maktabimiz hayoti suratlarda",
      subtitle: "Dars jarayonlari, harbiy tayyorgarlik, sport tadbirlari va bayramona lahzalar.",
      all: "Barchasi",
      jasorat: "Jasorat tadbirlari",
      lessons: "Darslar & Laboratoriya",
      sports: "Sport & Musobaqalar",
      events: "Bayramlar & Tadbirlar",
      campus: "Maktab binolari",
      close: "Yopish",
      prev: "Oldingi",
      next: "Keyingi"
    },
    admission: {
      badge: "Qabul jarayoni",
      title: "1-sinfga va ko'chirish qabuli",
      subtitle: "Maktabimizga o'qishga kirish tartibi, zarur hujjatlar va tez-tez beriladigan savollar.",
      step1Title: "1. Hujjatlarni topshirish",
      step1Desc: "Ota-onalar Yagona interaktiv davlat xizmatlari portali (my.maktab.uz) orqali yoki maktab kotibiyatiga ariza berishadi.",
      step2Title: "2. Suhbat va diagnostika",
      step2Desc: "Chuqurlashtirilgan sinflar (Ingliz tili, Matematika, Fizika) uchun boshlang'ich bilim va qobiliyat sinovi.",
      step3Title: "3. Buyruq va o'qishga qabul",
      step3Desc: "Hujjatlar to'liq topshirilgandan so'ng o'quvchi rasman tegishli sinfga biriktiriladi.",
      requiredDocsTitle: "Talab etiladigan hujjatlar ro'yxati",
      doc1: "Ota-onalar nomidan maktab direktori nomiga ariza",
      doc2: "Bolaning tug'ilganlik haqidagi guvohnomasi nusxasi",
      doc3: "Bola salomatligi to'g'risida tibbiy ma'lumotnoma (026/086 shakl)",
      doc4: "Bolaning 3x4 o'lchamdagi 4 dona rangli fotosurati",
      doc5: "Ota-onalarning pasport nusxalari va yashash joyi ma'lumotnomasi",
      faqTitle: "Ko'p beriladigan savollar (FAQ)",
      downloadApplication: "Ariza namunasini yuklab olish"
    },
    contact: {
      badge: "Aloqa va manzil",
      title: "Biz bilan bog'laning",
      subtitle: "Maktabimizga tashrif buyuring yoki savollaringiz bo'lsa bizga xabar qoldiring.",
      addressLabel: "Maktab manzili",
      addressValue: "Namangan viloyati, Mingbuloq tumani, Gulbog' MFY, 8-sonli umumiy o'rta ta'lim maktabi",
      phoneLabel: "Telefon raqamlari",
      emailLabel: "Elektron pochta",
      hoursLabel: "Ish vaqti",
      hoursValue: "Dushanba - Shanba: 08:00 - 17:00 (Yakshanba dam olish)",
      getDirections: "Google Xaritada yo'nalish olish",
      formTitle: "Savol yoki murojaat yuborish",
      namePlaceholder: "Ism va familiyangiz",
      phonePlaceholder: "Telefon raqamingiz yoki emailingiz",
      subjectPlaceholder: "Mavzu (Qabul, Taklif, Shikoyat)",
      messagePlaceholder: "Xabaringizni bu yerga batafsil yozing...",
      sendButton: "Xabarni jo'natish",
      sending: "Jo'natilmoqda...",
      successMessage: "Xabaringiz muvaffaqiyatli qabul qilindi! Tez orada siz bilan bog'lanamiz.",
      errorMessage: "Xatolik yuz berdi. Iltimos barcha maydonlarni to'g'ri to'ldiring."
    },
    footer: {
      aboutSchool: "Namangan viloyati Mingbuloq tumani 8-sonli umumiy o'rta ta'lim maktabi — yoshlarga zamonaviy bilim, harbiy jasorat va yuksak odob-axloq ulashuvchi maskan.",
      quickLinks: "Tezkor havolalar",
      workingHours: "Ish tartibi",
      copyright: "© 2026 Namangan viloyati Mingbuloq tumani 8-sonli maktab. Barcha huquqlar himoyalangan.",
      madeWithLove: "Ta'lim fidoyilari va iqtidorli o'quvchilar uchun mehr bilan yaratildi.",
      allRightsReserved: "Barcha huquqlar himoyalangan."
    }
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О школе",
      jasorat: "Школа Мужества",
      subjects: "Углубленные предметы",
      achievements: "Достижения",
      teachers: "Учителя",
      resources: "Библиотека",
      tools: "Интерактив",
      news: "Новости",
      contact: "Контакты",
      installApp: "Установить приложение"
    },
    hero: {
      badge: "Наманганская область, Мингбулакский район",
      title: "Общеобразовательная школа № 8",
      titleHighlight: "Знания, Мужество, Будущее",
      subtitle: "Опорная школа современного образования с углубленным изучением английского языка, физики, математики и военно-патриотической подготовкой «Жасорат».",
      aboutBtn: "О школе",
      contactBtn: "Контакты",
      scrollDown: "Прокрутите вниз",
      statsYears: "Лет славной истории",
      statsStudents: "Талантливых учеников",
      statsTeachers: "Квалифицированных педагогов",
      statsHigherEdu: "Поступление в ВУЗы"
    },
    about: {
      tag: "История и ценности нашей школы",
      title: "Пространство воспитания всесторонне развитого поколения",
      historyTitle: "Наша история и традиции",
      historyText1: "Общеобразовательная школа № 8 Мингбулакского района имеет многолетнюю богатую историю и устойчивые академические традиции, выпустив сотни одаренных специалистов.",
      historyText2: "Присвоение школе высокого статуса «Школа Мужества» (Jasorat Maktabi) позволило объединить глубокие академические знания с физической закалкой, дисциплиной и патриотическим воспитанием.",
      missionTitle: "Наша миссия",
      missionText: "Раскрыть интеллектуальный, духовный и физический потенциал каждого ученика, подготовив патриотичных граждан, готовых к вызовам современного мира.",
      visionTitle: "Наша цель",
      visionText: "Стать ведущим региональным образовательным хабом, сочетающим международные стандарты, информационные технологии и точные науки.",
      valuesTitle: "Наши ценности",
      val1Title: "Знания и интеллект",
      val1Desc: "Углубленное изучение точных и естественных наук, критическое мышление.",
      val2Title: "Мужество и стойкость",
      val2Desc: "Умение преодолевать трудности, сила воли и решительность.",
      val3Title: "Патриотизм",
      val3Desc: "Преданность Родине, сохранение национальной культуры и традиций.",
      val4Title: "Трудолюбие",
      val4Desc: "Честный труд, непрерывное самосовершенствование и командная работа.",
      statsTitle: "Школа в цифрах",
      statStudents: "Число учащихся",
      statTeachers: "Педагогический состав",
      statGraduates: "Успешных выпускников",
      statAwards: "Региональных и республиканских наград",
      statYears: "Лет образовательного опыта",
      statClassrooms: "Современных учебных кабинетов"
    },
    jasorat: {
      badge: "Особый статус",
      title: "Школа Мужества — Сила, Воля и Долг",
      subtitle: "Программа патриотического, физического и морального воспитания будущих защитников Родины.",
      desc1: "В рамках статуса «Jasorat Maktabi» учащиеся осваивают начальную военную подготовку, строевую дисциплину, основы оказания первой медицинской помощи и алгоритмы действий в чрезвычайных ситуациях.",
      desc2: "Специально оборудованный плац, полоса препятствий, спортивный манеж и электронный тир развивают в учениках ловкость, выносливость и чувство плеча.",
      card1Title: "Военно-патриотические игры",
      card1Desc: "Регулярные победы школьной команды в ежегодных военно-спортивных турнирах «Шункорлар» и спартакиадах «Зарница».",
      card2Title: "Встречи с ветеранами и офицерами",
      card2Desc: "Живые уроки мужества, круглые столы с офицерами Вооруженных Сил и ветеранами локальных конфликтов.",
      card3Title: "Исторические экспедиции",
      card3Desc: "Тематические поездки по местам боевой славы, в музеи истории Узбекистана и мемориальные комплексы.",
      card4Title: "Физическое совершенство",
      card4Desc: "Специальные нормативы по легкой атлетике, преодолению полосы препятствий и национальной борьбе Кураш.",
      timelineTitle: "Календарь патриотических мероприятий",
      galleryTitle: "Кадры с занятий по военной подготовке и спорту",
      moto: "«Защита Родины — священный долг каждого гражданина!»"
    },
    subjects: {
      badge: "Учебные направления",
      title: "Комплекс углубленного изучения предметов",
      subtitle: "Усиленные авторские учебные планы для раннего раскрытия академических талантов.",
      english: "Английский язык",
      physics: "Физика",
      math: "Математика",
      military: "Военная подготовка",
      pe: "Физическая культура",
      weeklyHours: "Академических часов в неделю",
      olympiadResults: "Результаты на олимпиадах",
      specialLab: "Лаборатории и оборудование",
      teachersList: "Ведущие преподаватели",
      syllabus: "Ключевые темы углубленной программы"
    },
    achievements: {
      badge: "Наша гордость",
      title: "Летопись побед и наград",
      subtitle: "Выдающиеся результаты наших учащихся и наставников на районных, областных и республиканских конкурсах.",
      filterAll: "Все направления",
      filterMath: "Математика",
      filterPhysics: "Физика",
      filterEnglish: "Английский язык",
      filterSports: "Спорт",
      filterMilitary: "Военно-прикладные",
      filterOther: "Другие предметы",
      place1: "1-е место (Золото)",
      place2: "2-е место (Серебро)",
      place3: "3-е место (Бронза)",
      bestStudentsTitle: "Лучшие учащиеся школы",
      levelDistrict: "Районный этап",
      levelRegion: "Областной этап",
      levelRepublic: "Республиканский этап",
      levelInternational: "Международный уровень"
    },
    teachers: {
      badge: "Педагогический коллектив",
      title: "Преданные своему призванию наставники",
      subtitle: "Наши педагоги внедряют современные образовательные методики и инновационные технологии обучения.",
      adminTitle: "Администрация школы",
      teachersTitle: "Учителя-предметники",
      searchPlaceholder: "Поиск учителя по имени...",
      filterAll: "Все категории",
      filterOliy: "Высшая категория",
      filter1: "1-я категория",
      filter2: "2-я категория",
      filterMutaxassis: "Специалист",
      expYears: "лет стажа",
      viewProfile: "Подробнее",
      achievementsLabel: "Достижения и государственные награды",
      biographyLabel: "Краткая биография",
      contactTeacher: "Связаться",
      closeModal: "Закрыть"
    },
    resources: {
      badge: "Цифровая библиотека",
      title: "Учебные материалы и пособия",
      subtitle: "Электронные учебники, методички лабораторных работ, презентации и тесты для школьников и учителей.",
      searchPlaceholder: "Поиск учебного материала...",
      allSubjects: "Все предметы",
      allGrades: "Все классы",
      allTypes: "Все форматы",
      typePdf: "Учебник / PDF",
      typePresentation: "Презентация",
      typeVideo: "Видеоурок",
      typeTest: "Сборник тестов",
      typeWorksheet: "Рабочий лист",
      typeLink: "Полезная ссылка",
      downloadBtn: "Скачать файл",
      openBtn: "Открыть / Просмотр",
      gradeLabel: "класс",
      sizeLabel: "Размер",
      downloadsCount: "скачиваний",
      emptyText: "По выбранным критериям материалов не найдено."
    },
    tools: {
      badge: "Интеллектуальный уголок",
      title: "Интерактивные обучающие модули",
      subtitle: "Каждый день новые открытия: словарный запас, математическая логика и законы мироздания.",
      wordOfTheDayTitle: "Английское слово дня",
      listenPronounce: "Прослушать произношение",
      exampleLabel: "Пример в предложении",
      translationLabel: "Перевод",
      mathChallengeTitle: "Математическая задача дня",
      checkAnswer: "Проверить ответ",
      correctAnswer: "Великолепно! Ваш ответ абсолютно верен!",
      wrongAnswer: "К сожалению, неверно. Попробуйте еще раз!",
      tryAgain: "Повторить",
      physicsFactTitle: "Удивительный факт из мира физики",
      scheduleTitle: "Расписание школьных уроков",
      selectClass: "Выберите класс",
      daysMonday: "Понедельник",
      daysTuesday: "Вторник",
      daysWednesday: "Среда",
      daysThursday: "Четверг",
      daysFriday: "Пятница",
      daysSaturday: "Суббота",
      countdownTitle: "Ближайшее школьное событие",
      days: "дней",
      hours: "часов",
      minutes: "минут",
      seconds: "секунд",
      pollTitle: "Опрос для учеников и родителей",
      pollQuestion: "Какие дополнительные секции вы хотели бы расширить в школе?",
      pollVote: "Проголосовать",
      pollThankYou: "Благодарим за ваше мнение! Голос учтен."
    },
    news: {
      badge: "Школьная жизнь",
      title: "Последние новости и анонсы",
      subtitle: "Актуальные события, победы в конкурсах и объявления школьного сообщества.",
      readMore: "Читать далее",
      categoryAll: "Все новости",
      featured: "Главная новость",
      latestNews: "Свежие новости",
      searchPlaceholder: "Поиск новостей...",
      shareArticle: "Поделиться",
      relatedNews: "Похожие новости",
      copiedLink: "Ссылка скопирована!"
    },
    gallery: {
      badge: "Фотогалерея",
      title: "Жизнь школы в ярких кадрах",
      subtitle: "Учебные будни, научные эксперименты, строевая подготовка и торжественные праздники.",
      all: "Все фотографии",
      jasorat: "Школа Мужества",
      lessons: "Уроки и лаборатории",
      sports: "Спорт и соревнования",
      events: "Школьные праздники",
      campus: "Школьный кампус",
      close: "Закрыть",
      prev: "Назад",
      next: "Вперед"
    },
    admission: {
      badge: "Приемная кампания",
      title: "Прием в 1-й класс и перевод",
      subtitle: "Порядок подачи документов, критерии отбора и часто задаваемые вопросы.",
      step1Title: "1. Подача заявления",
      step1Desc: "Родители подают заявление через Единый интерактивный портал (my.maktab.uz) или в секретариат школы.",
      step2Title: "2. Собеседование и диагностика",
      step2Desc: "Для профильных классов (Английский, Математика, Физика) проводится первичное тестирование способностей.",
      step3Title: "3. Зачисление приказом",
      step3Desc: "После проверки полного комплекта документов издается приказ о зачислении в соответствующий класс.",
      requiredDocsTitle: "Список необходимых документов",
      doc1: "Заявление родителей на имя директора школы",
      doc2: "Копия свидетельства о рождении ребенка",
      doc3: "Медицинская справка о состоянии здоровья (форма 026/086)",
      doc4: "4 цветные фотографии ребенка размером 3х4",
      doc5: "Копии паспортов родителей и справка о месте жительства",
      faqTitle: "Часто задаваемые вопросы (FAQ)",
      downloadApplication: "Скачать образец заявления"
    },
    contact: {
      badge: "Контакты и локация",
      title: "Свяжитесь с нами",
      subtitle: "Приглашаем посетить нашу школу или направить онлайн-обращение.",
      addressLabel: "Адрес школы",
      addressValue: "Наманганская область, Мингбулакский район, ССГ Гулбог, общеобразовательная школа № 8",
      phoneLabel: "Контактные телефоны",
      emailLabel: "Электронная почта",
      hoursLabel: "Часы работы",
      hoursValue: "Понедельник - Суббота: 08:00 - 17:00 (Воскресенье - выходной)",
      getDirections: "Маршрут на Google Картах",
      formTitle: "Написать обращение руководству",
      namePlaceholder: "Ваше имя и фамилия",
      phonePlaceholder: "Номер телефона или e-mail",
      subjectPlaceholder: "Тема обращения (Прием, Вопрос, Предложение)",
      messagePlaceholder: "Подробно опишите ваш вопрос...",
      sendButton: "Отправить сообщение",
      sending: "Отправка...",
      successMessage: "Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.",
      errorMessage: "Произошла ошибка. Пожалуйста, проверьте заполнение всех полей."
    },
    footer: {
      aboutSchool: "Школа № 8 Мингбулакского района Наманганской области — центр передового образования, патриотического мужества и высоких нравственных стандартов.",
      quickLinks: "Быстрые ссылки",
      workingHours: "Режим работы",
      copyright: "© 2026 Школа № 8 Мингбулакского района. Все права защищены.",
      madeWithLove: "Создано с заботой о светлом будущем каждого ученика.",
      allRightsReserved: "Все права защищены."
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      jasorat: "School of Courage",
      subjects: "Specialized Subjects",
      achievements: "Achievements",
      teachers: "Faculty",
      resources: "Library",
      tools: "Interactive",
      news: "News",
      contact: "Contact",
      installApp: "Install App"
    },
    hero: {
      badge: "Namangan Region, Mingbuloq District",
      title: "Secondary School No. 8",
      titleHighlight: "Knowledge, Courage, Future",
      subtitle: "A flagship institution specializing in advanced English, Physics, Mathematics, and the prestigious 'Jasorat Maktabi' military-patriotic education program.",
      aboutBtn: "Explore School",
      contactBtn: "Get in Touch",
      scrollDown: "Scroll to discover",
      statsYears: "Years of Excellence",
      statsStudents: "Talented Students",
      statsTeachers: "Certified Educators",
      statsHigherEdu: "University Admission Rate"
    },
    about: {
      tag: "History & Core Values",
      title: "Nurturing Tomorrow's Courageous Leaders",
      historyTitle: "Our Heritage & Tradition",
      historyText1: "Secondary School No. 8 of Mingbuloq district has a proud legacy of educational distinction, producing hundreds of gifted alumni across science, engineering, and public leadership.",
      historyText2: "With its specialized 'Jasorat Maktabi' (School of Courage) designation, our campus uniquely unites rigorous academics with patriotic honor, resilience, and physical preparedness.",
      missionTitle: "Our Mission",
      missionText: "To unlock the cognitive, moral, and physical potential of each learner, cultivating dedicated patriots ready to thrive in a globalized world.",
      visionTitle: "Our Vision",
      visionText: "To serve as the benchmark regional education hub embodying world-class standards in STEM, international languages, and character building.",
      valuesTitle: "Core Values",
      val1Title: "Knowledge & Intellect",
      val1Desc: "Rigorous analytical thinking, scientific literacy, and linguistic mastery.",
      val2Title: "Courage & Resilience",
      val2Desc: "Steadfast determination, moral integrity, and leadership under adversity.",
      val3Title: "Patriotism",
      val3Desc: "Unwavering commitment to our motherland and heritage preservation.",
      val4Title: "Diligence & Teamwork",
      val4Desc: "Honest effort, continuous self-improvement, and mutual respect.",
      statsTitle: "School By the Numbers",
      statStudents: "Enrolled Students",
      statTeachers: "Expert Faculty",
      statGraduates: "Successful Alumni",
      statAwards: "Regional & State Honors",
      statYears: "Years of Educational Service",
      statClassrooms: "Smart Laboratories & Classrooms"
    },
    jasorat: {
      badge: "Special Honors Status",
      title: "School of Courage — Honor, Discipline, Valor",
      subtitle: "Comprehensive military-patriotic and physical readiness curriculum fostering character and civic responsibility.",
      desc1: "Under the 'Jasorat Maktabi' initiative, students receive structured training in civil defense, military drill standards, emergency first response, and strategic problem-solving.",
      desc2: "Our dedicated parade ground, obstacle courses, athletic field, and marksmanship simulators instill agility, coordination, and camaraderie.",
      card1Title: "Patriotic Games & Contests",
      card1Desc: "Consecutive champion placements in regional 'Shunqorlar' and 'Zarnitsa' military-athletic competitions.",
      card2Title: "Veteran & Officer Dialogues",
      card2Desc: "Inspiring interactive forums with Armed Forces veterans, officers, and community role models.",
      card3Title: "Heritage Field Expeditions",
      card3Desc: "Educational field trips to national historic sites, military academies, and state museums.",
      card4Title: "Physical Mastery",
      card4Desc: "Rigorous standards in track, obstacle traversal, and traditional Uzbek Kurash wrestling.",
      timelineTitle: "Annual Courage Calendar",
      galleryTitle: "Field Drills & Athletic Highlights",
      moto: "\"Defending the Motherland is the sacred duty of every citizen!\""
    },
    subjects: {
      badge: "Academic Rigor",
      title: "In-Depth Specialized Disciplines",
      subtitle: "Enhanced curricula focused on high-demand disciplines to cultivate competitive international competencies.",
      english: "English Language",
      physics: "Physics",
      math: "Mathematics",
      military: "Military Training",
      pe: "Physical Education",
      weeklyHours: "Weekly Instructional Hours",
      olympiadResults: "Olympiad Distinctions",
      specialLab: "Specialized Labs & Equipment",
      teachersList: "Lead Faculty Members",
      syllabus: "Key Syllabus Highlights"
    },
    achievements: {
      badge: "Wall of Honor",
      title: "Chronicle of Academic & Athletic Triumphs",
      subtitle: "Celebrating our students' outstanding victories across district, regional, and national arenas.",
      filterAll: "All Categories",
      filterMath: "Mathematics",
      filterPhysics: "Physics",
      filterEnglish: "English",
      filterSports: "Sports",
      filterMilitary: "Military-Patriotic",
      filterOther: "General",
      place1: "1st Place (Gold)",
      place2: "2nd Place (Silver)",
      place3: "3rd Place (Bronze)",
      bestStudentsTitle: "Hall of Fame Students",
      levelDistrict: "District Level",
      levelRegion: "Regional Level",
      levelRepublic: "National Republic Level",
      levelInternational: "International Level"
    },
    teachers: {
      badge: "Our Faculty",
      title: "Distinguished Mentors & Educators",
      subtitle: "Passionate teachers applying contemporary active-learning pedagogy to foster excellence in every pupil.",
      adminTitle: "School Leadership",
      teachersTitle: "Subject Specialists",
      searchPlaceholder: "Search educator by name...",
      filterAll: "All Qualifications",
      filterOliy: "Highest Category",
      filter1: "First Category",
      filter2: "Second Category",
      filterMutaxassis: "Specialist",
      expYears: "years experience",
      viewProfile: "View Profile",
      achievementsLabel: "Honors & Distinctions",
      biographyLabel: "Professional Biography",
      contactTeacher: "Contact",
      closeModal: "Close"
    },
    resources: {
      badge: "Digital Learning Commons",
      title: "Curated Study Materials & Guides",
      subtitle: "Free, open-access textbooks, lab practicals, problem sheets, and multimedia aids for students and teachers.",
      searchPlaceholder: "Search learning resources...",
      allSubjects: "All Subjects",
      allGrades: "All Grades",
      allTypes: "All File Types",
      typePdf: "Textbook / PDF",
      typePresentation: "Presentation",
      typeVideo: "Video Lesson",
      typeTest: "Test Bank",
      typeWorksheet: "Worksheet",
      typeLink: "Resource Link",
      downloadBtn: "Download File",
      openBtn: "View / Open",
      gradeLabel: "Grade",
      sizeLabel: "Size",
      downloadsCount: "downloads",
      emptyText: "No materials match the selected filters."
    },
    tools: {
      badge: "Intellectual Sandbox",
      title: "Interactive Daily Learning Tools",
      subtitle: "Daily cognitive enrichment: vocabulary expansion, mathematical puzzles, and physical science discoveries.",
      wordOfTheDayTitle: "English Word of the Day",
      listenPronounce: "Listen to Pronunciation",
      exampleLabel: "Context Example",
      translationLabel: "Translations",
      mathChallengeTitle: "Math Challenge of the Day",
      checkAnswer: "Verify Solution",
      correctAnswer: "Outstanding! Your answer is correct!",
      wrongAnswer: "Not quite right. Give it another try!",
      tryAgain: "Try Again",
      physicsFactTitle: "Physics Discovery of the Day",
      scheduleTitle: "Class Timetable Viewer",
      selectClass: "Select Class",
      daysMonday: "Monday",
      daysTuesday: "Tuesday",
      daysWednesday: "Wednesday",
      daysThursday: "Thursday",
      daysFriday: "Friday",
      daysSaturday: "Saturday",
      countdownTitle: "Upcoming Flagship Event",
      days: "days",
      hours: "hours",
      minutes: "mins",
      seconds: "secs",
      pollTitle: "Community Feedback Poll",
      pollQuestion: "Which extracurricular club would you like to see expanded this semester?",
      pollVote: "Submit Vote",
      pollThankYou: "Thank you for your valuable input! Your response has been recorded."
    },
    news: {
      badge: "Campus Chronicles",
      title: "Latest News & Announcements",
      subtitle: "Keep up with academic achievements, school life highlights, and upcoming dates.",
      readMore: "Read Full Story",
      categoryAll: "All News",
      featured: "Featured Story",
      latestNews: "Recent Updates",
      searchPlaceholder: "Search stories...",
      shareArticle: "Share",
      relatedNews: "Related Updates",
      copiedLink: "Link copied to clipboard!"
    },
    gallery: {
      badge: "Campus Visuals",
      title: "School Life in Focus",
      subtitle: "Visual highlights from laboratories, sports meets, military drills, and annual celebrations.",
      all: "All Photos",
      jasorat: "School of Courage",
      lessons: "Classrooms & Labs",
      sports: "Athletics & Games",
      events: "Ceremonies & Arts",
      campus: "Grounds & Campus",
      close: "Close",
      prev: "Previous",
      next: "Next"
    },
    admission: {
      badge: "Admissions",
      title: "Grade 1 Enrollment & Transfers",
      subtitle: "Clear step-by-step guidance, essential documentation, and FAQs for prospective families.",
      step1Title: "1. Online Application",
      step1Desc: "Apply via the Single Interactive Portal (my.maktab.uz) or visit our school registry desk in person.",
      step2Title: "2. Assessment & Interview",
      step2Desc: "A constructive readiness assessment for specialized cohorts (English, Mathematics, and Physics).",
      step3Title: "3. Official Enrollment",
      step3Desc: "Following document verification, students receive official grade placement and orientation details.",
      requiredDocsTitle: "Mandatory Document Checklist",
      doc1: "Official admission application from parent or legal guardian",
      doc2: "Original birth certificate copy of the child",
      doc3: "Standard school health clearance form (Medical form 026/086)",
      doc4: "4 standard passport-style color photographs (3x4 cm)",
      doc5: "Copies of parents' identification and proof of residence",
      faqTitle: "Frequently Asked Questions (FAQ)",
      downloadApplication: "Download Sample Application Form"
    },
    contact: {
      badge: "Location & Contact",
      title: "Connect with School No. 8",
      subtitle: "We welcome prospective parents, partners, and alumni to visit our campus or get in touch.",
      addressLabel: "Campus Address",
      addressValue: "Namangan Region, Mingbuloq District, Gulbog MFG, Secondary School No. 8",
      phoneLabel: "Phone Numbers",
      emailLabel: "Email Address",
      hoursLabel: "Operating Hours",
      hoursValue: "Monday - Saturday: 08:00 AM - 05:00 PM (Sunday closed)",
      getDirections: "Open in Google Maps",
      formTitle: "Send a Message to Administration",
      namePlaceholder: "Your Full Name",
      phonePlaceholder: "Your Phone Number or Email",
      subjectPlaceholder: "Topic (Admissions, Inquiries, Feedback)",
      messagePlaceholder: "Write your message in detail...",
      sendButton: "Send Inquiry",
      sending: "Sending...",
      successMessage: "Your message has been sent successfully! Our administrative office will reply shortly.",
      errorMessage: "Submission error. Please ensure all required fields are filled."
    },
    footer: {
      aboutSchool: "Mingbuloq District Secondary School No. 8 — cultivating scholarly distinction, patriotic bravery, and lifelong leadership in young minds.",
      quickLinks: "Quick Links",
      workingHours: "Working Hours",
      copyright: "© 2026 Mingbuloq District School No. 8. All rights reserved.",
      madeWithLove: "Built with dedication for students, parents, and educators.",
      allRightsReserved: "All rights reserved."
    }
  }
};
