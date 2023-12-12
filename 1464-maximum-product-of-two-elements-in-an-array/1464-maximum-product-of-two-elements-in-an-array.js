/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums1) {
  if (nums1.length === 2) return (nums1[0] - 1 ) * (nums1[1] - 1);
    
  const nums = nums1.sort((a,b) => a - b);
  return ((nums[nums.length-1] - 1 ) * (nums[nums.length -2] - 1));
};