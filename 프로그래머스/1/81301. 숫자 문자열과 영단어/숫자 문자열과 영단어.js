function solution(s) {
    const nums = ['zero', 'one', 'two', 'three', 'four', 
                  'five', 'six', 'seven', 'eight', 'nine', ]
    nums.forEach((v, i) => s = s.replaceAll(v, i));
    return parseInt(s);
}