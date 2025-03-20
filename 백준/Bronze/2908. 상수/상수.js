const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const [a, b] = input.split(' ').map(v => {
    return Number(v.split('').reverse().join(''));
})
console.log(a > b ? a : b);