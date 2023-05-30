const db = require("../db/db");

const insertComentario = (comentario, idTema, idUsuario) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO comentarios (comentario, idTema, idUsuario) VALUES (?, ?, ?)", [comentario, idTema, idUsuario], (err, result) => {
            if (err) reject(err);
            if (result) { resolve(result); }
        });
    });
}

const getById = (idTema) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT c.comentario, t.tema, u.usuario FROM comentarios c JOIN usuarios u USING (idUsuario) JOIN temas t USING (idTema) WHERE idTema = ?", [idTema], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

module.exports = {
    insertComentario: insertComentario,
    getById: getById
}