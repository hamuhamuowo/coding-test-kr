const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = n.split(' ').map(Number);
const arrA = [];
const arrB = [];
for(let i = 0; i < N * 2; i++) {
    if(i < N) {
        arrA.push(arr[i].split(' ').map(Number));
    } else {
        arrB.push(arr[i].split(' ').map(Number));
    }
}

const answer = [];
for(let i = 0; i < arrA.length; i++) {
    const row = [];
    for(let j = 0; j < arrA[i].length; j++) {
        row.push(arrA[i][j] + arrB[i][j]);
    }
    answer.push(row.join(' '));
}
console.log(answer.join('\n'));