function solution(a, b, n) {
    let answer = 0;
    while (n >= a) {
        let cola = Math.floor(n / a) * b;
        answer += cola; 
        n = n % a + cola;
    }
    return Math.round(answer);
}