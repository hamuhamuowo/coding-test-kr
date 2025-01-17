function solution(sides) {
    sides.sort((a,b) => a-b);
    let [a, b] = sides;
    return (a + b) - (b - a) - 1;
}