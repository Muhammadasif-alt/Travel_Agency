/**
 * Seeds the database from the current hardcoded content in lib/site-data.ts,
 * so nothing is lost when we switch the site over to the database.
 * Also creates the initial ADMIN user.
 *
 * Run:  npm run db:seed   (safe to re-run — it clears & re-inserts content)
 */
import { PrismaClient, PackageType, FlightScope, Role } from "@prisma/client";
import bcrypt from "bcryptjs";
import {
  siteConfig,
  services,
  umrahPackages,
  hajjPackages,
  packages as homePackages,
  blogPosts,
  testimonials,
  team,
  flightDeals,
  domesticFlightDeals,
  visaCountries,
  hotelOptions,
  tourPackages,
  faqs,
  hajjSeason,
} from "../lib/site-data";

const prisma = new PrismaClient();

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);

async function main() {
  console.log("Seeding database...");

  // ---- Admin user (change the password after first login) ----
  const adminEmail = "admin@nusaratmadina.com";
  const adminPassword = "Admin@123";
  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: "Rao Shafeeq",
      passwordHash: await bcrypt.hash(adminPassword, 10),
      role: Role.ADMIN,
    },
  });
  console.log(`  ✓ admin user: ${adminEmail} / ${adminPassword}`);

  // ---- Site settings (singleton) ----
  await prisma.siteSetting.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      phone: siteConfig.phone,
      whatsapp: siteConfig.whatsapp,
      email: siteConfig.email,
      address: siteConfig.address,
      hajjStatus: hajjSeason.status,
      hajjYear: hajjSeason.year,
      hajjNextYear: hajjSeason.nextYear,
    },
  });

  // ---- Packages (Umrah + Hajj) ----
  await prisma.package.deleteMany();
  const homeIds = new Set(homePackages.map((p) => p.id));
  const umrah = umrahPackages.map((p, i) => ({ p, type: PackageType.UMRAH, i }));
  const hajj = hajjPackages.map((p, i) => ({ p, type: PackageType.HAJJ, i }));
  // de-dupe by id (umrah/hajj arrays re-use the home featured ones)
  const seen = new Set<string>();
  for (const { p, type, i } of [...umrah, ...hajj]) {
    if (seen.has(p.id)) continue;
    seen.add(p.id);
    await prisma.package.create({
      data: {
        type,
        title: p.title,
        image: p.image,
        imageAlt: p.imageAlt ?? "",
        tag: p.tag ?? "",
        tagVariant: p.tagVariant ?? "default",
        discount: p.discount ?? null,
        meta: p.meta ?? "",
        features: p.features ?? [],
        oldPrice: p.oldPrice ?? null,
        newPrice: p.newPrice,
        priceLabel: p.priceLabel ?? null,
        featured: p.featured ?? false,
        showOnHome: homeIds.has(p.id),
        sortOrder: i,
      },
    });
  }

  // ---- Services ----
  await prisma.service.deleteMany();
  for (const [i, s] of services.entries()) {
    await prisma.service.create({
      data: {
        slug: s.slug,
        href: s.href,
        icon: s.icon,
        image: s.image,
        title: s.title,
        desc: s.desc ?? "",
        long: s.long,
        points: s.points ?? [],
        startingPrice: s.startingPrice ?? null,
        isNew: s.isNew ?? false,
        sortOrder: i,
      },
    });
  }

  // ---- Blog posts ----
  await prisma.blogPost.deleteMany();
  for (const [i, b] of blogPosts.entries()) {
    await prisma.blogPost.create({
      data: {
        slug: slugify(b.title),
        title: b.title,
        category: b.category,
        date: b.date,
        image: b.image,
        excerpt: b.excerpt,
        sortOrder: i,
      },
    });
  }

  // ---- Testimonials ----
  await prisma.testimonial.deleteMany();
  for (const [i, t] of testimonials.entries()) {
    await prisma.testimonial.create({
      data: { name: t.name, meta: t.meta, text: t.text, rating: 5, sortOrder: i },
    });
  }

  // ---- Team ----
  await prisma.teamMember.deleteMany();
  for (const [i, m] of team.entries()) {
    await prisma.teamMember.create({
      data: { name: m.name, role: m.role, photo: m.photo ?? null, sortOrder: i },
    });
  }

  // ---- Flights ----
  await prisma.flightDeal.deleteMany();
  const flights = [
    ...flightDeals.map((f) => ({ f, scope: FlightScope.INTERNATIONAL })),
    ...domesticFlightDeals.map((f) => ({ f, scope: FlightScope.DOMESTIC })),
  ];
  for (const [i, { f, scope }] of flights.entries()) {
    await prisma.flightDeal.create({
      data: {
        scope,
        fromCity: f.from,
        toCode: f.to,
        city: f.city,
        country: f.country,
        airline: f.airline,
        tripType: f.type,
        price: f.price,
        image: f.image,
        sortOrder: i,
      },
    });
  }

  // ---- Visa ----
  await prisma.visaCountry.deleteMany();
  for (const [i, v] of visaCountries.entries()) {
    await prisma.visaCountry.create({
      data: {
        country: v.country,
        flag: v.flag,
        visaType: v.type,
        processingTime: v.processingTime,
        startingPrice: v.startingPrice,
        sortOrder: i,
      },
    });
  }

  // ---- Hotels ----
  await prisma.hotelOption.deleteMany();
  for (const [i, h] of hotelOptions.entries()) {
    await prisma.hotelOption.create({
      data: {
        name: h.name,
        city: h.city,
        stars: h.stars,
        distance: h.distance,
        startingPrice: h.startingPrice,
        perks: h.perks ?? [],
        sortOrder: i,
      },
    });
  }

  // ---- Tours ----
  await prisma.tourPackage.deleteMany();
  for (const [i, t] of tourPackages.entries()) {
    await prisma.tourPackage.create({
      data: {
        destination: t.destination,
        flag: t.flag,
        nights: t.nights,
        startingPrice: t.startingPrice,
        highlights: t.highlights,
        sortOrder: i,
      },
    });
  }

  // ---- FAQ ----
  await prisma.faq.deleteMany();
  for (const [i, f] of faqs.entries()) {
    await prisma.faq.create({
      data: { question: f.q, answer: f.a, sortOrder: i },
    });
  }

  console.log("Seeding complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
