/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b)
    const sortedSet = new Set(sortedArr);
    const sortedOutcome = sortedSet.size !== sortedArr.length 
    ? Array.from(sortedSet)
    : sortedArr;

    const rankMap = {};
    for (let i = 0; i < sortedOutcome.length; i++) {
        rankMap[sortedOutcome[i]] = i + 1; 
    }
    console.log(rankMap);

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = rankMap[arr[i]]; 
    }


    return result;
};