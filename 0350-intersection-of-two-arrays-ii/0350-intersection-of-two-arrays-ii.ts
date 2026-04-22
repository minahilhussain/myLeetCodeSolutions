function intersect(nums1: number[], nums2: number[]): number[] {
  const small: number[] = nums1.length < nums2.length ? nums1 : nums2;
  const large: number[] = nums1.length < nums2.length ? nums2 : nums1;

  const res: number[] = [];

  for (let i = 0; i < small.length; i++) {
    const index: number = large.indexOf(small[i]);
    if (index !== -1) {
      res.push(small[i]);
      large[index] = null;
    }
  }

  return res;
};