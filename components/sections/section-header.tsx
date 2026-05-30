import { cn } from "@/lib/utils";

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
