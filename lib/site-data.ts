import { images } from "./images";

export const siteConfig = {
  name: "Nusrat Travel & Tours",
  brand: "NUSRAT",
  tagline: "TRAVEL & TOURS",
  phone: "+92 300 1234567",
  email: "info@nusrattravel.com",
  address: "Main Boulevard, Lahore",
  whatsapp: "+92 300 1234567",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Hajj Packages", href: "/hajj" },
  { label: "Umrah Packages", href: "/umrah" },
  { label: "Flights", href: "/flights" },
  { label: "Visa", href: "/visa" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* ---------------------------------------------------------------- Services */

export type Service = {
  icon: string;
  title: string;
  desc: string;
  isNew?: boolean;
};

export const services: Service[] = [
  { icon: "🕌", title: "Hajj Packages", desc: "Economy to VIP options" },
  { icon: "🕋", title: "Umrah Packages", desc: "Family & group deals" },
  { icon: "✈️", title: "Int'l Tickets", desc: "Best airline deals" },
  { icon: "🛫", title: "Domestic Tickets", desc: "Pakistan-wide routes" },
  { icon: "📄", title: "Visa Services", desc: "All countries supported" },
  { icon: "🏨", title: "Hotel Booking", desc: "Worldwide stays" },
  { icon: "🚌", title: "Group Tours", desc: "Ziyarat & leisure", isNew: true },
  { icon: "🛡️", title: "Travel Insurance", desc: "Peace of mind", isNew: true },
];

/* ---------------------------------------------------------------- Packages */

export type Package = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  tag: string;
  tagVariant?: "default" | "popular";
  discount?: string;
  meta: string;
  features: string[];
  oldPrice?: string;
  newPrice: string;
  priceLabel?: string;
  featured?: boolean;
};

export const packages: Package[] = [
  {
    id: "umrah-14",
    title: "14-Day Umrah Package",
    image: images.packageUmrah14,
    imageAlt: "Kaaba in Makkah",
    tag: "ECONOMY",
    discount: "-15% OFF",
    meta: "📍 Makkah · Madinah | ✈️ Saudia Airlines",
    features: ["✓ 4★ Hotel", "✓ Visa", "✓ Transport"],
    oldPrice: "PKR 3,50,000",
    newPrice: "PKR 2,95,000",
  },
  {
    id: "hajj-21",
    title: "21-Day Premium Hajj",
    image: images.packageHajj21,
    imageAlt: "Masjid an-Nabawi in Madinah",
    tag: "⭐ MOST POPULAR",
    tagVariant: "popular",
    meta: "📍 Full Package | ✈️ PIA Direct",
    features: ["✓ 5★ Hotel", "✓ All Meals", "✓ Guide"],
    newPrice: "PKR 12,50,000",
    priceLabel: "Starting from",
    featured: true,
  },
  {
    id: "umrah-10",
    title: "10-Day Express Umrah",
    image: images.packageUmrah10,
    imageAlt: "Mosque silhouette",
    tag: "VIP",
    meta: "📍 Family Package | ✈️ Qatar Airways",
    features: ["✓ 5★ Hotel", "✓ Haram View", "✓ Private"],
    newPrice: "PKR 4,75,000",
    priceLabel: "Starting from",
  },
];

export const umrahPackages: Package[] = [
  packages[0],
  packages[2],
  {
    id: "umrah-21",
    title: "21-Day Family Umrah",
    image: images.packageUmrah14,
    imageAlt: "Kaaba",
    tag: "FAMILY",
    meta: "📍 Makkah · Madinah | ✈️ Saudia",
    features: ["✓ 4★ Hotel", "✓ Meals", "✓ Ziyarat Tour"],
    newPrice: "PKR 3,85,000",
    priceLabel: "Per person",
  },
  {
    id: "umrah-7",
    title: "7-Day Quick Umrah",
    image: images.packageUmrah10,
    imageAlt: "Mosque",
    tag: "SHORT TRIP",
    meta: "📍 Makkah only | ✈️ Flynas",
    features: ["✓ 3★ Hotel", "✓ Visa", "✓ Transport"],
    discount: "-10% OFF",
    oldPrice: "PKR 2,25,000",
    newPrice: "PKR 2,02,500",
  },
  {
    id: "umrah-ramadan",
    title: "Ramadan Umrah · 15 Day",
    image: images.packageUmrah14,
    imageAlt: "Ramadan Umrah",
    tag: "RAMADAN",
    tagVariant: "popular",
    meta: "📍 Last Ashra | ✈️ PIA",
    features: ["✓ 5★ Haram View", "✓ Iftar/Sehri", "✓ Guide"],
    newPrice: "PKR 6,50,000",
    priceLabel: "Starting from",
    featured: true,
  },
  {
    id: "umrah-vip-couple",
    title: "VIP Couple Umrah · 12 Day",
    image: images.packageUmrah10,
    imageAlt: "Couple Umrah",
    tag: "VIP",
    meta: "📍 Private Service | ✈️ Emirates",
    features: ["✓ 5★ Hotel", "✓ Private Transport", "✓ Concierge"],
    newPrice: "PKR 8,95,000",
    priceLabel: "Per couple",
  },
];

export const hajjPackages: Package[] = [
  packages[1],
  {
    id: "hajj-economy",
    title: "Economy Hajj Package",
    image: images.packageHajj21,
    imageAlt: "Hajj",
    tag: "ECONOMY",
    meta: "📍 Standard rooms | ✈️ Saudia",
    features: ["✓ 3★ Hotel", "✓ Shared", "✓ Group"],
    newPrice: "PKR 9,50,000",
    priceLabel: "Starting from",
  },
  {
    id: "hajj-standard",
    title: "Standard Hajj · 25 Day",
    image: images.packageHajj21,
    imageAlt: "Hajj Standard",
    tag: "STANDARD",
    meta: "📍 4★ Hotels | ✈️ PIA",
    features: ["✓ 4★ Hotel", "✓ Meals", "✓ Train Mashair"],
    newPrice: "PKR 11,25,000",
    priceLabel: "Per person",
  },
  {
    id: "hajj-vip",
    title: "Hajj VIP · Aziziah Stay",
    image: images.packageHajj21,
    imageAlt: "Hajj VIP",
    tag: "VIP",
    tagVariant: "popular",
    meta: "📍 Walking distance Haram | ✈️ Direct",
    features: ["✓ 5★ Hotel", "✓ All Meals", "✓ AC Tents Mina"],
    newPrice: "PKR 18,50,000",
    priceLabel: "Starting from",
    featured: true,
  },
  {
    id: "hajj-shortcut",
    title: "Hajj Shortcut · 15 Day",
    image: images.packageHajj21,
    imageAlt: "Hajj Short",
    tag: "SHORT",
    meta: "📍 Quick return | ✈️ Direct",
    features: ["✓ 4★ Hotel", "✓ Meals", "✓ Express Transport"],
    newPrice: "PKR 13,75,000",
    priceLabel: "Per person",
  },
];

/* --------------------------------------------------------- Flights / Visa */

export type FlightDeal = {
  id: string;
  from: string;
  to: string;
  city: string;
  country: string;
  airline: string;
  type: "One-way" | "Return";
  price: string;
  image: string;
};

export const flightDeals: FlightDeal[] = [
  {
    id: "khi-jed",
    from: "Karachi",
    to: "JED",
    city: "Jeddah",
    country: "Saudi Arabia",
    airline: "Saudia",
    type: "Return",
    price: "PKR 145,000",
    image: images.airplane,
  },
  {
    id: "lhe-dxb",
    from: "Lahore",
    to: "DXB",
    city: "Dubai",
    country: "UAE",
    airline: "Emirates",
    type: "Return",
    price: "PKR 95,000",
    image: images.airplaneWindow,
  },
  {
    id: "isb-ist",
    from: "Islamabad",
    to: "IST",
    city: "Istanbul",
    country: "Turkey",
    airline: "Turkish Airlines",
    type: "Return",
    price: "PKR 165,000",
    image: images.airplane,
  },
  {
    id: "khi-lhr",
    from: "Karachi",
    to: "LHR",
    city: "London",
    country: "UK",
    airline: "British Airways",
    type: "Return",
    price: "PKR 235,000",
    image: images.airplaneWindow,
  },
  {
    id: "lhe-kul",
    from: "Lahore",
    to: "KUL",
    city: "Kuala Lumpur",
    country: "Malaysia",
    airline: "Malaysia Airlines",
    type: "Return",
    price: "PKR 175,000",
    image: images.airplane,
  },
  {
    id: "isb-doh",
    from: "Islamabad",
    to: "DOH",
    city: "Doha",
    country: "Qatar",
    airline: "Qatar Airways",
    type: "Return",
    price: "PKR 110,000",
    image: images.airplaneWindow,
  },
];

export const airlines = [
  "Saudia",
  "Emirates",
  "Qatar Airways",
  "Turkish Airlines",
  "PIA",
  "Flynas",
  "Etihad",
  "Malaysia Airlines",
];

export type VisaCountry = {
  id: string;
  country: string;
  flag: string;
  type: string;
  processingTime: string;
  startingPrice: string;
};

export const visaCountries: VisaCountry[] = [
  {
    id: "ksa",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    type: "Umrah / Visit",
    processingTime: "5–10 days",
    startingPrice: "PKR 35,000",
  },
  {
    id: "uae",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    type: "Tourist / Visit",
    processingTime: "3–5 days",
    startingPrice: "PKR 28,000",
  },
  {
    id: "tur",
    country: "Turkey",
    flag: "🇹🇷",
    type: "e-Visa / Tourist",
    processingTime: "7–14 days",
    startingPrice: "PKR 22,000",
  },
  {
    id: "mys",
    country: "Malaysia",
    flag: "🇲🇾",
    type: "Tourist",
    processingTime: "5–10 days",
    startingPrice: "PKR 18,000",
  },
  {
    id: "tha",
    country: "Thailand",
    flag: "🇹🇭",
    type: "Tourist",
    processingTime: "5–8 days",
    startingPrice: "PKR 20,000",
  },
  {
    id: "gbr",
    country: "United Kingdom",
    flag: "🇬🇧",
    type: "Visit / Business",
    processingTime: "3–4 weeks",
    startingPrice: "PKR 65,000",
  },
  {
    id: "usa",
    country: "United States",
    flag: "🇺🇸",
    type: "B1/B2 Visit",
    processingTime: "Varies",
    startingPrice: "PKR 75,000",
  },
  {
    id: "can",
    country: "Canada",
    flag: "🇨🇦",
    type: "Visit / Family",
    processingTime: "4–8 weeks",
    startingPrice: "PKR 60,000",
  },
];

export const visaRequirements = [
  "Valid passport (min 6 months validity)",
  "Recent passport-size photos (white background)",
  "Completed visa application form",
  "Bank statement (last 6 months)",
  "Proof of accommodation & return ticket",
  "Travel insurance (if required)",
];

/* ------------------------------------------------------ Process steps */

export type ProcessStep = {
  step: number;
  icon: string;
  title: string;
  desc: string;
};

export const hajjProcess: ProcessStep[] = [
  {
    step: 1,
    icon: "📞",
    title: "Free Consultation",
    desc: "Book a call with our Hajj expert to choose the right package.",
  },
  {
    step: 2,
    icon: "📝",
    title: "Registration & Documents",
    desc: "We handle Ministry of Religious Affairs registration & paperwork.",
  },
  {
    step: 3,
    icon: "💳",
    title: "Easy Installment Plans",
    desc: "Pay in 3–6 monthly installments on selected packages.",
  },
  {
    step: 4,
    icon: "🛂",
    title: "Visa & Vaccination",
    desc: "Hajj visa, mandatory vaccinations and travel kit.",
  },
  {
    step: 5,
    icon: "✈️",
    title: "Departure & Guidance",
    desc: "On-ground Pakistani-speaking team & 24/7 hotline in KSA.",
  },
];

export const umrahProcess: ProcessStep[] = [
  {
    step: 1,
    icon: "🎯",
    title: "Pick Your Package",
    desc: "Choose Economy, Family, VIP or Ramadan based on your needs.",
  },
  {
    step: 2,
    icon: "🛂",
    title: "Visa Application",
    desc: "We process Umrah visa within 5–10 working days.",
  },
  {
    step: 3,
    icon: "🏨",
    title: "Hotel & Flights Confirmed",
    desc: "Approved hotels in Makkah & Madinah + return tickets.",
  },
  {
    step: 4,
    icon: "🕋",
    title: "Sacred Journey",
    desc: "Ziyarat-e-Makkah, Madinah and 24/7 support during your stay.",
  },
];

/* ----------------------------------------------------- Testimonials / FAQ */

export type Testimonial = {
  initial: string;
  name: string;
  meta: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    initial: "A",
    name: "Ahmed Raza",
    meta: "Lahore · Umrah 2025",
    text: "Nusrat Travel ne hamari family ka Umrah trip bohat smooth banaya. Hotel Haram k bilkul saamne tha, transport perfect, aur staff bohat helpful.",
  },
  {
    initial: "F",
    name: "Fatima Khan",
    meta: "Karachi · Hajj 2025",
    text: "Hajj 2025 mein Nusrat k saath gaye. Pricing bohat reasonable thi aur sab kuch waqt par hua. Highly recommended for first-timers.",
  },
  {
    initial: "M",
    name: "Muhammad Ali",
    meta: "Islamabad · Business Travel",
    text: "International tickets bhi inse ki, Dubai aur Turkey ka. Best rates mile aur visa bhi inhone karwa diya. Trustworthy agency.",
  },
];

