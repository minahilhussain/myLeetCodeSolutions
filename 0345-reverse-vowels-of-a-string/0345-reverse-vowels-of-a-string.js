/**
 * @param {string} s
 * @return {string}
 */
const isVowel = (ch) => {
    if (ch === 'A' || ch === 'E' || ch === 'I' ||ch === 'O' ||ch === 'U' ||
        ch === 'a' ||ch === 'e' ||ch === 'i' ||ch === 'o' || ch === 'u' )
        return true;   
    return false;
}
var reverseVowels = function(s) {
    let arr = s.split('');
    let j = arr.length - 1;
    let i = 0;
    while ( i < j) {
        if (isVowel(arr[i]) && isVowel(arr[j])) {
            [ arr[i],  arr[j]] = [ arr[j], arr[i]];
            i++;
            j--;
        }
        if (!isVowel(arr[i])) i++;
        if (!isVowel(arr[j])) j--;
    }
    return arr.join('');
};