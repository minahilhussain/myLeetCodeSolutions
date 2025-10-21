/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let output = 0;
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i) - 96;        
        let reverseCode = 27 - code;     
        output += (i + 1) * reverseCode; 
    }
    return output;
};
