"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { markRead } from "@/app/admin/(panel)/inquiries/actions";

export function InquiryRead({ id, isRead }: { id: string; isRead: boolean }) {
  const router = useRouter();
  const [read, setRead] = useState(isRead);
  const [, startTransition] = useTransition();

  // Auto-mark as read the first time it's opened.
  useEffect(() => {
    if (!isRead) {
      setRead(true);
      markRead(id, true).then(() => router.refresh());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    const next = !read;
    setRead(next);
    startTransition(async () => {
      await markRead(id, next);
      router.refresh();
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="h-11 px-5 inline-flex items-center rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
    >
      {read ? "Mark as unread" : "Mark as read"}
    </button>
  );
}
