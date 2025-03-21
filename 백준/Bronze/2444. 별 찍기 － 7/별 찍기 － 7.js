const input = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());
let answer = [];
for(let i = 0; i < input; i++)  {
    let str = '';
    for(let j = input-1; j > i; j--)  {
      str += ' ';
    }
    for(let j = 0; j <= i; j++)  {
      str += '*';
    }
    for(let j = 1; j <= i; j++)  {
      str += '*';
    }
    answer.push(str);
}

for(let i = 0; i < input-1; i++)  {
    let str = '';
    for(let j = 0; j <= i; j++)  {
      str += ' ';
    }
    for(let j = input-1; j > i; j--)  {
      str += '*';
    }
    for(let j = input-2; j > i; j--)  {
      str += '*';
    }
    answer.push(str);
}


console.log(answer.join('\n'));