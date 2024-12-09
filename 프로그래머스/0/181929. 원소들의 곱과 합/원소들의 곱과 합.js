function solution(num_list) {
    let plus = num_list.reduce((acc, cur) => acc + cur, 0) ** 2;
    let multiply = num_list.reduce((acc, cur) => acc * cur, 1);
    return plus > multiply ? 1 : 0;
    
}