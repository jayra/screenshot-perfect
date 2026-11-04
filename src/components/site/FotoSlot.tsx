import { Camera } from "lucide-react";
import type { Foto } from "@/data/fotos";
import { cn } from "@/lib/utils";

type Props = {
  foto: Foto;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  tone?: "light" | "dark";
};

export function FotoSlot({ foto, className, imgClassName, eager, tone = "light" }: Props) {
  if (foto.src) {
    return (
      <div className={cn("overflow-hidden", className)}>
        <img
          src={foto.src}
          alt={foto.alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={`Foto pendiente: ${foto.alt}`}
      className={cn(
        "flex flex-col items-center justify-center gap-2 p-6 text-center",
        tone === "dark"
          ? "border border-dashed border-ember-foreground/30 bg-ember-foreground/5 text-ember-muted"
          : "pending-stripes border border-dashed border-pending-foreground/40 text-pending-foreground",
        className,
      )}
    >
      <Camera className="size-6" aria-hidden />
      <span className="eyebrow">Foto pendiente</span>
      {foto.plato && <span className="font-display text-lg italic">{foto.plato}</span>}
    </div>
  );
}
