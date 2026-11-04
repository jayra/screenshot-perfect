import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FotoSlot } from "@/components/site/FotoSlot";
import { DESTACADOS, FOTOS } from "@/data/fotos";
import { buscarPlato } from "@/data/carta";
import { RESTAURANTE } from "@/data/restaurante";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Restaurante Arrocería Martín · Cocina castellana y arroces" },
      {
        name: "description",
        content:
          "Arroces elaborados al momento, carnes castellanas y una carta pensada para compartir. Consulta la carta y reserva en Arrocería Martín.",
      },
      { property: "og:title", content: "Restaurante Arrocería Martín" },
      {
        property: "og:description",
        content: "Cocina castellana y arrocería. Consulta la carta y reserva tu mesa.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Inicio */}
      <section className="relative overflow-hidden bg-ember text-ember-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-12 md:px-8 md:pb-24 md:pt-16">
          <div className="md:col-span-6 lg:col-span-5">
            <p className="eyebrow animate-rise text-saffron">{RESTAURANTE.cocina}</p>
            <h1 className="mt-4 animate-rise font-display text-6xl font-semibold leading-[0.9] md:text-7xl lg:text-8xl">
              Arrocería
              <br />
              <span className="italic text-saffron">Martín</span>
            </h1>
            <p className="mt-6 max-w-md animate-rise text-lg text-ember-muted [animation-delay:120ms]">
              Arroces hechos al momento, carnes a la brasa y el sabor de la cocina castellana, para
              compartir sin prisa.
            </p>
            <div className="mt-9 flex animate-rise flex-wrap gap-3 [animation-delay:200ms]">
              <Button asChild variant="hero" size="xl">
                <Link to="/carta">
                  Ver la carta <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contacto">Reservar</Link>
              </Button>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-7">
            <FotoSlot
              foto={FOTOS.hero}
              eager
              tone="dark"
              className="aspect-[4/3] w-full rounded-sm shadow-plate md:aspect-[5/4]"
            />
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
        <p className="ornament eyebrow justify-center">El restaurante</p>
        <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
          Un salón luminoso, a la medida de cada celebración
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Un espacio acogedor y amplio que puede dividirse en tres ambientes, cada uno decorado a tu
          gusto: sencillo y elegante, o tan especial como quieras. Junto al salón, una terraza
          acristalada y una zona al aire libre de estilo rústico.
        </p>
        <Button asChild variant="link" className="mt-6 text-base">
          <Link to="/nosotros">
            Conoce nuestros espacios <ArrowRight />
          </Link>
        </Button>
      </section>

      {/* Destacados */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-primary">De nuestra carta</p>
              <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Platos destacados</h2>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link to="/carta">Carta completa</Link>
            </Button>
          </div>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DESTACADOS.map(({ plato, foto }, i) => {
              const p = buscarPlato(plato);
              if (!p) return null;
              return (
                <li key={plato} className="group">
                  <FotoSlot
                    foto={foto}
                    className={`aspect-[3/4] rounded-sm ${i % 2 === 1 ? "lg:mt-10" : ""}`}
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-tight">{p.nombre}</h3>
                  {p.descripcion && <p className="mt-1 text-sm italic text-muted-foreground">{p.descripcion}</p>}
                  <p className="mt-2 font-semibold text-primary">{p.precio}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Visita CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-10 rounded-sm bg-primary p-10 text-primary-foreground md:grid-cols-[1.4fr_1fr] md:p-16">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              ¿Te guardamos una mesa?
            </h2>
            <p className="mt-4 max-w-lg text-primary-foreground/85">
              Los arroces se preparan para un mínimo de dos personas. Cuéntanos cuántos sois y qué
              celebráis.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button asChild variant="heroOutline" size="xl" className="border-primary-foreground/60">
              <Link to="/contacto">Reservar o contactar</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
