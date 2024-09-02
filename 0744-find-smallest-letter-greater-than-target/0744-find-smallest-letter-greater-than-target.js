/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    const targetCode = target.charCodeAt();
    if (targetCode === 122) return letters[0];
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].charCodeAt() > targetCode) return letters[i];
    }
    return letters[0]
};