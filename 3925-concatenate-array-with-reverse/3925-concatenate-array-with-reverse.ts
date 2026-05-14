function concatWithReverse(nums: number[]): number[] {
  let res: number[] = [];
  let j: number = nums.length * 2 - 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = nums[i];
    res[j] = nums[i];
    j--;
  }
  return res; 
};