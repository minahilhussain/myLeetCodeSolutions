function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    const index = nums2.indexOf(nums1[i]);
    if (index !== -1) {
      for (let j = index + 1; j < nums2.length; j++) {
        if (nums2[j] > nums1[i]) {
          result.push(nums2[j]);
          break;
        }
      }
      if (result.length < i + 1) {
        result.push(-1);
      }
    }
  }
  return result;
};