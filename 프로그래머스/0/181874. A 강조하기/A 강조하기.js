function solution(myString) {
    return myString.split("").map(str => {
        if(str === "a" || str === "A") {
            return "A";
        } 
        return str.toLowerCase();
    }).join('');
}