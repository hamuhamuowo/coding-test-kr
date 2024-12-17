function solution(num_list) {
    const idx = num_list.length-1;
    const num = num_list[idx] > num_list[idx-1] ? num_list[idx] - num_list[idx-1] : num_list[idx] * 2;
    return [...num_list, num];
}