function solution(x) {
    const num = x.toString().split('').map(Number).reduce((acc, cur) => acc + cur, 0);
    return x % num === 0;
}