// Restaurant photos (retouched from the owner's originals).
// `src: null` renders a clearly marked placeholder until a real photo exists.
import pulpoParrilla from "@/assets/pulpo-parrilla.jpg";
import raboDeToro from "@/assets/rabo-de-toro.jpg";
import sopaCastellana from "@/assets/sopa-castellana.jpg";
import rodaballo from "@/assets/rodaballo.jpg";
import croquetas from "@/assets/croquetas-cocido.jpg";
import paletilla from "@/assets/paletilla-lechal.jpg";
import mollejitas from "@/assets/mollejitas-cordero.jpg";
import salmorejo from "@/assets/salmorejo.jpg";
import ensaladaCasa from "@/assets/ensalada-casa.jpg";
import revueltoAjetes from "@/assets/revuelto-ajetes.jpg";
import postrePlato from "@/assets/postre-plato.jpg";
import vieiras from "@/assets/vieiras.jpg";
import cogollos from "@/assets/cogollos-anchoas.jpg";
import salonComedor from "@/assets/salon-comedor.jpg";
import salonBanquete from "@/assets/salon-banquete.jpg";
import salonPrivado from "@/assets/salon-privado.jpg";

export type Foto = {
  id: string;
  src: string | null;
  alt: string;
  /** Caption; when it names a dish it must match the menu exactly. */
  plato?: string;
  /** Orientation, used to pick a frame in the gallery. */
  forma?: "vertical" | "horizontal";
};

export const FOTOS = {
  pulpo: { id: "pulpo", src: pulpoParrilla, alt: "Pulpo a la parrilla con patata y pimentón sobre pizarra", plato: "Pulpo a la parrilla", forma: "vertical" },
  rabo: { id: "rabo", src: raboDeToro, alt: "Rabo de toro guisado con patatas", plato: "Rabo de toro a la cordobesa", forma: "vertical" },
  paletilla: { id: "paletilla", src: paletilla, alt: "Paletilla de lechal asada con patatas", plato: "Paletilla de lechal", forma: "horizontal" },
  croquetas: { id: "croquetas", src: croquetas, alt: "Croquetas de cocido doradas", plato: "Croquetas de cocido", forma: "vertical" },
  rodaballo: { id: "rodaballo", src: rodaballo, alt: "Rodaballo entero a la plancha con ensalada y limón", plato: "Rodaballo al ajillo", forma: "horizontal" },
  sopa: { id: "sopa", src: sopaCastellana, alt: "Sopa castellana en cazuela de barro", plato: "Sopa castellana", forma: "vertical" },
  salmorejo: { id: "salmorejo", src: salmorejo, alt: "Salmorejo con huevo duro y jamón", plato: "Salmorejo cordobés con huevo duro y crujiente de jamón", forma: "vertical" },
  mollejitas: { id: "mollejitas", src: mollejitas, alt: "Mollejitas de cordero fritas", plato: "Mollejitas de cordero", forma: "horizontal" },
  ensalada: { id: "ensalada", src: ensaladaCasa, alt: "Ensalada templada con ventresca y reducción", plato: "Ensalada de la casa", forma: "horizontal" },
  revuelto: { id: "revuelto", src: revueltoAjetes, alt: "Revuelto de ajetes con picos de pan", plato: "Revuelto de ajetes", forma: "horizontal" },
  cogollos: { id: "cogollos", src: cogollos, alt: "Cogollos con anchoas, tomate y reducción", plato: "Cogollos con anchoas", forma: "horizontal" },
  vieiras: { id: "vieiras", src: vieiras, alt: "Vieiras a la plancha en su concha con limón", plato: "Vieiras", forma: "horizontal" },
  postre: { id: "postre", src: postrePlato, alt: "Postre emplatado con reducción", plato: "Postre", forma: "vertical" },
  salon: { id: "salon", src: salonComedor, alt: "Comedor principal con vigas de madera y mesas vestidas", plato: "Comedor", forma: "horizontal" },
  banquete: { id: "banquete", src: salonBanquete, alt: "Salón preparado para una celebración con mesa larga", plato: "Salón de celebraciones", forma: "horizontal" },
  privado: { id: "privado", src: salonPrivado, alt: "Comedor privado decorado para una celebración", plato: "Comedor privado", forma: "horizontal" },
  terraza: { id: "terraza", src: null, alt: "Terraza acristalada", plato: "Terraza acristalada" },
  exterior: { id: "exterior", src: null, alt: "Zona exterior rústica", plato: "Zona exterior" },
} satisfies Record<string, Foto>;

export const HERO: Foto = FOTOS.pulpo;

/** Featured dishes: names must match the menu exactly. */
export const DESTACADOS: { plato: string; foto: Foto }[] = [
  { plato: "Rabo de toro a la cordobesa", foto: FOTOS.rabo },
  { plato: "Paletilla de lechal", foto: FOTOS.paletilla },
  { plato: "Croquetas de cocido", foto: FOTOS.croquetas },
  { plato: "Rodaballo al ajillo", foto: FOTOS.rodaballo },
];

export const GALERIA: Foto[] = [
  FOTOS.pulpo,
  FOTOS.banquete,
  FOTOS.sopa,
  FOTOS.rodaballo,
  FOTOS.croquetas,
  FOTOS.salon,
  FOTOS.salmorejo,
  FOTOS.vieiras,
  FOTOS.rabo,
  FOTOS.cogollos,
  FOTOS.paletilla,
  FOTOS.privado,
  FOTOS.postre,
  FOTOS.mollejitas,
  FOTOS.ensalada,
  FOTOS.revuelto,
];