export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: "Umrah package mein kya kya included hota hai?",
    a: "Hamare standard Umrah packages mein visa, return flight tickets, hotel accommodation (Makkah & Madinah), transport, aur ziyarat tour shamil hai. Premium packages mein meals bhi included hain.",
  },
  {
    q: "Hajj k liye registration kab open hoti hai?",
    a: "Hajj registration usually saal mein ek baar Ministry of Religious Affairs k notification k baad start hoti hai. Hamari team aap ko notify kar deti hai jaise hi schedule announce hota hai.",
  },
  {
    q: "Payment installments mein kar sakte hain?",
    a: "Ji haan, hum 3 se 6 months tak ki easy installment plans offer karte hain selected packages par. Details k liye humse contact karein.",
  },
  {
    q: "Visa processing mein kitna time lagta hai?",
    a: "Umrah visa typically 5-10 working days mein process ho jata hai. Hajj visa ka time Ministry k schedule par depend karta hai.",
  },
  {
    q: "Family discount available hai?",
    a: "Ji haan, 4 ya us se zyada members par special family discount aur group rates available hain. Children k liye bhi alag pricing hoti hai.",
  },
];

export const searchTabs = [
  { id: "umrah", label: "🕋 Umrah" },
  { id: "hajj", label: "🕌 Hajj" },
  { id: "flights", label: "✈️ Flights" },
  { id: "hotels", label: "🏨 Hotels" },
  { id: "visa", label: "📄 Visa" },
];

