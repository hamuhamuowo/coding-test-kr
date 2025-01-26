function solution(number, limit, power) {
    const getDivisors = (n) => {
        let divisorsCount = 0;
        for (let i = 1; i * i <= n; i++) {
            if (n % i === 0) {
                divisorsCount++;
                if (i !== n / i) {
                    divisorsCount++;
                }
            }
        }
        return divisorsCount;
    }
    
    const answer = [];
    for(let i = 1; i <= number; i++) {
        const count = getDivisors(i);
        if(count > limit) {
            answer.push(power);
        } else {
            answer.push(count);
        }
    }
    return answer.reduce((acc, cur) => acc + cur, 0);
    
}