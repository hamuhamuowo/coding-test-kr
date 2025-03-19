const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const n = parseInt(input);
for(let i = 1; i <= n; i++) {
    const blank = ' '.repeat(n - i);
    const star = '*'.repeat(i);
    console.log(blank + star);
}