function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
    return getNumericValue(firstWord) + getNumericValue(secondWord) === getNumericValue(targetWord);
};

const getNumericValue = (str: string): number => {
    let sum: string = '';
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i) - 97;
    }
    return Number(sum);
}