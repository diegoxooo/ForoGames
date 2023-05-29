const db = require("../db/db");

const insertTema = ({ tema, idJuegos }) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO temas (tema, idJuegos) VALUES (?, ?)", [tema, idJuegos], (err, result) => {
            if (err) reject(err);
            if (result) { resolve(result); }
        });
    });
}

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

const getByTema = (tema) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM temas WHERE tema = ?", [tema], (err, rows) => {
            if (err) reject(err);
            resolve(rows[0]);
        });
    });
}

module.exports = {
    insertTema: insertTema,
    insertComentario: insertComentario,
    getById: getById,
    getByTema: getByTema
}