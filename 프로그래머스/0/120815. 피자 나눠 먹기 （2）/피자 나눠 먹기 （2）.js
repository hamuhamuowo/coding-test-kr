function solution(n) {
    let piece = 1;
    while(true) {
        if(piece % n === 0 && piece % 6 === 0) {
            break;
        }
        piece++;
    }
    return piece / 6;
}