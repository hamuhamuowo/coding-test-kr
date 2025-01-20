function solution(score) {
    let scores = score.map(v => (v[0] + v[1]) / 2);
    const sortedScores = scores
        .map((score, index) => ({score, index}))
        .sort((a,b) => b.score -  a.score);
    
    let ranks = new Array(sortedScores.length);
    let rank = 1;
        for (let i = 0; i < sortedScores.length; i++) {
        if (i > 0 && sortedScores[i].score < sortedScores[i - 1].score) {
            rank = i + 1;
        }
        
        ranks[sortedScores[i].index] = rank;
    }
    
    return ranks;
}