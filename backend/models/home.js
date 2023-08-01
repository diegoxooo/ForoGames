const db = require("../db/db");

const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT t.idTema, t.tema, j.idJuegos, j.juego FROM temas t JOIN juegos j USING (idJuegos) ORDER BY idTema DESC", (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

const getFiltro = (tema=null) => {
    return new Promise((resolve, reject) => {
        let query = "SELECT * FROM temas t JOIN juegos j USING (idJuegos) ";
        if(tema!=null){
            query+=" WHERE tema LIKE '%" + tema + "%' ";
        }

        db.query(query, (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        })
    })
}

module.exports = {
    getAll: getAll,
    getFiltro: getFiltro
}