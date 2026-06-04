import "server-only";
import { prisma } from "./prisma";
import type { Package } from "./site-data";

/* Maps a DB Package row to the shape the frontend components expect. */
type DbPackage = Awaited<ReturnType<typeof prisma.package.findFirst>>;

function mapPackage(p: NonNullable<DbPackage>): Package {
  return {
    id: p.id,
    title: p.title,
    image: p.image,
    imageAlt: p.imageAlt,
    tag: p.tag,
    tagVariant: (p.tagVariant as "default" | "popular") ?? "default",
    discount: p.discount ?? undefined,
    meta: p.meta,
    features: Array.isArray(p.features) ? (p.features as string[]) : [],
    oldPrice: p.oldPrice ?? undefined,
    newPrice: p.newPrice,
    priceLabel: p.priceLabel ?? undefined,
    featured: p.featured,
  };
}

export async function getHomePackages(): Promise<Package[]> {
  const rows = await prisma.package.findMany({
    where: { isActive: true, showOnHome: true },
    orderBy: { sortOrder: "asc" },
  });
  return rows.map(mapPackage);
}

export async function getPackagesByType(
  type: "UMRAH" | "HAJJ"
): Promise<Package[]> {
  const rows = await prisma.package.findMany({
    where: { isActive: true, type },
    orderBy: { sortOrder: "asc" },
  });
  return rows.map(mapPackage);
}

/* ----------------------------------------------------------------- Blog */
export async function getBlogPosts(limit?: number) {
  return prisma.blogPost.findMany({
    where: { published: true },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    ...(limit ? { take: limit } : {}),
  });
}

export async function getBlogPost(slug: string) {
  return prisma.blogPost.findFirst({ where: { slug, published: true } });
}

/* ----------------------------------------------------------------- Testimonials */
export async function getTestimonials() {
  return prisma.testimonial.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
}

/* ----------------------------------------------------------------- Team */
export async function getTeam() {
  return prisma.teamMember.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
}

/* ----------------------------------------------------------------- Services */
export async function getServices() {
  return prisma.service.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
}

/* ----------------------------------------------------------------- Flights */
export async function getFlightDeals(scope: "INTERNATIONAL" | "DOMESTIC") {
  const rows = await prisma.flightDeal.findMany({
    where: { isActive: true, scope },
    orderBy: { sortOrder: "asc" },
  });
  return rows.map((f) => ({
    id: f.id,
    from: f.fromCity,
    to: f.toCode,
    city: f.city,
    country: f.country,
    airline: f.airline,
    type: f.tripType,
    price: f.price,
    image: f.image,
  }));
}

/* ----------------------------------------------------------------- Visa */
export async function getVisaCountries() {
  const rows = await prisma.visaCountry.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
  return rows.map((v) => ({
    id: v.id,
    country: v.country,
    flag: v.flag,
    type: v.visaType,
    processingTime: v.processingTime,
    startingPrice: v.startingPrice,
  }));
}

/* ----------------------------------------------------------------- Hotels */
export async function getHotels() {
  const rows = await prisma.hotelOption.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
  return rows.map((h) => ({
    id: h.id,
    name: h.name,
    city: h.city,
    stars: h.stars,
    distance: h.distance,
    startingPrice: h.startingPrice,
    perks: Array.isArray(h.perks) ? (h.perks as string[]) : [],
  }));
}

/* ----------------------------------------------------------------- Tours */
export async function getTours() {
  return prisma.tourPackage.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
}

/* ----------------------------------------------------------------- FAQ */
export async function getFaqs() {
  return prisma.faq.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
}

/* ----------------------------------------------------------------- Site settings */
export async function getSettings() {
  const s = await prisma.siteSetting.findUnique({ where: { id: "default" } });
  return (
    s ??
    (await prisma.siteSetting.create({ data: { id: "default" } }))
  );
}

/** Derived Hajj-season display content, driven by the SiteSetting row. */
export async function getHajjStatus() {
  const s = await getSettings();
  const isClosed = s.hajjStatus === "closed-next-open";
  const y = s.hajjYear;
  const n = s.hajjNextYear;
  if (isClosed) {
    return {
      seasonYear: n,
      eyebrow: `HAJJ ${n} · PRE-REGISTRATION OPEN`,
      banner: `Hajj ${y} bookings are now closed. Pre-registration for Hajj ${n} is open — secure your place early with a small refundable deposit before the Ministry quota fills.`,
      heroTitle: `Pre-Register for Hajj ${n}`,
      heroSubtitle: `Be first in line for Hajj ${n}. Ministry of Religious Affairs approved · IATA certified · easy installment plans.`,
      packagesHeading: `Hajj ${n} Packages`,
      packagesNote: `Indicative packages — final Hajj ${n} pricing is confirmed after the Ministry of Religious Affairs announcement. Pre-register now to lock an early-bird place.`,
      datesAnnounced: false,
      datesHeading: `Hajj ${n} Calendar`,
      datesPendingNote: `Exact Hajj ${n} dates are announced after the Ministry of Religious Affairs notification (usually around January ${n}). Pre-register today and we'll notify you the moment dates and pricing are confirmed.`,
      ctaTitle: `Reserve Your Hajj ${n} Place`,
      ctaSubtitle: `Ministry quota is limited and fills early. Pre-register today with a small refundable deposit — we'll confirm your booking as soon as Hajj ${n} opens.`,
      ctaPrimary: `Pre-Register for Hajj ${n}`,
      metaTitle: `Hajj ${n} Pre-Registration — Lodhran, Multan & Bahawalpur`,
      metaDescription: `Hajj ${y} is closed — pre-register now for Hajj ${n} from Lodhran, Multan, Bahawalpur & all Pakistan. Ministry-approved, IATA certified, easy installment plans.`,
    };
  }
  return {
    seasonYear: y,
    eyebrow: `HAJJ ${y}`,
    banner: null as string | null,
    heroTitle: "Sacred Hajj Packages, Built for Every Family",
    heroSubtitle:
      "Ministry of Religious Affairs approved · IATA certified · 24/7 on-ground support in KSA.",
    packagesHeading: "All Hajj Packages",
    packagesNote:
      "From economy to VIP — every package includes visa, flights & guidance.",
    datesAnnounced: true,
    datesHeading: `Hajj ${y} Calendar`,
    datesPendingNote: "",
    ctaTitle: `Ready for Hajj ${y}?`,
    ctaSubtitle:
      "Limited Ministry quotas — reserve your place with a small deposit and easy installments.",
    ctaPrimary: "Book a Free Consultation",
    metaTitle: `Hajj Packages ${y} — Lodhran, Multan & Bahawalpur`,
    metaDescription: `Affordable & VIP Hajj ${y} packages for pilgrims from Lodhran, Multan, Bahawalpur & all Pakistan. Ministry-approved, IATA certified, easy installment plans.`,
  };
}
