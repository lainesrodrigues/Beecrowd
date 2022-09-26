var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let horas = parseInt(lines.shift())
let vel = parseInt(lines.shift())

let total = horas*vel
let gasto = total/12

console.log(`${gasto.toFixed(3)}`)

//12km por l
//