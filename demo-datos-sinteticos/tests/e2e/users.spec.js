import { test, expect } from "@playwright/test";

test("La página principal muestra usuarios sintéticos correctamente", async ({ page }) => {

  await page.goto("http://localhost:3000/");

  const cards = page.locator(".card");

  // Espera a que se generen automáticamente
  await expect(cards).toHaveCountGreaterThan(0);

  // Verificar que muestra datos
  await expect(cards.first().locator("h3")).toBeVisible();
  await expect(cards.first().locator("p")).toBeVisible();
});
