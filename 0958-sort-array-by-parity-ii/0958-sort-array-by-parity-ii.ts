function sortArrayByParityII(nums: number[]): number[] {
    let result: number[] = [];
    let even: number = 0, odd: number = 1;
    for (let i = 0; i < nums.length; i++) {
        if(i % 2 === 0 && nums[i] % 2 === 0 || i % 2 !== 0 && nums[i] % 2 === 0){
            result[even] = nums[i];
            even += 2;
        } else {
            result[odd] = nums[i];
            odd += 2;
        }
    }
    return result;
};