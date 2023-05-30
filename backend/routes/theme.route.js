const express = require('express');
const themeRoute = express.Router();
const Coment = require('../models/comentario');

themeRoute.get('/:id', async (req, res) => {
    console.log(req.params.id)
    let id = req.params.id;
    const coment = await Coment.getById(id);
    console.log(coment);
    res.json(coment);
})

module.exports = themeRoute;