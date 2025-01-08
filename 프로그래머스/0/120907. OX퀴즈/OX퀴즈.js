function solution(quiz) {
    return quiz.map(v => {
        const arr = v.split(' ');
        const num1 = parseInt(arr[0]);
        const num2 = parseInt(arr[2]);
        const result = parseInt(arr[arr.length-1]);
        if(arr[1] === '-') {
            return num1 - num2 === result ? "O" : "X";
        } else {
            return num1 + num2 === result ? "O" : "X"
        }
    })
}