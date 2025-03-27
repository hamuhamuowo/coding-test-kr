const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const paper = Array.from(Array(100), () => Array(100).fill(0)); // 100x100 도화지
for(let i = 0; i < +n; i++) {
    const [x, y] = arr[i].split(' ').map(Number);
    for(let dx = 0; dx < 10; dx++) {
        for(let dy = 0; dy < 10; dy++) {
            paper[x + dx][y + dy] = 1;
        }
    }
}

let count = 0;
for(let i = 0; i < 100; i++) {
    for(let j = 0; j < 100; j++) {
        if(paper[i][j] === 1) count++;
    }
} 
console.log(count);