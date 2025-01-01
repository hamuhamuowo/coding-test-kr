function solution(myString) {
    return myString.split('x').map(str => {
        return str.length;
    })
}