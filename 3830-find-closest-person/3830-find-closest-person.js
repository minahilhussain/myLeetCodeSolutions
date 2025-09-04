/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    const distanceX = Math.abs(z-x);
    const distanceY = Math.abs(z-y);
    if (distanceX === distanceY) return 0;
    return distanceX < distanceY ? 1 : 2;
};