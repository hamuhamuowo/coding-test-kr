const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, x] = arr[0].split(' ').map(Number);
const nums = arr[1].split(' ').map(Number);
const answer = nums.filter(v => v < x);
console.log(answer.join(' '));