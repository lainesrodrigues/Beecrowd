var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let tempo_seg = parseInt(lines.shift())

let hora = parseInt(tempo_seg/3600) // de seg pra h

let rest_h = parseInt(tempo_seg%3600) // resto da divisao de h

let min = parseInt(rest_h/60) // resto de h pra seg

let rest_min = parseInt(rest_h%60) //resto da divisao de min

let seg = rest_min

console.log(`${hora}:${min}:${seg}`)
