const express = require('express');
const homeRouter = express.Router();
const Home = require('../models/home');

homeRouter.get('/', async (req, res) => {
    const todo = await Home.getAll();
    // console.log(todo)
    res.json(todo);
});

module.exports = homeRouter;