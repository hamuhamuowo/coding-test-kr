const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const nums = input[1].split(" ").map(Number);

function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let count = nums.filter(isPrime).length;
console.log(count);