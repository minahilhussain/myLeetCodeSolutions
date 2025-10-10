/**
 * @param {string} s
 * @return {string}
 */
var isVowel = (c) => {
    if(c === 'a' ||c === 'e' ||c === 'i' ||c === 'o' ||c === 'u' ||c === 'A' ||c === 'E' ||c === 'I' ||c === 'O' ||c === 'U' ) return true;

    return false;
} 
var sortVowels = function(s) {
    let tempArr = [];
    let vowel = [];
    for (let i = 0; i < s.length; i++) {
        if(isVowel(s[i])) {
            vowel.push(s[i]);
            tempArr.push('@');
            }
        else {
            tempArr.push(s[i]);
        }
    }
    let j = 0;
    vowel.sort();
    for (let i = 0;i <tempArr.length; i++) {
        if(tempArr[i] === '@') {
            tempArr[i] = vowel[j];
            j++;
        }
    }
    return tempArr.join('');

};