function solution(intStrs, k, s, l) {
    let ret = [];
    intStrs.forEach(intStr => {
        const temp = intStr.split('').map(Number).slice(s, s+l).join('');
        if(temp > k) ret.push(parseInt(temp));
    })
    return ret;
}