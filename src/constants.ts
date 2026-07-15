import type { FAQItem, GalleryItem } from './types';

// Import welcome images
const increaseKnowledgeImg = 'https://media.brisc.babalridha.com/welcome/knowledge.webp';
const progressSpiritualityImg = 'https://media.brisc.babalridha.com/welcome/spirituality.webp';
const learnSkillsImg = 'https://media.brisc.babalridha.com/welcome/skills.webp';
const meetScholarsImg = 'https://media.brisc.babalridha.com/welcome/scholars.webp';
 
// Import core images
import logoImg from './assets/images/logo.png';
const deeperKnowledgeImg = 'https://media.brisc.babalridha.com/welcome/knowledge.webp';
const newOutlookImg = 'https://media.brisc.babalridha.com/aims/outlook.webp';
const balancedLifeImg = 'https://media.brisc.babalridha.com/aims/balanced_life.webp';
const teamworkImg = 'https://media.brisc.babalridha.com/aims/teamwork.webp';
const tahririImg = 'https://media.brisc.babalridha.com/aims/spirituality.webp';
const tablighResourcesImg = 'https://media.brisc.babalridha.com/aims/tabligh.webp';



// Import curriculum images
const leadershipClassImg = 'https://media.brisc.babalridha.com/curriculum/classes.webp';
const youthProjectImg = 'https://media.brisc.babalridha.com/curriculum/mubahatha.webp';
const fieldTripsImg = 'https://media.brisc.babalridha.com/curriculum/trips.webp';
const visitsToScholarsImg = 'https://media.brisc.babalridha.com/curriculum/scholars.webp';
const ziarahImg = 'https://media.brisc.babalridha.com/curriculum/ziarah.jpg';
const sportsLeisureImg = 'https://media.brisc.babalridha.com/curriculum/sports.webp';

// Import gallery images
const galleryPrep1 = "https://media.brisc.babalridha.com/gallery/pre_brisc/01.webp";
const galleryPrep2 = "https://media.brisc.babalridha.com/gallery/pre_brisc/02.webp";
const galleryPrep3 = "https://media.brisc.babalridha.com/gallery/pre_brisc/03.webp";
const galleryPrep4 = "https://media.brisc.babalridha.com/gallery/pre_brisc/04.webp";
const galleryPrep5 = "https://media.brisc.babalridha.com/gallery/pre_brisc/05.webp";
const galleryPrep6 = "https://media.brisc.babalridha.com/gallery/pre_brisc/06.webp";
const galleryPrep7 = "https://media.brisc.babalridha.com/gallery/pre_brisc/07.webp";

const galleryOpen1 = "https://media.brisc.babalridha.com/gallery/opening_ceremony/01.webp";
const galleryOpen2 = "https://media.brisc.babalridha.com/gallery/opening_ceremony/02.webp";
const galleryOpen3 = "https://media.brisc.babalridha.com/gallery/opening_ceremony/03.webp";
const galleryOpen4 = "https://media.brisc.babalridha.com/gallery/opening_ceremony/04.webp";
const galleryOpen5 = "https://media.brisc.babalridha.com/gallery/opening_ceremony/05.webp";
const galleryOpen6 = "https://media.brisc.babalridha.com/gallery/opening_ceremony/06.webp";
const galleryOpen7 = "https://media.brisc.babalridha.com/gallery/opening_ceremony/07.webp";
const galleryOpen8 = "https://media.brisc.babalridha.com/gallery/opening_ceremony/08.webp";
const galleryOpen9 = "https://media.brisc.babalridha.com/gallery/opening_ceremony/09.webp";

const galleryClass1 = "https://media.brisc.babalridha.com/gallery/classes/01.webp";
const galleryClass2 = "https://media.brisc.babalridha.com/gallery/classes/02.webp";
const galleryClass3 = "https://media.brisc.babalridha.com/gallery/classes/03.webp";
const galleryClass4 = "https://media.brisc.babalridha.com/gallery/classes/04.webp";
const galleryClass5 = "https://media.brisc.babalridha.com/gallery/classes/05.webp";
const galleryClass6 = "https://media.brisc.babalridha.com/gallery/classes/06.webp";
const galleryClass7 = "https://media.brisc.babalridha.com/gallery/classes/07.webp";
const galleryClass8 = "https://media.brisc.babalridha.com/gallery/classes/08.webp";
const galleryClass9 = "https://media.brisc.babalridha.com/gallery/classes/09.webp";
const galleryClass10 = "https://media.brisc.babalridha.com/gallery/classes/10.webp";
const galleryClass11 = "https://media.brisc.babalridha.com/gallery/classes/11.webp";

const galleryDisc1 = "https://media.brisc.babalridha.com/gallery/discussions/01.webp";
const galleryDisc2 = "https://media.brisc.babalridha.com/gallery/discussions/02.webp";
const galleryDisc3 = "https://media.brisc.babalridha.com/gallery/discussions/03.webp";
const galleryDisc4 = "https://media.brisc.babalridha.com/gallery/discussions/04.webp";
const galleryDisc5 = "https://media.brisc.babalridha.com/gallery/discussions/05.webp";
const galleryDisc6 = "https://media.brisc.babalridha.com/gallery/discussions/06.webp";
const galleryDisc7 = "https://media.brisc.babalridha.com/gallery/discussions/07.webp";
const galleryDisc8 = "https://media.brisc.babalridha.com/gallery/discussions/08.webp";

