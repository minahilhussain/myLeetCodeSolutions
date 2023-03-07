/**
 * @param {number[]} nums
 * @return {number}
 */
const minMaxGame = function (nums) {
  while (nums.length !== 1) {
    const newNums = [];
    for (let i = 0; i < Math.floor(nums.length / 2); i++) {
      newNums[i] =
        i % 2 === 0
          ? (newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]))
          : (newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]));
    }
    nums = newNums;
  }
  return nums;
};