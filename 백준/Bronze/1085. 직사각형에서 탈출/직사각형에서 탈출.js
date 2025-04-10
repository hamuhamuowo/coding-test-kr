const [x, y, w, h] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const a = Math.min(x, w-x);
const b = Math.min(y, h-y);
console.log(Math.min(a, b));