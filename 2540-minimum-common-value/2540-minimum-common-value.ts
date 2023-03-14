function getCommon(nums1: number[], nums2: number[]): number {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let min: number = -1;
  set1.forEach((s) => {
    if (set2.has(s) && (min == -1 || s < min)){
      min = s;
    }
  });
  return min;
};