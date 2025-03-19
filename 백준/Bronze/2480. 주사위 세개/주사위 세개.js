const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const [first, second, third] = input.split(' ').map(Number);

if(first === second && second === third) {
    console.log(10000 + (first * 1000));
} else if(first === second || first === third) {
    console.log(1000 + (first * 100));
} else if (second === third) {
    console.log(1000 + (second * 100));
} else {
    console.log(Math.max(first, second, third) * 100)
}