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
