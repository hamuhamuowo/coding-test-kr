function solution(dots) {
    const xCoords = dots.map(dot => dot[0]);
    const yCoords = dots.map(dot => dot[1]);

    const width = Math.abs(Math.max(...xCoords) - Math.min(...xCoords));  // 가로
    const height = Math.abs(Math.max(...yCoords) - Math.min(...yCoords)); // 세로

    return width * height;
}