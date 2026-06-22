import type { FAQItem, GalleryItem } from './types';

export const COLORS = {
  sand: '#dcd6be',
  emerald: '#134503',
  cream: '#fcfbf7',
  gold: '#b4975a'
};

export const AIMS = [
  { 
    id: '1', 
    title: 'Deeper Knowledge', 
    description: 'Acquire a deeper amount of Islamic knowledge on various crucial subjects, including aqaid, ahkaam, akhlaq, and modern topics.', 
    image: 'https://brisc.babalridha.com/wp-content/uploads/2024/05/deeper-knowledge.webp' 
  },
  { 
    id: '2', 
    title: 'New Outlook', 
    description: 'Develop an understanding of the profound Islamic worldview and outlook on life – Learn to see the world through an Islamic lens.', 
    image: 'https://brisc.babalridha.com/wp-content/uploads/2024/05/new-outlook.webp' 
  },
  { 
    id: '3', 
    title: 'Balanced Life', 
    description: 'Learn to adopt the ideal Islamic lifestyle, considering spiritual, physical, mental, social and emotional well-being.', 
    image: 'https://brisc.babalridha.com/wp-content/uploads/2024/05/balanced-life.webp' 
  },
  { 
    id: '4', 
    title: 'Teamwork', 
    description: 'Meet other youths and members of various organisations to share experience, learn to work as a team and help your community.', 
    image: 'https://brisc.babalridha.com/wp-content/uploads/2024/05/teamwork.webp' 
  },
  { 
    id: '5', 
    title: 'Islamic Spirituality', 
    description: 'Get help in your spiritual journey at the hands of reliable and approved spiritual teachers – A unique opportunity for a lifetime change.', 
    image: 'https://brisc.babalridha.com/wp-content/uploads/2024/05/tahriri.webp' 
  },
  { 
    id: '6', 
    title: 'Tabligh Resources', 
    description: 'Strengthen your skills and gain resources for a more effective tabligh effort to spread the beautiful teachings of Islam.', 
    image: 'https://brisc.babalridha.com/wp-content/uploads/2024/05/tabligh-resources2.webp' 
  }
];

export const WELCOME_PILLARS = [
  { title: 'Increase your Knowledge', image: 'https://brisc.babalridha.com/wp-content/uploads/2018/08/increase-knowledge-1.jpg' },
  { title: 'Progress Spiritually', image: 'https://brisc.babalridha.com/wp-content/uploads/2024/05/progress-spirituality.webp' },
  { title: 'Learn New Skills', image: 'https://brisc.babalridha.com/wp-content/uploads/2018/03/20-3.jpg' },
  { title: 'Meet with Scholars', image: 'https://brisc.babalridha.com/wp-content/uploads/2024/05/meet-with-scholars.webp' }
];

export const CURRICULUM_SECTIONS = [
  {
    id: "1",
    title: "Classes & Workshops",
    icon: "BookOpen",
    image: "https://brisc.babalridha.com/wp-content/uploads/2019/07/Leadership-class.jpg",
    desc: "Fundamental for your learning with experienced teachers. Topics include: Theology (Aqaid), Ethics (Akhlaq), Jurisprudence (Ahkam), Uns with Quran, Skills Workshops, and Gender specific classes."
  },
  {
    id: "2",
    title: "Mubahatha",
    icon: "Users",
    image: "https://brisc.babalridha.com/wp-content/uploads/2019/07/Youth-project.jpg",
    desc: "Sitting in an informal circle to summarize class content, challenge, question and clarify misconceptions. Engage in passionate discussions delving deeper into the knowledge gained."
  },
  {
    id: "3",
    title: "Field Trips",
    icon: "Map",
    image: "https://picsum.photos/seed/fieldtrips/800/600",
    desc: "Experience Islamic lifestyle and culture through visits to museums, institutions and art places, guiding us towards building the Islamic lifestyle."
  },
  {
    id: "4",
    title: "Visiting Scholars",
    icon: "Star",
    image: "https://brisc.babalridha.com/wp-content/uploads/2019/07/visits-to-scholars-1.jpg",
    desc: "A great source of inspiration. Visit several great scholars who will share knowledge, experience, wisdom, and receive personal life-changing advice."
  },
  {
    id: "5",
    title: "Ziarah",
    icon: "Heart",
    image: "https://brisc.babalridha.com/wp-content/uploads/2019/07/ziarah.jpg",
    desc: "Renewal of the bond of wilayah. Based in the holy city of Qom (Lady Fatimah Ma’sumah) and Mashhad (Imam Ali ibn Musa al-Ridha) at the biggest harams in the Shia world."
  },
  {
    id: "6",
    title: "Sports and Leisure",
    icon: "Activity",
    image: "https://brisc.babalridha.com/wp-content/uploads/2019/07/sports-and-leisure-1.jpg",
    desc: "Vital to take care of the physical body. We have loads of fun with sports activities and various trips to keep healthy and refresh the body and mind."
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Logistics',
    question: "What does the course fee include?",
    answer: "The course fee includes accommodation, meals, classes, activities and all local transport. It excludes visas and flights – these should be arranged individually."
  },
  {
    category: 'Logistics',
    question: "Do I have to book my own flights and arrange my own visa?",
    answer: "Yes, you will need to book your own flights and arrange your own visa. assistance may be available or you may be put in touch with a travel agent in your region. However, you are advised not to make arrangements until you receive confirmation."
  },
  {
    category: 'Logistics',
    question: "Is it possible to arrive a day later or leave a day earlier?",
    answer: "No. By applying, you commit to attending the full duration of the course. Accommodation is usually available up to 24 hours before/after."
  },
  {
    category: 'Logistics',
    question: "Are there any special offers for couples?",
    answer: "Yes. Couples are offered a private room for the duration of the course instead of shared accommodation (8–12 people). There is no financial discount because private accommodation costs more."
  },
  {
    category: 'Program',
    question: "Is the course held fully in Qum?",
    answer: "The first two weeks are held in Qom, with one or two day trips to Tehran. The final few days are held in Mashhad."
  },
  {
    category: 'Program',
    question: "Will we be able to visit the shrines whenever we want?",
    answer: "In Qom, visits are scheduled due to a packed timetable. In Mashhad, the timetable is more flexible, allowing more freedom to visit the haram."
  }
];

