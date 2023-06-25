/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    let map = [];
    for(let i = 0; i < s.length; i++) {
        if(map.indexOf(s[i]) === -1 ) {
            map.push(s[i])
        }
    }
    return map.length;
};