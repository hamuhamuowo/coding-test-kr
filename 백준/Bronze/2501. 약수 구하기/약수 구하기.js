const [N, K] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
// 약수 리스트를 알아야 함
function getDivisors(n) {
      let divisors = [];

      for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
          divisors.push(i);
        }
      }
  
      return divisors;
    }

const arr = getDivisors(N);
// 그 중에서 K번째로 작은 것을 알아야 함
console.log(arr[K-1] ? arr[K-1] : 0);