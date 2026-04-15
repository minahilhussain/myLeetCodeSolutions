function commonChars(words: string[]): string[] {
    let objArr = [];
    for (let i = 0; i < words.length; i++) {
        let obj = {};
        for (let j = 0; j < words[i].length; j++) {
            obj[words[i][j]] = (obj[words[i][j]] || 0) + 1;
        }
        objArr.push(obj);
    }
    const result = [];
    const base = objArr[0];
    for (const char in base) {
        const minCount = Math.min(
            ...objArr.map(obj => obj[char] || 0)
        );

        for (let i = 0; i < minCount; i++) {
            result.push(char);
        }
    }
    return result;
};