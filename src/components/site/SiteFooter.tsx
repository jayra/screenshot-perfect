import { Link } from "@tanstack/react-router";
import { RESTAURANTE, telHref } from "@/data/restaurante";
import { NAV } from "./SiteHeader";
import { Pendiente } from "./Pendiente";

export function SiteFooter() {
  return (
    <footer className="bg-ember text-ember-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <p className="eyebrow text-saffron">Restaurante</p>
          <p className="mt-1 font-display text-3xl font-semibold">{RESTAURANTE.nombre}</p>
          <p className="mt-3 text-sm text-ember-muted">{RESTAURANTE.cocina}</p>
        </div>

        <nav aria-label="Pie de página">
          <p className="eyebrow mb-4 text-ember-muted">Navegación</p>
          <ul className="space-y-2">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-ember-foreground/85 transition-colors hover:text-saffron">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 text-sm">
          <p className="eyebrow mb-4 text-ember-muted">Contacto</p>
          <p>{RESTAURANTE.direccion ?? <Pendiente>dirección</Pendiente>}</p>
          <p>
            {RESTAURANTE.telefono ? (
              <a href={telHref(RESTAURANTE.telefono)} className="hover:text-saffron">
                {RESTAURANTE.telefono}
              </a>
            ) : (
              <Pendiente>teléfono</Pendiente>
            )}
          </p>
          {RESTAURANTE.redes.length > 0 ? (
            <ul className="flex gap-4">
              {RESTAURANTE.redes.map((r) => (
                <li key={r.url}>
                  <a href={r.url} target="_blank" rel="noreferrer" className="hover:text-saffron">
                    {r.nombre}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <Pendiente>redes sociales</Pendiente>
            </p>
          )}
        </div>
      </div>
      <div className="border-t border-ember-foreground/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-ember-muted md:px-8">
          © {new Date().getFullYear()} {RESTAURANTE.nombreCompleto}
        </p>
      </div>
    </footer>
  );
}
