function solution(dartResult) {
    const regex = /(\d{1,2})([SDT])([*#]?)/g;
    const scores = [];
    let match;

    while ((match = regex.exec(dartResult)) !== null) {
        let [_, score, bonus, option] = match;
        score = parseInt(score);

        if (bonus === 'D') score **= 2;
        else if (bonus === 'T') score **= 3;

        if (option === '*') {
            score *= 2;
            if (scores.length > 0) {
                scores[scores.length - 1] *= 2;
            }
        } else if (option === '#') {
            score *= -1;
        }

        scores.push(score);
    }

    return scores.reduce((sum, cur) => sum + cur, 0);
}