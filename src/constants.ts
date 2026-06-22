import type { FAQItem, GalleryItem } from './types';

// Import core images
import logoImg from './assets/images/logo.png';
import deeperKnowledgeImg from './assets/images/deeper-knowledge.webp';
import newOutlookImg from './assets/images/new-outlook.webp';
import balancedLifeImg from './assets/images/balanced-life.webp';
import teamworkImg from './assets/images/teamwork.webp';
import tahririImg from './assets/images/tahriri.webp';
import tablighResourcesImg from './assets/images/tabligh-resources2.webp';

// Import welcome pillars
import increaseKnowledgeImg from './assets/images/increase-knowledge-1.jpg';
import progressSpiritualityImg from './assets/images/progress-spirituality.webp';
import learnSkillsImg from './assets/images/20-3.jpg';
import meetScholarsImg from './assets/images/meet-with-scholars.webp';

// Import curriculum images
import leadershipClassImg from './assets/images/Leadership-class.jpg';
import youthProjectImg from './assets/images/Youth-project.jpg';
import fieldTripsImg from './assets/images/fieldtrips.jpg';
import visitsToScholarsImg from './assets/images/visits-to-scholars-1.jpg';
import ziarahImg from './assets/images/ziarah.jpg';
import sportsLeisureImg from './assets/images/sports-and-leisure-1.jpg';

// Import gallery images
import galleryPrep1 from './assets/images/gallery-prep1.jpg';
import galleryPrep2 from './assets/images/gallery-prep2.jpg';
import galleryPrep3 from './assets/images/gallery-prep3.jpg';
import galleryOpen1 from './assets/images/gallery-open1.jpg';
import galleryOpen2 from './assets/images/gallery-open2.jpg';
import galleryOpen3 from './assets/images/gallery-open3.jpg';
import galleryClass2 from './assets/images/gallery-class2.jpg';
import galleryClass3 from './assets/images/gallery-class3.jpg';
import galleryDisc2 from './assets/images/gallery-disc2.jpg';
import galleryDisc3 from './assets/images/gallery-disc3.jpg';
import gallerySchol3 from './assets/images/gallery-schol3.jpg';
import gallerySpirit2 from './assets/images/gallery-spirit2.jpg';
import gallerySpirit3 from './assets/images/gallery-spirit3.jpg';
import galleryEdu1 from './assets/images/gallery-edu1.jpg';
import galleryEdu2 from './assets/images/gallery-edu2.jpg';
import galleryEdu3 from './assets/images/gallery-edu3.jpg';
import gallerySport2 from './assets/images/gallery-sport2.jpg';
import gallerySport3 from './assets/images/gallery-sport3.jpg';

export { logoImg };

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
    image: deeperKnowledgeImg 
  },
  { 
    id: '2', 
    title: 'New Outlook', 
    description: 'Develop an understanding of the profound Islamic worldview and outlook on life – Learn to see the world through an Islamic lens.', 
    image: newOutlookImg 
  },
  { 
    id: '3', 
    title: 'Balanced Life', 
    description: 'Learn to adopt the ideal Islamic lifestyle, considering spiritual, physical, mental, social and emotional well-being.', 
    image: balancedLifeImg 
  },
  { 
    id: '4', 
    title: 'Teamwork', 
    description: 'Meet other youths and members of various organisations to share experience, learn to work as a team and help your community.', 
    image: teamworkImg 
  },
  { 
    id: '5', 
    title: 'Islamic Spirituality', 
    description: 'Get help in your spiritual journey at the hands of reliable and approved spiritual teachers – A unique opportunity for a lifetime change.', 
    image: tahririImg 
  },
  { 
    id: '6', 
    title: 'Tabligh Resources', 
    description: 'Strengthen your skills and gain resources for a more effective tabligh effort to spread the beautiful teachings of Islam.', 
    image: tablighResourcesImg 
  }
];

export const WELCOME_PILLARS = [
  { title: 'Increase your Knowledge', image: increaseKnowledgeImg },
  { title: 'Progress Spiritually', image: progressSpiritualityImg },
  { title: 'Learn New Skills', image: learnSkillsImg },
  { title: 'Meet with Scholars', image: meetScholarsImg }
];

