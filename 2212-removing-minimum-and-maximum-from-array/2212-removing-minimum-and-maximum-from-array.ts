function minimumDeletions(nums: number[]): number {
    if (nums.length <= 1) return 1;
    let size: number = nums.length;
    let minIndex: number = 0;
    let maxIndex: number = 0;
    for (let i = 0; i < size; i++) {
        if (nums[i] < nums[minIndex]) minIndex = i;
        if (nums[i] > nums[maxIndex]) maxIndex = i;
    }
    
    if (minIndex > maxIndex) {
        [minIndex, maxIndex] = [maxIndex, minIndex];
    }

    let removeFromFront: number = maxIndex + 1;
    let removeFromBack: number = size - minIndex;
    let removeMix: number = (minIndex + 1) + (size - maxIndex);

    return Math.min(removeFromFront, removeFromBack, removeMix);
};