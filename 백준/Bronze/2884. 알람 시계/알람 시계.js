const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let [h, m] = input.split(' ').map(Number);
if(h === 0) {
    h = 24;
}
let time = h * 60 + m - 45;
let hour = Math.floor(time / 60);
const min = time % 60;
if(hour >= 24) {
    hour -= 24;
}
console.log(`${hour} ${min}`);