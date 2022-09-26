var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseFloat(lines.shift());

let NUMBER = A
let SALARY = (B*C).toFixed(2)

console.log(`NUMBER = ${NUMBER}`)
console.log(`SALARY = U$ ${SALARY}`)