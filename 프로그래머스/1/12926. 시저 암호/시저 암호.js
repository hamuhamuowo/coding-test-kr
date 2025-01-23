function solution(s, n) {
    const abc = 'abcdefghijklmnopqrstuvwxyz';  // 알파벳 'a'부터 'z'까지 포함
    return [...s].map((v) => {
        if (v === ' ') return v; // 공백은 그대로 공백
        
        const isUpper = v === v.toUpperCase();  // 대소문자 구분
        
        // 소문자로 변환하여 인덱스 찾기
        let index = abc.indexOf(v.toLowerCase()) + n;
        
        // 'z'를 넘어가면 다시 'a'로 순환
        if (index >= abc.length) {
            index -= abc.length;
        }
        
        // 대문자일 경우 다시 대문자로 변환
        return isUpper ? abc[index].toUpperCase() : abc[index];
    }).join('');
}
