function solution(babbling) {
    const regex1 = /(aya|ye|woo|ma)\1/;
    const regex2 = /^(aya|ye|woo|ma)+$/;
    let count = 0;

    babbling.forEach(word => {
        if (!regex1.test(word) && regex2.test(word)) {
            count++;
        }
    });

    return count;
}
