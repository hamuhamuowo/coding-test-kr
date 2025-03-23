const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const scores = {
    'A+' : 4.5,
    'A0' : 4.0,
    'B+' : 3.5,
    'B0' : 3.0,
    'C+' : 2.5,
    'C0' : 2.0,
    'D+' : 1.5,
    'D0' : 1.0,
    'F' : 0.0,
}
let answer = 0;
let allGrade = 0;
for(let i = 0; i < 20; i++) {
    const temp = arr[i].split(' ');
    const score = temp[temp.length-1];
    const grade = Number(temp[temp.length-2]);
    if(score !== 'P') {
        allGrade += grade;
        answer += (scores[score] * grade);
    }
}
console.log(answer / allGrade) 