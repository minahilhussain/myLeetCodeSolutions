function findNonMinOrMax(nums: number[]): number {
 if( nums.length < 3 ) return -1;
    let min: number = nums[0];
    let max: number = nums[0];
    for (let i: number = 0; i < nums.length; i++) {
        if(nums[i] < min) {
            min = nums[i];
        } 
         if(nums[i] > max) {
            max = nums[i];
        } 
    }
    for (let i:number = 0; i < nums.length; i++) {
        if (nums[i] !== min && nums[i] !== max) return nums[i];
    }
    return -1;   
};