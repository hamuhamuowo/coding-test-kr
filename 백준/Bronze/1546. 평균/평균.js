const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
const nums = arr.map(Number);
const M = Math.max(...nums);

let score = 0;
for(let i = 0; i < parseInt(n); i++) {
    score += nums[i] / M * 100;;
}
console.log(score / parseInt(n));