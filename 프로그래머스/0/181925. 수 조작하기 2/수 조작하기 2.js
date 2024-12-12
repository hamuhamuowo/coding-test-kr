function solution(numLog) {
    let result = '';
    numLog.forEach((_, i) => {
        const answer = numLog[i+1] - numLog[i];
        if(answer === 1) {
            result += 'w';
        } else if (answer === -1) {
            result += 's';
        } else if (answer === 10) {
            result += 'd'
        } else if (answer === -10) {
            result += 'a';
        }
    })
    return result;
}