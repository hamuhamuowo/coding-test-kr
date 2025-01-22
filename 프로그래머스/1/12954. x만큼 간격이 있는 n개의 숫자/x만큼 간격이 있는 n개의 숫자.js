function solution(x, n) {
    const answer = [x];
    let num = x;
    for(let i = 1; i < n; i++) {
        num += x;
        answer.push(num);
    }
    return answer;
}