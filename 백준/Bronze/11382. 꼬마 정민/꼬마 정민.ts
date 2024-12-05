import fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
const answer = input.reduce((acc, cur) => acc + cur, 0);
console.log(answer);
