function solution(arr) {
    const answer = [];
    arr.forEach(val => {
        const temp = new Array(val).fill(val);
        answer.push(...temp);
    })
    return answer;
}