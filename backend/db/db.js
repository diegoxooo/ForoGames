const mysql = require('mysql');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "izquierdofp",
    port: 3306,
    database: "foro"
});

module.exports = pool;