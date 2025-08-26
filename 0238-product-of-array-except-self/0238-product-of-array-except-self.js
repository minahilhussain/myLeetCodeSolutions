/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let zeroCount = 0;
    let totalProduct = 1;
    for (let num of nums) {
        if (num === 0) {
            zeroCount++;
        } else {
            totalProduct *= num;
        }
    }

    return nums.map(x => {
        if (zeroCount > 1) {
            return 0;
        } else if (zeroCount === 1) {
            return x === 0 ? totalProduct : 0;
        } else {
            return totalProduct / x;
        }
    });
};