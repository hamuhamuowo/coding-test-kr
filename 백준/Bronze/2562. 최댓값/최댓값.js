const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const max = Math.max(...arr);
const index = arr.indexOf(max) + 1;
console.log([max, index].join('\n'));