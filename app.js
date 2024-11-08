// app.js para la aplicación del CRUD y direccionamiento de rutas
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Mostrar la página principal con formulario y lista de usuarios
app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.render('index', { users: results });
    });
});

// Crear un nuevo usuario (POST)
app.post('/add-user', (req, res) => {
    const { name, email } = req.body;
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(query, [name, email], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Actualizar usuario (POST)
app.post('/update-user', (req, res) => {
    const { id, name, email } = req.body;
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(query, [name, email, id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Eliminar usuario (GET)
app.get('/delete-user/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});






// app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Mostrar página principal
app.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.render('index', { users: results });
    });
});

// Agregar usuario
app.post('/add-user', (req, res) => {
    const { cedula, nombres, apellidos, fecha_nacimiento, correo, contraseña } = req.body;
    const query = `INSERT INTO users (cedula, nombres, apellidos, fecha_nacimiento, correo, contraseña) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(query, [cedula, nombres, apellidos, fecha_nacimiento, correo, contraseña], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Actualizar usuario
app.post('/update-user', (req, res) => {
    const { cedula, nombres, apellidos, fecha_nacimiento, correo, contraseña } = req.body;
    const query = `UPDATE users SET nombres = ?, apellidos = ?, fecha_nacimiento = ?, correo = ?, contraseña = ? WHERE cedula = ?`;
    db.query(query, [nombres, apellidos, fecha_nacimiento, correo, contraseña, cedula], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Eliminar usuario
app.get('/delete-user/:cedula', (req, res) => {
    const { cedula } = req.params;
    db.query('DELETE FROM users WHERE cedula = ?', [cedula], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});



// app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Mostrar página principal
app.get('/', (req, res) => {
    db.query('SELECT * FROM usuario', (err, results) => {
        if (err) throw err;
        res.render('index', { users: results });
    });
});

// Agregar usuario
app.post('/add-user', (req, res) => {
    const { Cedula, Nombres, Apellidos, FechaDeNacimiento, Correo, Contraseña } = req.body;
    const query = `INSERT INTO usuario (Cedula, Nombres, Apellidos, FechaDeNacimiento, Correo, Contraseña) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(query, [Cedula, Nombres, Apellidos, FechaDeNacimiento, Correo, Contraseña], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Actualizar usuario
app.post('/update-user', (req, res) => {
    const { Cedula, Nombres, Apellidos, FechaDeNacimiento, Correo, Contraseña } = req.body;
    const query = `UPDATE usuario SET Nombres = ?, Apellidos = ?, FechaDeNacimiento = ?, Correo = ?, Contraseña = ? WHERE Cedula = ?`;
    db.query(query, [Nombres, Apellidos, FechaDeNacimiento, Correo, Contraseña, Cedula], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Eliminar usuario
app.get('/delete-user/:cedula', (req, res) => {
    const { cedula } = req.params;
    db.query('DELETE FROM usuario WHERE Cedula = ?', [cedula], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
