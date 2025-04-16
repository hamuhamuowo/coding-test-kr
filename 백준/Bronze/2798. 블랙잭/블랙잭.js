const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = arr[0].split(' ').map(Number);
const cards = arr[1].split(' ').map(Number);
let max = 0;
for(let i = 0; i < N - 2; i++) {
    for(let j = i + 1; j < N - 1; j++) {
        for(let k = j + 1; k < N; k++) {
            const sum = cards[i] + cards[j] + cards[k];
            if(max < sum && sum <= M) {
                max = sum;
            }
        }
    }
}

console.log(max);