const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [num, m] = n.split(' ').map(Number);
const balls = new Array(num).fill(0);
for(let i = 0; i < m; i++) {
    const [a, b, c] = arr[i].split(' ').map(Number);
    for(let j = a-1; j <= b-1; j++) {
        balls[j] = c;
    }
}
console.log(balls.join(' '));