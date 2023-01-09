/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return binarySearch(nums, target, 0, nums.length-1);
};

const binarySearch = (nums, target, low, high) => {
    if(high >= low ) {
        let mid = low + Math.floor((high - low) / 2)
        if(nums[mid] === target) return mid;
        else if(nums[mid] > target) return binarySearch (nums, target, low, mid-1);
        else return binarySearch (nums, target, mid + 1, high);
    }
    else return -1
}
