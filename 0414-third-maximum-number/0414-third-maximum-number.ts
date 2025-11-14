function thirdMax(nums: number[]): number {
    let unique = new Set(nums);
    let uniqueArr: number[] = Array.from(unique).sort((a, b) => a - b);
    let len: number = uniqueArr.length;
    return len >= 3 ? uniqueArr[len - 3] : uniqueArr[len - 1];
};