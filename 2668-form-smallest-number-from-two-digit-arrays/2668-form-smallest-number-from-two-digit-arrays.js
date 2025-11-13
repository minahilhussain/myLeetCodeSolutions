/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    const common = nums1.filter(num => nums2.includes(num));
    if(common.length > 0) {
        return Math.min(...common);
    }
    let min1  = Math.min(...nums1);
    let min2  = Math.min(...nums2);
    if (min1 < min2) return min1 * 10 + min2;
    else return min2 * 10 + min1;
};