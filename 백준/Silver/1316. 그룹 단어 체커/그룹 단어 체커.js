const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let count = parseInt(n);
let word;

for(let i = 0; i < parseInt(n); i++) {
    word = arr[i];
    for(let j = 0; j < word.length - 1; j++) {
        if(word[j] != word[j+1] && !!word.slice(j+1).includes(word[j]) ) {
            count--;
            break;
        }
    }
}

console.log(count);