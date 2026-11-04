// Transcribed from the restaurant's current (white-background) menu photos.
// Gluten-free availability comes from the green "Carta sin gluten" pages.
// Allergens copied from the symbols printed next to each dish.

export type Alergeno =
  | "gluten"
  | "lacteos"
  | "huevo"
  | "pescado"
  | "crustaceos"
  | "moluscos"
  | "frutos_cascara"
  | "por_confirmar";

export const ALERGENOS: Record<Alergeno, { label: string; revisar?: boolean }> = {
  gluten: { label: "Gluten" },
  lacteos: { label: "Lácteos" },
  huevo: { label: "Huevo" },
  pescado: { label: "Pescado" },
  crustaceos: { label: "Crustáceos" },
  moluscos: { label: "Moluscos" },
  frutos_cascara: { label: "Frutos de cáscara", revisar: true },
  por_confirmar: { label: "Alérgeno por confirmar", revisar: true },
};

export type Plato = {
  nombre: string;
  descripcion?: string;
  /** Price exactly as on the menu, e.g. "11,95 €" or "17 € / pers." */
  precio: string;
  alergenos?: Alergeno[];
  /** Appears on the green gluten-free menu. */
  sinGluten?: boolean;
  nota?: string;
  /** Text that could not be read with certainty on the menu photo. */
  revisar?: string;
};

export type Categoria = {
  id: string;
  titulo: string;
  nota?: string;
  platos: Plato[];
};

