function solution(n, control) {
    const arr = control.split('');
    arr.forEach(str => {
        if(str === 'w') {
            n++;
        } else if(str === 's') {
            n--;
        } else if (str === 'd') {
            n += 10;
        } else if (str === 'a') {
            n -= 10;
        }
    })
    return n;
}