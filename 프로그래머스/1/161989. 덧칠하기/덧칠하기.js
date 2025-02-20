function solution(n, m, section) {
    if(m === 1) return section.length;
    
    let count = 0;
    let paintedUntil = 0;
    
    for (let i = 0; i < section.length; i++) {
        if (section[i] > paintedUntil) {
            count++;
            paintedUntil = section[i] + m - 1;
        }
    }
    
    return count;
}