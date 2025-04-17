const input = require("fs").readFileSync("/dev/stdin").toString().trim();
for(let i = parseInt(input); i > 0; i--) {
    const star = '*'.repeat(i);
    console.log(star);
}