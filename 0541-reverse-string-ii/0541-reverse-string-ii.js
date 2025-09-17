/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let flag = true;
    let ansStr = '';
    for (let i = 0; i < s.length; i += k) {
        let part = s.slice(i, i + k); 
        if (flag) {
            part = part.split('').reverse().join('');
            flag = false;
        } else {
            flag = true;
        }
        ansStr += part;  
    }   
    return ansStr;
};