function maxFrequencyElements(nums: number[]): number {
    let obj: Record<string, number> = {};

    for (let i = 0; i < nums.length; i++ ){
        obj[nums[i]] = (obj[nums[i]] ?? 0) + 1;
    }
    const frequencies: number[] = Object.values(obj);
    const max: number = Math.max(...frequencies);

    let maxfreq: number = 0;
    for (let i = 0; i < frequencies.length; i++) {
        if(frequencies[i] === max) maxfreq += max;
    }
    return maxfreq;  
};