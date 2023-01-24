/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morseCode = [];
    for(let i = 0; i < words.length; i++) {
         morseCode.push(generateMoreCode(words[i]));
    }
    return [...new Set(morseCode)].length;
};

var generateMoreCode = (str) => {
   const dict = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    let encoded = "";
    for(let i = 0; i < str.length; i++) {
        encoded += dict[str.charCodeAt(i) - 97];
    }
    return encoded;
}