function solution(id_list, report, k) {
    // 중복 신고 제거
    const uniqueReports = [...new Set(report)];

    // 신고당한 횟수 저장
    const reportedCount = Object.fromEntries(id_list.map(id => [id, 0]));
    // 각 유저가 신고한 대상 목록 저장
    const reporterMap = Object.fromEntries(id_list.map(id => [id, []]));

    // 신고 정보 처리
    for (let rep of uniqueReports) {
        const [reporter, reported] = rep.split(' ');
        reporterMap[reporter].push(reported);
        reportedCount[reported]++;
    }

    // 정지된 유저 목록
    const bannedUsers = id_list.filter(id => reportedCount[id] >= k);

    // 각 유저가 받은 메일 수 계산
    const mailCount = id_list.map(user => {
        return reporterMap[user].filter(reportedUser => bannedUsers.includes(reportedUser)).length;
    });

    return mailCount;
}
