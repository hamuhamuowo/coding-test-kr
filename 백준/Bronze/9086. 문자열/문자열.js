const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +arr[0];
for(let i = 1; i <= n; i++) {
    const start = arr[i][0];
    const last = arr[i][arr[i].length-1];
    console.log(start + last);
}