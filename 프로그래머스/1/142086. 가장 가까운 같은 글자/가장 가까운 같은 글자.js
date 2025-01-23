function solution(s) {
    let answer = [];
    let lastSeen = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in lastSeen) {
            answer.push(i - lastSeen[char]);
        } else {
            answer.push(-1);
        }
        lastSeen[char] = i;
    }

    return answer;
}
