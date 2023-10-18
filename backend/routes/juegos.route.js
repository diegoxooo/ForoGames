const express = require('express');
const gameRoute = express.Router();
const Game = require('../models/juegos');

gameRoute.post('/', async (req, res) => {
    const juego = await Game.postJuego(req.body.juego);
    res.json(juego);
});