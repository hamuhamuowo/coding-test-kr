function solution(babbling) {
    const speak = ["aya", "ye", "woo", "ma"];
    for(let i = 0; i < babbling.length; i++) {
        for(let j = 0; j < speak.length; j++) {
            babbling[i] = babbling[i].replace(speak[j], ' ');
        }
    }
    return babbling.filter(v => v.trim() === "").length;
}