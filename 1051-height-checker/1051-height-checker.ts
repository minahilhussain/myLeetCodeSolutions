function heightChecker(heights: number[]): number {
    let raw = heights.slice(0);
    heights.sort((a,b) => a-b);
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== raw[i]) count++;
    }
    return count;
};