const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
arr.shift();
arr.sort((a, b) => a - b).forEach(v => console.log(v));