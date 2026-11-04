import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Wheat } from "lucide-react";
import { PageHeading } from "@/components/site/PageHeading";
import { Switch } from "@/components/ui/switch";
import { ALERGENOS, CARTA, VINOS, type Plato } from "@/data/carta";
import { cn } from "@/lib/utils";
import { FOTO_DE_PLATO } from "@/data/fotos";

export const Route = createFileRoute("/carta")({
  head: () => ({
    meta: [
      { title: "Carta · Restaurante Arrocería Martín" },
      {
        name: "description",
        content:
          "Entrantes, platos de cuchara, arroces, carnes, pescados y vinos. Consulta precios y opciones sin gluten de Arrocería Martín.",
      },
      { property: "og:title", content: "La carta de Arrocería Martín" },
      {
        property: "og:description",
        content: "Arroces, carnes castellanas, pescados y carta de vinos con precios.",
      },
    ],
  }),
  component: CartaPage,
});

function CartaPage() {
  const [soloSinGluten, setSoloSinGluten] = useState(false);

  return (
    <>
      <PageHeading
        eyebrow="Carta"
        title="Nuestra carta"
        intro="Platos castellanos, arroces para compartir y una selección de vinos."
      />

      <div className="sticky top-16 z-30 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 md:px-8">
          <nav aria-label="Secciones de la carta" className="-mx-1 flex flex-1 gap-1 overflow-x-auto py-3">
            {[...CARTA.map((c) => ({ id: c.id, t: c.titulo })), { id: "vinos", t: "Vinos" }].map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="shrink-0 rounded-sm px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {c.t}
              </a>
            ))}
          </nav>
          <label className="hidden shrink-0 cursor-pointer items-center gap-2 text-sm sm:flex">
            <Switch checked={soloSinGluten} onCheckedChange={setSoloSinGluten} aria-label="Mostrar solo opciones sin gluten" />
            Solo sin gluten
          </label>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-4 rounded-sm border border-olive/30 bg-olive/5 p-5 text-sm md:flex-row md:items-center md:justify-between">
          <p className="flex items-start gap-3">
            <Wheat className="mt-0.5 size-5 shrink-0 text-olive" aria-hidden />
            <span>
              <strong>Sin gluten:</strong> los platos marcados se pueden preparar sin gluten. Avisa
              siempre al camarero de que tu pedido es sin gluten.
            </span>
          </p>
          <label className="flex shrink-0 cursor-pointer items-center gap-2 sm:hidden">
            <Switch checked={soloSinGluten} onCheckedChange={setSoloSinGluten} aria-label="Mostrar solo opciones sin gluten" />
            Solo sin gluten
          </label>
        </div>

        <div className="mt-12 grid gap-x-16 gap-y-16 lg:grid-cols-2">
          {CARTA.map((cat) => {
            const platos = soloSinGluten ? cat.platos.filter((p) => p.sinGluten) : cat.platos;
            return (
              <section key={cat.id} id={cat.id} className="scroll-mt-36" aria-labelledby={`h-${cat.id}`}>
                <h2 id={`h-${cat.id}`} className="font-display text-4xl font-semibold text-primary">
                  {cat.titulo}
                </h2>
                {cat.nota && <p className="mt-2 text-sm italic text-muted-foreground">{cat.nota}</p>}
                {platos.length === 0 ? (
                  <p className="mt-6 text-sm text-muted-foreground">
                    No hay opciones sin gluten indicadas en esta sección.
                  </p>
                ) : (
                  <ul className="mt-6 space-y-5">
                    {platos.map((p) => (
                      <PlatoRow key={p.nombre} plato={p} />
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </div>

        <section id="vinos" className="mt-24 scroll-mt-36 rounded-sm bg-ember p-8 text-ember-foreground md:p-14" aria-labelledby="h-vinos">
          <p className="eyebrow text-saffron">Bodega</p>
          <h2 id="h-vinos" className="mt-2 font-display text-5xl font-semibold">Carta de vinos</h2>
          <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {VINOS.map((g) => (
              <div key={g.region}>
                <h3 className="font-display text-2xl italic text-saffron">{g.region}</h3>
                <ul className="mt-3 space-y-2">
                  {g.vinos.map((v) => (
                    <li key={v.nombre} className="flex items-baseline gap-2 text-sm">
                      <span>
                        {v.nombre}
                        {v.revisar && <RevisarMark texto={v.revisar} />}
                      </span>
                      <span className="dot-leader opacity-40" aria-hidden />
                      <span className="shrink-0 font-semibold">{v.precio}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t pt-8 text-sm text-muted-foreground" aria-labelledby="h-alergenos">
          <h2 id="h-alergenos" className="font-sans text-sm font-semibold uppercase tracking-widest text-foreground">
            Alérgenos
          </h2>
          <p className="mt-2 max-w-3xl">
            Los alérgenos se han copiado de los símbolos que aparecen en la carta. Si tienes alguna
            alergia o intolerancia, consulta siempre al personal antes de pedir.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {Object.entries(ALERGENOS).map(([k, a]) => (
              <li key={k} className="rounded-sm border px-2 py-1 text-xs">
                {a.label}
                {a.revisar && <RevisarMark texto="Símbolo de la carta pendiente de confirmar" />}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

function PlatoRow({ plato }: { plato: Plato }) {
  const foto = FOTO_DE_PLATO[plato.nombre];
  return (
    <li className="flex gap-4">
      {foto?.src && (
        <img
          src={foto.src}
          alt={foto.alt}
          loading="lazy"
          decoding="async"
          className="size-16 shrink-0 rounded-sm object-cover md:size-20"
        />
      )}
      <div className="min-w-0 flex-1">
      <div className="flex items-baseline gap-3">
        <h3 className="font-display text-xl font-semibold leading-snug md:text-[1.35rem]">{plato.nombre}</h3>
        <span className="dot-leader" aria-hidden />
        <span className="shrink-0 font-semibold text-primary">{plato.precio}</span>
      </div>
      {(plato.descripcion || plato.nota) && (
        <p className="mt-0.5 text-sm italic text-muted-foreground">
          {[plato.descripcion, plato.nota].filter(Boolean).join(" · ")}
        </p>
      )}
      {(plato.sinGluten || (plato.alergenos && plato.alergenos.length > 0)) && (
        <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Información alimentaria">
          {plato.sinGluten && (
            <li className="inline-flex items-center gap-1 rounded-sm bg-olive px-1.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wide text-olive-foreground">
              <Wheat className="size-3" aria-hidden /> Opción sin gluten
            </li>
          )}
          {plato.alergenos?.map((a) => (
            <li
              key={a}
              className={cn(
                "rounded-sm border px-1.5 py-0.5 text-[0.7rem] text-muted-foreground",
                ALERGENOS[a].revisar && "border-dashed border-pending-foreground/50 bg-pending text-pending-foreground",
              )}
              title={ALERGENOS[a].revisar ? "Pendiente de confirmar" : undefined}
            >
              {ALERGENOS[a].label}
              {ALERGENOS[a].revisar && " (revisar)"}
            </li>
          ))}
        </ul>
      )}
      </div>
    </li>
  );
}

function RevisarMark({ texto }: { texto: string }) {
  return (
    <span
      className="ml-1 rounded-sm bg-pending px-1 text-[0.65rem] font-semibold uppercase text-pending-foreground"
      title={texto}
    >
      revisar
    </span>
  );
}
