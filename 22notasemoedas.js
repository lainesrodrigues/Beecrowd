var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let ced = [100, 50, 20, 10, 5, 2, 1]

let valor = (lines.shift());
var atual = valor;

var notas100 = parseInt(atual/100);
atual -= notas100*ced[0];

var notas50 = parseInt(atual/50);
atual -= notas50*ced[1];

var notas20 = parseInt(atual/20);
atual -= notas20*ced[2];

var notas10 = parseInt(atual/10);
atual -= notas10*ced[3];

var notas5 = parseInt(atual/5);
atual -= notas5*ced[4];

var notas2 = parseInt(atual/2);
atual -= notas2*ced[5];

var notas1 = (atual);

console.log(valor);
console.log(`${notas100} nota(s) de R$ 100,00`);
console.log(`${notas50} nota(s) de R$ 50,00`);
console.log(`${notas20} nota(s) de R$ 20,00`);
console.log(`${notas10} nota(s) de R$ 10,00`)
console.log(`${notas5} nota(s) de R$ 5,00`)
console.log(`${notas2} nota(s) de R$ 2,00`);
console.log(`${notas1} nota(s) de R$ 1,00`);