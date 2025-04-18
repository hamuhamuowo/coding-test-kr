const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const level = parseInt(input); 

for(let i = 1; i <= level; i++){
	let stars = "";
	for(let k = 1; k <= level - i; k++){ 
		stars = stars + " ";
	}
	for(let j = 1; j <= i * 2 - 1; j++){ 
		stars = stars + "*";
	}
	console.log(stars);
}