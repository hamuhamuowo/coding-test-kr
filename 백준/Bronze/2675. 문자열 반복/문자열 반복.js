const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +arr[0];
let answer = '';
for(let i = 1; i <= n; i++) {
    const [num, str] = arr[i].split(' ');
    for(let j = 0; j < str.length; j++) {
        answer += str[j].repeat(num);
    }
    answer += '\n';
}
console.log(answer);