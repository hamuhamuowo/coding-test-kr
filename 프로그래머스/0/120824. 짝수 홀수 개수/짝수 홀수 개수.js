function solution(num_list) {
    let [even, odd] = [0, 0];
    num_list.forEach(num => {
        if(num % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    })
    return [even, odd];
}