function removeDuplicates(nums: number[]): number {
     let val: number = nums[0];
    let uniqueArray: number[] = [nums[0]];
    for(let i: number = 1; i < nums.length; i++) {
        if(nums[i] !== val) {
            uniqueArray.push(nums[i]);
            val = nums[i]
        }
    }
    
    for(let i: number = 0; i < uniqueArray.length; i++) {
        nums[i] = uniqueArray[i];
    }
    
    return uniqueArray.length;
};