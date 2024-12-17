function solution(a, b, c, d) {
    const dice = [a, b, c, d].sort((x, y) => x - y);
    const counts = {};
    
    dice.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });
    
    const uniqueNums = Object.keys(counts).map(Number); // 한 번 이상 등장 숫자
    const frequencies = Object.values(counts); // 몇 번 겹쳤는지?
    
    // 1. 네 주사위 모두 같은 숫자
    if (frequencies.length === 1) {
        return 1111 * dice[0];
    }
    
    // 2. 세 주사위가 같고 하나가 다른 경우 (3개 1개씩 겹쳤는지)
    if (frequencies.includes(3) && frequencies.includes(1)) {
        const p = uniqueNums.find(key => counts[key] === 3);
        const q = uniqueNums.find(key => counts[key] === 1);
        return Math.pow(10 * p + q, 2);
    }
    
    // 3. 두 개씩 같은 숫자 (2개씪 겹쳤는지)
    if (frequencies.length === 2 && frequencies.includes(2)) {
        const [p, q] = uniqueNums;
        return (p + q) * Math.abs(p - q);
    }
    
    // 4. 두 개는 같고 나머지 두 개가 다른 경우 (2개 1개 1개 겹쳤는지)
    if (frequencies.includes(2) && frequencies.includes(1)) {
        const [p, q, r] = uniqueNums;
        const duplicateNum = uniqueNums.find(num => counts[num] === 2);
        const otherNums = uniqueNums.filter(num => num !== duplicateNum);
        return otherNums[0] * otherNums[1];
    }
    
    // 5. 모든 숫자가 다른 경우
    return dice[0];
}