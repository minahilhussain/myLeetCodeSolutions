/**
 * @param {number} n
 * @return {number}
 */
let memo = {};
var climbStairs = function(n) {
    if (n === 1 || n === 2) return n;
    if (memo[n]) return memo[n];
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
};