const express = require('express');
const cors = require('cors');
const path = require('path'); // Importa el módulo path

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '../'))); // Esto sirve archivos estáticos desde la raíz del proyecto

// Datos de los planes de internet


// Ruta principal de la API
app.get('/', (req, res) => {
  res.send('Welcome to SpeedCom API');
});



// Escuchando en el puerto 3000
app.listen(port, () => {
  console.log(`SpeedCom API is running on http://18.221.18.137:${port}`);
});
