/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let power = 1;
    while(power <= n) {
    	if(power == n){
        	return true;
            }
        power = power * 3;    
    }
    return false;
};