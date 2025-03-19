const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = parseInt(input[0]);
const result = [];

for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    result.push(a + b);
}

console.log(result.join("\n"));
