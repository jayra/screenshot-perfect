import { describe, expect, it } from "vitest";
import { buscarPlato, CARTA } from "@/data/carta";

describe("Carta", () => {
  it("lists rices at per-person prices from the current menu", () => {
    expect(buscarPlato("Arroz caldoso con bogavante")?.precio).toBe("23 € / pers.");
    expect(buscarPlato("Arroz caldoso con carabineros")?.precio).toBe("25 € / pers.");
  });

  it("uses current (white) menu prices, not last year's", () => {
    expect(buscarPlato("Chuletón de ternera premium")?.precio).toBe("27,90 €");
    expect(buscarPlato("Cochinillo asado")?.precio).toBe("27,50 €");
  });

  it("marks gluten-free only dishes that appear on the green menu", () => {
    expect(buscarPlato("Calamares a la romana")?.sinGluten).toBeFalsy();
    expect(buscarPlato("Merluza rebozada")?.sinGluten).toBeFalsy();
    expect(buscarPlato("Cachopo")?.sinGluten).toBe(true);
  });

  it("requires a minimum of two people for rices", () => {
    expect(CARTA.find((c) => c.id === "arroces")?.nota).toMatch(/Mínimo 2 personas/);
  });
});
