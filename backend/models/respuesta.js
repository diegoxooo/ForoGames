const db = require("../db/db");

const responderComent = (id, respuesta, idUsuario) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO respuesta (respuesta, idComent, idUsuario) VALUES (?, ?, ?)", [respuesta, id, idUsuario], (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
}

const getRespuesta = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT r.*, u.usuario FROM respuesta r JOIN usuarios u ON r.idUsuario = u.idUsuario ", (err, result) => {
            if (err) reject(err);
            if (result) resolve (result);
        });
    });
}

const getRespuestaById = (id) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT r.*, u.usuario FROM respuesta r JOIN usuarios u ON r.idUsuario = u.idUsuario WHERE idComent = ? ", [id], (err, result) => {
            if (err) reject(err);
            if (result) resolve (result);
        })
    })
}

module.exports = {
    responderComent: responderComent,
    getRespuesta: getRespuesta,
    getRespuestaById: getRespuestaById
}