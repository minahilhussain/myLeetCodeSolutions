/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let obj= {};
    for (const a of arr) {
        obj[a] = (obj[a] || 0) + 1
    }
    let count = 1;
    for (const key in obj) {
        if (obj[key] === 1) {
            if (count === k) return key;
                count++;
            }
    }
    return "";
};