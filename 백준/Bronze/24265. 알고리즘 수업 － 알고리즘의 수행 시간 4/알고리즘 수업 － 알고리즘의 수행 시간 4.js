const n = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(n*(n-1) - (n-1)*n/2);
console.log(2);