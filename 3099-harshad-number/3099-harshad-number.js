/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let strArr = x.toString().split('');
    let sum = strArr.reduce((acc, crr) => acc + Number(crr), 0);
    return x % sum === 0 ? sum : -1;
};