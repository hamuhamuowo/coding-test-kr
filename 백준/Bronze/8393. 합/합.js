const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const n = parseInt(input);
let answer = 0;
for(let i = 1; i <= n; i++) {
    answer += i;
}
console.log(answer);