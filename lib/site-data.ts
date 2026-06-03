import { images } from "./images";

export const siteConfig = {
  name: "Nusarat Madina",
  brand: "NUSARAT MADINA",
  tagline: "TRAVEL & TOURS",
  owner: "Rao Shafeeq",
  phone: "+92 308 2699997",
  email: "nusratemadina@gmail.com",
  address: "Lodhran, South Punjab, Pakistan",
  city: "Lodhran",
  region: "Punjab",
  country: "Pakistan",
  whatsapp: "+92 308 2699997",
  // ⚠️ Update this to your real domain once live (used for SEO canonical & sitemap).
  url: "https://nusaratmadina.com",
  // Cities served — used for local SEO keywords & structured data.
  cities: [
    "Lodhran",
    "Multan",
    "Bahawalpur",
    "Khanewal",
    "Vehari",
    "Kahror Pakka",
    "Dunyapur",
    "Jahanian",
  ],
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
  slug: string;
  href: string;
  icon: string;
  image: string;
  title: string;
  desc: string;
  long: string;
  points: string[];
  startingPrice?: string;
  isNew?: boolean;
};

export const services: Service[] = [
  {
    slug: "hajj",
    href: "/hajj",
    icon: "🕌",
    image: images.serviceHajj,
    title: "Hajj Packages",
    desc: "Economy to VIP options",
    long:
      "Ministry-approved Hajj packages for every budget — Economy, Standard and VIP — with hand-picked hotels near the Haram, Mina/Arafat tents, full ground transport and an Urdu-speaking mualim throughout the journey.",
    points: [
      "Economy, Standard & VIP categories",
      "Hotels within walking distance of Haram",
      "AC tents in Mina & Arafat (Standard/VIP)",
      "Easy 3–6 month installment plans",
    ],
    startingPrice: "PKR 9,50,000",
  },
  {
    slug: "umrah",
    href: "/umrah",
    icon: "🕋",
    image: images.serviceUmrah,
    title: "Umrah Packages",
    desc: "Family & group deals",
    long:
      "Affordable, all-inclusive Umrah packages for families, couples and groups. Visa, return flights, Makkah & Madinah hotels, transport and ziyarat — quoted upfront with no hidden charges.",
    points: [
      "Economy, Family, VIP & Ramadan packages",
      "Haram-view hotels available",
      "Umrah visa ready in 5–10 days",
      "Guided ziyarat in Makkah & Madinah",
    ],
    startingPrice: "PKR 2,02,500",
  },
  {
    slug: "international-tickets",
    href: "/flights",
    icon: "✈️",
    image: images.airplane,
    title: "International Tickets",
    desc: "Best airline deals worldwide",
    long:
      "Wholesale consolidator fares to Saudi Arabia, UAE, Turkey, UK, Malaysia and beyond. We compare every airline to find you the lowest price, with flexible dates and 24/7 trip support.",
    points: [
      "Saudia, Emirates, Qatar, Turkish, PIA & more",
      "Consolidator rates below public sites",
      "Free 24-hour fare hold",
      "Group fares for 10+ passengers",
    ],
    startingPrice: "PKR 95,000",
  },
  {
    slug: "domestic-tickets",
    href: "/flights",
    icon: "🛫",
    image: images.airplaneWindow,
    title: "Domestic Tickets",
    desc: "Pakistan-wide routes",
    long:
      "Domestic flights across Pakistan — Multan, Karachi, Lahore, Islamabad, Peshawar, Quetta, Skardu and more. Instant booking on PIA, AirSial, SereneAir and Fly Jinnah at the best available fares.",
    points: [
      "All major Pakistani cities & airlines",
      "Same-day & last-minute bookings",
      "Corporate & family discounts",
      "Instant e-ticket on WhatsApp",
    ],
    startingPrice: "PKR 12,000",
  },
  {
    slug: "visa",
    href: "/visa",
    icon: "📄",
    image: images.passport,
    title: "Visa Services",
    desc: "50+ countries supported",
    long:
      "End-to-end visa processing for 50+ countries — Saudi Arabia, UAE, Turkey, Malaysia, Thailand, UK, USA and Canada. Document review, appointment booking and full filing support with a 98% approval rate.",
    points: [
      "Tourist, visit, business & Umrah visas",
      "Document pre-check to avoid rejection",
      "Embassy appointment booking",
      "98% approval rate",
    ],
    startingPrice: "PKR 18,000",
  },
  {
    slug: "hotel-booking",
    href: "/hotels",
    icon: "🏨",
    image: images.serviceHotel,
    title: "Hotel Booking",
    desc: "Makkah, Madinah & worldwide",
    long:
      "Discounted hotel bookings worldwide — from Haram-view 5★ stays in Makkah & Madinah to business and family hotels in Dubai, Istanbul and beyond. Best rates locked in through our direct contracts.",
    points: [
      "Haram-view & walking-distance hotels",
      "3★ to 5★ across every budget",
      "Worldwide leisure & business stays",
      "Group room blocks for families",
    ],
    startingPrice: "PKR 8,000 / night",
  },
  {
    slug: "transport",
    href: "/transport",
    icon: "🚐",
    image: images.serviceTransport,
    title: "Transport Services",
    desc: "Airport & intercity transfers",
    long:
      "Comfortable, air-conditioned transport in Saudi Arabia and Pakistan — airport pick-up & drop, Makkah–Madinah transfers and private cars for ziyarat. Sedans, vans and coaches for groups of any size.",
    points: [
      "Airport transfers (Jeddah, Madinah, Pakistan)",
      "Makkah ↔ Madinah intercity transfers",
      "Private cars, vans & 50-seat coaches",
      "Professional, verified drivers",
    ],
  },
  {
    slug: "tours",
    href: "/tours",
    icon: "🚌",
    image: images.serviceTours,
    title: "Group & Leisure Tours",
    desc: "Ziyarat & holiday packages",
    long:
      "Guided ziyarat tours of the holy sites plus leisure holiday packages to Dubai, Turkey, Malaysia, Thailand and Azerbaijan — for families, friends and corporate groups, fully managed end-to-end.",
    points: [
      "Guided ziyarat in Makkah & Madinah",
      "Dubai, Turkey, Malaysia & Thailand tours",
      "Honeymoon & family holiday packages",
      "Custom corporate group trips",
    ],
    isNew: true,
  },
  {
    slug: "travel-insurance",
    href: "/contact",
    icon: "🛡️",
    image: images.passportHand,
    title: "Travel Insurance",
    desc: "Peace of mind on every trip",
    long:
      "Affordable travel & medical insurance accepted for Schengen, UK and most visa applications. Covers medical emergencies, trip cancellation, lost baggage and delays — for individuals, families and groups.",
    points: [
      "Schengen & visa-accepted coverage",
      "Medical emergency & evacuation",
      "Trip cancellation & lost baggage",
      "Family & group plans",
    ],
    isNew: true,
  },
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
    image: images.pkgUmrah14,
    imageAlt: "Kaaba in Masjid al-Haram, Makkah",
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
    image: images.pkgHajj21,
    imageAlt: "Mina tent city during Hajj",
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
    image: images.pkgUmrah10,
    imageAlt: "Masjid an-Nabawi, Madinah",
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
    image: images.pkgUmrah21,
    imageAlt: "Masjid Quba, Madinah",
    tag: "FAMILY",
    meta: "📍 Makkah · Madinah | ✈️ Saudia",
    features: ["✓ 4★ Hotel", "✓ Meals", "✓ Ziyarat Tour"],
    newPrice: "PKR 3,85,000",
    priceLabel: "Per person",
  },
  {
    id: "umrah-7",
    title: "7-Day Quick Umrah",
    image: images.pkgUmrah7,
    imageAlt: "Jabal al-Noor, Makkah",
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
    image: images.pkgUmrahRamadan,
    imageAlt: "Mina tents near Makkah",
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
    image: images.pkgUmrahVip,
    imageAlt: "Jabal Uhud, Madinah",
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
    image: images.pkgHajjEconomy,
    imageAlt: "Kaaba in Masjid al-Haram",
    tag: "ECONOMY",
    meta: "📍 Standard rooms | ✈️ Saudia",
    features: ["✓ 3★ Hotel", "✓ Shared", "✓ Group"],
    newPrice: "PKR 9,50,000",
    priceLabel: "Starting from",
  },
  {
    id: "hajj-standard",
    title: "Standard Hajj · 25 Day",
    image: images.pkgHajjStandard,
    imageAlt: "Plain of Arafat during Hajj",
    tag: "STANDARD",
    meta: "📍 4★ Hotels | ✈️ PIA",
    features: ["✓ 4★ Hotel", "✓ Meals", "✓ Train Mashair"],
    newPrice: "PKR 11,25,000",
    priceLabel: "Per person",
  },
  {
    id: "hajj-vip",
    title: "Hajj VIP · Aziziah Stay",
    image: images.pkgHajjVip,
    imageAlt: "Masjid an-Nabawi, Madinah",
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
    image: images.pkgHajjShortcut,
    imageAlt: "Jabal Uhud near Madinah",
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
    id: "mux-jed",
    from: "Multan",
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

export const domesticFlightDeals: FlightDeal[] = [
  {
    id: "khi-lhe",
    from: "Karachi",
    to: "LHE",
    city: "Lahore",
    country: "Pakistan",
    airline: "PIA",
    type: "One-way",
    price: "PKR 16,500",
    image: images.airplane,
  },
  {
    id: "isb-khi",
    from: "Islamabad",
    to: "KHI",
    city: "Karachi",
    country: "Pakistan",
    airline: "AirSial",
    type: "One-way",
    price: "PKR 18,000",
    image: images.airplaneWindow,
  },
  {
    id: "lhe-skt",
    from: "Lahore",
    to: "KDU",
    city: "Skardu",
    country: "Pakistan",
    airline: "PIA",
    type: "One-way",
    price: "PKR 22,500",
    image: images.airplane,
  },
  {
    id: "isb-uet",
    from: "Islamabad",
    to: "UET",
    city: "Quetta",
    country: "Pakistan",
    airline: "Fly Jinnah",
    type: "One-way",
    price: "PKR 19,500",
    image: images.airplaneWindow,
  },
];

export const domesticAirlines = ["PIA", "AirSial", "SereneAir", "Fly Jinnah"];

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

/* ----------------------------------------------- Hotels / Transport / Tours */

export type HotelOption = {
  id: string;
  name: string;
  city: string;
  stars: number;
  distance: string;
  startingPrice: string;
  perks: string[];
};

export const hotelOptions: HotelOption[] = [
  {
    id: "makkah-5",
    name: "Haram-View 5★ (Makkah)",
    city: "Makkah",
    stars: 5,
    distance: "0m · Kaaba view",
    startingPrice: "PKR 28,000 / night",
    perks: ["Kaaba-view rooms", "Buffet meals", "Free shuttle"],
  },
  {
    id: "makkah-4",
    name: "Standard 4★ (Makkah)",
    city: "Makkah",
    stars: 4,
    distance: "400m from Haram",
    startingPrice: "PKR 14,000 / night",
    perks: ["Walking distance", "Breakfast included", "Family rooms"],
  },
  {
    id: "madinah-5",
    name: "Markaziya 5★ (Madinah)",
    city: "Madinah",
    stars: 5,
    distance: "Facing Masjid Nabawi",
    startingPrice: "PKR 24,000 / night",
    perks: ["Nabawi view", "Buffet meals", "24/7 concierge"],
  },
  {
    id: "dubai-4",
    name: "Business 4★ (Dubai)",
    city: "Dubai",
    stars: 4,
    distance: "Near Burj Khalifa",
    startingPrice: "PKR 18,000 / night",
    perks: ["City centre", "Metro nearby", "Free WiFi"],
  },
];

export type TransportOption = {
  icon: string;
  title: string;
  desc: string;
  capacity: string;
};

export const transportOptions: TransportOption[] = [
  {
    icon: "🚗",
    title: "Private Sedan",
    desc: "Airport pick-up/drop & city rides for couples and small families.",
    capacity: "1–3 passengers",
  },
  {
    icon: "🚐",
    title: "Family Van (GMC/Hiace)",
    desc: "Comfortable AC vans for families and Makkah–Madinah transfers.",
    capacity: "4–11 passengers",
  },
  {
    icon: "🚌",
    title: "Group Coach",
    desc: "Air-conditioned coaches for large groups, ziyarat tours & intercity travel.",
    capacity: "Up to 50 passengers",
  },
  {
    icon: "🛣️",
    title: "Makkah ↔ Madinah Transfer",
    desc: "Direct intercity transfer with experienced, verified drivers.",
    capacity: "Any group size",
  },
];

export type TourPackage = {
  id: string;
  destination: string;
  flag: string;
  nights: string;
  startingPrice: string;
  highlights: string;
};

export const tourPackages: TourPackage[] = [
  {
    id: "dubai",
    destination: "Dubai",
    flag: "🇦🇪",
    nights: "4 nights / 5 days",
    startingPrice: "PKR 165,000",
    highlights: "Burj Khalifa, desert safari, Dubai Mall, Marina cruise.",
  },
  {
    id: "turkey",
    destination: "Turkey",
    flag: "🇹🇷",
    nights: "6 nights / 7 days",
    startingPrice: "PKR 245,000",
    highlights: "Istanbul, Bursa, Bosphorus cruise, historic mosques.",
  },
  {
    id: "malaysia",
    destination: "Malaysia",
    flag: "🇲🇾",
    nights: "5 nights / 6 days",
    startingPrice: "PKR 210,000",
    highlights: "Kuala Lumpur, Genting Highlands, Petronas Towers.",
  },
  {
    id: "thailand",
    destination: "Thailand",
    flag: "🇹🇭",
    nights: "5 nights / 6 days",
    startingPrice: "PKR 195,000",
    highlights: "Bangkok, Phuket, island hopping & city tours.",
  },
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
    meta: "Multan · Umrah 2025",
    text: "Nusarat Madina made our family Umrah trip completely stress-free. Our hotel was right in front of the Haram, the transport was on time, and the staff were genuinely helpful at every step.",
  },
  {
    initial: "F",
    name: "Fatima Khan",
    meta: "Bahawalpur · Hajj 2025",
    text: "We performed Hajj 2025 with Nusarat Madina. The pricing was very reasonable and everything happened exactly on schedule. I would highly recommend them, especially for first-time pilgrims.",
  },
  {
    initial: "M",
    name: "Muhammad Ali",
    meta: "Lodhran · Business Travel",
    text: "I also booked my international tickets to Dubai and Turkey through them. I got the best rates and they arranged my visa as well. A truly trustworthy agency.",
  },
];

