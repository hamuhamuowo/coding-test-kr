function solution(s, skip, index) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('').filter(ch => !skip.includes(ch));

    return s.split('').map(ch => {
        let i = alpha.indexOf(ch);
        i = (i + index) % alpha.length;
        return alpha[i];
    }).join('');
}
