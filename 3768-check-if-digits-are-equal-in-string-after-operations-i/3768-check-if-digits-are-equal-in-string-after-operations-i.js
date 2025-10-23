/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    while (s.length !== 2){ 
        let temp = '';
        for(let i = 0; i < s.length - 1; i++) {
            let num = (parseInt(s[i]) + parseInt(s[i + 1])) % 10;
            temp += num;
        }
        s = temp;
    }
    return s[0] === s[1]
};