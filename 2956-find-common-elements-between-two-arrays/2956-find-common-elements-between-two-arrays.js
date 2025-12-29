/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < nums1.length; i++) {
        if(nums2.indexOf(nums1[i]) !== -1) count1++;
    }
    for (let i = 0; i < nums2.length; i++) {
        if(nums1.indexOf(nums2[i]) !== -1) count2++;
    }
    return [count1, count2]
};