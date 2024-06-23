// src/database.js
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'multipedidos123',
    database: 'multipedidos'
});

module.exports = pool.promise();
