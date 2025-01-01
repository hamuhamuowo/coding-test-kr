function solution(num_list) {
    const answer = num_list.reduce((acc, cur) => {
        // acc => count
        // cur => num[i] ... 
        while(cur !== 1) {
            // 1이 아니면 1이 될때까지
            cur = cur % 2 === 0 ? cur / 2 : (cur-1) / 2;
            acc++; // 1이 될때까지 연산횟수 증가
        }
        return acc; // 다음 연산에 누적값(count)전달
    }, 0) // 초기 count값 : 0
    return answer;
}