const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
function getDivisors(n) {
      let divisors = [];

      for (let i = 1; i <= n; i++) {
        if (n % i === 0 && n !== i) {
          divisors.push(i);
        }
      }
  
      return divisors;
}

for(let i = 0; i < arr.length-1; i++) {
    const divisors = getDivisors(arr[i]);
    const answer = divisors.reduce((acc, cur) => acc + cur, 0);
    if(answer === arr[i]) {
        console.log(`${arr[i]} = ${divisors.join(' + ')}`);
    } else {
        console.log(`${arr[i]} is NOT perfect.`);
    }
}