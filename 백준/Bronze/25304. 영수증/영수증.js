const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const x = parseInt(arr[0]);
const n = parseInt(arr[1]);
let count = 0;
for(let i = 2; i < 2 + n; i++) {
    const [price, num] = arr[i].split(' ').map(Number);
    count += price * num;
}
count === x ? console.log('Yes') : console.log('No');