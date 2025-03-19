const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let alpha = 'abcdefghijklmnopqrstuvwxyz';
const answer = alpha.split('').map(v => {
    if(input.indexOf(v) !== -1) {
        return input.indexOf(v);
    }
    return -1;
})
console.log(answer.join(' '));