function minStartValue(nums: number[]): number {
    let sum: number = 0;
    let res: number = 1;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(sum < 1 && 1 - sum > res) res = 1 - sum;
    }
    return res;
};