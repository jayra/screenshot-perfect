import { cn } from "@/lib/utils";

/** Clearly marked slot for information the restaurant still has to provide. */
export function Pendiente({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-sm border border-dashed border-pending-foreground/50 bg-pending px-2 py-0.5 text-sm font-medium text-pending-foreground",
        className,
      )}
    >
      [Pendiente: {children}]
    </span>
  );
}
