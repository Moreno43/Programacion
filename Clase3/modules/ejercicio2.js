const os = require('os');
const fs = require("fs");

const version = os.version();
const InfoUsuario = os.userInfo().username;
const Procesador = os.cpus().slice(0, 1).map((registro) => registro.model);

function memoriaT() {
    let memoriaTotal = os.totalmem();

    let memoriaMb = memoriaTotal / (1024 * 1024);

    let memoriaTGb = memoriaMb / 1024;

    let memoriaTotalGb = Math.round(memoriaTGb);

    return memoriaTotalGb;
}

let final = (` version OS: ${version} \n Nombre de Usuario: ${InfoUsuario} \n Info Procesador: ${Procesador} \n Memoria Total: ${memoriaT()}`);

fs.writeFileSync('../Caracteristicas.txt', final);