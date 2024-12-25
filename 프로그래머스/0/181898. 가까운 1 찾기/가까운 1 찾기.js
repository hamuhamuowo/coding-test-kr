function solution(arr, idx) {
    return arr.map((v, i) => (v = i < idx ? 0 : v)).indexOf(1);
}