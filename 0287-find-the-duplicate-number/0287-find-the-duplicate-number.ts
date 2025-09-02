function findDuplicate(nums: number[]): number {
    let unique = new Set<number>();
    for (let num of nums) {
        if(unique.has(num)) return num;
        unique.add(num);
    }
};