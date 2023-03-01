const mysql = ('require/promise');

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

    // const result = await conexion.query('INSERT INTO personas VALUES("Juan", "Moreno")')
    // conexion.end()
}
connetdb()
module.exports = connetdb