/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let words = sentence.split(' ');
    let toAppend = 'a';
    for (let i = 0; i < words.length; i++) {
        let first = words[i][0].toLowerCase();
        if (first === 'a' || first === 'e' || first === 'i' || first === 'o' || first === 'u') {
            words[i] += 'ma';
        } else {
            words[i] = words[i].substr(1, words[i].length) + words[i][0] + 'ma';
        }
        words[i] += toAppend;
        toAppend += 'a';
    }
    return words.join(' ');
};