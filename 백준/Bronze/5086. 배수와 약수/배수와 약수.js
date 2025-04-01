const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
for(let i = 0; i < arr.length - 1; i++) {
    const [a, b] = arr[i].split(' ').map(Number);
    if(a % b === 0 && a / b >= 1) {
        console.log('multiple');
    } else if(b % a === 0 && b / a >= 1) {
        console.log('factor');
    } else {
        console.log('neither');
    }
}