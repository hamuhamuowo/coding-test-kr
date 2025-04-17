const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const N = parseInt(input);

for (let i = N; i > 0; i--) {
    const space = ' '.repeat(N - i);
    const star = '*'.repeat(i);
    console.log(space + star);
}
