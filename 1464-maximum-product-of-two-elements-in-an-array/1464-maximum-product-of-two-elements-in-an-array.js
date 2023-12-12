/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums1) {
  if (nums1.length === 2) return (nums1[0] - 1 ) * (nums1[1] - 1);
    
  const nums = nums1.sort((a,b) => b - a);
  return ((nums[0] - 1 ) * (nums[1] - 1));
};