export const CURRICULUM_SECTIONS = [
  {
    id: "1",
    title: "Classes & Workshops",
    icon: "BookOpen",
    image: leadershipClassImg,
    desc: "Fundamental for your learning with experienced teachers. Topics include: Theology (Aqaid), Ethics (Akhlaq), Jurisprudence (Ahkam), Uns with Quran, Skills Workshops, and Gender specific classes."
  },
  {
    id: "2",
    title: "Mubahatha",
    icon: "Users",
    image: youthProjectImg,
    desc: "Sitting in an informal circle to summarize class content, challenge, question and clarify misconceptions. Engage in passionate discussions delving deeper into the knowledge gained."
  },
  {
    id: "3",
    title: "Field Trips",
    icon: "Map",
    image: fieldTripsImg,
    desc: "Experience Islamic lifestyle and culture through visits to museums, institutions and art places, guiding us towards building the Islamic lifestyle."
  },
  {
    id: "4",
    title: "Visiting Scholars",
    icon: "Star",
    image: visitsToScholarsImg,
    desc: "A great source of inspiration. Visit several great scholars who will share knowledge, experience, wisdom, and receive personal life-changing advice."
  },
  {
    id: "5",
    title: "Ziarah",
    icon: "Heart",
    image: ziarahImg,
    desc: "Renewal of the bond of wilayah. Based in the holy city of Qom (Lady Fatimah Ma’sumah) and Mashhad (Imam Ali ibn Musa al-Ridha) at the biggest harams in the Shia world."
  },
  {
    id: "6",
    title: "Sports and Leisure",
    icon: "Activity",
    image: sportsLeisureImg,
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
    answer: "The first two weeks are held in Qom, with one or day trips to Tehran. The final few days are held in Mashhad."
  },
  {
    category: 'Program',
    question: "Will we be able to visit the shrines whenever we want?",
    answer: "In Qom, visits are scheduled due to a packed timetable. In Mashhad, the timetable is more flexible, allowing more freedom to visit the haram."
  }
];

export const GALLERY: GalleryItem[] = [
  // Pre-BRisc preparations
  { id: 'pre-1', category: 'Pre-BRisc preparations', url: galleryPrep1, title: 'Mentor Briefing Session' },
  { id: 'pre-2', category: 'Pre-BRisc preparations', url: galleryPrep2, title: 'Late Night Planning' },
  { id: 'pre-3', category: 'Pre-BRisc preparations', url: galleryPrep3, title: 'Logistics Strategy' },
  
  // Opening Ceremony
  { id: 'open-1', category: 'Opening Ceremony', url: galleryOpen1, title: 'Welcome Address' },
  { id: 'open-2', category: 'Opening Ceremony', url: galleryOpen2, title: 'Scholarly Blessings' },
  { id: 'open-3', category: 'Opening Ceremony', url: galleryOpen3, title: 'Communal Dinner' },

  // Classes and Workshops
  { id: 'class-1', category: 'Classes and Workshops', url: leadershipClassImg, title: 'Morning Lecture' },
  { url: galleryClass2, id: 'class-2', category: 'Classes and Workshops', title: 'Interactive Seminar' },
  { url: galleryClass3, id: 'class-3', category: 'Classes and Workshops', title: 'Theology Workshop' },

  // Discussions and Youth Project
  { id: 'disc-1', category: 'Discussions and Youth Project', url: youthProjectImg, title: 'Collaborative Design' },
  { url: galleryDisc2, id: 'disc-2', category: 'Discussions and Youth Project', title: 'Project Presentation' },
  { url: galleryDisc3, id: 'disc-3', category: 'Discussions and Youth Project', title: 'Critical Thinking Circles' },

  // Visits to Scholars
  { id: 'schol-1', category: 'Visits to Scholars', url: visitsToScholarsImg, title: 'Session with Marja' },
  { id: 'schol-2', category: 'Visits to Scholars', url: tahririImg, title: 'Ayatullah Tahriri Visit' },
  { url: gallerySchol3, id: 'schol-3', category: 'Visits to Scholars', title: 'Spiritual Advice' },

  // Spiritual Trips
  { id: 'spirit-1', category: 'Spiritual Trips', url: ziarahImg, title: 'Haram Reflection' },
  { url: gallerySpirit2, id: 'spirit-2', category: 'Spiritual Trips', title: 'Masjid Jamkaran' },
  { url: gallerySpirit3, id: 'spirit-3', category: 'Spiritual Trips', title: 'Mashhad Ardehal' },

  // Educational Trips
  { url: galleryEdu1, id: 'edu-1', category: 'Educational Trips', title: 'Museum Exhibition' },
  { url: galleryEdu2, id: 'edu-2', category: 'Educational Trips', title: 'Institute Visit' },
  { url: galleryEdu3, id: 'edu-3', category: 'Educational Trips', title: 'Architectural Tour' },

  // Sports and Leisure
  { id: 'sport-1', category: 'Sports and Leisure', url: sportsLeisureImg, title: 'Swimming Session' },
  { url: gallerySport2, id: 'sport-2', category: 'Sports and Leisure', title: 'Outdoor BBQ' },
  { url: gallerySport3, id: 'sport-3', category: 'Sports and Leisure', title: 'Waterfall Excursion' }
];
