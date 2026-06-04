import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/admin/ui";
import { PackageForm } from "@/components/admin/package-form";
import { updatePackage } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditPackagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = await prisma.package.findUnique({ where: { id } });
  if (!p) notFound();

  const update = updatePackage.bind(null, id);

  return (
    <div>
      <PageHeader title="Edit Package" subtitle={p.title} />
      <PackageForm
        action={update}
        defaults={{
          type: p.type,
          title: p.title,
          image: p.image,
          imageAlt: p.imageAlt,
          tag: p.tag,
          tagVariant: p.tagVariant,
          discount: p.discount ?? "",
          meta: p.meta,
          features: Array.isArray(p.features) ? (p.features as string[]) : [],
          oldPrice: p.oldPrice ?? "",
          newPrice: p.newPrice,
          priceLabel: p.priceLabel ?? "",
          featured: p.featured,
          showOnHome: p.showOnHome,
          sortOrder: p.sortOrder,
          isActive: p.isActive,
        }}
      />
    </div>
  );
}
