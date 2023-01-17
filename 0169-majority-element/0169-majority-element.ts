function majorityElement(nums: number[]): number {
    let map = new Map();
    let a = [];
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    for (let [key, value] of map.entries()) {
        a.push({ key: key, value: value });
    }
    return a.sort((a, b) => b.value - a.value)[0].key;
};