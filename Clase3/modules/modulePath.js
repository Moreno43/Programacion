//const path = require('path');

// crea, junta una salida adecuada de acuerdo al sistema operativo
// const fileJoin = path.join('consumible', '/propiedades', 'etc.js');
// console.log(fileJoin);

//la base de la ruta donde termina
// const fileBasename = path.basename(fileJoin);
// console.log(fileBasename);

// dar la ruta sin el archivo
// const fileDirname = path.dirname(fileJoin);
// console.log(fileDirname);

// dar la ruta pero en forma de objeto
// const fileParse = path.parse(fileJoin);
// console.log(fileParse);

//completa la ruta del sistema con la ruta proporcionada
// const fileResolve = path.resolve(fileJoin);
// console.log(fileResolve);

//codigo asincrono

const fs = require('fs');

// leer contenido de un archivo 
// const dato = fs.readFileSync('../dato.txt', 'utf-8');
// console.log(dato);

// const tue = fs.readFileSync('dato.txt');
// console.log(tue.toString());

// crear un archivo e inserta un contenido
//const n = "hola";
// fs.writeFileSync('../tercero.js', n);

// crear un archivo y añade un contenido
// const hola = `1 \n`;
// fs.writeFileSync('../tercero', hola, {
//     flag: 'a',
// });

//para que sirve el Sync?

// fs.readFile('../on.txt', 'utf-8', (err,data) => { 
// if(err){
//    console.log(err)
// }
//  console.log(data)
// })