/* --------------------------------------------------------- About / Team */

export const milestones = [
  { num: "15K+", label: "Happy Pilgrims" },
  { num: "14+", label: "Years Experience" },
  { num: "4.9★", label: "Customer Rating" },
  { num: "50+", label: "Countries Covered" },
];

export const certifications = [
  "Ministry of Religious Affairs — Licensed Hajj/Umrah Operator",
  "IATA Certified Travel Agency",
  "Saudi Hajj Ministry Approved",
  "Member — Travel Agents Association of Pakistan",
];

export type TeamMember = {
  name: string;
  role: string;
};

export const team: TeamMember[] = [
  { name: "Hafiz Nusrat Ali", role: "Founder & CEO" },
  { name: "Sana Iqbal", role: "Head of Operations" },
  { name: "Bilal Ahmed", role: "Umrah Operations Lead" },
  { name: "Maryam Sheikh", role: "Visa & Documentation" },
];

/* ----------------------------------------------- Hajj page content */

export const hajjWhyUs = [
  {
    icon: "🏛️",
    title: "Ministry-Approved Operator",
    desc: "Direct quota holder with the Ministry of Religious Affairs — no third-party risk.",
  },
  {
    icon: "🇸🇦",
    title: "Pakistani Team On Ground",
    desc: "Urdu-speaking representatives in Makkah, Madinah & Aziziah throughout the season.",
  },
  {
    icon: "💳",
    title: "Easy Installment Plans",
    desc: "Reserve with 30% deposit, balance over 3–6 months. Zero markup.",
  },
  {
    icon: "🏨",
    title: "Hand-Picked Hotels",
    desc: "Walking distance from Haram. We inspect every property before each season.",
  },
];

