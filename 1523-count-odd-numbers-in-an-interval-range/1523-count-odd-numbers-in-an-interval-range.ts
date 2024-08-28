function countOdds(low: number, high: number): number {
    let count = ( high - low ) / 2;
    if(low % 2 === 0 || high % 2 === 0) return count;
    else return count + 1
};
