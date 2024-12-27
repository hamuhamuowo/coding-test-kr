function solution(num_list, n) {
    const after = num_list.slice(n);
    const before = num_list.slice(0, n);
    return [...after, ...before];
}