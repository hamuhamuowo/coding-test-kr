const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const remain = new Set(arr.map(v => v %= 42));
console.log(remain.size);