function solution(ingredient) {
    let count = 0;
    let stack = [];

    for (let item of ingredient) {
        stack.push(item);
        if (stack.length >= 4) {
            if (stack.slice(-4).join('') === '1231') {
                count++;
                stack.splice(-4, 4); // 마지막 4개 제거
            }
        }
    }

    return count;
}
