function solution(numbers, direction) {
    if(direction === 'right') {
        const item = numbers.pop();
        numbers.unshift(item);
    } else {
        const item = numbers.shift();
        numbers.push(item);
    }
    return numbers;
}