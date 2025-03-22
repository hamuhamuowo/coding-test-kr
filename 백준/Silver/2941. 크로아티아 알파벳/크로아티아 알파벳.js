const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let answer = input;
const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
croatia.sort((a, b) => b.length - a.length);
for(let str of croatia) {
    answer = answer.split(str).join('*');
}
console.log(answer.length);