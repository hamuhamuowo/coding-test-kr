const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
console.log(arr.reduce((acc, cur) => acc * cur, 1));