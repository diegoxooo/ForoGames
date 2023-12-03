const express = require('express');
const themeRoute = express.Router();
const Coment = require('../models/comentario');

themeRoute.get('/:id', async (req, res) => {
    // console.log(req.params.id)
    let id = req.params.id;
    const coment = await Coment.getById(id);
    // console.log(coment);
    res.json(coment);
});

themeRoute.post('/:id', async (req, res) => {
    // console.log(req.params.id);
    let id = req.params.id;
    let comentario = req.body.comentario;
    let usuario = req.body.usuario;
    // console.log("Comentario: " + comentario);
    const coment = await Coment.insertComentario(comentario, id, usuario);
    res.json(coment);
});

themeRoute.get('/c/:idComentario', async (req, res) => {
    let id = req.params.idComentario;
    const coment = await Coment.getByIdComentario(id);
    res.json(coment);
});

themeRoute.delete('/:id', async (req, res) => {
    let id = req.params.id;
    const coment = await Coment.deleteComent(id);
    res.json(coment);
});

themeRoute.post('/c/:idComentario', async (req, res) => {
    let id = req.params.idComentario;
    let comentario = req.body.comentario;
    const coment = await Coment.editarComentario(id, comentario);
    res.json(coment);
});

module.exports = themeRoute;