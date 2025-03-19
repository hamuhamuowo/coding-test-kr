const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const answer = arr[1].split('').map(Number).reduce((acc, cur) => acc + cur, 0);
console.log(answer);