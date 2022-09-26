var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var primeiro = lines.shift();
primeiro = primeiro.replace(/(\r\n|\n|\r)/gm, "");
primeiro = primeiro.split(' ');
var segundo = lines.shift().split(' ');

let x1 = parseFloat(primeiro[0])
let y1 = parseFloat(primeiro[1])

let x2 = parseFloat(segundo[0])
let y2 = parseFloat(segundo[1])

let dist = Math.sqrt((Math.pow(x2-x1,2)) + (Math.pow(y2-y1,2)))

console.log(`${dist.toFixed(4)}`)