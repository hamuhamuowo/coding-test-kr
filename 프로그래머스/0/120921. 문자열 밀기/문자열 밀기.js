function solution(A, B) {
    let arr = [...A];
    if(A === B) return 0;
    for(let i = 1; i <= A.length; i++) {
        const last = arr.pop();
        arr.unshift(last);
        if(arr.join('') === B) return i;
    }
    return -1;
}