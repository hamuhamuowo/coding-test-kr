function solution(arr1, arr2) {
    return arr1.map((row, i) => {
        return row.map((value, j) => {
            return value + arr2[i][j];
        });
    });
}