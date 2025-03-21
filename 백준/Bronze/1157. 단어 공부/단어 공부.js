const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const obj =input.toUpperCase().split('').reduce((acc, cur) => {
      acc[cur] = (acc[cur]||0)+1;
      return acc;
  }, {});
const maxValue = Math.max(...Object.values(obj));
const keysWithMaxValue = Object.keys(obj).filter(key => obj[key] === maxValue);
const result = keysWithMaxValue.length > 1 ? '?' : keysWithMaxValue[0];
console.log(result);