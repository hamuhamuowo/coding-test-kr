function solution(my_string, is_prefix) {
    const arr = [];
    let str = '';
    [...my_string].forEach(s => {
        str += s;
        arr.push(str);
    });
    return arr.includes(is_prefix) ? 1 : 0;
}