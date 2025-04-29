const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
arr.sort((a, b) => a - b);
const a = Math.floor(arr.reduce((acc, cur) => acc + cur, 0) / 5);
console.log(a);
console.log(arr[2]);