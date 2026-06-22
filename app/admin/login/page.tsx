import { LoginForm } from "@/components/admin/login-form";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  const { from } = await searchParams;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand via-brand-dark to-[#1e3a6e] px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-7">
          <div className="text-xl font-extrabold tracking-wide text-brand">
            NUSARAT <span className="text-brand-light">MADINA</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">Admin Panel</p>
        </div>
        <LoginForm from={from ?? "/admin"} />
      </div>
    </div>
  );
}
