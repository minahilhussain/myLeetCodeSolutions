function distinctAverages(nums: number[]): number {
        const hash = [];
    nums.sort((a,b)=>a-b);
    while(nums.length>0) {
        const avg = (nums.shift() + nums.pop())/2
        if(hash.indexOf(avg) === -1) {
            hash.push(avg)
        }
    }
    return hash.length;
};