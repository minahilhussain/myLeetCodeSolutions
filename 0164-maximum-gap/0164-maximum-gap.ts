function maximumGap(nums: number[]): number {
    if (nums.length === 1) return 0;
    nums.sort((a,b) => a - b);
    let difference: number = 0;
    for (let i = 0; i < nums.length; i++) {
        let dif = nums[i + 1] - nums[i];
        if (dif > difference) difference = dif;
    }
    return difference;
};