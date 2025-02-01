function solution(nums) {
    const types = new Set(nums);
    const count = types.size;
    const half = nums.length / 2;
    
    return Math.min(count, half);
}