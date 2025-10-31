function getSneakyNumbers(nums: number[]): number[] {
    let map: Record<string, number> = {};
    let ans: number[] = [];
    for (let num of nums) {
        if (map[num] === undefined) {
            map[num] = num;
        } else ans.push(num);
    }
    return ans;
};