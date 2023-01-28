function isCovered(ranges: number[][], left: number, right: number): boolean {
    for (let i = left; i <= right; i++) {
        let flag: number = 0;
        for(let j = 0; j < ranges.length ; j++) {
            if(ranges[j][0] <= i && ranges[j][1] >= i) {
                flag = 1;
                break;
            }
        }
        if(flag === 0) return false;
     }
     return true;
};