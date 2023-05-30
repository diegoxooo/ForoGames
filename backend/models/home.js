const db = require("../db/db");

const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT t.idTema, t.tema, j.juego FROM temas t JOIN juegos j USING (idJuegos)", (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

const getJuego = (idJuegos) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT juego FROM juegos WHERE idJuegos = ?", [idJuegos], (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        })
    })
}

module.exports = {
    getAll: getAll
}