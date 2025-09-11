/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let space = 0;
    let flag = 0;
    let word = 0;
    let wordArray = [];

    for( let i = 0 ; i< text.length; i++) {
        if(text[i] === ' ') {
            space++;
            if(flag === 1) {
                word++;
                flag = 0;
            }
        } else {
            flag = 1;
            if (!wordArray[word]) wordArray[word] = "";
            wordArray[word] += text[i];
        }
    }
    let totalWords = word + (flag === 1 ? 1 : 0);
    let between = totalWords > 1 ? Math.floor(space / (totalWords - 1)) : 0;
    let extra = totalWords > 1 ? space % (totalWords - 1) : space;
    let str = " ".repeat(between);
    let result = wordArray.join(str) + " ".repeat(extra);
    return result;
};