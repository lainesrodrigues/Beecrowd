var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var primeiro = lines.shift();
primeiro = primeiro.replace(/(\r\n|\n|\r)/gm, "");
primeiro = primeiro.split(' ');

let a = parseFloat(primeiro[0])
let b = parseFloat(primeiro[1])
let c = parseFloat(primeiro[2])

let maiorAB = (a+b+Math.abs(a-b))/2

if (maiorAB > c){
  console.log(`${maiorAB} eh o maior`)
} else
console.log(`${c} eh o maior`)