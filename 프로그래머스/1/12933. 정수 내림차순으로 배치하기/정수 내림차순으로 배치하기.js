function solution(n) {
    return parseInt([...n.toString()].map(Number).sort((a,b) => b - a).join(''));
}