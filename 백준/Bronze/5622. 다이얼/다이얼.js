const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const times = {
    3: 'ABC',
    4: 'DEF',
    5: 'GHI',
    6: 'JKL',
    7: 'MNO',
    8: 'PQRS',
    9: 'TUV',
    10: 'WXYZ',
}

let count = 0;
for(let i = 0; i < input.length; i++) {
    for(let j = 3; j <= 10; j++) {
        if(times[j].includes(input[i])) {
            count += j;
        }
    }
}

console.log(count);