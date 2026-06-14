import { PageHeader } from "@/components/admin/ui";
import { TeamForm } from "@/components/admin/team-form";
import { createTeam } from "../actions";

export const dynamic = "force-dynamic";

export default function NewTeamPage() {
  return (
    <div>
      <PageHeader title="New Member" subtitle="Add a team member." />
      <TeamForm action={createTeam} />
    </div>
  );
}
