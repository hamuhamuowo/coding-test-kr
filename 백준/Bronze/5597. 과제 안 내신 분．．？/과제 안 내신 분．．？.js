const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const nums = arr.map(Number).sort((a,b) => a-b);
const answer = [];
for(let i = 1; i <= 30; i++) {
    if(nums.indexOf(i) === -1) {
        answer.push(i)
    }
}
console.log(answer.join('\n'));