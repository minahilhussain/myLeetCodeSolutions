function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let nums3: number[] = nums1.concat(nums2).sort((a,b) => a-b);
    return (nums3.length % 2 !== 0) ? nums3[Math.floor(nums3.length/2)] : (nums3[nums3.length/2]+ nums3[nums3.length/2 - 1])/2;
};