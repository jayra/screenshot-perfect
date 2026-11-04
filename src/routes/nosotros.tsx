import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { FotoSlot } from "@/components/site/FotoSlot";
import { PageHeading } from "@/components/site/PageHeading";
import { FOTOS } from "@/data/fotos";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "El restaurante · Arrocería Martín" },
      {
        name: "description",
        content:
          "Un salón luminoso divisible en tres ambientes personalizables, terraza acristalada y zona exterior rústica.",
      },
      { property: "og:title", content: "Los espacios de Arrocería Martín" },
      {
        property: "og:description",
        content: "Salón en tres ambientes a tu gusto, terraza acristalada y zona exterior rústica.",
      },
    ],
  }),
  component: NosotrosPage,
});

const ESPACIOS = [
  {
    foto: FOTOS.salon,
    titulo: "El comedor",
    texto:
      "Un espacio amplio y luminoso, con vigas de madera y mesas vestidas, pensado para comer con calma.",
  },
  {
    foto: FOTOS.banquete,
    titulo: "Celebraciones en tres ambientes",
    texto:
      "El salón puede dividirse en tres zonas. Cada una se personaliza en decoración, disposición de las mesas y detalles: con un estilo sencillo y elegante, o tan elaborado como quieras para tu evento.",
  },
  {
    foto: FOTOS.privado,
    titulo: "Comedor privado",
    texto: "Para reuniones más íntimas, un comedor reservado que se decora a medida de cada ocasión.",
  },
  {
    foto: FOTOS.terraza,
    titulo: "Terraza acristalada",
    texto: "Junto al salón, una terraza acristalada para disfrutar de la luz durante todo el año.",
  },
  {
    foto: FOTOS.exterior,
    titulo: "Zona al aire libre",
    texto: "Un espacio exterior delimitado, con una decoración más sencilla y un aire rústico y coqueto.",
  },
];

function NosotrosPage() {
  return (
    <>
      <PageHeading
        eyebrow="El restaurante"
        title="Cocina castellana y arrocería"
        intro="Un lugar acogedor para comer bien, celebrar y compartir."
      />

      <section className="mx-auto max-w-3xl px-5 py-20 md:py-24">
        <p className="font-display text-2xl leading-relaxed md:text-3xl">
          En nuestra cocina conviven los arroces, elaborados al momento, y los platos fuertes de la
          tradición castellana, como el arroz con bogavante o el chuletón de ternera de Ávila a la
          brasa. Y en la carta, la receta familiar de la abuela Antonia: el arroz caldoso con conejo.
        </p>
        <p className="mt-8 text-lg text-muted-foreground">
          Si necesitas información sobre cualquier evento que quieras celebrar y su personalización,
          no dudes en preguntarnos.
        </p>
        <div
          className="mt-10 rounded-sm border border-dashed border-pending-foreground/50 bg-pending p-5 text-sm text-pending-foreground"
          role="note"
        >
          <strong>Texto provisional:</strong> aquí puede ir la historia del restaurante (quién lo
          fundó, desde cuándo, qué lo hace especial). Envíanos esos datos y los añadimos.
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-20 px-5 pb-24 md:px-8 md:pb-32">
        {ESPACIOS.map((e, i) => (
          <article key={e.titulo} className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
            <FotoSlot foto={e.foto} className={`aspect-[4/3] rounded-sm ${i % 2 === 1 ? "md:order-2" : ""}`} />
            <div>
              <p className="eyebrow text-primary">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 font-display text-4xl font-semibold">{e.titulo}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{e.texto}</p>
            </div>
          </article>
        ))}
        <div className="text-center">
          <Button asChild size="xl" variant="hero">
            <Link to="/contacto">Consultar disponibilidad</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
