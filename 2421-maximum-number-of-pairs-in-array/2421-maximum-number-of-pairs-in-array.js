/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let count = 0;
    let i = 0;
    while (i < nums.length) {
        let toFind = nums[i];
        let found = false;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === toFind) {
                nums = nums.filter((_, index) => index !== i && index !== j);
                count++;
                found = true;
                i = 0;
                break;
            }
        }
        if (!found) i++;
    }

    return [count, nums.length];
};

