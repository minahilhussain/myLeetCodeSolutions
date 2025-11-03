/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let totalTime = 0;
    let maxTime = neededTime[0];
    for (let i = 1; i < colors.length; i++) {
        if (colors[i] === colors[i - 1]) {
            totalTime += Math.min(maxTime, neededTime[i]);
            maxTime = Math.max(maxTime, neededTime[i]);
        } else {
            maxTime = neededTime[i];
        }
    }
    return totalTime;
};