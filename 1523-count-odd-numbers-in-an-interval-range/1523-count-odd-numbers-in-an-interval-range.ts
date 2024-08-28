function countOdds(low: number, high: number): number {
    return (low % 2 === 0 || high % 2 === 0) ? (( high - low ) / 2) : (( high - low ) / 2) + 1
};
