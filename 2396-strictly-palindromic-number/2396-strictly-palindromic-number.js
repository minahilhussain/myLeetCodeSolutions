/**
 * @param {number} n
 * @return {boolean}
 */
var isPalindrome = function(str) {
    return str === str.split('').reverse().join('');
}
var isStrictlyPalindromic = function(n) {
    let max = n - 2;
    for (let base = 2; base <= max; base++) {
        let numBase = n.toString(base);
        if (!isPalindrome(numBase)) return false;
    }
    return true;
};