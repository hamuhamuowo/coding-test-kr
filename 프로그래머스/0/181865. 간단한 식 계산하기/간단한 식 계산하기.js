function solution(binomial) {
    const [a, op, b] = binomial.split(' ');
    if(op === '+') {
        return parseInt(a) + parseInt(b);
    }
    if(op === '-') {
        return parseInt(a) - parseInt(b);
    }
    return parseInt(a) * parseInt(b);
}