export type InclusionRow = {
  feature: string;
  economy: string | boolean;
  standard: string | boolean;
  vip: string | boolean;
};

export const hajjInclusions: InclusionRow[] = [
  { feature: "Hajj Visa & Permit", economy: true, standard: true, vip: true },
  {
    feature: "Return Flight",
    economy: "Connecting",
    standard: "Direct",
    vip: "Direct (Business avail.)",
  },
  {
    feature: "Makkah Hotel",
    economy: "3★ · 800m from Haram",
    standard: "4★ · 400m from Haram",
    vip: "5★ · Haram view",
  },
  {
    feature: "Madinah Hotel",
    economy: "3★ · 500m from Nabawi",
    standard: "4★ · 200m from Nabawi",
    vip: "5★ · Markaziya",
  },
  {
    feature: "Mina/Arafat Tents",
    economy: "Standard",
    standard: "Upgraded · AC",
    vip: "Premium · AC + Buffet",
  },
  { feature: "All Daily Meals", economy: false, standard: true, vip: true },
  { feature: "Transport (Bus/Train)", economy: true, standard: true, vip: true },
  { feature: "On-Ground Mualim", economy: true, standard: true, vip: true },
  { feature: "Ziyarat Tour", economy: false, standard: true, vip: true },
  { feature: "Travel Insurance", economy: false, standard: true, vip: true },
];

