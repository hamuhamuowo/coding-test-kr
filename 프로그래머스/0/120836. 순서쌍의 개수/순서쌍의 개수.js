function solution(n) {
    const answer = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            answer.push([i, n / i])
        }
    }
    return answer.length;
}