const input = require("fs").readFileSync("/dev/stdin").toString().trim();
for(let i = 1; i <= 9; i++) {
    const num = parseInt(input);
    console.log(`${num} * ${i} = ${num * i}`);
}