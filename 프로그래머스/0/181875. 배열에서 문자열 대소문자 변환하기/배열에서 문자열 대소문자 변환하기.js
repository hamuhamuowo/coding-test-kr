function solution(strArr) {
    return strArr.map((str, i) => {
        if(i % 2 === 0) {
            return str.toLowerCase();
        }
        return str.toUpperCase();
    })
}