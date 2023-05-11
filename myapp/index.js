const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');

const routesVuelos = require('./routes/Vuelos.routes');

app.use('/vuelos', vuelosRouter);

// CORS
app.use( cors({origin: whiteList}) );


app.get('/flights/:id/passengers/', 
    routesVuelos(), 
);


// Iniciar el servidor
const {PORT} = process.env || 3000;

server.listen(PORT, () => {
    console.log("Aplicacion corriendo correctamente", PORT);
});
