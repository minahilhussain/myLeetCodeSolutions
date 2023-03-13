/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let min = -1;
  set1.forEach((s) => {
    if (set2.has(s) && (min == -1 || s < min)){
      min = s;
    }
  });
  return min;
};