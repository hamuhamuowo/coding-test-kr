function solution(array) {
    const max = Math.max(...array);
    const i = array.indexOf(max);
    return [max, i];
}