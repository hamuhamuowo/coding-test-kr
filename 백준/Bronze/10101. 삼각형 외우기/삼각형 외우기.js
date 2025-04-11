const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const sum = arr.reduce((acc, cur) => acc + cur, 0);
const uniqueAngles = new Set(arr);

let answer = '';
if (sum !== 180) {
    answer = 'Error';
} else if (arr.every(v => v === 60)) {
    answer = 'Equilateral';
} else if (uniqueAngles.size === 2) {
    answer = 'Isosceles';
} else {
    answer = 'Scalene';
}

console.log(answer);