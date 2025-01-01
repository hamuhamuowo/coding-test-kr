function solution(my_string, alp) {
    return [...my_string].map(str => {
        if(str === alp) {
            return str.toUpperCase();
        }
        return str;
    }).join('');
}