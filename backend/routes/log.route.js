const express = require('express');
const logRoute = express.Router();
const Users = require('../models/usuario');
const bcrypt = require('bcrypt');
const moment = require('moment');
const jwt = require('jwt-simple');
const autenticacion = require('./autenticacion');

logRoute.post('/register', async (req, res) => {
    req.body.contrasena = bcrypt.hashSync(req.body.contrasena, 10);
    try{
    const result = await Users.insert(req.body);
    
    const user = await Users.getById(result.insertId);

    res.json({
        succesfull: createToken(user),
        done: "Login correct",
        idUsuario: user.idUsuario,
        userName: user.usuario,
        userMail: user.email, // Puede que innecesario
        admin: user.admin
    });
    // res.json(result);
    }catch(e){
        console.log("Ya existe un usuario con este email");
    }
    
});

logRoute.post('/login', async (req, res) => {
    const user = await Users.getByMail(req.body.email);
    if (user === undefined) {
        res.json({
            error: "Error usuario o contraseña no encontrados"
        });
    } else {
        const equals = bcrypt.compareSync(req.body.contrasena, user.contra);
        if (!equals) {
            res.json({ error: "El usuario o la contraseña son incorrectos" });
        } else {
            res.json({
                succesfull: createToken(user),
                done: "Login correct",
                idUsuario: user.idUsuario,
                userName: user.usuario,
                userMail: user.email, // Puede que innecesario
                admin: user.admin
            });
        }
    }
});

const createToken = (user) => {
    let payload = {
        userId: user.idUsuario,
        createdAt: moment().unix(),
        expiredAt: moment().add(1, 'day').unix(),
    }
    return jwt.encode(payload, "Token-Auth");
}

logRoute.use(autenticacion.checkToken)

module.exports = logRoute;