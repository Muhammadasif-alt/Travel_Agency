// Local image paths. Files live in /public/images.
// Swap any file in /public/images (keep the same name) to change site visuals.

export const images = {
  // Hero / Home
  heroKaaba: "/images/kaaba-night.jpg",
  heroMadinah: "/images/masjid-nabawi.jpg",
  heroKaabaDay: "/images/kaaba-day.jpg",

  // Page banners
  hajjBanner: "/images/masjid-nabawi.jpg",
  umrahBanner: "/images/kaaba-night.jpg",
  flightsBanner: "/images/airplane.jpg",
  visaBanner: "/images/passport.jpg",
  aboutBanner: "/images/kaaba-day.jpg",
  contactBanner: "/images/team.jpg",

  // About section visual
  aboutMosque: "/images/masjid-nabawi.jpg",

  // Package cover images
  packageUmrah14: "/images/kaaba-night.jpg",
  packageHajj21: "/images/masjid-nabawi.jpg",
  packageUmrah10: "/images/kaaba-day.jpg",

  // Flights / Visa supporting visuals
  airplane: "/images/airplane.jpg",
  airplaneWindow: "/images/airplane-window.jpg",
  passportHand: "/images/passport-hand.jpg",
  passport: "/images/passport.jpg",

  // About / Team
  team: "/images/team.jpg",

  // Service card visuals
  serviceHotel: "/images/hotel.jpg",
  serviceTransport: "/images/bus.jpg",
  serviceTours: "/images/dubai.jpg",
};

// Friendly avatar generator for team members (initials, no external photo needed).
export const avatar = (
  name: string,
  opts?: { bg?: string; fg?: string; size?: number }
) => {
  const params = new URLSearchParams({
    name,
    background: opts?.bg ?? "171717",
    color: opts?.fg ?? "ffffff",
    size: String(opts?.size ?? 128),
    bold: "true",
    rounded: "true",
  });
  return `https://ui-avatars.com/api/?${params.toString()}`;
};
