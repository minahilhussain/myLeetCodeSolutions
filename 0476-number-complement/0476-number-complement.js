/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let mask = 2 ** num.toString(2).length - 1;
    return mask ^ num ;    
};