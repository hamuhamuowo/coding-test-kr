function solution(left, right) {
    function getDivisors(n) {
      let divisors = [];
      for (let i = 1; i <= n; i++) {
        if (n % i === 0) divisors.push(i);
      }
      return divisors;
    }
    
    let answer = 0;
    for(let i = left; i <= right; i++) {
        const count = getDivisors(i);
        if(count.length % 2 === 0) answer += i;
        else answer -= i;
    }
    return answer;
}