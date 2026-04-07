function toGoatLatin(sentence: string): string {
    let words: string[] = sentence.split(' ');
    let toAppend: string = 'a';
    for (let i = 0; i < words.length; i++) {
        let first: string = words[i][0].toLowerCase();
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