function solution(my_string, overwrite_string, s) {
    let answer = my_string.split('');
    let index = 0;
    for(let i = s; i < overwrite_string.length + s; i++) {
        answer[i] = overwrite_string[index];
        index++;
    }
    return answer.join('');
}