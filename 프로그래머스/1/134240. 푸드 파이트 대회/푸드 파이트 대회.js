function solution(food) {
    const answer = [];
    for(let i = 1; i < food.length; i++) {
        const arr = Array(Math.floor(food[i] / 2)).fill(i);
        answer.push(...arr);
    }
    answer.push(...Array(food[0]).fill(0));
    for(let i = food.length-1; i > 0; i--) {
        const arr = Array(Math.floor(food[i] / 2)).fill(i);
        answer.push(...arr);
    }
    return answer.join('');
}