export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: "What is included in an Umrah package?",
    a: "Our standard Umrah packages include your visa, return flight tickets, hotel accommodation in both Makkah and Madinah, transport and a ziyarat tour. Premium packages also include meals.",
  },
  {
    q: "When does Hajj registration open?",
    a: "Hajj registration usually opens once a year, following the official notification from the Ministry of Religious Affairs. Our team notifies you as soon as the schedule is announced.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes. We offer easy installment plans of 3 to 6 months on selected packages. Contact us for the full details.",
  },
  {
    q: "How long does visa processing take?",
    a: "An Umrah visa is typically processed within 5 to 10 working days. Hajj visa timing depends on the Ministry schedule.",
  },
  {
    q: "Is a family discount available?",
    a: "Yes. We offer special family discounts and group rates for 4 or more members, with separate pricing for children.",
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
  photo?: string;
};

export const team: TeamMember[] = [
  { name: "Rao Shafeeq", role: "Owner & CEO", photo: "/images/team-ceo.jpg" },
  { name: "Sana Iqbal", role: "Head of Operations" },
  {
    name: "Bilal Ahmed",
    role: "Umrah Operations Lead",
    photo: "/images/team-founder.jpg",
  },
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
    desc: "Free in-person sessions in Lodhran, Multan & Bahawalpur covering rituals, do's & don'ts.",
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

/* --------------------------------- Hajj season status (one-switch control) */
/*
 * Hajj is annual and booking closes months before departure. Flip ONE value
 * here each cycle:
 *   • "booking-open"      → current `year` is open for booking ("Book Now").
 *   • "closed-next-open"  → current `year` is closed/departed; the page pivots
 *                            to PRE-REGISTRATION for `nextYear`.
 * When Hajj `nextYear` opens for booking: set status to "booking-open" and
 * bump both years (e.g. year: 2027, nextYear: 2028). Nothing else to touch —
 * the Hajj page, banner, CTAs, headings & metadata all adapt automatically.
 */
export type HajjSeasonStatus = "booking-open" | "closed-next-open";

export const hajjSeason = {
  status: "closed-next-open" as HajjSeasonStatus,
  year: 2026, // most recent / current Hajj season
  nextYear: 2027, // season now taking pre-registration
};

export type HajjSeasonContent = {
  seasonYear: number;
  eyebrow: string;
  banner: string | null;
  heroTitle: string;
  heroSubtitle: string;
  packagesHeading: string;
  packagesNote: string;
  datesAnnounced: boolean;
  datesHeading: string;
  datesPendingNote: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaPrimary: string;
  metaTitle: string;
  metaDescription: string;
};

const hajjSeasonContentMap: Record<HajjSeasonStatus, HajjSeasonContent> = {
  "booking-open": {
    seasonYear: hajjSeason.year,
    eyebrow: `HAJJ ${hajjSeason.year}`,
    banner: null,
    heroTitle: "Sacred Hajj Packages, Built for Every Family",
    heroSubtitle:
      "Ministry of Religious Affairs approved · IATA certified · 24/7 on-ground support in KSA.",
    packagesHeading: "All Hajj Packages",
    packagesNote:
      "From economy to VIP — every package includes visa, flights & guidance.",
    datesAnnounced: true,
    datesHeading: `Hajj ${hajjSeason.year} Calendar`,
    datesPendingNote: "",
    ctaTitle: `Ready for Hajj ${hajjSeason.year}?`,
    ctaSubtitle:
      "Limited Ministry quotas — reserve your place with a small deposit and easy installments.",
    ctaPrimary: "Book a Free Consultation",
    metaTitle: `Hajj Packages ${hajjSeason.year} — Lodhran, Multan & Bahawalpur`,
    metaDescription: `Affordable & VIP Hajj ${hajjSeason.year} packages for pilgrims from Lodhran, Multan, Bahawalpur & all Pakistan. Ministry-approved, IATA certified, easy installment plans.`,
  },
  "closed-next-open": {
    seasonYear: hajjSeason.nextYear,
    eyebrow: `HAJJ ${hajjSeason.nextYear} · PRE-REGISTRATION OPEN`,
    banner: `Hajj ${hajjSeason.year} bookings are now closed. Pre-registration for Hajj ${hajjSeason.nextYear} is open — secure your place early with a small refundable deposit before the Ministry quota fills.`,
    heroTitle: `Pre-Register for Hajj ${hajjSeason.nextYear}`,
    heroSubtitle: `Be first in line for Hajj ${hajjSeason.nextYear}. Ministry of Religious Affairs approved · IATA certified · easy installment plans.`,
    packagesHeading: `Hajj ${hajjSeason.nextYear} Packages`,
    packagesNote: `Indicative packages — final Hajj ${hajjSeason.nextYear} pricing is confirmed after the Ministry of Religious Affairs announcement. Pre-register now to lock an early-bird place.`,
    datesAnnounced: false,
    datesHeading: `Hajj ${hajjSeason.nextYear} Calendar`,
    datesPendingNote: `Exact Hajj ${hajjSeason.nextYear} dates are announced after the Ministry of Religious Affairs notification (usually around January ${hajjSeason.nextYear}). Pre-register today and we'll notify you the moment dates and pricing are confirmed.`,
    ctaTitle: `Reserve Your Hajj ${hajjSeason.nextYear} Place`,
    ctaSubtitle: `Ministry quota is limited and fills early. Pre-register today with a small refundable deposit — we'll confirm your booking as soon as Hajj ${hajjSeason.nextYear} opens.`,
    ctaPrimary: `Pre-Register for Hajj ${hajjSeason.nextYear}`,
    metaTitle: `Hajj ${hajjSeason.nextYear} Pre-Registration — Lodhran, Multan & Bahawalpur`,
    metaDescription: `Hajj ${hajjSeason.year} is closed — pre-register now for Hajj ${hajjSeason.nextYear} from Lodhran, Multan, Bahawalpur & all Pakistan. Ministry-approved, IATA certified, easy installment plans.`,
  },
};

export const hajjStatus: HajjSeasonContent =
  hajjSeasonContentMap[hajjSeason.status];

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

export type ZiyaratPlace = {
  city: "Makkah" | "Madinah";
  name: string;
  desc: string;
  image: string;
};

// Photographed highlights shown as image cards (only sites we have real photos of).
export const ziyaratGallery: ZiyaratPlace[] = [
  {
    city: "Makkah",
    name: "Ghar-e-Hira (Jabal al-Noor)",
    desc: "The mountain cave where the first revelation of the Qur'an was received.",
    image: images.jabalNoor,
  },
  {
    city: "Makkah",
    name: "Maidan-e-Arafat",
    desc: "The standing place at Jabal al-Rahmah on the Day of Arafah.",
    image: images.arafat,
  },
  {
    city: "Makkah",
    name: "Mina",
    desc: "The valley of white tents where pilgrims stay during Hajj.",
    image: images.mina,
  },
  {
    city: "Madinah",
    name: "Masjid Quba",
    desc: "The first mosque ever built in Islam.",
    image: images.masjidQuba,
  },
  {
    city: "Madinah",
    name: "Jabal Uhud",
    desc: "Site of the historic Battle of Uhud and the martyrs of Uhud.",
    image: images.jabalUhud,
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
    title: "Founded in Lodhran",
    desc: "Rao Shafeeq opens a small Umrah office in the heart of Lodhran city.",
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
    title: "Multan & Bahawalpur Offices",
    desc: "Expanded across South Punjab with full-service branches in Multan & Bahawalpur.",
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
    phone: "+92 308 2699997",
    email: "nusratemadina@gmail.com",
    icon: "🕋",
  },
  {
    name: "Flights & Tickets",
    desc: "International & domestic airfare, rebookings.",
    phone: "+92 308 2699997",
    email: "nusratemadina@gmail.com",
    icon: "✈️",
  },
  {
    name: "Visa Department",
    desc: "Document checks, application status, appointments.",
    phone: "+92 308 2699997",
    email: "nusratemadina@gmail.com",
    icon: "📄",
  },
  {
    name: "Customer Support",
    desc: "Existing bookings, complaints, billing queries.",
    phone: "+92 308 2699997",
    email: "nusratemadina@gmail.com",
    icon: "🛟",
  },
];

/* ----------------------------------------- City landing pages (local SEO) */

type ServiceCity = { city: string; nearby: string[]; airport: string };

const serviceCities: ServiceCity[] = [
  {
    city: "Lodhran",
    nearby: ["Kahror Pakka", "Dunyapur", "Jalla Arain", "Adda Bakhri"],
    airport: "Multan International (MUX) — about 1 hour away",
  },
  {
    city: "Multan",
    nearby: ["Khanewal", "Shujabad", "Jalalpur Pirwala", "Vehari"],
    airport: "Multan International Airport (MUX)",
  },
  {
    city: "Bahawalpur",
    nearby: ["Ahmedpur East", "Hasilpur", "Yazman", "Khairpur Tamewali"],
    airport: "Bahawalpur Airport (BHV) or Multan (MUX)",
  },
];

const landingServices = [
  { key: "umrah" as const, label: "Umrah", href: "/umrah" },
  { key: "hajj" as const, label: "Hajj", href: "/hajj" },
];

export type CityLanding = {
  slug: string;
  serviceKey: "umrah" | "hajj";
  serviceLabel: string;
  serviceHref: string;
  city: string;
  nearby: string[];
  airport: string;
};

export const cityLandings: CityLanding[] = serviceCities.flatMap((c) =>
  landingServices.map((s) => ({
    slug: `${s.key}-${c.city.toLowerCase()}`,
    serviceKey: s.key,
    serviceLabel: s.label,
    serviceHref: s.href,
    city: c.city,
    nearby: c.nearby,
    airport: c.airport,
  }))
);

/* ----------------------------------------------------- News & Blog */

export type BlogPost = {
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Hajj 2026: A Complete Step-by-Step Guide for Pakistani Pilgrims",
    category: "Hajj",
    date: "April 17, 2026",
    image: images.arafat,
    excerpt:
      "From registration and documents to departure — everything you need to know to prepare for Hajj 2026.",
  },
  {
    title: "Top 10 Tips for a Smooth & Affordable Umrah Trip",
    category: "Umrah",
    date: "April 10, 2026",
    image: images.masjidQuba,
    excerpt:
      "Save money and travel stress-free with these expert tips on visa, hotels, transport and best timing.",
  },
  {
    title: "Saudi Visa Rules 2026: What Has Changed for Travellers",
    category: "Visa",
    date: "March 28, 2026",
    image: images.passport,
    excerpt:
      "A quick breakdown of the latest Saudi visa requirements and how to avoid common rejection reasons.",
  },
];
