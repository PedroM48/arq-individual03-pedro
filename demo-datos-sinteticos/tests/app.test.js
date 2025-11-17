const request = require("supertest");
const app = require("../app");
const { seed } = require("../seed");

describe("Pruebas con datos sintéticos", () => {

  // Antes de las pruebas cargamos 10 usuarios sintéticos
  beforeAll(() => {
    app.locals.users = seed(10);
  });

  test("GET /users debe devolver 10 usuarios", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(10);
  });

  test("POST /users debe crear un usuario", async () => {
    const newUser = {
      id: "999",
      name: "Usuario Test",
      email: "test@example.com",
      age: 33
    };

    const res = await request(app).post("/users").send(newUser);

    expect(res.statusCode).toBe(201);
    expect(res.body.email).toBe("test@example.com");
  });
});
x