const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const [N, B] = input.split(' ').map(Number);
console.log(N.toString(B).toUpperCase());