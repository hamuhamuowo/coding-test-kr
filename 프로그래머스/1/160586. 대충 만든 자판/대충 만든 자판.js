function solution(keymap, targets) {
    const keyPressMap = {};
    
    keymap.forEach((keys, index) => {
        for (let i = 0; i < keys.length; i++) {
            const char = keys[i];
            if (!keyPressMap[char] || keyPressMap[char] > i + 1) {
                keyPressMap[char] = i + 1;
            }
        }
    });
    
    return targets.map(target => {
        let totalPresses = 0;
        for (const char of target) {
            if (!keyPressMap[char]) {
                return -1;
            }
            totalPresses += keyPressMap[char];
        }
        return totalPresses;
    });
}