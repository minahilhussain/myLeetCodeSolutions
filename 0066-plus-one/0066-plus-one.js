/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const len = digits.length;
    digits[len - 1] = digits[len - 1] + 1;
    if(digits[len - 1]<10) return digits;
    else {
        let i = len-1;
        let carry = 0;
        while(i >= 0) {
            digits[i] = digits[i] + carry;
            if(digits[i] >= 10 ) {
                digits[i] = digits[i]%10;
                carry = 1;
            } 
            else {
                carry = 0;
            }
            i--;
        }
    if(carry === 1) digits.unshift(1);
    return digits;
    }
    
};