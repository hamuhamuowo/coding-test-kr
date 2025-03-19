const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const n = parseInt(input) / 4;
let answer = '';
for(let i = 0; i < n; i++) {
    answer += 'long ';
}
console.log(answer + 'int');
