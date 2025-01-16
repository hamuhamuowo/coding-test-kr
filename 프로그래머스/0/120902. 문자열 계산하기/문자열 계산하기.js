function solution(my_string) {
    const arr = my_string.split(' ');
    let answer = parseInt(arr[0]);
    for(let i = 1; i < arr.length; i++) {
        if(arr[i-1] === '+') {
            answer += parseInt(arr[i]);
        } 
        if(arr[i-1] === '-') {
            answer -= parseInt(arr[i]);
        }
        if(isNaN(parseInt(arr[i]))) {
            continue;
        }
    }
    return answer;
}