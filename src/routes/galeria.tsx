import { createFileRoute } from "@tanstack/react-router";
import { FotoSlot } from "@/components/site/FotoSlot";
import { PageHeading } from "@/components/site/PageHeading";
import { FOTOS, GALERIA } from "@/data/fotos";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería · Arrocería Martín" },
      { name: "description", content: "Fotos de los platos y espacios del Restaurante Arrocería Martín." },
      { property: "og:title", content: "Galería de Arrocería Martín" },
      { property: "og:description", content: "Nuestros arroces, carnes y espacios en imágenes." },
    ],
  }),
  component: GaleriaPage,
});

function GaleriaPage() {
  const fotos = GALERIA.length > 0 ? GALERIA : Object.values(FOTOS).slice(1, 7);
  return (
    <>
      <PageHeading eyebrow="Galería" title="Para abrir el apetito" />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5">
          {fotos.map((f, i) => (
            <li key={f.id} className="break-inside-avoid">
              <FotoSlot
                foto={f}
                className={`${i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"} rounded-sm`}
                imgClassName="transition-transform duration-700 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