export const hajjDates2026 = [
  { label: "Registration Opens", date: "Jan 2026", note: "Ministry announcement" },
  { label: "Last Date for Booking", date: "Mar 15, 2026", note: "Subject to quota" },
  { label: "Departure (Group 1)", date: "May 25, 2026", note: "Early arrival" },
  { label: "8 Dhul Hijjah", date: "Jun 17, 2026", note: "Yawm al-Tarwiyah" },
  { label: "9 Dhul Hijjah", date: "Jun 18, 2026", note: "Day of Arafah" },
  { label: "10 Dhul Hijjah", date: "Jun 19, 2026", note: "Eid al-Adha" },
  { label: "Return Flights", date: "Jul 10–20, 2026", note: "By group" },
];

export const hajjPreparation = [
  {
    icon: "📚",
    title: "Pre-Departure Workshop",
    desc: "Free in-person sessions in Lahore, Karachi & Islamabad covering rituals, do's & don'ts.",
  },
  {
    icon: "💉",
    title: "Vaccinations",
    desc: "Meningitis & seasonal flu shots arranged through our partner clinics.",
  },
  {
    icon: "🧳",
    title: "Travel Kit",
    desc: "Ihram, prayer mat, ID lanyard, smart-card pouch & welcome bag included.",
  },
  {
    icon: "📱",
    title: "Nusafar App Access",
    desc: "Live flight, hotel & transport updates plus 24/7 chat with your group leader.",
  },
];

/* ----------------------------------------------- Umrah page content */

export const umrahWhyUs = [
  {
    icon: "✈️",
    title: "All-Inclusive Pricing",
    desc: "Visa, return flight, hotel, transport — final price quoted upfront.",
  },
  {
    icon: "🕓",
    title: "Same-Week Departures",
    desc: "Visa & bookings ready within 7 working days for last-minute trips.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family-First Packages",
    desc: "Adjoining rooms, kid-friendly meal plans, infant tickets at low fare.",
  },
  {
    icon: "🤝",
    title: "No Hidden Charges",
    desc: "What you see is what you pay. Refundable deposits in writing.",
  },
];

export const umrahIncludes = [
  "Umrah Visa & insurance",
  "Return economy flight",
  "Makkah hotel (chosen tier)",
  "Madinah hotel (chosen tier)",
  "All ground transport (airport, hotel, between cities)",
  "Ziyarat tour in Makkah & Madinah",
  "Pakistani Urdu-speaking guide",
  "Daily breakfast (Standard & VIP)",
  "Welcome travel kit (ihram, lanyard, prayer mat)",
  "24/7 WhatsApp support line",
];

export const umrahExcludes = [
  "Personal expenses & shopping",
  "Lunch & dinner (Economy only)",
  "Extra night stays beyond package",
  "Special diet meal upgrades",
];

