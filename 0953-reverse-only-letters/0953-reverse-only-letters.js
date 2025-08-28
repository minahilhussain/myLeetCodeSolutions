/**
 * @param {string} s
 * @return {string}
 */

var isSpecialChar = function (char) {
  const regex = /[^a-zA-Z]/; 
  return regex.test(char);
};
var reverseOnlyLetters = function(s) {
    let i = 0, j = s.length - 1;
    let str = s.split("");

    while (i < j) {
        if (isSpecialChar(str[i])) {
            i++;
        } else if (isSpecialChar(str[j])) {
            j--;
        } else {
            [str[i], str[j]] = [str[j], str[i]];
            i++;
            j--;
        }
    }
    return str.join("");
};