import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 bg-white shadow-sm rounded-full pl-1.5 pr-4 py-1.5 text-[13px] font-semibold text-brand",
        className
      )}
    >
      <span className="w-6 h-6 rounded-full bg-brand-light/15 flex items-center justify-center">
        <Zap size={13} className="text-brand-light fill-brand-light" />
      </span>
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-11",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
          {eyebrow}
        </div>
      )}
      <h2 className="text-[28px] md:text-4xl font-extrabold text-brand">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground mt-3 text-[15px]">{description}</p>
      )}
    </div>
  );
}
