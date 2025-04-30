const [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

// 최대공약수
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 최소공배수
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

console.log(gcd(a,b));
console.log(lcm(a,b));