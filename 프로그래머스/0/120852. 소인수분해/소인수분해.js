function solution(n) {
    let answer = new Set();
    for(let i = 2; i <= n; i++) {
        while (n % i === 0) {
            n = n / i;
            answer.add(i);
        }
    }
    return [...answer];
}