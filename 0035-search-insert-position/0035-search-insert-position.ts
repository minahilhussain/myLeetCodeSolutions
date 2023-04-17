function searchInsert(nums: number[], target: number): number {
    const index = nums.indexOf(target);
    if(index!== -1) return index;
    else {
        return nums.filter(num=>num<target).length;
    }
};