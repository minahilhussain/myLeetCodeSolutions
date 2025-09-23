function findLucky(arr: number[]): number {
    let obj: Record<string, number> = {};

    for (let a of arr) {
        obj[a] = (obj[a] || 0) + 1;
    }

    let ans: number = -1;
    for (let [key, value] of Object.entries(obj)) {
        if(Number(key) === value) ans = Math.max(ans, value);
    }
    return ans;
};