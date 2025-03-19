const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [h, m] = arr[0].split(' ').map(Number);
const plusMin = parseInt(arr[1]);
let time = h * 60 + m + plusMin;
let hour = Math.floor(time / 60) >= 24 ? Math.floor(time / 60) - 24 : Math.floor(time / 60);
let min = time % 60;

console.log(`${hour} ${min}`);
