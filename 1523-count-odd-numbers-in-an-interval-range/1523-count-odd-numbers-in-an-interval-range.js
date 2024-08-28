/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    return (low % 2 === 0 || high % 2 === 0) ? (( high - low ) / 2) : (( high - low ) / 2) + 1;
};