/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let sum = 0;
    for( let i = Math.floor(num/2); i >= 1 ; i--) {
        if(num % i === 0) {
           sum += i;
        } 
        if (sum > num) return false;
    }
    return sum === num;
};