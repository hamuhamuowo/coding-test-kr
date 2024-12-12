function solution(l, r) {
    let count = [];
    for(let i = l; i <= r; i++) {
        let str = i.toString();
        if([...str].every(char => char === '0' || char === '5')) {
            count.push(i);
        }
    }
    return count.length ? count : [-1];
}