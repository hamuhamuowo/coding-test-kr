const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let count = 0;
let N = parseInt(input);

while (N >= 0) {
    if (N % 5 === 0) {
        count += N / 5;
        console.log(count);
        return;
    }
    N -= 3;
    count++;
}

console.log(-1);