const gallerySchol1 = "https://media.brisc.babalridha.com/gallery/scholars/01.webp";
const gallerySchol2 = "https://media.brisc.babalridha.com/gallery/scholars/02.webp";
const gallerySchol3 = "https://media.brisc.babalridha.com/gallery/scholars/03.webp";
const gallerySchol4 = "https://media.brisc.babalridha.com/gallery/scholars/04.webp";
const gallerySchol5 = "https://media.brisc.babalridha.com/gallery/scholars/05.webp";
const gallerySchol6 = "https://media.brisc.babalridha.com/gallery/scholars/06.webp";
const gallerySchol7 = "https://media.brisc.babalridha.com/gallery/scholars/07.webp";
const gallerySchol8 = "https://media.brisc.babalridha.com/gallery/scholars/08.webp";
const gallerySchol9 = "https://media.brisc.babalridha.com/gallery/scholars/09.webp";
const gallerySchol10 = "https://media.brisc.babalridha.com/gallery/scholars/10.webp";
const gallerySchol11 = "https://media.brisc.babalridha.com/gallery/scholars/11.webp";
const gallerySchol12 = "https://media.brisc.babalridha.com/gallery/scholars/12.webp";
const gallerySchol13 = "https://media.brisc.babalridha.com/gallery/scholars/13.webp";
const gallerySchol14 = "https://media.brisc.babalridha.com/gallery/scholars/14.webp";

const galleryEduTrip1 = "https://media.brisc.babalridha.com/gallery/educational_trips/01.webp";
const galleryEduTrip2 = "https://media.brisc.babalridha.com/gallery/educational_trips/02.webp";
const galleryEduTrip3 = "https://media.brisc.babalridha.com/gallery/educational_trips/03.webp";
const galleryEduTrip4 = "https://media.brisc.babalridha.com/gallery/educational_trips/04.webp";
const galleryEduTrip5 = "https://media.brisc.babalridha.com/gallery/educational_trips/05.webp";
const galleryEduTrip6 = "https://media.brisc.babalridha.com/gallery/educational_trips/06.webp";
const galleryEduTrip7 = "https://media.brisc.babalridha.com/gallery/educational_trips/07.webp";
const galleryEduTrip8 = "https://media.brisc.babalridha.com/gallery/educational_trips/08.webp";
const galleryEduTrip9 = "https://media.brisc.babalridha.com/gallery/educational_trips/09.webp";

