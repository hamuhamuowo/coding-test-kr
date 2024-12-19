function solution(my_strings, parts) {
    let answer = '';
    my_strings.forEach((str, i) => {
        const [s, e] = parts[i];
        const part = str.slice(s, e+1);
        answer += part;
    })
    return answer;
}