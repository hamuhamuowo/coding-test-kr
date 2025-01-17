function solution(balls, share) {
    const factorial = (num) => {
        let answer = 1;
        for(let i = 2; i <= num; i++) {
            answer *= i;
        }
        return answer;
    }
    
    const num1 = factorial(balls);
    const num2 = factorial(balls - share) * factorial(share);
    
    return Math.round(num1 / num2);
}