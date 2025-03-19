const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const answer = [];
let star = '';
for(let i = 0; i < parseInt(input); i++) {
    star += '*';
    answer.push(star);
}
console.log(answer.join('\n'));