const gallerySport1 = "https://media.brisc.babalridha.com/gallery/sports/01.webp";
const gallerySport2 = "https://media.brisc.babalridha.com/gallery/sports/02.webp";
const gallerySport3 = "https://media.brisc.babalridha.com/gallery/sports/03.webp";
const gallerySport4 = "https://media.brisc.babalridha.com/gallery/sports/04.webp";
const gallerySport5 = "https://media.brisc.babalridha.com/gallery/sports/05.webp";
const gallerySport6 = "https://media.brisc.babalridha.com/gallery/sports/06.webp";
const gallerySport7 = "https://media.brisc.babalridha.com/gallery/sports/07.webp";
const gallerySport8 = "https://media.brisc.babalridha.com/gallery/sports/08.webp";
const gallerySport9 = "https://media.brisc.babalridha.com/gallery/sports/09.webp";
const gallerySport10 = "https://media.brisc.babalridha.com/gallery/sports/10.webp";
const gallerySport11 = "https://media.brisc.babalridha.com/gallery/sports/11.webp";
const gallerySport12 = "https://media.brisc.babalridha.com/gallery/sports/12.webp";
const gallerySport13 = "https://media.brisc.babalridha.com/gallery/sports/13.webp";





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
  { id: 'pre-1', category: 'Pre-BRisc preparations', url: galleryPrep1 },
  { id: 'pre-2', category: 'Pre-BRisc preparations', url: galleryPrep2 },
  { id: 'pre-3', category: 'Pre-BRisc preparations', url: galleryPrep3 },
  { id: 'pre-4', category: 'Pre-BRisc preparations', url: galleryPrep4 },
  { id: 'pre-5', category: 'Pre-BRisc preparations', url: galleryPrep5 },
  { id: 'pre-6', category: 'Pre-BRisc preparations', url: galleryPrep6 },
  { id: 'pre-7', category: 'Pre-BRisc preparations', url: galleryPrep7 },
  
  // Opening Ceremony
  { id: 'open-1', category: 'Opening Ceremony', url: galleryOpen1 },
  { id: 'open-2', category: 'Opening Ceremony', url: galleryOpen2 },
  { id: 'open-3', category: 'Opening Ceremony', url: galleryOpen3 },
  { id: 'open-4', category: 'Opening Ceremony', url: galleryOpen4 },
  { id: 'open-5', category: 'Opening Ceremony', url: galleryOpen5 },
  { id: 'open-6', category: 'Opening Ceremony', url: galleryOpen6 },
  { id: 'open-7', category: 'Opening Ceremony', url: galleryOpen7 },
  { id: 'open-8', category: 'Opening Ceremony', url: galleryOpen8 },
  { id: 'open-9', category: 'Opening Ceremony', url: galleryOpen9 },

  // Classes and Workshops
  { id: 'class-1', category: 'Classes and Workshops', url: galleryClass1 },
  { id: 'class-2', category: 'Classes and Workshops', url: galleryClass2 },
  { id: 'class-3', category: 'Classes and Workshops', url: galleryClass3 },
  { id: 'class-4', category: 'Classes and Workshops', url: galleryClass4 },
  { id: 'class-5', category: 'Classes and Workshops', url: galleryClass5 },
  { id: 'class-6', category: 'Classes and Workshops', url: galleryClass6 },
  { id: 'class-7', category: 'Classes and Workshops', url: galleryClass7 },
  { id: 'class-8', category: 'Classes and Workshops', url: galleryClass8 },
  { id: 'class-9', category: 'Classes and Workshops', url: galleryClass9 },
  { id: 'class-10', category: 'Classes and Workshops', url: galleryClass10 },
  { id: 'class-11', category: 'Classes and Workshops', url: galleryClass11 },

  // Discussions and Youth Project
  { id: 'disc-1', category: 'Discussions and Youth Project', url: galleryDisc1 },
  { id: 'disc-2', category: 'Discussions and Youth Project', url: galleryDisc2 },
  { id: 'disc-3', category: 'Discussions and Youth Project', url: galleryDisc3 },
  { id: 'disc-4', category: 'Discussions and Youth Project', url: galleryDisc4 },
  { id: 'disc-5', category: 'Discussions and Youth Project', url: galleryDisc5 },
  { id: 'disc-6', category: 'Discussions and Youth Project', url: galleryDisc6 },
  { id: 'disc-7', category: 'Discussions and Youth Project', url: galleryDisc7 },
  { id: 'disc-8', category: 'Discussions and Youth Project', url: galleryDisc8 },

  // Visits to Scholars
  { id: 'schol-1', category: 'Visits to Scholars', url: gallerySchol1 },
  { id: 'schol-2', category: 'Visits to Scholars', url: gallerySchol2 },
  { id: 'schol-3', category: 'Visits to Scholars', url: gallerySchol3 },
  { id: 'schol-4', category: 'Visits to Scholars', url: gallerySchol4 },
  { id: 'schol-5', category: 'Visits to Scholars', url: gallerySchol5 },
  { id: 'schol-6', category: 'Visits to Scholars', url: gallerySchol6 },
  { id: 'schol-7', category: 'Visits to Scholars', url: gallerySchol7 },
  { id: 'schol-8', category: 'Visits to Scholars', url: gallerySchol8 },
  { id: 'schol-9', category: 'Visits to Scholars', url: gallerySchol9 },
  { id: 'schol-10', category: 'Visits to Scholars', url: gallerySchol10 },
  { id: 'schol-11', category: 'Visits to Scholars', url: gallerySchol11 },
  { id: 'schol-12', category: 'Visits to Scholars', url: gallerySchol12 },
  { id: 'schol-13', category: 'Visits to Scholars', url: gallerySchol13 },
  { id: 'schol-14', category: 'Visits to Scholars', url: gallerySchol14 },

  // Spiritual Trips
  

  // Educational Trips
  { id: 'edu-1', category: 'Educational Trips', url: galleryEduTrip1 },
  { id: 'edu-1', category: 'Educational Trips', url: galleryEduTrip2 },
  { id: 'edu-1', category: 'Educational Trips', url: galleryEduTrip3 },
  { id: 'edu-2', category: 'Educational Trips', url: galleryEduTrip4 },
  { id: 'edu-3', category: 'Educational Trips', url: galleryEduTrip5 },
  { id: 'edu-1', category: 'Educational Trips', url: galleryEduTrip6 },
  { id: 'edu-1', category: 'Educational Trips', url: galleryEduTrip7 },
  { id: 'edu-1', category: 'Educational Trips', url: galleryEduTrip8 },
  { id: 'edu-1', category: 'Educational Trips', url: galleryEduTrip9 },


  // Sports and Leisure
  { id: 'sport-1', category: 'Sports and Leisure', url: gallerySport1 },
  { id: 'sport-2', category: 'Sports and Leisure', url: gallerySport2 },
  { id: 'sport-3', category: 'Sports and Leisure', url: gallerySport3 },
  { id: 'sport-4', category: 'Sports and Leisure', url: gallerySport4 },
  { id: 'sport-5', category: 'Sports and Leisure', url: gallerySport5 },
  { id: 'sport-6', category: 'Sports and Leisure', url: gallerySport6 },
  { id: 'sport-7', category: 'Sports and Leisure', url: gallerySport7 },
  { id: 'sport-8', category: 'Sports and Leisure', url: gallerySport8 },
  { id: 'sport-9', category: 'Sports and Leisure', url: gallerySport9 }, 
];
