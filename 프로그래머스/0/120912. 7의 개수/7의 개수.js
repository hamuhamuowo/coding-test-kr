function solution(array) {
    let count = 0;
    array.map(v => v.toString()).forEach(v => {
        count += v.split('').filter(num => num === '7').length;
    })
    return count;
}