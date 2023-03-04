function countKDifference(nums: number[], k: number): number {
    let count: number = 0;
    for(let i = 0; i< nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(i!==j && Math.abs(nums[i]-nums[j]) == k) {
                count++;
            }
        }
    }
    return count;
};