function isMonotonic(nums: number[]): boolean {
    if(nums.length <= 1) return true;
    let flag = -1;
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] < nums[i+1]) {
            flag = 0;
            break;
        } else if(nums[i] > nums[i+1]) {
            flag = 1;
            break;
        }
    }
    if(flag === 0) {
        for(let i = 0; i < nums.length - 1; i++) {
            if (nums[i]>nums[i+1]) return false;
        }
    }
    else if(flag === 1) {
        for(let i = 0; i < nums.length - 1; i++) {
            if (nums[i]<nums[i+1]) return false;
        }
    }
    return true;
};