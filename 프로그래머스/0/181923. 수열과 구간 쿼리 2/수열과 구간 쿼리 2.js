function solution(arr, queries) {
    let answer = [];
    answer = queries.map(([s, e, k]) => {
        const filtered = arr.slice(s, e + 1).filter(num => num > k);
        return filtered.length ? Math.min(...filtered) : -1;
    });
    return answer;
}