export const CARTA: Categoria[] = [
  {
    id: "entrantes",
    titulo: "Entrantes",
    platos: [
      { nombre: "Berenjenas crujientes a la miel de caña", precio: "11,95 €", alergenos: ["gluten"], sinGluten: true },
      { nombre: "Croquetas de cocido", precio: "10,95 €", alergenos: ["gluten", "lacteos"] },
      { nombre: "Cochifrito", precio: "23,00 €", sinGluten: true },
      { nombre: "Mollejitas de cordero", precio: "22,50 €", sinGluten: true },
      { nombre: "Morcilla de Burgos", precio: "11,95 €", sinGluten: true },
      { nombre: "Queso manchego Pérez Arquero", precio: "16,90 €", alergenos: ["lacteos"], sinGluten: true },
      { nombre: "Rueda de ibéricos con queso", precio: "19,90 €", alergenos: ["lacteos"], sinGluten: true },
      { nombre: "Calamares a la romana", precio: "16,90 €", alergenos: ["moluscos", "gluten"] },
      { nombre: "Calamar a la plancha", precio: "19,95 €", alergenos: ["moluscos"], sinGluten: true },
      { nombre: "Coquinas o tellinas", precio: "15,80 €", alergenos: ["moluscos"], sinGluten: true },
      { nombre: "Navajas a la plancha", precio: "17,95 €", nota: "12 unidades", alergenos: ["moluscos"], sinGluten: true },
      { nombre: "Pulpo a la gallega", precio: "23,90 €", alergenos: ["moluscos"], sinGluten: true },
      { nombre: "Pulpo a la parrilla", precio: "23,90 €", alergenos: ["moluscos"], sinGluten: true },
      { nombre: "Sepia a la plancha", precio: "18,90 €", alergenos: ["moluscos"], sinGluten: true },
      { nombre: "Chopitos", precio: "16,90 €", alergenos: ["crustaceos"] },
      { nombre: "Gambas al ajillo", precio: "18,90 €", alergenos: ["crustaceos"], sinGluten: true },
      { nombre: "Gambas blancas gordas de Huelva a la plancha", precio: "25,90 €", alergenos: ["crustaceos"], sinGluten: true },
      { nombre: "Caracoles caseros", precio: "16,90 €", alergenos: ["crustaceos"], sinGluten: true },
      { nombre: "Anchoa del Cantábrico sobre cama de tomate concassé", precio: "19,50 €", alergenos: ["pescado"], sinGluten: true },
      { nombre: "Bogavante a la parrilla", precio: "24,00 €", alergenos: ["crustaceos"], sinGluten: true },
      { nombre: "Zamburiñas a la plancha", precio: "2,10 € / unidad", alergenos: ["crustaceos"], sinGluten: true },
      { nombre: "Gambones a la plancha", precio: "18 € / 8 unidades", alergenos: ["crustaceos"], sinGluten: true },
    ],
  },
  {
    id: "ensaladas",
    titulo: "Ensaladas",
    platos: [
      { nombre: "Ensalada mixta", precio: "8,95 €", sinGluten: true },
      { nombre: "Ensalada de la casa", descripcion: "Ensalada templada con verduritas y ventresca", precio: "9,95 €", alergenos: ["pescado"], sinGluten: true },
    ],
  },
  {
    id: "cuchara",
    titulo: "Platos de cuchara",
    platos: [
      { nombre: "Sopa castellana", precio: "8,90 €", alergenos: ["huevo", "gluten"] },
      { nombre: "Callos al Martín", precio: "10,95 €", alergenos: ["gluten"] },
      { nombre: "Risotto de boletus", descripcion: "Con queso opcional", precio: "10,95 €", alergenos: ["lacteos"] },
      { nombre: "Salmorejo cordobés con huevo duro y crujiente de jamón", precio: "9,50 €", nota: "Temporada estival" },
    ],
  },
  {
    id: "revueltos",
    titulo: "Revueltos",
    platos: [
      { nombre: "Revuelto de boletus con crocante de jamón", precio: "10,90 €", alergenos: ["huevo"], sinGluten: true },
      { nombre: "Revuelto de ajetes con gambas", precio: "11,50 €", alergenos: ["huevo"], sinGluten: true },
      { nombre: "Revuelto de morcilla de Burgos con piñones", precio: "10,80 €", alergenos: ["huevo", "frutos_cascara"], sinGluten: true },
    ],
  },
  {
    id: "verduras",
    titulo: "Verduras y hortalizas",
    platos: [
      { nombre: "Timbal de berenjena crujiente con pimiento rojo y ventresca a la miel de caña", precio: "11,90 €", alergenos: ["gluten"], sinGluten: true },
      { nombre: "Alcachofitas tiernas con almejas", precio: "10,90 €", sinGluten: true },
      { nombre: "Setas variadas con boletus y crujiente de jamón", precio: "10,80 €", sinGluten: true },
      { nombre: "Habitas baby confitadas con jamón", precio: "9,20 €", sinGluten: true },
    ],
  },
  {
    id: "arroces",
    titulo: "Arroces",
    nota: "Mínimo 2 personas. Precio por persona. Todos nuestros arroces son elaborados al momento con ingredientes naturales.",
    platos: [
      { nombre: "Arroz caldoso con conejo tradicional", descripcion: "Receta antigua familiar de la abuela Antonia", precio: "17 € / pers.", sinGluten: true },
      { nombre: "Arroz caldoso con bogavante", precio: "23 € / pers.", alergenos: ["crustaceos"], sinGluten: true },
      { nombre: "Arroz caldoso con carabineros", precio: "25 € / pers.", alergenos: ["crustaceos"], sinGluten: true },
      { nombre: "Paella mixta", precio: "16 € / pers.", alergenos: ["crustaceos"], sinGluten: true },
      { nombre: "Arroz negro", precio: "16 € / pers.", alergenos: ["crustaceos"], sinGluten: true },
      { nombre: "Paella marisco", precio: "19 € / pers.", alergenos: ["crustaceos"], sinGluten: true },
      { nombre: "Paella senyoret o ciego", precio: "18 € / pers.", alergenos: ["crustaceos"], sinGluten: true },
      { nombre: "Paella valenciana", precio: "16 € / pers.", sinGluten: true },
    ],
  },
  {
    id: "carnes",
    titulo: "Carnes",
    platos: [
      { nombre: "Entrecot de ternera", precio: "18,50 €", sinGluten: true },
      { nombre: "Solomillo de ternera", precio: "24,80 €", sinGluten: true },
      { nombre: "Solomillo de ternera con foie", precio: "26,90 €", sinGluten: true },
      { nombre: "Chuletón de ternera premium", precio: "27,90 €", nota: "500 g", sinGluten: true },
      { nombre: "Chuletillas de lechal", precio: "18,90 €", sinGluten: true },
      { nombre: "Carrillada de ternera al Pedro Ximénez", precio: "17,90 €", alergenos: ["por_confirmar"], sinGluten: true },
      { nombre: "Rabo de toro a la cordobesa", precio: "18,50 €", alergenos: ["por_confirmar"], sinGluten: true },
      { nombre: "Solomillo ibérico con salsa pimienta", precio: "15,80 €", alergenos: ["por_confirmar"], sinGluten: true },
      { nombre: "Cachopo", precio: "19,50 €", alergenos: ["gluten"], sinGluten: true, nota: "También disponible sin gluten" },
      { nombre: "Paletilla de lechal", precio: "28,50 €", sinGluten: true },
      { nombre: "Cochinillo asado", precio: "27,50 €", sinGluten: true },
    ],
  },
  {
    id: "pescados",
    titulo: "Pescados",
    platos: [
      { nombre: "Bacalao a la riojana", precio: "18,90 €", alergenos: ["pescado", "gluten"] },
      { nombre: "Rodaballo al ajillo", precio: "24,00 €", alergenos: ["pescado"], sinGluten: true },
      { nombre: "Merluza a la plancha", precio: "22,50 €", alergenos: ["pescado"], sinGluten: true },
      { nombre: "Merluza rebozada", precio: "22,50 €", alergenos: ["pescado", "gluten"] },
      { nombre: "Emperador a la plancha", precio: "18,50 €", alergenos: ["pescado"], sinGluten: true },
      { nombre: "Lomos de lubina al ajillo", precio: "17,90 €", alergenos: ["pescado"], sinGluten: true },
      { nombre: "Corvina confitada", precio: "22,50 €", alergenos: ["pescado"] },
    ],
  },
];

