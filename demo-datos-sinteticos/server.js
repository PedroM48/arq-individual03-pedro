const app = require("./app");
const { seed } = require("./seed");

const PORT = 3000;

// Generamos 20 usuarios sintéticos
app.locals.users = seed(20);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
