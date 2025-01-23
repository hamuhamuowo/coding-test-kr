function solution(t, p) {
    let count = 0;
    for(let i = 0; i < t.length - p.length + 1; i++) {
        const num = parseInt(t.slice(i, i+p.length));
        if(num <= parseInt(p)) count++;
    }
    return count;
}