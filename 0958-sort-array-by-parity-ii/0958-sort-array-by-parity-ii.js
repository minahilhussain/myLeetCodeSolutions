/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let result = [];
    let even = 0, odd = 1;
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