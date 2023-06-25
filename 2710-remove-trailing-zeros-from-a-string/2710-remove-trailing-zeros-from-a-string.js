/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    if(num[ num.length-1 ] !== '0')  return num;
    else {
        let flag = 0;
        for(let i = num.length - 1; i >= 0; i--) {
            if (num[i] === '0') flag++;
            else break;
        }
        return num.substr(0, num.length - flag);
    }
    
};