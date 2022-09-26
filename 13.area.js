var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var primeiro = lines.shift();
primeiro = primeiro.replace(/(\r\n|\n|\r)/gm, "");
primeiro = primeiro.split(' ');

let A = parseFloat(primeiro[0]);
let B = parseFloat(primeiro[1]);
let C = parseFloat(primeiro[2]);

let triangulo = (A * C)/2
let pi = 3.14159
let area_c = pi * (C*C)
let trapezio = ((A+B)*C)/2
let quadrado = B*B
let retangulo = A*B

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)
console.log(`CIRCULO: ${area_c.toFixed(3)}`)
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
console.log(`RETANGULO: ${retangulo.toFixed(3)}`)
