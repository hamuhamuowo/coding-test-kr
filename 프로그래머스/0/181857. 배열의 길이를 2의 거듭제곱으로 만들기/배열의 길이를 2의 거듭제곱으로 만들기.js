function solution(arr) {
    const length = 2 ** Math.ceil(Math.log2(arr.length));
    return [...arr, ...new Array(length - arr.length).fill(0)];
}