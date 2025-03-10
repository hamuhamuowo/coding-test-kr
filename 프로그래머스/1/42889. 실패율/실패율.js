function solution(N, stages) {
    // 1. 각 스테이지에 멈춰 있는 사람 수
    let failCount = Array(N + 2).fill(0);
    for (let stage of stages) {
        failCount[stage]++;
    }

    // 2. 각 스테이지에 도달한 사람 수
    let totalPlayers = stages.length;
    let failRates = [];
    
    for (let i = 1; i <= N; i++) {
        if (totalPlayers > 0) {
            let failureRate = failCount[i] / totalPlayers;
            failRates.push([i, failureRate]);
            totalPlayers -= failCount[i]; // 다음 스테이지로 넘어간 유저
        } else {
            failRates.push([i, 0]); // 도달한 유저가 없으면 실패율 0
        }
    }

    // 3. 실패율 기준으로 내림차순 같으면 스테이지 번호가 오름차순
    failRates.sort((a, b) => b[1] - a[1] || a[0] - b[0]);

    // 4. 스테이지 번호만 리턴
    return failRates.map(stage => stage[0]);
}
