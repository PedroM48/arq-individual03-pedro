const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// Servimos la carpeta public
app.use(express.static(path.join(__dirname, "public")));

app.get("/users", (req, res) => {
  res.json(req.app.locals.users || []);
});

app.post("/users", (req, res) => {
  const user = req.body;
  req.app.locals.users.push(user);
  res.status(201).json(user);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // password sintética por defecto
  const fakePassword = "123456";
  const users = req.app.locals.users;
  const found = users.find(u => u.email === email);

  if (!found) {
    return res.json({ success: false, message: "Usuario no encontrado" });
  }

  if (password !== fakePassword) {
    return res.json({ success: false, message: "Contraseña incorrecta" });
  }

  return res.json({ success: true, message: "Login exitoso" });
});

module.exports = app;
