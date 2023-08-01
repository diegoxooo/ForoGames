const express = require('express');
const homeRouter = express.Router();
const Home = require('../models/home');

homeRouter.get('/', async (req, res) => {
    const todo = await Home.getAll();
    // console.log(todo)
    res.json(todo);
});

homeRouter.post('/', async (req, res) => {
    const filtro = await Home.getFiltro(req.body.tema, req.body.juego);
console.log(filtro);
    res.json(filtro);
});

module.exports = homeRouter;