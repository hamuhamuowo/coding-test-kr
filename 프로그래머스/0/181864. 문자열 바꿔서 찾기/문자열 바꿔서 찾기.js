function solution(myString, pat) {
    return [...myString].map(str => {
        if(str === "A") return "B";
        return "A";
    }).join('').indexOf(pat) !== -1 ? 1 : 0;
}