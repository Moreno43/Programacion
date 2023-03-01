const mysql = require('mysql2/promise');

async function connetdb (){
    const conexion = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'clientes'
    })

    const arrayObject = await conexion.query('SELECT * FROM personas')
    console.log(arrayObject[0])
    conexion.end()

    const found = arrayObject.find((element) => element > 0 );
    console.log(found);

    // const result = await conexion.query('INSERT INTO personas VALUES("Juan", "Moreno")')
    // conexion.end()
}
connetdb()
module.exports = connetdb