// const express = require('express');
// const app = express()
// const host = "localhost"
// const port = 8000;

// app.use(express.json())
// app.use(express.text());
// app.use(express.urlencoded())

// app.get("/adios", (req,res)=>{
//     console.log(req.body.nombre)
// })

// app.get('/persona/:name/:apellido', (req, res) => {
//     console.log(req.params)
//     res.send(`hola ${req.params.name} ${req.params.apellido}`);
// })

// app.get("/home/query", (req, res) => {
//   console.log(req.query);
//   res.send(`estas son querys y la query es ${req.params.saludo}`);
// });

// app.get("/home/body", (req, res) => {
//     const contBody = req.body;  
//     //res.send(`el nombre que contiene el body es ${contBody}`);
//     res.send(contBody);
//     // console.log(contBody);
// });

// app.post('/help', (req, res) => {
//   res.send("hola desde help");
// });

// app.use((req, res, next) => {
//   if (req.query.nombre === "sebastian") {
//     next();
//   }
//   res.send("error no hay query")
// });

// app.get("/home", (req, res) => {
//   res.send(`la query es ${req.query.nombre}`);
// });

// app.use((req, res) => {
//     res.status(404).send("<h1>Error 404</h1>")
// });

// app.listen(port, host, () => {
//     console.log(`el link de acc es http://${host}:${port}`)
// })