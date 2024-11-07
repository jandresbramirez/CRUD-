// db.js
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'madp'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado éxitosamente a la base de datos');
});

module.exports = db;
