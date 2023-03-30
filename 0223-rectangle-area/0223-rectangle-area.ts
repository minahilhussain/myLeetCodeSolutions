function computeArea(ax1: number, ay1: number, ax2: number, ay2: number, bx1: number, by1: number, bx2: number, by2: number): number {
    let first: number  = area(ax1, ay1, ax2, ay2);
    let second: number = area(bx1, by1, bx2, by2);

    let leftOverlap: number  = Math.max(ax1, bx1);
    let downOverlap: number  = Math.max(ay1, by1);

    let rightOverlap: number = Math.min(ax2, bx2);
    let upOverlap: number    = Math.min(ay2, by2);

    let overlap: number = area(leftOverlap, downOverlap, rightOverlap, upOverlap);

    return first + second - overlap;
};

function area(left: number, down: number, right: number, up: number): number {
    if (left > right || down > up) {
        return 0;
    }
    return (right - left) * (up - down);
    
}