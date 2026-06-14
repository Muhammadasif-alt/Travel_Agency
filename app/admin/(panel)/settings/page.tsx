import { PageHeader } from "@/components/admin/ui";
import { SettingsForm } from "@/components/admin/settings-form";
import { requireAdmin } from "@/lib/admin-guard";
import { getSettings } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  await requireAdmin();
  const s = await getSettings();

  return (
    <div>
      <PageHeader title="Settings" subtitle="Contact info, social links and Hajj season." />
      <SettingsForm
        settings={{
          phone: s.phone,
          whatsapp: s.whatsapp,
          email: s.email,
          address: s.address,
          facebookUrl: s.facebookUrl,
          instagramUrl: s.instagramUrl,
          tiktokUrl: s.tiktokUrl,
          hajjStatus: s.hajjStatus,
          hajjYear: s.hajjYear,
          hajjNextYear: s.hajjNextYear,
        }}
      />
    </div>
  );
}
