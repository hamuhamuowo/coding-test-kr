function solution(arr) {
    const col = arr[0].length; // 열
    const row = arr.length; // 행
    
    if(row > col) {
        arr.forEach(item => {
            for(let i = 0; i < row-col; i++) {
                item.push(0);
            }
        })
    } else {
        for(let i = 0; i < col-row; i++) {
            const zero = new Array(col).fill(0);
            arr.push(zero);
        }
    }
    return arr;
}