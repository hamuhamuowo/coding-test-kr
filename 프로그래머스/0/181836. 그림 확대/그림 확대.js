function solution(picture, k) {
    let answer = [];
    for(let row of picture) {
        let createRow = '';
        for(let char of row) {
            createRow += char.repeat(k);
        }
        
        for(let i = 0; i < k; i++) {
            answer.push(createRow);
        }
    }
    return answer;
}