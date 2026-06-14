import Link from "next/link";
import {
  Package,
  Newspaper,
  Star,
  Briefcase,
  Plane,
  FileText,
  Hotel,
  Map,
  Users,
  HelpCircle,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/admin-guard";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const user = await requireUser();

  const [
    packages,
    blogs,
    testimonials,
    services,
    flights,
    visa,
    hotels,
    tours,
    team,
    faqs,
  ] = await Promise.all([
    prisma.package.count(),
    prisma.blogPost.count(),
    prisma.testimonial.count(),
    prisma.service.count(),
    prisma.flightDeal.count(),
    prisma.visaCountry.count(),
    prisma.hotelOption.count(),
    prisma.tourPackage.count(),
    prisma.teamMember.count(),
    prisma.faq.count(),
  ]);

  const cards = [
    { href: "/admin/packages", label: "Packages", count: packages, icon: Package },
    { href: "/admin/blogs", label: "Blogs / News", count: blogs, icon: Newspaper },
    { href: "/admin/testimonials", label: "Success Stories", count: testimonials, icon: Star },
    { href: "/admin/services", label: "Services", count: services, icon: Briefcase },
    { href: "/admin/flights", label: "Flights", count: flights, icon: Plane },
    { href: "/admin/visa", label: "Visa Countries", count: visa, icon: FileText },
    { href: "/admin/hotels", label: "Hotels", count: hotels, icon: Hotel },
    { href: "/admin/tours", label: "Tours", count: tours, icon: Map },
    { href: "/admin/team", label: "Team", count: team, icon: Users },
    { href: "/admin/faqs", label: "FAQs", count: faqs, icon: HelpCircle },
  ];

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-brand">
        Assalam-o-Alaikum, {user.name.split(" ")[0]} 👋
      </h1>
      <p className="text-muted-foreground mt-1 text-sm">
        Manage all of your website content from here.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
        {cards.map(({ href, label, count, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-brand-light transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-brand-100 text-brand flex items-center justify-center mb-3">
              <Icon size={20} />
            </div>
            <div className="text-2xl font-extrabold text-brand">{count}</div>
            <div className="text-sm text-muted-foreground">{label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
