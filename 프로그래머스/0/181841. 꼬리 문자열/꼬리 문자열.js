function solution(str_list, ex) {
    return str_list.map(str => {
        if(str.indexOf(ex) !== -1) {
            return ""
        }
        return str;
    }).join('');
}