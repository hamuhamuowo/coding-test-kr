function solution(board, moves) {
    let basket = [];
    let count = 0;

    moves.forEach(move => {
        const column = move - 1;

        for (let row = 0; row < board.length; row++) {
            if (board[row][column] !== 0) {
                const doll = board[row][column];
                board[row][column] = 0;

                if (basket[basket.length - 1] === doll) {
                    basket.pop();
                    count += 2; // 터진 인형 두 개 추가
                } else {
                    basket.push(doll);
                }
                break;
            }
        }
    });

    return count;
}