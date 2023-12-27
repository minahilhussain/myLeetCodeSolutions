function maxProduct(nums1: number[]): number {
  if (nums1.length === 2) return (nums1[0] - 1 ) * (nums1[1] - 1);
    
  const nums = nums1.sort((a,b) => b - a);
  return ((nums[0] - 1 ) * (nums[1] - 1));
};