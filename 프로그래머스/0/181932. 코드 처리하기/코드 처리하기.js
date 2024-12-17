function solution(code) {
    let mode = 0;
    let ret = '';
    code = code.split('');
    code.forEach((c, i) => {
        if(c !== '1' && mode === 0 && i % 2 === 0) {
            ret += c;
        } else if (c !== '1' && mode === 1 && i % 2 !== 0) {
            ret += c;
        } else if(c === '1') {
            mode = mode === 0 ? 1 : 0;
        }
    })
    return ret !== '' ? ret : "EMPTY";
}