const db = require("../db/db");

const insert = ({ email, usuario, contrasena }) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO usuarios (email, usuario, contra) VALUES (?, ?, ?)", [email, usuario, contrasena], (err, result) => {
            if (err) reject(err);
            if (result) { resolve(result); }
        });
    });
}

const getByUser = (usuario) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM usuarios WHERE usuario = ?", [usuario], (err, rows) => {
            if (err) reject(err);
            resolve(rows[0]);
        });
    });
}

module.exports = {
    insert: insert,
    getByUser: getByUser
}