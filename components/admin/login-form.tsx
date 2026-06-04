"use client";

import { useActionState } from "react";
import { login, type LoginState } from "@/app/admin/auth-actions";

export function LoginForm({ from }: { from: string }) {
  const [state, formAction, pending] = useActionState<LoginState, FormData>(
    login,
    {}
  );

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="from" value={from} />
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          autoComplete="username"
          className="w-full h-11 px-3.5 rounded-lg border border-gray-300 focus:border-brand-light focus:ring-2 focus:ring-brand-light/30 outline-none"
          placeholder="admin@nusaratmadina.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Password
        </label>
        <input
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="w-full h-11 px-3.5 rounded-lg border border-gray-300 focus:border-brand-light focus:ring-2 focus:ring-brand-light/30 outline-none"
          placeholder="••••••••"
        />
      </div>

      {state.error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full h-11 rounded-lg bg-brand-light text-white font-semibold hover:bg-brand transition-colors disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign In"}
      </button>
    </form>
  );
}
