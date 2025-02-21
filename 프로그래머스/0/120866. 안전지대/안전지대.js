function solution(board) {
    const n = board.length;
    const dangerZone = Array.from({ length: n }, () => Array(n).fill(0));
    
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 0], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                directions.forEach(([dx, dy]) => {
                    const ni = i + dx;
                    const nj = j + dy;
                    if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
                        dangerZone[ni][nj] = 1;
                    }
                });
            }
        }
    }
    
    let safeCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (dangerZone[i][j] === 0) {
                safeCount++;
            }
        }
    }
    
    return safeCount;
}
