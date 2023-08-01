const db = require("../db/db");

const getJuegos = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM juegos", (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

const getTemaByJuego = (idJuego) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM temas WHERE idJuegos = ?", [idJuego], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    getJuegos: getJuegos,
    getTemaByJuego: getTemaByJuego
}