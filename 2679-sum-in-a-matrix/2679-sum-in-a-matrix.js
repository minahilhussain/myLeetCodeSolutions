function matrixSum(nums) {
    for (let row of nums) {
        row.sort((a, b) => a - b);
    }
    let sum = 0;
    for (let i = 0; i < nums[0].length; i++) {
        let max = 0;
        for (let j = 0; j < nums.length; j++) {
            max = Math.max(max, nums[j][i])
        }
        sum += max;
    }
    return sum;
};