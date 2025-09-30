/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let max = -1;
    let secMax = -1

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            let num = parseInt(s[i]);

            if (num > max) {
                secMax = max;
                max = num;
            } else if (num < max && num > secMax) {
                secMax = num;
            }
        }
    }
    return secMax;
};