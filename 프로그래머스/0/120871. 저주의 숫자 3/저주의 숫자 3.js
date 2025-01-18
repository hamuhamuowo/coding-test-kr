function solution(n) {
    let count = 0;
    let num = 1;
    
    while (true) {
        if (num % 3 === 0 || num.toString().includes('3')) {
            num++;
            continue;
        }
        count++;
        
        if (count === n) {
            return num;
        }
        
        num++;
    }
}