function solution(my_string, s, e) {
    const sliceTxt = my_string.slice(s, e + 1);
    const reverseTxt = sliceTxt.split('').reverse().join('');
    
    const before = my_string.slice(0, s);
    const after = my_string.slice(e + 1);
    
    return before + reverseTxt + after;
}
