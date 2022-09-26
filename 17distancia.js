var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines.shift())

let dist = x*2

console.log(`${dist} minutos`)
// 1km/2min = 60min
// 