const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
const nums = arr.map(Number);
console.log(`${Math.min(...nums)} ${Math.max(...nums)}`);