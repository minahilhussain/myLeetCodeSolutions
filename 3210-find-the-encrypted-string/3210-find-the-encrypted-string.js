/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    let enc = '';
    for (let i = 0; i < s.length; i++) enc += s[(i + k) % s.length];
    return enc;
};