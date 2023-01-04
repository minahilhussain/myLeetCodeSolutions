/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let res = 0;
    let numsArray = num.toString().split('');
    for(let i=0; i< numsArray.length; i++) {
        if(num % parseInt(numsArray[i]) == 0) res++;
    }
    return res;
};