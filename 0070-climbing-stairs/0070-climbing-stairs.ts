let memo: Record<number, number> = {};
function climbStairs(n: number): number {
    if (n === 1 || n === 2) return n;
    if (memo[n]) return memo[n];
    memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
    return memo[n];
};