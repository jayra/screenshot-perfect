import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/brand-logo.png";
import { Button } from "@/components/ui/button";
import { RESTAURANTE } from "@/data/restaurante";

export const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/carta", label: "Carta" },
  { to: "/nosotros", label: "El restaurante" },
  { to: "/galeria", label: "Galería" },
  { to: "/contacto", label: "Visítanos" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-ember-foreground/10 bg-ember/95 text-ember-foreground backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-2.5 leading-none"
          onClick={() => setOpen(false)}
          aria-label={`${RESTAURANTE.nombreCompleto} — Inicio`}
        >
          <span className="relative size-11 shrink-0 overflow-hidden rounded-full border border-saffron/70" aria-hidden="true">
            <img
              src={logo}
              alt=""
              className="absolute -left-[26px] -top-[9px] h-[111px] w-[101px] max-w-none"
            />
          </span>
          <span className="flex min-w-0 flex-col gap-1">
            <span className="eyebrow text-[0.55rem] text-saffron">Restaurante</span>
            <span className="whitespace-nowrap font-display text-xl font-semibold tracking-tight sm:text-2xl">
              {RESTAURANTE.nombre}
            </span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-sm px-3 py-2 text-sm text-ember-foreground/80 transition-colors hover:text-saffron data-[status=active]:text-saffron"
            >
              {n.label}
            </Link>
          ))}
          <Button asChild variant="hero" size="sm" className="ml-3">
            <Link to="/contacto">Reservar</Link>
          </Button>
        </nav>

        <button
          type="button"
          className="rounded-sm p-2 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Principal móvil" className="border-t border-ember-foreground/10 px-5 pb-6 md:hidden">
          <ul className="flex flex-col py-2">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-2xl data-[status=active]:text-saffron"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild variant="hero" size="xl" className="w-full">
            <Link to="/contacto" onClick={() => setOpen(false)}>
              Reservar
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
