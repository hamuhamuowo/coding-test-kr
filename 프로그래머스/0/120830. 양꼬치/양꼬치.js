function solution(n, k) {
    const service = Math.trunc(n / 10) * 2000;
    return n * 12000 + k * 2000 - service;
}