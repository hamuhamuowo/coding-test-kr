const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const [A, B, V] = arr;
console.log(Math.ceil((V - B) / (A - B)));