const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < arr.length; i++) {
    const sides = arr[i].split(' ').map(Number).sort((a, b) => a - b);
    const [a, b, c] = sides;

    if (a === 0 && b === 0 && c === 0) break;

    if (a + b <= c) {
        console.log('Invalid');
    } else if (a === b && b === c) {
        console.log('Equilateral');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles');
    } else {
        console.log('Scalene');
    }
}
