function solution(numbers, hand) {
    let answer = '';
    let leftPos = '*';
    let rightPos = '#';

    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };

    const getDistance = (pos1, pos2) => {
        return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
    };

    numbers.forEach(number => {
        if ([1, 4, 7].includes(number)) {
            answer += 'L';
            leftPos = number;
        } else if ([3, 6, 9].includes(number)) {
            answer += 'R';
            rightPos = number;
        } else {
            const leftDist = getDistance(keypad[leftPos], keypad[number]);
            const rightDist = getDistance(keypad[rightPos], keypad[number]);

            if (leftDist < rightDist) {
                answer += 'L';
                leftPos = number;
            } else if (leftDist > rightDist) {
                answer += 'R';
                rightPos = number;
            } else {
                if (hand === 'left') {
                    answer += 'L';
                    leftPos = number;
                } else {
                    answer += 'R';
                    rightPos = number;
                }
            }
        }
    });

    return answer;
}
