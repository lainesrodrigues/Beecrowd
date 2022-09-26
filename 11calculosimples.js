var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var primeiro = lines.shift();
primeiro = primeiro.replace(/(\r\n|\n|\r)/gm, "");
primeiro = primeiro.split(' ');
var segundo = lines.shift().split(' ');

let peca1_c = parseInt(primeiro[0]);
let peca1_n = parseInt(primeiro[1]);
let peca1_v = parseFloat(primeiro[2]);

let peca2_c = parseInt(segundo[0]);
let peca2_n = parseInt(segundo[1]);
let peca2_v = parseFloat(segundo[2]);

let soma = (peca1_n*peca1_v) + (peca2_n*peca2_v);

console.log(`VALOR A PAGAR: R$ ${soma.toFixed(2)}`);