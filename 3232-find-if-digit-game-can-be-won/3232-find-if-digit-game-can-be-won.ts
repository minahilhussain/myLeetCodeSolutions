function canAliceWin(nums: number[]): boolean {
    let sumSingle: number = 0, sumDouble: number = 0
    for (let i = 0;i < nums.length; i++) {
        if(nums[i] < 10) sumSingle += nums[i];
        else sumDouble += nums[i];
    }
   return sumSingle !== sumDouble;
};