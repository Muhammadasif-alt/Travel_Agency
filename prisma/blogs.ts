/**
 * Adds / updates the blog posts (full article content) by slug.
 * Idempotent — safe to re-run. Does NOT touch other content.
 *
 * Run against a database:
 *   $env:DATABASE_URL="<url>"; npx tsx prisma/blogs.ts
 */
import { PrismaClient } from "@prisma/client";
import { images } from "../lib/images";

const prisma = new PrismaClient();

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 80);

type Post = {
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
};

const posts: Post[] = [
  {
    title: "Hajj 2026: A Complete Step-by-Step Guide for Pakistani Pilgrims",
    category: "Hajj",
    date: "April 17, 2026",
    image: images.arafat,
    excerpt:
      "From registration and documents to departure day — everything a Pakistani pilgrim needs to prepare for Hajj 2026 with confidence.",
    content: `Hajj is the journey of a lifetime, and good preparation makes the difference between a stressful trip and a peaceful, focused pilgrimage. This guide walks Pakistani pilgrims through every stage of Hajj 2026, from your first inquiry to the day you return home.

Step 1 — Choose your scheme and operator. In Pakistan you can perform Hajj through the Government Scheme or through a Ministry-approved private operator like Nusarat Madina. Private packages give you a choice of hotel category (Economy, Standard or VIP), tent location in Mina, and the level of on-ground support. Pick the package that matches your budget and your physical comfort needs.

Step 2 — Get your documents ready early. You will need a machine-readable passport valid for at least six months beyond your travel date, recent passport-size photographs with a white background, your CNIC, and a completed Hajj application. We handle the Ministry of Religious Affairs registration and paperwork for you, but having your documents ready early avoids last-minute problems.

Step 3 — Complete your vaccinations. Meningitis (ACWY) vaccination is mandatory for a Hajj visa, and seasonal flu and other shots are strongly recommended, especially for elderly pilgrims. We arrange these through partner clinics and add the certificates to your file.

Step 4 — Attend a pre-departure workshop. Understanding the rituals before you go reduces anxiety enormously. We run free in-person sessions in Lodhran, Multan and Bahawalpur covering ihram, tawaf, sa'i, the days of Mina and Arafat, and common mistakes to avoid.

Step 5 — Pack smart. Carry your ihram, a light prayer mat, comfortable walking sandals, unscented toiletries, any regular medication with a doctor's note, and a small bag for your documents and smart-card. Avoid over-packing — you will be walking a lot.

Step 6 — On the ground. From your arrival in Jeddah or Madinah, an Urdu-speaking mualim stays with your group throughout. Keep your group leader's number saved, stay hydrated, and never hesitate to ask for help. Our 24/7 KSA hotline is there for any emergency.

May Allah accept your Hajj. If you are planning for the next season, pre-register early — Ministry quota is limited and fills quickly.`,
  },
  {
    title: "Top 10 Tips for a Smooth & Affordable Umrah Trip",
    category: "Umrah",
    date: "April 10, 2026",
    image: images.masjidQuba,
    excerpt:
      "Save money and travel stress-free with these expert tips on visa, hotels, transport and choosing the best time to go.",
    content: `Umrah can be performed any time of the year, which gives you a lot of room to plan a trip that is both spiritually rewarding and easy on your pocket. Here are ten practical tips from our travel experts.

1. Travel in the off-season. Fares and hotel rates are lowest from September to October and just after Ramadan. If your dates are flexible, you can save a significant amount.

2. Book early. Umrah visas, flights and hotels all get more expensive as Ramadan and school holidays approach. Booking six to eight weeks ahead almost always gets you a better price.

3. Choose your hotel by walking distance, not just stars. A clean 3-star hotel a short walk from the Haram is often better value than a distant 5-star that needs a shuttle.

4. Go as a group. Family and group packages share transport and guide costs, bringing the per-person price down. Children often travel at reduced fares.

5. Ask exactly what is included. A good operator quotes visa, return flights, hotels in both Makkah and Madinah, transport and ziyarat upfront — with no hidden charges. Get it in writing.

6. Pack light and smart. Two sets of ihram, comfortable sandals, unscented toiletries, a refillable water bottle and any personal medicine will cover most needs.

7. Keep your documents safe. Carry digital and printed copies of your passport, visa and hotel vouchers, and keep the originals in your hotel safe.

8. Stay hydrated and rest. Spread your worship across the day, drink Zamzam often, and rest between prayers so you can perform your rituals with energy and focus.

9. Plan your ziyarat. In Makkah and Madinah there are many blessed sites to visit. A guided ziyarat with an Urdu-speaking scholar helps you understand the history and significance of each place.

10. Travel with a trusted operator. The right partner handles the paperwork, gives honest pricing, and is reachable 24/7 if anything goes wrong — so your only focus is your worship.`,
  },
  {
    title: "Saudi Visa Rules 2026: What Has Changed for Travellers",
    category: "Visa",
    date: "March 28, 2026",
    image: images.passport,
    excerpt:
      "A quick breakdown of the latest Saudi visa requirements and how to avoid the most common reasons for rejection.",
    content: `Saudi Arabia continues to make travel easier for pilgrims and tourists, but the rules do change from year to year. Here is a clear summary of what Pakistani travellers should know in 2026.

Umrah visas remain straightforward. For most pilgrims an Umrah visa is processed within five to ten working days, provided your documents are complete. You will need a passport valid for at least six months, recent white-background photographs, and confirmed travel and accommodation details.

Tourist visas and Umrah. In recent years, holders of certain tourist visas have also been allowed to perform Umrah, giving travellers more flexibility. Always confirm the current rule for your specific visa type before you rely on it.

The most common reasons for rejection are avoidable. Incomplete documents, photographs in the wrong size or format, an unsigned application, or a passport with too little validity are the usual culprits. A quick document pre-check before submission prevents most refusals.

Financial and travel proof. For visit and tourist categories, be ready to show a recent bank statement, confirmed return flights and hotel bookings, and an itinerary that matches your stated reason for travel. Mismatched dates are a frequent red flag.

Processing times vary. Umrah visas are usually quick; visit and business categories can take longer, and Hajj visa timing follows the Ministry schedule. Apply early so timing is never a problem.

Our visa team reviews every file before submission, books appointments where required, and guides you through each step — which is how we maintain a very high approval rate. If you are unsure about your eligibility, talk to us before you book your flights.`,
  },
  {
    title: "What to Pack for Hajj & Umrah: The Complete Checklist",
    category: "Umrah",
    date: "May 22, 2026",
    image: images.mina,
    excerpt:
      "A practical, no-nonsense packing checklist for pilgrims — what to bring, what to leave behind, and the small items most people forget.",
    content: `Packing well for Hajj or Umrah means carrying everything you genuinely need without dragging a heavy bag through crowded streets. Use this checklist as your starting point and adjust for the season.

Ihram and clothing. Men should carry two sets of ihram and a belt with a pouch; women should pack simple, modest, loose clothing in breathable fabric. Add a light jacket for cool Madinah evenings and comfortable, easy-to-remove sandals — you will walk a great deal.

Documents. Keep your passport, visa, flight and hotel vouchers, vaccination certificate and a few passport photos together in one waterproof folder. Carry both printed and phone copies, and store the originals in your hotel safe.

Health and medicine. Bring any regular medication in its original packaging with a doctor's note, plus a small kit with painkillers, plasters, anti-blister cream, rehydration salts and any personal essentials. Elderly pilgrims should pack a few extra days' supply.

Toiletries — unscented. While in ihram, perfumed products are not allowed, so pack unscented soap, shampoo and toothpaste. A small towel, nail clippers (for after ihram), and wet wipes are very useful.

Practical extras people forget. A refillable water bottle, a power bank and charger, a small umbrella for sun and rain, a draw-string bag for your shoes at the Haram, and a money belt. A pocket dua book or app keeps your supplications close.

Leave behind. Avoid valuables and excess cash, heavy clothing, and anything you can easily buy there. Travel light — your back will thank you during tawaf and the days of Mina.

Pack a few days before departure, weigh your bag against your airline's allowance, and label it clearly. A calm, well-packed pilgrim has more energy for worship.`,
  },
  {
    title: "Umrah Visa Requirements 2026 for Pakistani Passport Holders",
    category: "Visa",
    date: "May 15, 2026",
    image: images.passportHand,
    excerpt:
      "Exactly which documents you need for a 2026 Umrah visa from Pakistan, processing time, and how to avoid delays.",
    content: `If you hold a Pakistani passport and are planning Umrah in 2026, the visa process is simpler than many people expect — as long as your paperwork is in order. Here is what you need.

Your passport. It must be machine-readable and valid for at least six months beyond your date of travel, with at least two blank pages. If your passport is close to expiry, renew it before applying.

Photographs. Two recent colour photographs with a plain white background, in the correct size. Photos that are too old, blurry, or with a coloured background are a common cause of delay.

Travel and stay details. Confirmed return flight tickets and hotel bookings for your stay in Makkah and Madinah. When you book an all-inclusive package, your operator arranges these and submits them with your application.

Vaccination. A valid meningitis (ACWY) vaccination certificate is required, and other seasonal vaccinations may be recommended. Keep the certificate with your travel documents.

Processing time. A complete Umrah visa file is typically processed within five to ten working days. During peak periods such as the run-up to Ramadan, apply earlier to be safe.

How to avoid delays. The biggest causes of delay are incomplete files and small mistakes — wrong photo size, an unsigned form, or mismatched dates between flights and hotels. We pre-check every document before submission so these issues are caught early.

Women and children. Rules for women travelling and for accompanying children change from time to time; we confirm the current requirements for your group before you book, so there are no surprises. If you are unsure about any requirement, contact our visa team for a quick, free review.`,
  },
  {
    title: "Best Time for Umrah: Ramadan vs Winter vs Off-Season",
    category: "Umrah",
    date: "June 2, 2026",
    image: images.heroKaaba,
    excerpt:
      "Reward, weather, crowds and cost — a clear comparison to help you choose the best time for your Umrah trip.",
    content: `One of the first questions every pilgrim asks is: when is the best time to go for Umrah? The honest answer is that it depends on what matters most to you — reward, weather, crowds, or cost. Here is how the main seasons compare.

Ramadan — the highest reward. Performing Umrah in Ramadan carries immense reward, and the atmosphere in the Haram is unforgettable. The trade-off is that it is the busiest and most expensive time of year, and the crowds are very large. Book months in advance and be prepared for a physically demanding trip.

Winter (November to January) — the best weather. Pleasant temperatures of roughly 15 to 25 degrees make this the most comfortable season, especially for elderly pilgrims and families with children. Prices are moderate and the experience is relaxed.

School holidays (June to August) — convenient for families. Summer is hot, but the Haram is air-conditioned and this period fits around children's holidays. If you travel in summer, plan worship for early morning and evening, and stay well hydrated.

Off-season (September to October) — the best value. This is when fares and hotel rates are lowest and the crowds are thinnest. For couples and solo travellers who want a calm, affordable trip, it is hard to beat.

So which should you choose? If reward is everything and budget is no object, Ramadan. If comfort matters most, winter. If you are travelling with family on a school break, summer works. And if you want the best price and a peaceful experience, go in the off-season.

Whatever you choose, book early, travel with a trusted operator, and keep your itinerary realistic so you can worship with energy and focus.`,
  },
];

async function main() {
  console.log("Upserting blog posts...");
  for (const [i, p] of posts.entries()) {
    const slug = slugify(p.title);
    await prisma.blogPost.upsert({
      where: { slug },
      update: { ...p, slug, sortOrder: i, published: true },
      create: { ...p, slug, sortOrder: i, published: true },
    });
    console.log(`  ✓ ${slug}`);
  }
  console.log("Done.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
