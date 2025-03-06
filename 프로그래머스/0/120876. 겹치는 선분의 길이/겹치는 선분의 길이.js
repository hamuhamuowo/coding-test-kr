function solution(lines) {
    let map = new Array(201).fill(0);
    lines.forEach(([start, end]) => {
        for (let i = start + 100; i < end + 100; i++) {
            map[i]++;
        }
    });
    return map.filter(count => count > 1).length;
}