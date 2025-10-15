function transformArray(nums: number[]): number[] {
    let even: number = 0;
    let odd: number = 0;
    for (let num of nums) {
        if(num % 2 === 0) even++;
        else odd++;
    }
    return new Array(even).fill(0).concat(new Array(odd).fill(1));
};