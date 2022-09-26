var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let R = parseFloat(lines.shift());

let pi = 3.14159
let area = (4/3.0) * pi * (R*R*R)

console.log(`VOLUME = ${area.toFixed(3)}`)