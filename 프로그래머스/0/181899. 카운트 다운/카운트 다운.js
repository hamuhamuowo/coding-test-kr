function solution(start_num, end_num) {
    let answer = new Array(start_num-end_num+1).fill(start_num);
    return answer.map((num, i) => (num - i));
}