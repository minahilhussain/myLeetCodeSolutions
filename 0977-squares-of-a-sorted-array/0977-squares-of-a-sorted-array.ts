function sortedSquares(nums: number[]): number[] {
    nums = nums.map(num => num*num);
    return nums.sort((a,b)=> a-b);
};