function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(nums) {
    let count = 0;
    let n = nums.length;
    
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) {
                    count++;
                }
            }
        }
    }
    
    return count;
}