function solution(keyinput, board) {
    let [x, y] = [0, 0];
    let [maxX, maxY] = board;
    
    let maxMoveX = Math.floor(maxX / 2);
    let maxMoveY = Math.floor(maxY / 2);
    
    keyinput.forEach(v => {
        if (v === 'up') {
            if (y < maxMoveY) y++;
        }
        if (v === 'down') {
            if (y > -maxMoveY) y--;
        }
        if (v === 'left') {
            if (x > -maxMoveX) x--;
        }
        if (v === 'right') {
            if (x < maxMoveX) x++;
        }
    });

    return [x, y];
}
