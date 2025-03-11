function solution(s) {
    let count = 0; // 분해한 문자열 개수
    let i = 0;
    
    while (i < s.length) {
        let x = s[i]; // 첫글자
        let sameX = 0;
        let notSameX = 0;
        
        while (i < s.length) {
            if (s[i] === x) {
                sameX++;
            } else {
                notSameX++;
            }
            i++;

            if (sameX === notSameX) {
                break;
            }
        }
        
        count++;
    }
    
    return count;
}
