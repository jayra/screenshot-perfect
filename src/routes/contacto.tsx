import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/site/PageHeading";
import { Pendiente } from "@/components/site/Pendiente";
import { RESTAURANTE, telHref } from "@/data/restaurante";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Visítanos y reserva · Arrocería Martín" },
      {
        name: "description",
        content: "Dirección, horario y teléfono para reservar mesa en el Restaurante Arrocería Martín.",
      },
      { property: "og:title", content: "Reserva en Arrocería Martín" },
      { property: "og:description", content: "Cómo llegar, horario y reservas." },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const r = RESTAURANTE;
  const mapa =
    r.mapsUrl ?? (r.direccion ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.direccion)}` : null);

  return (
    <>
      <PageHeading
        eyebrow="Visítanos"
        title="Reserva tu mesa"
        intro="Ana gestiona las reservas en el +34 650 29 22 84, por llamada o WhatsApp. También puedes escribirnos para preparar tu celebración."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:grid-cols-4">
        <Card icon={<Phone />} titulo="Teléfono y reservas">
          {r.reservaObligatoria && <p className="mb-3 text-sm text-muted-foreground">Es necesario reservar.</p>}
          {r.telefono ? (
            <>
              <p className="text-lg font-semibold">{r.telefono}</p>
              <p className="mt-2 text-sm text-muted-foreground">Canal oficial de reservas. Ana atiende personalmente.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href={telHref(r.telefono)}>Llamar a Ana</a>
                </Button>
                {r.whatsappUrl && (
                  <Button asChild variant="outline" size="lg">
                    <a href={r.whatsappUrl} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 size-4" /> Reservar por WhatsApp
                    </a>
                  </Button>
                )}
              </div>
            </>
          ) : (
            <Pendiente>teléfono de reservas</Pendiente>
          )}
        </Card>

        <Card icon={<MapPin />} titulo="Dirección">
          {r.direccion ? <p>{r.direccion}</p> : <Pendiente>dirección</Pendiente>}
          {mapa && (
            <Button asChild variant="outline" size="lg" className="mt-4">
              <a href={mapa} target="_blank" rel="noreferrer">
                Abrir en el mapa
              </a>
            </Button>
          )}
        </Card>

        <Card icon={<Clock />} titulo="Horario">
          {r.horario ? (
            <dl className="space-y-1">
              {r.horario.map((h) => (
                <div key={h.dias} className="flex justify-between gap-4">
                  <dt>{h.dias}</dt>
                  <dd className="font-semibold">{h.horas}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <Pendiente>horario</Pendiente>
          )}
        </Card>

        <Card icon={<Share2 />} titulo="Redes sociales">
          {r.redes.length > 0 ? (
            <div>
              <p className="mb-3 text-sm text-muted-foreground">Síguenos en Facebook para ver novedades del restaurante.</p>
              <ul className="space-y-1">
                {r.redes.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary underline-offset-4 hover:underline">
                      <span aria-hidden="true" className="inline-flex size-6 items-center justify-center rounded-full bg-[#1877F2] font-sans text-sm font-bold text-white">f</span>
                      {s.nombre} de Arrocería Martín
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Pendiente>redes sociales</Pendiente>
          )}
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        {r.direccion ? (
          <iframe
            title={`Mapa de ${r.nombreCompleto}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(r.direccion)}&output=embed`}
            className="h-96 w-full rounded-sm border"
            loading="lazy"
          />
        ) : (
          <div className="pending-stripes flex h-72 items-center justify-center rounded-sm border border-dashed border-pending-foreground/40 text-center text-pending-foreground">
            <p className="px-6">El mapa aparecerá aquí en cuanto tengamos la dirección.</p>
          </div>
        )}
      </section>
    </>
  );
}

function Card({ icon, titulo, children }: { icon: React.ReactNode; titulo: string; children: React.ReactNode }) {
  return (
    <div className="rounded-sm border bg-card p-6">
      <div className="flex items-center gap-2 text-primary [&_svg]:size-5">
        {icon}
        <h2 className="font-sans text-sm font-semibold uppercase tracking-widest">{titulo}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
