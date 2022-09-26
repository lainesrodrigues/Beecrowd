var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let raio = parseFloat(lines.slice());
let p = 3.14159 
let area = p * raio * raio

console.log(`A=${area.toFixed(4)}`)