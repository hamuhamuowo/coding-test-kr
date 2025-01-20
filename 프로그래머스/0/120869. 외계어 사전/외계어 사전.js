function solution(spell, dic) {
    const sortedSpell = spell.sort().join('');
    for (let word of dic) {
        if (word.length === spell.length) {
            const sortedWord = word.split('').sort().join('');
            if (sortedSpell === sortedWord) {
                return 1;
            }
        }
    }

    return 2;
}