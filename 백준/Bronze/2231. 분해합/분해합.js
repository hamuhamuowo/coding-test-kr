const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const answer = [];
for(let i = 1; i < Number(input); i++) {
    const nums = String(i).split('').map(Number);
    let sum = 0;
    for(let j = 0; j < nums.length; j++) {
        sum += nums[j];
    }
    sum += i;
    if(sum === Number(input)) {
        answer.push(i);
    }
}

if(answer.length === 0) {
    console.log(0);
} else {
    console.log(Math.min(...answer));
}