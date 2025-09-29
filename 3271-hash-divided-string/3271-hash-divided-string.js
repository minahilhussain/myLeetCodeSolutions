/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
    let result = "";
    let strArr = [];
    for (let i = 0; i< s.length; i += k) {
        strArr.push(s.slice(i, i + k));
    }

    for (let str of strArr) {
        let sum = 0;
        for (let j = 0; j < k ; j++) {
            sum += str.charCodeAt(j) - 97;

        }
        sum %= 26;
        result += String.fromCharCode(sum + 97);
    }
    return  result;
};