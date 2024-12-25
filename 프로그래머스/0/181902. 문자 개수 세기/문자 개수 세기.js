function solution(my_string) {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    const result = new Array(str.length).fill(0);
    [...my_string].forEach(s => {
        if(str.indexOf(s) !== -1) result[str.indexOf(s)]++;   
    })
    return result;
}