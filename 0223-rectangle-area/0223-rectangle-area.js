/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let first  = area(ax1, ay1, ax2, ay2);
    let second = area(bx1, by1, bx2, by2);

    let leftOverlap  = Math.max(ax1, bx1);
    let downOverlap  = Math.max(ay1, by1);

    let rightOverlap = Math.min(ax2, bx2);
    let upOverlap    = Math.min(ay2, by2);

    let overlap = area(leftOverlap, downOverlap, rightOverlap, upOverlap);

    return first + second - overlap;
};

function area(left, down, right, up) {
    if (left > right || down > up) {
        return 0;
    }
    return (right - left) * (up - down);
    
}