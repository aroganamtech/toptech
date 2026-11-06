export const PHONE_1 = '98413 71813';
export const PHONE_2 = '99415 91391';
export const TEL_1 = '+919841371813';
export const TEL_2 = '+919941591391';
export const WA_NUMBER = '919841371813';
export const EMAIL = 'selva.jegan@gmail.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/toptechcomputers_chennai/';
export const WEBSITE = 'www.toptechcomputers.in';
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Toptech+Computers+Vinayagapuram+Main+Road+Arumbakkam+Chennai+600106';

export const NAV = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
];

export const SERVICES = [
  {
    id: 's1', color: 'c-red', icon: '🖥️', short: 'Computer Sales & Services',
    title: 'Computer Sales & Services',
    desc: 'Find computers, laptops, accessories and hardware solutions for personal, educational and business requirements.',
    items: ['Desktop and laptop sales', 'Computer repair and maintenance', 'Hardware troubleshooting', 'RAM and SSD upgrades', 'Software installation and support', 'Computer accessories and peripherals'],
  },
  {
    id: 's2', color: 'c-blue', icon: '💻', short: 'Laptop Chip-Level Service',
    title: 'Laptop Chip-Level Service',
    desc: 'Advanced diagnosis and motherboard-level repair solutions for laptops with hardware or power-related problems.',
    items: ['Motherboard troubleshooting', 'Power and charging issues', 'IC and component-level repairs', 'No-display and no-power diagnosis', 'BIOS-related troubleshooting', 'Short-circuit diagnosis'],
    note: 'Repair feasibility and cost depend on the device and the diagnosed fault.',
  },
  {
    id: 's3', color: 'c-orange', icon: '📹', short: 'CCTV Setup & Security',
    title: 'CCTV Setup & Security Solutions',
    desc: 'Protect your home, shop, office and business with reliable CCTV surveillance solutions.',
    items: ['CCTV camera sales', 'Installation and configuration', 'Indoor and outdoor cameras', 'DVR and NVR setup', 'Remote viewing configuration, where supported', 'CCTV maintenance and troubleshooting'],
    vizBadge: true,
  },
  {
    id: 's4', color: 'c-green', icon: '🌐', short: 'Networking AMC',
    title: 'Networking & AMC',
    desc: 'Keep your IT infrastructure connected and operating efficiently with networking and maintenance support.',
    items: ['Wired and wireless network setup', 'Router and switch configuration', 'Office network installation', 'Network troubleshooting', 'Computer and network maintenance', 'Annual Maintenance Contracts (AMC)'],
  },
  {
    id: 's5', color: 'c-purple', icon: '</>', short: 'Web Design & Development',
    title: 'Web Design & Development',
    desc: 'Build a professional online presence for your business with responsive, user-friendly websites.',
    items: ['Business websites', 'Company profile websites', 'E-commerce websites', 'Responsive mobile-friendly design', 'Website maintenance', 'Domain and hosting assistance'],
  },
  {
    id: 's6', color: 'c-teal', icon: '💾', short: 'Data Recovery',
    title: 'Data Recovery',
    desc: 'Get professional assistance when important files become inaccessible or are accidentally deleted.',
    items: ['Hard disk and SSD diagnosis', 'Data recovery assessment', 'File access and storage troubleshooting', 'Recovery assistance for supported storage devices'],
    note: 'Data recovery is not guaranteed and depends on the condition of the storage device.',
  },
];

export const WHY = [
  { icon: '🛡️', title: 'Quality Products', text: 'Technology products and service options selected to meet your requirements.' },
  { icon: '🎧', title: 'Expert Support', text: 'Technical assistance for computer, laptop, networking and CCTV-related issues.' },
  { icon: '₹', title: 'Affordable Prices', text: 'Clear quotations and suitable service options based on your requirements.' },
  { icon: '🤝', title: 'Customer Satisfaction', text: 'Customer-focused support with an emphasis on dependable service and practical solutions.' },
];
export const asset = n => `${import.meta.env.BASE_URL}assets/${n}`;
