const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const maxLength = Math.max(...arr.map(word => word.length));
let answer = "";
for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < arr.length; j++) {
        answer += arr[j][i] || "";
    }
}
console.log(answer);