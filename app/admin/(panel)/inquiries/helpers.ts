const SERVICE_LABELS: Record<string, string> = {
  hajj: "Hajj Package",
  umrah: "Umrah Package",
  flight: "Flight Booking",
  visa: "Visa Service",
};

export function serviceLabel(s: string) {
  return SERVICE_LABELS[s] ?? (s || "—");
}
