function targetIndices(nums: number[], target: number): number[] {
    const numsArr: number[] = nums.sort((a, b) => a - b);
    const result: number[] = [];
    for (let i = 0; i < numsArr.length; i++) {
        if(nums[i] === target) result.push(i);
    }
    return result;  
};