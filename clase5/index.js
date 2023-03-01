const express = require('express');
const {join} = require('path');
//const mysql = require('mysql2');
require('ejs');
const app = express();

const rutas = require('./routes/rutas.js');
const rutas2 = require('./routes/rutas2.js');
//const connetdb = require('./database');

//connectdb()

app.use(rutas);
app.use(rutas2);
app.get('View engine', 'ejs');
app.set('views', join(__dirname, './views'));
app.use(express.static('./static'));

app.get("/home", (req, res) => {
    res.send(`hola este es el web ${res.get('saludo')}`)
});

// app.use((req, res) => {
//     res.send("error")
// });

app.listen(8000)