function solution(arr, k) {
    const uniqueArr = [...new Set(arr)];
    return [...uniqueArr.slice(0, k), ...new Array(Math.max(0, k - uniqueArr.length)).fill(-1)];
}