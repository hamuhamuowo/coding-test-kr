function solution(n) {
    let count = 0;
    for(let i = 4; i <= n; i++) {
        let numCount = 0;
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) numCount++;
        }
        
        if(numCount >= 3) count++;
    }
    return count;
}