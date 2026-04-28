export interface Review {
  id: number;
  name: string;
  location: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  product: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Ahmad Raza",
    location: "Lahore, Pakistan",
    role: "Travel Agency Owner",
    avatar: "AR",
    rating: 5,
    text: "The CRM system completely transformed how we manage our Hajj & Umrah bookings. We went from losing leads in WhatsApp chats to a proper pipeline. Worth every rupee.",
    product: "CRM & Automation",
  },
  {
    id: 2,
    name: "Fatima Khan",
    location: "Karachi, Pakistan",
    role: "Digital Product Seller",
    avatar: "FK",
    rating: 5,
    text: "I purchased 12 eBooks for my family and the quality is exceptional. The DIY Hajj guide alone saved us over PKR 80,000 in agent fees. Highly recommended.",
    product: "eBook Library",
  },
  {
    id: 3,
    name: "Bilal Hussain",
    location: "Islamabad, Pakistan",
    role: "E-commerce Entrepreneur",
    avatar: "BH",
    rating: 5,
    text: "Quick Fare built our entire automation workflow. From lead capture to follow-ups, everything runs on autopilot now. Our conversion rate doubled in 3 months.",
    product: "Business Solutions",
  },
  {
    id: 4,
    name: "Zainab Ali",
    location: "Faisalabad, Pakistan",
    role: "Homemaker & Parent",
    avatar: "ZA",
    rating: 5,
    text: "The parenting eBooks are a blessing. My kids now pray on time and understand why. The 30-day Namazi Bache plan actually works. No gimmicks, just results.",
    product: "eBook Library",
  },
  {
    id: 5,
    name: "Usman Tariq",
    location: "Rawalpindi, Pakistan",
    role: "Software Consultant",
    avatar: "UT",
    rating: 5,
    text: "As someone who understands tech, I can confirm their CRM is built properly. Clean architecture, fast, and the WhatsApp integration is seamless. Best investment for 2025.",
    product: "CRM & Automation",
  },
  {
    id: 6,
    name: "Maryam Siddiqui",
    location: "Multan, Pakistan",
    role: "Online Course Creator",
    avatar: "MS",
    rating: 5,
    text: "I was skeptical about buying digital products online, but their support team walked me through everything. The Ramzan Master Plan eBook is now part of our family tradition.",
    product: "eBook Library",
  },
];
