function solution(n) {
    let answer = 0;
    for (let i = n; i > 0; i--) {
        if(n % 2 === 0 && i % 2 === 0) {
            console.log(i);
            answer += i**2;
        } else if(n % 2 !== 0 && i % 2 !== 0) {
            answer += i;
        }
    }
    return answer;
}