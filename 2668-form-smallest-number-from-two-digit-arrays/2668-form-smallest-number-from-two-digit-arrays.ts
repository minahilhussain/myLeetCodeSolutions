function minNumber(nums1: number[], nums2: number[]): number {
    const common: number[] = nums1.filter(num => nums2.includes(num));
    if(common.length > 0) {
        return Math.min(...common);
    }
    let min1: number  = Math.min(...nums1);
    let min2: number  = Math.min(...nums2);
    if (min1 < min2) return min1 * 10 + min2;
    else return min2 * 10 + min1;
};