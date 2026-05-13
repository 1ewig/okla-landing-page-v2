export interface Model {
  id: string;
  name: string;
  category: string;
  price: number;
  range: string;
  speed: string;
  motor: string;
  badge?: string;
  image: string;
}

export interface Location {
  id: string;
  city: string;
  type: string;
  badge: string;
  address: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  model: string;
  rating: number;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Why OKLA', href: '#why-okla' },
  { label: 'Models', href: '#models' },
  { label: 'Locations', href: '#locations' },
  { label: 'Financing', href: '#financing' },
];

export const MODELS_DATA: Model[] = [
  {
    id: 'orbit',
    name: 'Orbit',
    category: 'Commuter',
    price: 159000,
    range: '60 km',
    speed: '40 km/h',
    motor: '1000W',
    badge: 'Best Seller',
    image: '/images/model-orbit.webp',
  },
  {
    id: 'okt',
    name: 'OKT Lithium',
    category: 'Commuter',
    price: 249000,
    range: '90 km',
    speed: '45 km/h',
    motor: '1000W',
    image: '/images/model-okt.webp',
  },
  {
    id: 'omo',
    name: 'OMO',
    category: 'Style',
    price: 339000,
    range: '100 km',
    speed: '50 km/h',
    motor: '1200W',
    badge: 'New',
    image: '/images/model-omo.webp',
  },
  {
    id: 'omigo',
    name: 'OMIGO',
    category: 'Women-Friendly',
    price: 399000,
    range: '100 km',
    speed: '50 km/h',
    motor: '1200W',
    image: '/images/model-omigo.webp',
  },
  {
    id: 'okg',
    name: 'OKG',
    category: 'Performance',
    price: 449000,
    range: '120 km',
    speed: '60 km/h',
    motor: '1500W',
    badge: 'Best Seller',
    image: '/images/model-okg.webp',
  },
  {
    id: 'ova',
    name: 'OVA',
    category: 'Premium',
    price: 599000,
    range: '130 km',
    speed: '80 km/h',
    motor: '3000W',
    badge: 'New',
    image: '/images/model-ova.webp',
  },
];

export const FEATURES_DATA: Feature[] = [
  {
    icon: 'Battery',
    title: 'Long-Lasting Battery',
    description: 'LFP and Lithium options deliver 80–120 km range on a single charge, with fast charging support.',
  },
  {
    icon: 'Mountain',
    title: 'Hill Assist Built-In',
    description: 'Tackle up to 17° inclines with confidence. Designed for Lahore, Karachi, and beyond.',
  },
  {
    icon: 'Leaf',
    title: 'Eco-Friendly Ride',
    description: 'Zero emissions. Save the planet and your fuel budget — simultaneously.',
  },
  {
    icon: 'Smartphone',
    title: 'Smart TFT Display',
    description: 'Real-time IoT dashboard shows speed, battery, trip data, and connectivity right on the handlebar.',
  },
  {
    icon: 'Shield',
    title: 'Advanced Safety',
    description: 'Hydraulic disc brakes, LED lighting, and robust frame for confident daily commuting.',
  },
  {
    icon: 'Wrench',
    title: 'Low Maintenance',
    description: 'Hub motor design means fewer moving parts. Less downtime, more riding.',
  },
];

export const LOCATIONS_DATA: Location[] = [
  {
    id: 'lhr-1',
    city: 'Lahore',
    type: 'Experience Center',
    badge: 'Main',
    address: '127-A Broadway Commercial, DHA Phase 8',
  },
  {
    id: 'lhr-2',
    city: 'Lahore',
    type: 'Assembly Plant',
    badge: 'Main',
    address: '382-383 Sundar Industrial Estate, Raiwind Road',
  },
  {
    id: 'isb-1',
    city: 'Islamabad',
    type: 'Experience Center',
    badge: 'Main',
    address: 'Plaza #9, Street A-62 (Tulip Road), DHA Phase II',
  },
  {
    id: 'khi-1',
    city: 'Karachi',
    type: 'Experience Center',
    badge: 'Main',
    address: 'Opposite FTC, Shahrah-e-Faisal',
  },
  {
    id: 'mul-1',
    city: 'Multan',
    type: 'Dealer',
    badge: 'Dealer',
    address: 'Near Clock Tower, Abdali Road',
  },
  {
    id: 'skt-1',
    city: 'Sialkot',
    type: 'Dealer',
    badge: 'Dealer',
    address: 'Rangpura Road, Near Kashmir Chowk',
  },
  {
    id: 'fsd-1',
    city: 'Faisalabad',
    type: 'Dealer',
    badge: 'Dealer',
    address: 'Susan Road, Madina Town',
  },
  {
    id: 'grw-1',
    city: 'Gujranwala',
    type: 'Dealer',
    badge: 'Dealer',
    address: 'G.T. Road, Near Model Town',
  },
];

export const FAQS_DATA: FAQ[] = [
  {
    question: 'How far can an OKLA scooter go on one charge?',
    answer: 'Depending on the model, OKLA scooters deliver 60–130 km per charge. The OVA and OKG offer the longest range.',
  },
  {
    question: 'How long does it take to fully charge the battery?',
    answer: 'Most models charge fully in 4–6 hours. With fast charging, you can get 80% in under 3 hours.',
  },
  {
    question: 'Are OKLA scooters suitable for daily commuting in Pakistan?',
    answer: 'Absolutely. With hill assist, LED lighting, and strong braking, OKLA scooters are built for urban Pakistani roads.',
  },
  {
    question: 'Do I need a license to ride an OKLA scooter?',
    answer: "License requirements follow Pakistan's Motor Vehicle Ordinance. We recommend checking with your local transport authority.",
  },
  {
    question: 'What after-sales support does OKLA provide?',
    answer: 'OKLA CARE includes trained technicians, service centers across 25+ cities, roadside assistance, and manufacturer warranties on motors and batteries.',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    quote: 'The ride quality is incredibly smooth, and the battery easily lasts my entire commute. My OKLA has completely changed how I travel in the city.',
    author: 'Alex R.',
    role: 'Entrepreneur',
    model: 'OKLA OKT',
    rating: 5,
  },
  {
    id: '2',
    quote: 'Stylish, powerful, and super easy to use. I love how quiet and eco-friendly it is — definitely the best upgrade for daily commuting.',
    author: 'Sana M.',
    role: 'Company Founder',
    model: 'OKLA OMIGO',
    rating: 5,
  },
  {
    id: '3',
    quote: 'I was surprised by the performance and comfort. It feels premium, and the smart features make every ride more enjoyable.',
    author: 'Danish K.',
    role: 'Business Owner',
    model: 'OKLA OVA',
    rating: 5,
  },
];
