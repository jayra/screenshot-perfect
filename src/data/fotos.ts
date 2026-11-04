// Restaurant photo slots. `src: null` renders a clearly marked placeholder
// until the real photo is supplied by the restaurant.
export type Foto = { id: string; src: string | null; alt: string; plato?: string };

export const FOTOS: Record<string, Foto> = {
  hero: { id: "hero", src: null, alt: "Arroz recién hecho en paellera", plato: "Foto principal" },
  bogavante: { id: "bogavante", src: null, alt: "Arroz caldoso con bogavante", plato: "Arroz caldoso con bogavante" },
  chuleton: { id: "chuleton", src: null, alt: "Chuletón de ternera a la brasa", plato: "Chuletón de ternera premium" },
  conejo: { id: "conejo", src: null, alt: "Arroz caldoso con conejo", plato: "Arroz caldoso con conejo tradicional" },
  cochinillo: { id: "cochinillo", src: null, alt: "Cochinillo asado", plato: "Cochinillo asado" },
  salon: { id: "salon", src: null, alt: "Salón del restaurante", plato: "Salón" },
  terraza: { id: "terraza", src: null, alt: "Terraza acristalada", plato: "Terraza acristalada" },
  exterior: { id: "exterior", src: null, alt: "Zona exterior rústica", plato: "Zona exterior" },
};

/** Featured dishes: names must match the menu exactly. */
export const DESTACADOS: { plato: string; foto: Foto }[] = [
  { plato: "Arroz caldoso con bogavante", foto: FOTOS.bogavante },
  { plato: "Chuletón de ternera premium", foto: FOTOS.chuleton },
  { plato: "Arroz caldoso con conejo tradicional", foto: FOTOS.conejo },
  { plato: "Cochinillo asado", foto: FOTOS.cochinillo },
];

export const GALERIA: Foto[] = [];
