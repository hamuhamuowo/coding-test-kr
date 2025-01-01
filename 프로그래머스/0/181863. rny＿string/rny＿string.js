function solution(rny_string) {
    return [...rny_string].map(str => {
        return str === 'm' ? 'rn' : str;
    }).join('');
}