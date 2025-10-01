/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    let minSum = Infinity;
    let found = false; 
     for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[k] < nums[j]) {
                        let sum = nums[i] + nums[j] + nums[k];
                        minSum = Math.min(minSum, sum);
                        found = true;
                    }
                } 
            }       
        } 
    } 
    return found ? minSum : -1;
};