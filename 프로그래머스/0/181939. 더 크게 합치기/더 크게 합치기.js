function solution(a, b) {
    const atob = parseInt(`${a}${b}`);
    const btoa = parseInt(`${b}${a}`);
    return atob > btoa ? atob : btoa;
}