export type Vino = { nombre: string; precio: string; revisar?: string };
export type GrupoVinos = { region: string; vinos: Vino[] };

export const VINOS: GrupoVinos[] = [
  { region: "Gallego", vinos: [{ nombre: "Albariño", precio: "18,00 €" }] },
  {
    region: "Rueda",
    vinos: [
      { nombre: "Verdejo Castilla de Aza", precio: "13,50 €" },
      { nombre: "Corrector verdejo", precio: "11,50 €", revisar: "Nombre difícil de leer en la foto" },
    ],
  },
  {
    region: "Ribera del Duero",
    vinos: [
      { nombre: "Emilio Moro", precio: "33,00 €" },
      { nombre: "Viña Buena", precio: "15,99 €" },
      { nombre: "Protos", precio: "19,00 €" },
      { nombre: "Pata Negra", precio: "19,00 €" },
    ],
  },
  {
    region: "Rioja",
    vinos: [
      { nombre: "Cune", precio: "18,00 €" },
      { nombre: "Ramón Bilbao", precio: "19,00 €" },
    ],
  },
  {
    region: "Manchegos",
    vinos: [
      { nombre: "Biazu blanco ecológico", precio: "10,50 €", revisar: "Nombre difícil de leer en la foto" },
      { nombre: "Biazu tinto ecológico", precio: "10,50 €", revisar: "Nombre difícil de leer en la foto" },
      { nombre: "Verdejo", precio: "12,00 €" },
    ],
  },
  { region: "Espumoso", vinos: [{ nombre: "Alejandrino", precio: "25,00 €" }] },
  { region: "Italiano rosado", vinos: [{ nombre: "Lambrusco", precio: "12,50 €" }] },
  { region: "Semidulce", vinos: [{ nombre: "Dulce María", precio: "13,50 €" }] },
];

export function buscarPlato(nombre: string): Plato | undefined {
  for (const c of CARTA) {
    const p = c.platos.find((x) => x.nombre === nombre);
    if (p) return p;
  }
  return undefined;
}
