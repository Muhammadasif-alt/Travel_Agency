// Local image paths. Files live in /public/images.
// Each on-page grid uses a DISTINCT file (no duplicate images per page).

export const images = {
  // Hero slideshow
  heroKaaba: "/images/masjid-haram.jpg",
  heroMadinah: "/images/masjid-nabawi.jpg",
  heroHira: "/images/jabal-noor.jpg",
  heroArafat: "/images/arafat.jpg",

  // Page banners
  hajjBanner: "/images/masjid-haram-2.jpg",
  umrahBanner: "/images/masjid-haram-3.jpg",
  flightsBanner: "/images/airplane.jpg",
  visaBanner: "/images/passport.jpg",
  aboutBanner: "/images/masjid-nabawi-3.jpg",
  contactBanner: "/images/team.jpg",

  // About section visual
  aboutMosque: "/images/masjid-nabawi.jpg",

  // Home "Services" cards
  serviceHajj: "/images/arafat-2.jpg",
  serviceUmrah: "/images/masjid-quba-2.jpg",
  airplane: "/images/airplane.jpg",
  airplaneWindow: "/images/airplane-window.jpg",
  passport: "/images/passport.jpg",
  passportHand: "/images/passport-hand.jpg",
  serviceHotel: "/images/hotel.jpg",
  serviceTransport: "/images/bus.jpg",
  serviceTours: "/images/dubai.jpg",

  // About / Team
  team: "/images/team.jpg",

  // Ziyarat gallery (Umrah page) — Saudi sites
  jabalNoor: "/images/jabal-noor.jpg",
  arafat: "/images/arafat.jpg",
  mina: "/images/mina.jpg",
  masjidQuba: "/images/masjid-quba.jpg",
  jabalUhud: "/images/jabal-uhud.jpg",

  // Package covers — one distinct image each
  pkgUmrah14: "/images/masjid-haram-2.jpg",
  pkgUmrah10: "/images/masjid-nabawi-2.jpg",
  pkgUmrah21: "/images/masjid-quba-2.jpg",
  pkgUmrah7: "/images/jabal-noor-2.jpg",
  pkgUmrahRamadan: "/images/mina-2.jpg",
  pkgUmrahVip: "/images/jabal-uhud-2.jpg",
  pkgHajj21: "/images/mina-2.jpg",
  pkgHajjEconomy: "/images/masjid-haram.jpg",
  pkgHajjStandard: "/images/arafat.jpg",
  pkgHajjVip: "/images/masjid-nabawi.jpg",
  pkgHajjShortcut: "/images/jabal-uhud-2.jpg",
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
