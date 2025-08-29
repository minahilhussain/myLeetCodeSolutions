/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) obj[arr[i]] = 1;
        else obj[arr[i]]++;
    }

    let counts = Object.values(obj);
    let uniqueCounts = new Set(counts);

    return counts.length === uniqueCounts.size;
};