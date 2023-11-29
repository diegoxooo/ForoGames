const express = require('express');
const respuestaRoute = express.Router();
const Respuesta = require('../models/respuesta');

respuestaRoute.post('/', async (req, res) => {
    let id = req.body.id;
    let respuesta = req.body.respuesta;
    let idU = req.body.idUsuario;
    const coment = await Respuesta.responderComent(id, respuesta, idU);
    res.json(coment);
});

respuestaRoute.get('/', async (req, res) => {
    let id = req.params.id;
    const coment = await Respuesta.getRespuesta();
    res.json(coment);
});

respuestaRoute.get('/:id', async (req, res) => {
    let id = req.params.id;
    const coment = await Respuesta.getRespuestaById(id);
    res.json(coment);
});

module.exports = respuestaRoute;