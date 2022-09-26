var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines.shift())
let y = parseFloat(lines.shift())

let consumo = x/y

console.log(`${consumo.toFixed(3)} km/l`)

