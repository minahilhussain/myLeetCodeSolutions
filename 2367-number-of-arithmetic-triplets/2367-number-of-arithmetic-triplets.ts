function arithmeticTriplets(nums: number[], diff: number): number {
    let count: number = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] - nums[i] == diff) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[k] - nums[j] == diff) count++;
                }   
            }
        }
    }
    return count;
};