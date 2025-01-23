function solution(arr)
{
    let answer = [];
    let temp;
    
    arr.forEach(v => {
        if(temp !== v) {
            temp = v;
            answer.push(v);
        }
    })
    
    return answer;
}