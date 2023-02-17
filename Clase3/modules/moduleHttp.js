const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 8000;

// http.createServer((reques, response) =>{

//     response.write("este es mi host")
//     return  response.end
    
//     // if (reques.url === '/home') {
//     //     const read = fs.createReadStream("ruta_del_html");
//     //     read.pipe(response);
//     //     return response.end;
//     // }
//     // response.write('hello world');
//     // response.end

//     // if (reques.url === '/') {
//     //     response.write('inicio de proyecto');
//     //     return response.end
//     // }
// }).listen(port);

// const http = require("http");
// const fs = require("fs");

// const host = "localhost";
// const port = 3000;

http.createServer((request, response) => {
    // response.write("este es mi host");
    // return response.end();

    if (request.url === "/") {
      response.write(fs.readFileSync('../index.html', 'utf-8'));
      return response.end();
    }
  }).listen(port, host, ()=>{
    console.log(`Server is running on http://${host}:${port}`)
  });


