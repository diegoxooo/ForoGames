const express = require('express');
const respuestaRoute = express.Router();
const Respuesta = require('../models/respuesta');

respuestaRoute.post('/', async (req, res) => {
    let id = req.body.id;
    let respuesta = req.body.respuesta;
    let idU = req.body.usuario;
    const coment = await Respuesta.responderComent(id, respuesta, idU);
    res.json(coment);
});

respuestaRoute.get('/', async (req, res) => {
    const coment = await Respuesta.getRespuesta();
    res.json(coment);
});

respuestaRoute.get('/:id', async (req, res) => {
    let id = req.params.id;
    const coment = await Respuesta.getRespuestaById(id);
    res.json(coment);
});

respuestaRoute.delete('/:id', async (req, res) => {
    let id = req.params.id;
    const coment = await Respuesta.deleteRespuesta(id);
    res.json(coment);
});

respuestaRoute.post('/:id', async (req, res) => {
    let id = req.params.id;
    let respuesta = req.body.respuesta;
    const coment = await Respuesta.editarRespuesta(id, respuesta);
    res.json(coment);
});

module.exports = respuestaRoute;