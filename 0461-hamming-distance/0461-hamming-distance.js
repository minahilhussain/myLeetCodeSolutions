/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xBinary = x.toString(2); 
    let yBinary = y.toString(2);
    if (xBinary.length < yBinary.length) {
        xBinary = xBinary.padStart (yBinary.length, "0");
    } else if (xBinary.length > yBinary.length) {
        yBinary = yBinary.padStart (xBinary.length, "0");
    } 
    let count = 0;
    for (let i = 0; i < xBinary.length; i++) {
       if (xBinary[i] !== yBinary[i]) count++;
    }
    return count;
};