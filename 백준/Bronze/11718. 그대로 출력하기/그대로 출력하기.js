const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
arr.forEach(v => console.log(v));