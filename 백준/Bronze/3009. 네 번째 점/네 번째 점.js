const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const x = [];
const y = [];
for(let xy of arr) {
    const [a, b] = xy.split(' ').map(Number);
    x.push(a);
    y.push(b);
}

const resultX = x.find(v => x.indexOf(v) === x.lastIndexOf(v));
const resultY = y.find(v => y.indexOf(v) === y.lastIndexOf(v));

console.log(resultX, resultY);