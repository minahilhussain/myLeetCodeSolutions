function checkStraightLine(coordinates: number[][]): boolean {
    if (coordinates.length === 2) return true;

    for (let i = 2; i < coordinates.length; i++) {
        if (!isStraight([coordinates[0], coordinates[1], coordinates[i]])) {
            return false;
        }
    }
        
    return true;
};


var isStraight = function([[ax,ay],[bx,by],[cx,cy]]:number[][]): boolean {
    return ((by-ay) * (cx-bx) === (cy-by) * (bx-ax));
};

