function solution(num, total) {
    const avg = total / num;
    const start = Math.floor(avg - (num - 1) / 2);
    let answer = [];
    for(let i = 0; i < num; i++) {
        answer.push(i + start);
    }
    return answer;
}