export const GALLERY: GalleryItem[] = [
  // Pre-BRisc preparations
  { id: 'pre-1', category: 'Pre-BRisc preparations', url: 'https://picsum.photos/seed/prep1/800/600', title: 'Mentor Briefing Session' },
  { id: 'pre-2', category: 'Pre-BRisc preparations', url: 'https://picsum.photos/seed/prep2/800/600', title: 'Late Night Planning' },
  { id: 'pre-3', category: 'Pre-BRisc preparations', url: 'https://picsum.photos/seed/prep3/800/600', title: 'Logistics Strategy' },
  
  // Opening Ceremony
  { id: 'open-1', category: 'Opening Ceremony', url: 'https://picsum.photos/seed/open1/800/600', title: 'Welcome Address' },
  { id: 'open-2', category: 'Opening Ceremony', url: 'https://picsum.photos/seed/open2/800/600', title: 'Scholarly Blessings' },
  { id: 'open-3', category: 'Opening Ceremony', url: 'https://picsum.photos/seed/open3/800/600', title: 'Communal Dinner' },

  // Classes and Workshops
  { id: 'class-1', category: 'Classes and Workshops', url: 'https://brisc.babalridha.com/wp-content/uploads/2019/07/Leadership-class.jpg', title: 'Morning Lecture' },
  { id: 'class-2', category: 'Classes and Workshops', url: 'https://picsum.photos/seed/class2/800/600', title: 'Interactive Seminar' },
  { id: 'class-3', category: 'Classes and Workshops', url: 'https://picsum.photos/seed/class3/800/600', title: 'Theology Workshop' },

  // Discussions and Youth Project
  { id: 'disc-1', category: 'Discussions and Youth Project', url: 'https://brisc.babalridha.com/wp-content/uploads/2019/07/Youth-project.jpg', title: 'Collaborative Design' },
  { id: 'disc-2', category: 'Discussions and Youth Project', url: 'https://picsum.photos/seed/disc2/800/600', title: 'Project Presentation' },
  { id: 'disc-3', category: 'Discussions and Youth Project', url: 'https://picsum.photos/seed/disc3/800/600', title: 'Critical Thinking Circles' },

  // Visits to Scholars
  { id: 'schol-1', category: 'Visits to Scholars', url: 'https://brisc.babalridha.com/wp-content/uploads/2019/07/visits-to-scholars-1.jpg', title: 'Session with Marja' },
  { id: 'schol-2', category: 'Visits to Scholars', url: 'https://brisc.babalridha.com/wp-content/uploads/2024/05/tahriri.webp', title: 'Ayatullah Tahriri Visit' },
  { id: 'schol-3', category: 'Visits to Scholars', url: 'https://picsum.photos/seed/schol3/800/600', title: 'Spiritual Advice' },

  // Spiritual Trips
  { id: 'spirit-1', category: 'Spiritual Trips', url: 'https://brisc.babalridha.com/wp-content/uploads/2019/07/ziarah.jpg', title: 'Haram Reflection' },
  { id: 'spirit-2', category: 'Spiritual Trips', url: 'https://picsum.photos/seed/spirit2/800/600', title: 'Masjid Jamkaran' },
  { id: 'spirit-3', category: 'Spiritual Trips', url: 'https://picsum.photos/seed/spirit3/800/600', title: 'Mashhad Ardehal' },

  // Educational Trips
  { id: 'edu-1', category: 'Educational Trips', url: 'https://picsum.photos/seed/edu1/800/600', title: 'Museum Exhibition' },
  { id: 'edu-2', category: 'Educational Trips', url: 'https://picsum.photos/seed/edu2/800/600', title: 'Institute Visit' },
  { id: 'edu-3', category: 'Educational Trips', url: 'https://picsum.photos/seed/edu3/800/600', title: 'Architectural Tour' },

  // Sports and Leisure
  { id: 'sport-1', category: 'Sports and Leisure', url: 'https://brisc.babalridha.com/wp-content/uploads/2019/07/sports-and-leisure-1.jpg', title: 'Swimming Session' },
  { id: 'sport-2', category: 'Sports and Leisure', url: 'https://picsum.photos/seed/sport2/800/600', title: 'Outdoor BBQ' },
  { id: 'sport-3', category: 'Sports and Leisure', url: 'https://picsum.photos/seed/sport3/800/600', title: 'Waterfall Excursion' }
];
