function solution(arr) {
    const start = arr.indexOf(2);
    const end = arr.lastIndexOf(2);
    if(start !== end) {
        return arr.slice(start, end+1);
    } else if(start === -1) {
        return [-1];
    } else {
        return [arr[start]];
    }
}