const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
let [a, b, c] = arr.sort((a, b) => a - b);
if(a + b <= c) {
    c = a + b - 1;
}

console.log(a + b + c);