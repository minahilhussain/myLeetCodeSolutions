/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    return getNumericValue(firstWord) + getNumericValue(secondWord) === getNumericValue(targetWord);
};

const getNumericValue = (str) => {
    let sum = '';
    for(let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i) - 97
    }
    return Number(sum);
}