/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
   let map = new Map();
let sum = 0;
   for(let i = 0; i < nums.length; i++){
        if(map.get(nums[i]) == 1){
            sum -= nums[i];
            map.set(nums[i],2)
        } else if(!map.get(nums[i])){
            map.set(nums[i],1);
            sum +=nums[i]
        }
   };
    return sum > 0 ? sum : 0;
};