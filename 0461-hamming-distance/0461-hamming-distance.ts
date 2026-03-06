function hammingDistance(x: number, y: number): number {
    let xBinary: string = x.toString(2); 
    let yBinary: string = y.toString(2);
    if (xBinary.length < yBinary.length) {
        xBinary = xBinary.padStart (yBinary.length, "0");
    } else if (xBinary.length > yBinary.length) {
        yBinary = yBinary.padStart (xBinary.length, "0");
    } 
    let count: number = 0;
    for (let i = 0; i < xBinary.length; i++) {
       if (xBinary[i] !== yBinary[i]) count++;
    }
    return count;
};