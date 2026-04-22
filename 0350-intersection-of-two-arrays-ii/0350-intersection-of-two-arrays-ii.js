/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const small = nums1.length < nums2.length ? nums1 : nums2;
  const large = nums1.length < nums2.length ? nums2 : nums1;

  const res = [];

  for (let i = 0; i < small.length; i++) {
    const index = large.indexOf(small[i]);
    if (index !== -1) {
      res.push(small[i]);
      large[index] = null;
    }
  }

  return res;
};