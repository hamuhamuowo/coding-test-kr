const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let str = input;
let reverseStr = input.split('').reverse().join('');
console.log(str === reverseStr ? 1 : 0);