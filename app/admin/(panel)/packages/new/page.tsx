import { PageHeader } from "@/components/admin/ui";
import { PackageForm } from "@/components/admin/package-form";
import { createPackage } from "../actions";

export const dynamic = "force-dynamic";

export default function NewPackagePage() {
  return (
    <div>
      <PageHeader title="New Package" subtitle="Add a new Umrah or Hajj package." />
      <PackageForm action={createPackage} />
    </div>
  );
}
