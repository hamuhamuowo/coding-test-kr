const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let count = 0;
let start = 666;

while(true){
    let isThree = String(start).includes("666");
    if(isThree){
        count++;
        if(count == input) {
            console.log(start);
            break;
        }
    }
    start++;
}