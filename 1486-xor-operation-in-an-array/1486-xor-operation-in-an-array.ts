function xorOperation(n: number, start: number): number {
    let xor = start;
    for(let i = 1; i < n; i++ ) xor ^= start + i * 2
    return xor;
};