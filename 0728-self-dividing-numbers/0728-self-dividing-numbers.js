/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = [];
    for(let i = left; i <= right; i++) {
        if(selfDivisor(i)) {
            result.push(i);
        }
    }
    return result;
};

var selfDivisor = (num) => {
    if(num < 10) return true;
    let n = num;
    while (n >= 10) {
        let rem = n % 10;
        if (num % rem !== 0) return false;
            n = Math.floor(n/10);
    }
    return !(num % n) ;
}