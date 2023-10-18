const express = require('express');
const temaRoute = express.Router();
const Theme = require('../models/tema');
const Coment = require('../models/comentario');
const Game = require('../models/juegos');

temaRoute.post('/tema/:id', async (req, res) => {
    console.log(req.body)
    console.log(req.body.tema)
    console.log(req.body.idJuegos)
    console.log(req.params.id)
    console.log(req.body.comentario)

    const tema = await Theme.insertTema(req.body);
    const theme = await Theme.getByTema(req.body.tema);
    const comentario = await Coment.insertComentario(req.body.comentario, theme.idTema, req.params.id);

    res.json({tema, comentario});
});

temaRoute.get('/tema/:id', async (req, res) => {
    const juegos = await Game.getJuegos();

    res.json(juegos);
});

module.exports = temaRoute;