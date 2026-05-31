// Local image paths. Files live in /public/images.
// Swap any file in /public/images (keep the same name) to change site visuals.

export const images = {
  // Hero / Home
  heroKaaba: "/images/masjid-haram.jpg",
  heroMadinah: "/images/masjid-nabawi.jpg",
  heroHira: "/images/jabal-noor.jpg",
  heroArafat: "/images/arafat.jpg",

  // Page banners
  hajjBanner: "/images/arafat.jpg",
  umrahBanner: "/images/masjid-haram.jpg",
  flightsBanner: "/images/airplane.jpg",
  visaBanner: "/images/passport.jpg",
  aboutBanner: "/images/masjid-nabawi.jpg",
  contactBanner: "/images/team.jpg",

  // About section visual
  aboutMosque: "/images/masjid-nabawi.jpg",

  // Package cover images
  packageUmrah14: "/images/masjid-haram.jpg",
  packageHajj21: "/images/masjid-haram.jpg",
  packageUmrah10: "/images/masjid-quba.jpg",

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

  // Ziyarat sites (Saudi Arabia)
  masjidHaram: "/images/masjid-haram.jpg",
  jabalNoor: "/images/jabal-noor.jpg",
  masjidQuba: "/images/masjid-quba.jpg",
  jabalUhud: "/images/jabal-uhud.jpg",
  arafat: "/images/arafat.jpg",
  mina: "/images/mina.jpg",
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
