function solution(n) {
    let answer = 1;
    let num = 1;
    
    while (answer * (num + 1) <= n) {
        num++;
        answer *= num;
    }
    
    return num;
}
