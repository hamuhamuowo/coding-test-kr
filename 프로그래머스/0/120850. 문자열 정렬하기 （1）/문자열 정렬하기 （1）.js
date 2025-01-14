function solution(my_string) {
    const answer = my_string.split('').filter(v => !isNaN(Number(v))).map(Number).sort((a,b)=>a-b);
    return answer.length === 0 ? [0] : answer;
}