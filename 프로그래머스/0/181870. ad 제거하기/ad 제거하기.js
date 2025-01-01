function solution(strArr) {
    let answer = [];
    strArr.forEach(str => {
        if(str.indexOf("ad") === -1) {
            answer.push(str);
        }
    })
    return answer;
}