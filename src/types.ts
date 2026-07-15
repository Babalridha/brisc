export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  impact: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Program' | 'Logistics' | 'Spirituality' | 'Travel';
}

export interface GalleryItem {
  id: string;
  category: string;
  url: any;
}
