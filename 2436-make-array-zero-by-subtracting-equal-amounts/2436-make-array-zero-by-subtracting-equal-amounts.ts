function allZero(nums: number[]): boolean {
    return nums.every(n => n === 0);
} 

function minimumOperations(nums: number[]): number {
    let count: number = 0;
    while (!allZero(nums)) {
        let min: number = Infinity;
        for (let num of nums) {
            if (num > 0 && num < min) {
                min = num;
            }
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) nums[i] -= min;
        }
        count++;
    }
    return count;
};