// Business details. `null` = not provided yet; the UI shows a clearly marked placeholder.
export const RESTAURANTE = {
  nombre: "Arrocería Martín",
  nombreCompleto: "Restaurante Arrocería Martín",
  cocina: "Cocina castellana y arrocería",
  direccion: null as string | null,
  telefono: null as string | null, // e.g. "+34 600 000 000"
  email: null as string | null,
  horario: null as { dias: string; horas: string }[] | null,
  redes: [] as { nombre: string; url: string }[],
  mapsUrl: null as string | null,
};

export const telHref = (tel: string) => `tel:${tel.replace(/[^\d+]/g, "")}`;
