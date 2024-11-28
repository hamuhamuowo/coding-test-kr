const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = str.split('').map((s) => {
        if(s.toUpperCase() === s) {
            return s.toLowerCase();
        } else {
            return s.toUpperCase();
        }
    }).join('');
    console.log(answer);
});