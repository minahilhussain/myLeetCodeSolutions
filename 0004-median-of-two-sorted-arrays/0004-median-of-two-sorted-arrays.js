/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = nums1.concat(nums2).sort((a,b) => a-b);
    return (nums3.length % 2 !== 0) ? nums3[Math.floor(nums3.length/2)] : (nums3[nums3.length/2]+ nums3[nums3.length/2 - 1])/2;
};