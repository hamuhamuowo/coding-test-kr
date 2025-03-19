const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const answer = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 1; i <= M; i++) {
    const [k, j] = input[i].split(" ").map(Number);
    [answer[k - 1], answer[j - 1]] = [answer[j - 1], answer[k - 1]];
}

console.log(answer.join(" "));