function solution(num, k) {
    const index = num.toString().indexOf(k) + 1;
    return index === 0 ? -1 : index;
}