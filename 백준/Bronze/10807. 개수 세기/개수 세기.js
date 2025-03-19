const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const nums = arr[1].split(' ').map(Number);
const count = nums.filter(v => v === Number(arr[2]));
console.log(count.length);