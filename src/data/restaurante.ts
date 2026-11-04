// Business details. `null` = not provided yet; the UI shows a clearly marked placeholder.
export const RESTAURANTE = {
  nombre: "Arrocería Martín",
  nombreCompleto: "Restaurante Arrocería Martín",
  cocina: "Cocina castellana y arrocería",
  localidad: "Ocaña, Toledo",
  direccion: "Carretera Antigua Nacional 4, Km 62, 45300 Ocaña, Toledo" as string | null,
  telefono: null as string | null, // e.g. "+34 600 000 000"
  email: null as string | null,
  horario: null as { dias: string; horas: string }[] | null,
  redes: [] as { nombre: string; url: string }[],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurante+Martin+Oca%C3%B1a" as string | null,
  reservaObligatoria: true,
};

export const telHref = (tel: string) => `tel:${tel.replace(/[^\d+]/g, "")}`;
