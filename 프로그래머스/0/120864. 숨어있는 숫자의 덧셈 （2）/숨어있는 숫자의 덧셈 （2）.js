function solution(my_string) {
    const arr = my_string.replaceAll(/[^0-9]/g, '-')
                .split('-').filter(v => v !== '').map(Number);
    return arr.reduce((acc, cur) => acc + cur, 0);
}