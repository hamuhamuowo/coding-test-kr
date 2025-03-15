function solution(X, Y) {
    const countX = Array(10).fill(0);
    const countY = Array(10).fill(0);
    
    for (let num of X) countX[num]++;
    for (let num of Y) countY[num]++;
    
    let result = "";
    
    for (let i = 9; i >= 0; i--) {
        const commonCount = Math.min(countX[i], countY[i]);
        result += i.toString().repeat(commonCount);
    }
    
    if (result === "") return "-1";
    if (result[0] === "0") return "0";
    
    return result;
}