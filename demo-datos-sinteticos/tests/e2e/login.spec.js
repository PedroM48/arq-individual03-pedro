import { test, expect } from "@playwright/test";

test("Flujo completo: login sintético y carga del e-commerce", async ({ page }) => {

  // 1. Ir a la página de login
  await page.goto("http://localhost:3000/login.html");

  // 2. Obtener usuarios sintéticos desde la API
  const res = await page.request.get("http://localhost:3000/users");
  const users = await res.json();
  const firstUser = users[0];

  // 3. Llenar campos del login
  await page.fill("#email", firstUser.email);
  await page.fill("#password", "123456");

  // 4. Enviar formulario
  await page.click("button[type='submit']");

  // 5. Verificar redirección
  await expect(page).toHaveURL("http://localhost:3000/");

  // 6. Verificar que se carguen tarjetas de usuarios sintéticos
  const cards = page.locator(".card");
  await expect(cards).toHaveCount(users.length);

  // 7. Verificar que el nombre del primer usuario sea visible
  await expect(cards.first().locator("h3")).toBeVisible();
});
