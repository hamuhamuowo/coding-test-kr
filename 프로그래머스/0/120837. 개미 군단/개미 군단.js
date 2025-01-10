function solution(hp) {
    const five = parseInt(hp / 5);
    const three = parseInt((hp % 5) / 3);
    const one = parseInt((hp % 5) % 3);
    return five + three + one;
}