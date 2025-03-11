function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    
    let zeroCount = lottos.filter(num => num === 0).length;
    let matchCount = lottos.filter(num => win_nums.includes(num)).length;
    
    let maxRank = rank[matchCount + zeroCount];
    let minRank = rank[matchCount];
    
    return [maxRank, minRank];
}
