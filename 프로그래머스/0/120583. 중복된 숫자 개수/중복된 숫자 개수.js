function solution(array, n) {
    let count = 0;
    array.forEach(num => {
        if(num === n) count++;
    })
    return count;
}