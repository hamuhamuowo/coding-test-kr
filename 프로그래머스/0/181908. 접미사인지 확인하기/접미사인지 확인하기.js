function solution(my_string, is_suffix) {
    const result = [];
    for(let i = 0; i < my_string.length; i++) {
        result.push(my_string.split('').slice(i).join(''));
    }
    return result.includes(is_suffix) ? 1 : 0;
}