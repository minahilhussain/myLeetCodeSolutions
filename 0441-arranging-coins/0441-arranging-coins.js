/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let k = 0;
    let total = 0;
    while (total + k + 1 <=n) {
        k++;
        total += k;
    }
    return k;
};