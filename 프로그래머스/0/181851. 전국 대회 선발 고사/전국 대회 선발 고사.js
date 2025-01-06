function solution(rank, attendance) {
    let reRank = rank;
    attendance.forEach((a, i) => {
        if(!a) {
            reRank.splice(i, 1, '');
        }
    })
    
    const arr = reRank.filter(r => r !== '').sort((a, b) => a-b).map(Number);
    const [a, b, c] = arr.map(n => {
        return n = rank.indexOf(n);
    });
    return 10000 * a + 100 * b + c;
}