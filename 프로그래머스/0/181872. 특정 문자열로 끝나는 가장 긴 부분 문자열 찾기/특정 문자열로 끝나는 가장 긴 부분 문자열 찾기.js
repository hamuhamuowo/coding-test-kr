function solution(myString, pat) {
    let i = myString.lastIndexOf(pat);
    if(i < myString.length) {
       i += pat.length;
    }
    return myString.slice(0, i);
}