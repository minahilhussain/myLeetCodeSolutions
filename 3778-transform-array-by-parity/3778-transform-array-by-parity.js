/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let even = 0;
    let odd = 0;
    for (let num of nums) {
        if(num % 2 === 0) even++;
        else odd++;
    }
    return new Array(even).fill(0).concat(new Array(odd).fill(1));
};