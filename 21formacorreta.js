var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let qtdias = parseInt(lines.shift())
let qtAnos, qtmeses;

qtAnos = parseInt(qtdias/365)
qtdias = qtdias%365

qtmeses = parseInt(qtdias/30)
qtdias = qtdias%30

console.log(`${qtAnos} ano  (s) `)
console.log(`${qtmeses} mes (es)`)
console.log(`${qtdias} dia (s)`)