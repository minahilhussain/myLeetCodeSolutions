/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    if (nums.length <= 1) return 1;
    let size = nums.length;
    let minIndex = 0;
    let maxIndex = 0;
    for (let i = 0; i < size; i++) {
        if (nums[i] < nums[minIndex]) minIndex = i;
        if (nums[i] > nums[maxIndex]) maxIndex = i;
    }
    
    if (minIndex > maxIndex) {
        [minIndex, maxIndex] = [maxIndex, minIndex];
    }

    let removeFromFront = maxIndex + 1;
    let removeFromBack = size - minIndex;
    let removeMix = (minIndex + 1) + (size - maxIndex);

    return Math.min(removeFromFront, removeFromBack, removeMix);
};