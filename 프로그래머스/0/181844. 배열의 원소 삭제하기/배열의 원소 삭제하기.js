function solution(arr, delete_list) {
    delete_list.forEach(num => arr = arr.filter(v => v !== num));
    return arr;
}