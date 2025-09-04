/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    const part = Math.floor(Math.sqrt(num));
    return part * part === num;
    
};