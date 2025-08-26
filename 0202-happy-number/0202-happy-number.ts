function isHappy(n: number): boolean {
    let seen = new Set<number>();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        let digits = n.toString().split("").map(Number);
        let sum = digits.reduce((acc, d) => acc + d * d, 0);
        n = sum;
    }
    return n === 1;
};