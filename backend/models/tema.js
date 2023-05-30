const db = require("../db/db");

const insertTema = ({ tema, idJuegos }) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO temas (tema, idJuegos) VALUES (?, ?)", [tema, idJuegos], (err, result) => {
            if (err) reject(err);
            if (result) { resolve(result); }
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
    getByTema: getByTema
}