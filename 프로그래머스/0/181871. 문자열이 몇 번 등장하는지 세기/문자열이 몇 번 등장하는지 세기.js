function solution(myString, pat) {
    let count = 0;
    let start = 0;
    
    while(1) {
        const i = myString.indexOf(pat, start);
        if(i === -1) break;
        count++;
        start = i + 1;
    }
    
    return count;
}