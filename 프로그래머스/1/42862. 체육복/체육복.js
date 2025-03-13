function solution(n, lost, reserve) {
    let realLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    let realReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);

    let count = n - realLost.length; // 기본적으로 체육복이 있는 학생 수

    for (let i = 0; i < realLost.length; i++) {
        let student = realLost[i];
        let minIdx = realReserve.indexOf(student - 1);
        let plusIdx = realReserve.indexOf(student + 1);
        
        if (minIdx !== -1) {
            count++;
            realReserve.splice(minIdx, 1); // 빌려준 학생 제거
        } else if (plusIdx !== -1) {
            count++;
            realReserve.splice(plusIdx, 1); // 빌려준 학생 제거
        }
    }

    return count;
}
