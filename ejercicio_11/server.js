const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hola desde Node.js en Docker con Nodemo");
});

app.get("/api/data", (req, res) => {
    const data = {
        message: "¡Datos desde el servidor Node.js!",
        timestamp: new Date()
    };
    res.json(data);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});