export type ZiyaratStop = {
  city: "Makkah" | "Madinah";
  name: string;
  desc: string;
};

export const ziyaratStops: ZiyaratStop[] = [
  {
    city: "Makkah",
    name: "Jabal-e-Noor (Cave of Hira)",
    desc: "Where the first revelation of the Holy Qur'an was received.",
  },
  {
    city: "Makkah",
    name: "Jabal-e-Thawr",
    desc: "Cave where the Prophet ﷺ and Abu Bakr ﷺ took refuge.",
  },
  {
    city: "Makkah",
    name: "Mina, Arafat & Muzdalifah",
    desc: "Drive-through of the Hajj sites with historical commentary.",
  },
  {
    city: "Madinah",
    name: "Masjid Quba",
    desc: "The first mosque built in Islam.",
  },
  {
    city: "Madinah",
    name: "Masjid Qiblatain",
    desc: "Where the qibla changed from Jerusalem to Makkah.",
  },
  {
    city: "Madinah",
    name: "Jannat al-Baqi",
    desc: "Resting place of many companions of the Prophet ﷺ.",
  },
];

export const umrahBestTimes = [
  {
    season: "Ramadan",
    months: "Feb–Mar 2026",
    note: "Most rewarding — equal to a Hajj in reward. Premium pricing & crowds.",
    tag: "Highest Reward",
  },
  {
    season: "Winter",
    months: "Nov–Jan",
    note: "Pleasant weather (15–25°C). Best for elderly & families.",
    tag: "Best Weather",
  },
  {
    season: "School Holidays",
    months: "Jun–Aug",
    note: "Convenient for families. Hot weather — Haram is air-conditioned.",
    tag: "Family Friendly",
  },
  {
    season: "Off-Season",
    months: "Sep–Oct",
    note: "Lowest fares, fewer crowds. Best value for solo & couples.",
    tag: "Cheapest",
  },
];

/* ----------------------------------------------- Flights page content */

export const flightsWhyUs = [
  {
    icon: "💰",
    title: "Consolidator Rates",
    desc: "Wholesale fares from airlines that public sites can't match.",
  },
  {
    icon: "🎟️",
    title: "Flexible Tickets",
    desc: "Free 24-hour hold while you decide. Easy date changes & refunds.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Group Bookings",
    desc: "10+ passengers? Get group discounts, locked-in fares & seat selection.",
  },
  {
    icon: "🛟",
    title: "24/7 Trip Support",
    desc: "Stranded due to delays? Call us anytime — we'll rebook for you.",
  },
];

export const baggageInfo = [
  { airline: "Saudia", checkIn: "46 kg (2×23kg)", carry: "7 kg", note: "Generous Hajj/Umrah allowance" },
  { airline: "PIA", checkIn: "40 kg (2×20kg)", carry: "7 kg", note: "Special Ramadan offer" },
  { airline: "Emirates", checkIn: "30 kg", carry: "7 kg", note: "Premium Economy: 35 kg" },
  { airline: "Qatar Airways", checkIn: "30 kg", carry: "7 kg", note: "Includes a sports bag" },
  { airline: "Turkish Airlines", checkIn: "30 kg", carry: "8 kg", note: "Extra 5 kg with Miles&Smiles" },
];

/* ----------------------------------------------- Visa page content */

export const visaStats = [
  { num: "98%", label: "Approval Rate" },
  { num: "8,200+", label: "Visas Processed" },
  { num: "<5 Days", label: "Average for Saudi Visa" },
  { num: "50+", label: "Countries Supported" },
];

export const visaRejectionReasons = [
  {
    title: "Incomplete documents",
    desc: "Missing bank statements, photos in wrong size, or unsigned forms.",
  },
  {
    title: "Weak financial profile",
    desc: "Bank balance below the country's threshold or unexplained large deposits.",
  },
  {
    title: "Travel history gaps",
    desc: "First-time travellers applying for hard countries (UK/US/Canada) directly.",
  },
  {
    title: "Conflicting itinerary",
    desc: "Mismatched hotel dates, flights and reason for travel in the application.",
  },
  {
    title: "Insurance & accommodation",
    desc: "Missing travel insurance or unconfirmed hotel booking.",
  },
  {
    title: "Interview missteps",
    desc: "Unprepared answers, contradictory statements at the consulate window.",
  },
];

