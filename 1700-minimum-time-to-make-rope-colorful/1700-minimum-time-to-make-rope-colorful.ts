function minCost(colors: string, neededTime: number[]): number {
    let totalTime: number = 0;
    let maxTime: number = neededTime[0];
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