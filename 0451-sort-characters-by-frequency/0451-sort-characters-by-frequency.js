/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if(obj[s[i]] !== undefined) {
            obj[s[i]]++;
        } else {
            obj[s[i]] = 1;
        }
    }
    return Object.entries(obj)
        .sort((a, b) => b[1] - a[1]) 
        .flatMap(([key, value]) => Array(value).fill(key)) 
        .join(""); 
};