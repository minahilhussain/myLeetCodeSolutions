/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let obj = {};

    for (let a of arr) {
        obj[a] = (obj[a] || 0) + 1;
    }

    let ans = [];

    for (let [key, value] of Object.entries(obj)) {
        if(Number(key) === value) ans.push(value);
    }
    if (ans.length === 0) return -1;
    else  if (ans.length === 1) return ans[0];
    else return Math.max(...ans)
};