import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { PageHeading } from "@/components/site/PageHeading";
import { GALERIA } from "@/data/fotos";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería · Arrocería Martín" },
      { name: "description", content: "Fotos de los platos y espacios del Restaurante Arrocería Martín en Ocaña." },
      { property: "og:title", content: "Galería de Arrocería Martín" },
      { property: "og:description", content: "Nuestros platos y salones en imágenes." },
    ],
  }),
  component: GaleriaPage,
});

function GaleriaPage() {
  const fotos = GALERIA.filter((f) => f.src);
  const [abierta, setAbierta] = useState<number | null>(null);

  useEffect(() => {
    if (abierta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierta(null);
      if (e.key === "ArrowRight") setAbierta((i) => (i === null ? i : (i + 1) % fotos.length));
      if (e.key === "ArrowLeft") setAbierta((i) => (i === null ? i : (i - 1 + fotos.length) % fotos.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [abierta, fotos.length]);

  const actual = abierta !== null ? fotos[abierta] : null;

  return (
    <>
      <PageHeading eyebrow="Galería" title="Para abrir el apetito" intro="Algunos de nuestros platos y salones." />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5">
          {fotos.map((f, i) => (
            <li key={f.id} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setAbierta(i)}
                className="group relative block w-full overflow-hidden rounded-sm focus-visible:outline-2"
                aria-label={`Ampliar foto: ${f.alt}`}
              >
                <img
                  src={f.src ?? ""}
                  alt={f.alt}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${f.forma === "vertical" ? "aspect-[4/5]" : "aspect-[4/3]"}`}
                />
                {f.plato && (
                  <span className="absolute inset-x-0 bottom-0 bg-ember-fade px-4 pb-3 pt-10 text-left font-display text-lg italic text-ember-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    {f.plato}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </section>

      {actual && abierta !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={actual.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ember/95 p-4"
          onClick={() => setAbierta(null)}
        >
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={actual.src ?? ""} alt={actual.alt} className="max-h-[80vh] w-auto rounded-sm object-contain" />
            {actual.plato && (
              <figcaption className="mt-3 text-center font-display text-xl italic text-ember-foreground">
                {actual.plato}
              </figcaption>
            )}
          </figure>
          <button
            type="button"
            aria-label="Cerrar"
            onClick={() => setAbierta(null)}
            className="absolute right-4 top-4 rounded-sm p-2 text-ember-foreground hover:text-saffron"
          >
            <X className="size-7" />
          </button>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={(e) => {
              e.stopPropagation();
              setAbierta((abierta - 1 + fotos.length) % fotos.length);
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-sm p-2 text-ember-foreground hover:text-saffron md:left-6"
          >
            <ChevronLeft className="size-9" />
          </button>
          <button
            type="button"
            aria-label="Foto siguiente"
            onClick={(e) => {
              e.stopPropagation();
              setAbierta((abierta + 1) % fotos.length);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-2 text-ember-foreground hover:text-saffron md:right-6"
          >
            <ChevronRight className="size-9" />
          </button>
        </div>
      )}
    </>
  );
}
