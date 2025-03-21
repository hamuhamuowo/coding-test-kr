const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const answer = new Array(6).fill(0);
const need = [1,1,2,2,2,8];
const arr = input.split(' ').map(Number);
for(let i = 0; i < need.length; i++) {
    if(arr[i] > need[i]) {
        answer[i] = need[i] - arr[i];
    } else if (arr[i] < need[i]) {
        answer[i] = need[i] - arr[i];
    }
}

console.log(answer.join(' '));