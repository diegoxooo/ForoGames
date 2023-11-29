const express = require('express');
const userRoute = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/usuario');

userRoute.post('/:mail', async (req, res) => {
    const usuario = await User.getByMail(req.params.mail);

    if(bcrypt.compareSync(req.body.antContra, usuario.contra)){
        const mod = await User.modificar(req.body.usuario, req.body.nvContra, req.params.mail);
        res.json(mod);
    }
});

module.exports = userRoute;