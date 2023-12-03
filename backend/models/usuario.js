const db = require("../db/db");

const insert = ({ email, usuario, contrasena }) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO usuarios (email, usuario, contra) VALUES (?, ?, ?)", [email, usuario, contrasena], (err, result) => {
            if (err) reject(err);
            if (result) { resolve(result); }
        });
    });
}

const modificar = ({ usuario, contrasena, email }) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE usuarios SET usuario = ?, contra = ? WHERE email = ?", [usuario, contrasena, email], (err, result) => {
            if(err) reject(err);
            if (result) { resolve(result); }
        });
    });
}

const getByMail = (email) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, rows) => {
            if (err) reject(err);
            resolve(rows[0]);
        });
    });
}

const getById = (id) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM usuarios WHERE idUsuario = ?", [id], (err, rows) => {
            if (err) reject(err);
            resolve(rows[0]);
        });
    });
}

module.exports = {
    insert: insert,
    modificar: modificar,
    getByMail: getByMail,
    getById: getById
}