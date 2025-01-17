function solution(numbers) {
    const numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let answer = numbers;
    numArr.forEach((v, i) => {
        answer = answer.replaceAll(v, i);
    })
    return parseInt(answer);
}