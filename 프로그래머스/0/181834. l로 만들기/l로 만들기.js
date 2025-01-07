function solution(myString) {
    return [...myString].map(str => {
        if(str < 'l') {
            return 'l';
        }
        return str;
    }).join('');
}