const { resolve } = require("path");
const db = require("../db/db");
const { rejects } = require("assert");

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

const deleteRespuesta = (id) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM respuesta WHERE id = ?", [id], (err, result) => {
            if (err) reject(err);
            if (result) { resolve(result); }
        });
    });
}

const editarRespuesta = (id, respuesta) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE TABLE respuesta SET respuesta = ? WHERE id = ?", [respuesta, id], (err, result) => {
            if (err) reject(err);
            if (result) { resolve(result); }
        });
    });
}

module.exports = {
    responderComent: responderComent,
    getRespuesta: getRespuesta,
    getRespuestaById: getRespuestaById,
    deleteRespuesta: deleteRespuesta,
    editarRespuesta: editarRespuesta
}