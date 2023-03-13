function intersection(nums1: number[], nums2: number[]): number[] {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let set3 = new Set();
  set1.forEach((element) => {
    if (set2.has(element)) {
      set3.add(element);
    }
  });
  return [...set3] as number[];
};