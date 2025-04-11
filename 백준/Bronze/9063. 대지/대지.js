const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const x = [];
const y = [];
for(let xy of arr) {
    const [a, b] = xy.split(' ').map(Number);
    x.push(a);
    y.push(b);
}
const numX = Math.max(...x) - Math.min(...x);
const numY = Math.max(...y) - Math.min(...y);

console.log(numX * numY);