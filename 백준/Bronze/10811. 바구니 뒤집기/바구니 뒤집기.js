const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = arr[0].split(' ').map(Number);
const baskets = Array.from({ length: N }, (_, i) => i + 1);

for(let i = 1; i < arr.length; i++) {
    const [k, j] = arr[i].split(' ').map(Number);
    baskets.splice(k - 1, j - k + 1, ...baskets.slice(k - 1, j).reverse());
}

console.log(baskets.join(' '));