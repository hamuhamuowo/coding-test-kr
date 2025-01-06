function solution(strArr) {
    let answer = {};
    strArr.map(v => {
        return v = v.length;
    }).forEach((n) => {
        answer[n] = (answer[n] || 0) + 1;
    })
    return Math.max(...Object.values(answer));
}