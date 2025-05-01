function timeToMinutes(time) {
    const hour = Math.floor(time / 100);
    const minute = time % 100;
    return hour * 60 + minute;
}

function solution(schedules, timelogs, startday) {
    let answer = 0;

    for (let i = 0; i < schedules.length; i++) {
        const limit = timeToMinutes(schedules[i]) + 10;
        let day = startday;
        let onTimeCount = 0;

        for (let j = 0; j < 7; j++) {
            const currentTime = timeToMinutes(timelogs[i][j]);

            if (day >= 1 && day <= 5) {
                if (currentTime <= limit) {
                    onTimeCount++;
                }
            }

            day = day % 7 + 1;
        }

        if (onTimeCount === 5) {
            answer++;
        }
    }

    return answer;
}
