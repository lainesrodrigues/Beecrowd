var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let dias = parseInt(lines.shift())

// let ano = 365
let anos = parseInt(dias/365)
let quant_ano = anos*365
let rest_ano = dias - quant_ano

// let mes = 30
let meses = parseInt(rest_ano/30)
let quant_mes = (rest_ano%30)

console.log(`${anos} ano (s) `)
console.log(`${meses} mes (es)`)
console.log(`${quant_mes} dia (s)`)
