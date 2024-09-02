function nextGreatestLetter(letters: string[], target: string): string {
    const targetCode: number = target.charCodeAt(0);
    if (targetCode === 122) return letters[0];
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].charCodeAt(0) > targetCode) return letters[i];
    }
    return letters[0];
};