function solution(a, b) {
    const atob = parseInt(`${a}${b}`);
    const num = 2 * a * b;
    return atob > num ? atob : num;
}