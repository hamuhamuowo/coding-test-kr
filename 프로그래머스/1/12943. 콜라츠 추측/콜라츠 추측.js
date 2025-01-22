function solution(num) {
    let answer = num;
    let count = 0;
    while(count <= 500) {
        if(answer === 1) return count;
        
        if(answer % 2 === 0) {
            answer /= 2;
        } else if(answer % 2 !== 0) {
            answer = answer * 3 + 1;
        }
        count++;
    }
    return -1;
}