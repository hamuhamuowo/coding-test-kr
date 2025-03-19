const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const i = +arr[1];
console.log(arr[0][i-1]);