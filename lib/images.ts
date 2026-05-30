// Centralized image URLs. Swap any value here to change site visuals.
// All Unsplash CDN URLs below are verified to show the described content.

const u = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

// Verified photo IDs:
//   1513072064285-240f87fa81e8 → Kaaba at night with worshippers
//   1710695198971-3abdf7fcc82e → Kaaba (black cube) against blue sky
//   1667456416191-43ba057635c1 → Masjid an-Nabawi, Madinah (green dome)
//   1436491865332-7a61a109cc05 → Aerial of airliner
//   1543797414-a0c3ad076f7c   → Airplane window view
//   1553697388-94e804e2f0f6   → Person holding passports
//   1454496406107-dc34337da8d6 → Passport on white paper
//   1572021335469-31706a17aaef → Coworkers smiling around laptop
//   1618773928121-c32242e63f39 → Hotel bed with throw pillows
//   1509749837427-ac94a2553d0e → Passengers riding a bus
//   1512453979798-5ea266f8880c → Dubai skyline (aerial)

export const images = {
  // Hero / Home
  heroKaaba: u("1513072064285-240f87fa81e8", 1400, 85),

  // Page banners
  hajjBanner: u("1667456416191-43ba057635c1", 1800, 80),
  umrahBanner: u("1513072064285-240f87fa81e8", 1800, 80),
  flightsBanner: u("1436491865332-7a61a109cc05", 1800, 80),
  visaBanner: u("1454496406107-dc34337da8d6", 1800, 80),
  aboutBanner: u("1710695198971-3abdf7fcc82e", 1800, 80),
  contactBanner: u("1572021335469-31706a17aaef", 1800, 80),

  // About section visual
  aboutMosque: u("1667456416191-43ba057635c1", 1200, 80),

  // Package cover images
  packageUmrah14: u("1513072064285-240f87fa81e8", 900, 80),
  packageHajj21: u("1667456416191-43ba057635c1", 900, 80),
  packageUmrah10: u("1710695198971-3abdf7fcc82e", 900, 80),

  // Flights / Visa supporting visuals
  airplane: u("1436491865332-7a61a109cc05", 900, 80),
  airplaneWindow: u("1543797414-a0c3ad076f7c", 900, 80),
  passportHand: u("1553697388-94e804e2f0f6", 900, 80),
  passport: u("1454496406107-dc34337da8d6", 900, 80),

  // About / Team
  team: u("1572021335469-31706a17aaef", 1200, 80),

  // Service card visuals
  serviceHotel: u("1618773928121-c32242e63f39", 900, 80),
  serviceTransport: u("1509749837427-ac94a2553d0e", 900, 80),
  serviceTours: u("1512453979798-5ea266f8880c", 900, 80),
};

// Friendly avatar generator (no external photos required).
export const avatar = (
  name: string,
  opts?: { bg?: string; fg?: string; size?: number }
) => {
  const params = new URLSearchParams({
    name,
    background: opts?.bg ?? "14a85a",
    color: opts?.fg ?? "ffffff",
    size: String(opts?.size ?? 128),
    bold: "true",
    rounded: "true",
  });
  return `https://ui-avatars.com/api/?${params.toString()}`;
};
