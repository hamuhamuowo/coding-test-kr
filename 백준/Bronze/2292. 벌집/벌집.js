const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let range = 1
let block = 1;

while (block < parseInt(input)) {    
  block += 6 * range;
  range++;
}

console.log(range);