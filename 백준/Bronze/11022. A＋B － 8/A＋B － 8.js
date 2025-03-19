const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
for(let i = 0; i < parseInt(n); i++) {
    const [a, b] = arr[i].split(' ').map(Number);
    console.log(`Case #${i+1}: ${a} + ${b} = ${a+b}`);
}