function solution(age) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    return `${age}`.split('').map(v => alpha[v]).join('');
}