export type DocCategory = {
  title: string;
  icon: string;
  items: string[];
};

export const visaDocCategories: DocCategory[] = [
  {
    title: "Personal Documents",
    icon: "🪪",
    items: [
      "Original passport (min 6 months validity, 2 blank pages)",
      "CNIC front & back copy",
      "2 recent photos (white background)",
      "Form B / birth certificate (for minors)",
    ],
  },
  {
    title: "Financial Documents",
    icon: "💰",
    items: [
      "Bank statement (last 6 months, original)",
      "Bank maintenance letter",
      "Salary slips (3 months) OR business registration",
      "Tax return / NTN certificate",
    ],
  },
  {
    title: "Travel Documents",
    icon: "🛫",
    items: [
      "Confirmed return flight booking",
      "Hotel reservations (for full stay)",
      "Detailed itinerary / travel plan",
      "Travel insurance (where required)",
    ],
  },
];

/* ----------------------------------------------- About page content */

export type TimelineEvent = {
  year: string;
  title: string;
  desc: string;
};

export const timeline: TimelineEvent[] = [
  {
    year: "2010",
    title: "Founded in Lahore",
    desc: "Hafiz Nusrat Ali opens a small Umrah office on Main Boulevard.",
  },
  {
    year: "2013",
    title: "Ministry License",
    desc: "Granted official Hajj operator license by the Ministry of Religious Affairs.",
  },
  {
    year: "2016",
    title: "IATA Certified",
    desc: "Joined IATA as an accredited travel agency — global ticketing access.",
  },
  {
    year: "2018",
    title: "10,000 Pilgrims",
    desc: "Crossed our 10,000-pilgrim milestone across Hajj & Umrah operations.",
  },
  {
    year: "2021",
    title: "Karachi & Islamabad Offices",
    desc: "Expanded with full-service branches in two more cities.",
  },
  {
    year: "2024",
    title: "Digital Booking Platform",
    desc: "Launched the Nusafar app for self-service bookings & live trip updates.",
  },
  {
    year: "2026",
    title: "15,000+ & Counting",
    desc: "Today serving 5,000+ pilgrims annually across Hajj, Umrah & global travel.",
  },
];

export type CoreValue = {
  icon: string;
  title: string;
  desc: string;
};

export const coreValues: CoreValue[] = [
  {
    icon: "🕊️",
    title: "Amanah (Trust)",
    desc: "Every rupee and every booking is treated as a sacred trust. No shortcuts on quality.",
  },
  {
    icon: "💎",
    title: "Honest Pricing",
    desc: "Transparent quotes, no hidden surcharges. We tell you what's not included too.",
  },
  {
    icon: "🤲",
    title: "Ihsan (Excellence)",
    desc: "From the visa form to the on-ground service — we do small things very, very well.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Treatment",
    desc: "We treat first-time pilgrims with the same attention we'd give our own parents.",
  },
];

/* ----------------------------------------------- Contact page content */

export const businessHours = [
  { day: "Monday – Friday", hours: "10:00 AM – 8:00 PM" },
  { day: "Saturday", hours: "11:00 AM – 6:00 PM" },
  { day: "Sunday", hours: "Closed (24/7 Hajj/Umrah hotline open)" },
];

export type DepartmentContact = {
  name: string;
  desc: string;
  phone: string;
  email: string;
  icon: string;
};

export const departments: DepartmentContact[] = [
  {
    name: "Hajj & Umrah Sales",
    desc: "New bookings, group quotes, package upgrades.",
    phone: "+92 300 1234567",
    email: "umrah@nusrattravel.com",
    icon: "🕋",
  },
  {
    name: "Flights & Tickets",
    desc: "International & domestic airfare, rebookings.",
    phone: "+92 300 1234568",
    email: "flights@nusrattravel.com",
    icon: "✈️",
  },
  {
    name: "Visa Department",
    desc: "Document checks, application status, appointments.",
    phone: "+92 300 1234569",
    email: "visa@nusrattravel.com",
    icon: "📄",
  },
  {
    name: "Customer Support",
    desc: "Existing bookings, complaints, billing queries.",
    phone: "+92 300 1234570",
    email: "support@nusrattravel.com",
    icon: "🛟",
  },
];
