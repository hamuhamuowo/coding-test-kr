function solution(order) {
    const arr = order.toString().split('').map(Number);
    return arr.filter(v => v >= 3 && v % 3 === 0).length;
}