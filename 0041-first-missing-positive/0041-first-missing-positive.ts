function firstMissingPositive(num: number[]): number {
    const nums = new Set(num);
    const max = Math.max(...nums);
    if (max < 0) return 1;
    for (let i = 1; i < max; i++) {
        if(!nums.has(i)) return i;
    }
    return max + 1;
};