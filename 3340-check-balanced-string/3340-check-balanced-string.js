/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    const numArr = num.split('');
    console.log(numArr);
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < numArr.length; i++) {
        if( i % 2 === 0) evenSum += Number(numArr[i]);
        else oddSum += Number(numArr[i]);
    }
    return oddSum === evenSum;
};