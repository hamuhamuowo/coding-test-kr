function solution(i, j, k) {
    let count = 0;
    for(let num = i; num <= j; num++) {
        count += num.toString().split('').filter(v => parseInt(v) === k).length;
    }
    return count;
}