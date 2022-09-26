var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var A = toString(lines.shift()); //nome
var B = parseInt(lines.shift()); //sálario
var C = parseFloat(lines.shift()); //total

let desc = (C * 15)/100
let sal = desc+B

console.log(`TOTAL = R$ ${sal.toFixed(2)}`)