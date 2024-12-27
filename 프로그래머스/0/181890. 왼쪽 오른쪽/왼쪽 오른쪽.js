function solution(str_list) {
    const lindex = str_list.indexOf('l');
    const rindex = str_list.indexOf('r');
    
    // 둘 다 없는 경우
    if (lindex === -1 && rindex === -1) {
        return [];
    }
    
    // l만 있는 경우
    if (lindex !== -1 && (rindex === -1 || lindex < rindex)) {
        return str_list.slice(0, lindex);
    }
    
    // r만 있거나, r이 l보다 먼저 나오는 경우
    if (rindex !== -1 && (lindex === -1 || rindex < lindex)) {
        return str_list.slice(rindex + 1);
    }
    
    return [];
}