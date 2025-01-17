const express = require('express');
const cors = require('cors');

const app = express();

// require('dotenv').config()
require('./db/db');
const homeRoute = require('./routes/home.route');
const logRoute = require('./routes/log.route');
const temaRoute = require('./routes/tema.route');
const themeRoute = require('./routes/theme.route');
const gameRoute = require('./routes/juegos.route');
const userRoute = require('./routes/usuario.route');
const respuestaRoute = require('./routes/respuesta.route');

// const app = express();

app.use(cors());
app.use(express.json());

app.use('/', homeRoute);
app.use("/log", logRoute);
app.use('/temas', temaRoute);
app.use('/tema', themeRoute);
app.use('/juego', gameRoute);
app.use('/usuario', userRoute);
app.use('/respuesta', respuestaRoute);

// app.get("/", (req, res) => {
//     console.log("Estamos en root");
// });

const port = 8080;
const server = app.listen(port, () =>{
    console.log("Servidor escuchando en el puerto " + port);
})