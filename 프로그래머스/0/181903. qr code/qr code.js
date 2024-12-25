function solution(q, r, code) {
    let answer = '';
    [...code].forEach((v, i) => {
        if(i % q === r) answer += v;
    })
    return answer;
}