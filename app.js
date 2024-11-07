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
