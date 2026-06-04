import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/admin/ui";
import { TeamForm } from "@/components/admin/team-form";
import { updateTeam } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditTeamPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const m = await prisma.teamMember.findUnique({ where: { id } });
  if (!m) notFound();

  const update = updateTeam.bind(null, id);

  return (
    <div>
      <PageHeader title="Edit Member" subtitle={m.name} />
      <TeamForm
        action={update}
        defaults={{
          name: m.name,
          role: m.role,
          photo: m.photo,
          sortOrder: m.sortOrder,
          isActive: m.isActive,
        }}
      />
    </div>
  );
}
