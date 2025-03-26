const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const changeMoney = (money) => {
    const count = [0, 0, 0, 0];
    const coins = [25, 10, 5, 1];
    for(let i = 0; i < coins.length; i++) {
        count[i] += Math.floor(money / coins[i]);
        money %= coins[i];
    }
    return count;
}
for(let i = 0; i < arr.length; i++) {
    console.log(changeMoney(arr[i]).join(' '));
}