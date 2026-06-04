import { requireUser } from "@/lib/admin-guard";
import { AdminSidebar } from "@/components/admin/sidebar";

export const dynamic = "force-dynamic";

export default async function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireUser();

  return (
    <div className="min-h-screen bg-gray-50 lg:flex">
      <AdminSidebar user={{ name: user.name, role: user.role }} />
      <div className="flex-1 min-w-0">
        <main className="p-5 sm:p-8 max-w-6xl mx-auto">{children}</main>
      </div>
    </div>
  );
}
