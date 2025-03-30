const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const X = Number(input);
let limit = 1;
let n = 1;

while (limit < X) {
  limit += n + 1;
  n++;
}

const a = n - (limit - X);

if (n % 2 === 0) {
  console.log(`${a}/${n - a + 1}`);
} else {
  console.log(`${n - a + 1}/${a}`);
}