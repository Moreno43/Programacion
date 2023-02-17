const fs = require("fs");

for (let num = 0; num <= 10; num++) {

    let fin = (`Numero: ${num}`);
  fs.writeFileSync("../ejercicio1.txt", fin);
}