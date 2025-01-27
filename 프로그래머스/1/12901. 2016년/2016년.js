function solution(a, b) {
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    let totalDays = 0;
    for (let i = 0; i < a - 1; i++) {
        totalDays += daysInMonth[i]; // 월별 일
    }
    totalDays += (b - 1); // 일수
    
    const dayOfWeek = (totalDays + 5) % 7;
    return weekDays[dayOfWeek];
}